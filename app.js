(function () {
  "use strict";

  var COMPANIES = window.COMPANIES || [];
  var LS = { weights: "cc_weights_v1", memo: "cc_memo_v1_", status: "cc_status_v1_", picks: "cc_picks_v1" };

  var AXES = [
    { key: "pay", label: "年収", color: "var(--series-1)" },
    { key: "wlb", label: "働きやすさ", color: "var(--series-2)" },
    { key: "flex", label: "柔軟な働き方", color: "var(--series-3)" },
    { key: "future", label: "将来性", color: "var(--series-4)" }
  ];
  var DEFAULT_W = { pay: 3, wlb: 3, flex: 3, future: 3 };

  // ---------- helpers ----------
  function shortName(n) {
    return ({ "サイバーエージェント": "サイバーA", "野村総合研究所": "野村総研", "楽天グループ": "楽天", "TISI（旧TIS）": "TISI",
      "つうけんアドバンスシステムズ": "つうけんAS", "北海道総合通信網（HOTnet）": "HOTnet",
      "クリプトン・フューチャー・メディア": "クリプトン", "インフィニットループ": "インフィニットL", "NTTデータ北海道": "NTTD北海道" })[n] || n;
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function safeUrl(u) { return typeof u === "string" && u.indexOf("https://") === 0 ? u : null; }
  function load(key, fallback) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
  }
  function save(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }
  var CONF_LABEL = { official: "公式", secondary: "二次", unknown: "要確認" };
  function badge(conf) {
    var c = CONF_LABEL[conf] ? conf : "unknown";
    return '<span class="badge ' + c + '">' + CONF_LABEL[c] + "</span>";
  }
  function srcLink(u) {
    var s = safeUrl(u);
    return s ? '<a class="src" href="' + esc(s) + '" target="_blank" rel="noopener noreferrer">出典↗</a>' : "";
  }
  function field(f) {
    if (!f) return badge("unknown") + "要確認";
    return badge(f.conf) + esc(f.text) + srcLink(f.src);
  }

  // 年収スコア（1〜5点）
  //  平均年収：450万円→1点、1,450万円→5点（直線）
  //  初任給（月額）：20万円→1点、32万円→5点（直線）
  //  両方あれば平均。どちらもなければ payEstimate（推定）、それもなければ3点
  function lin(v, lo, hi) { return Math.max(1, Math.min(5, 1 + (v - lo) / (hi - lo) * 4)); }
  function payInfo(c) {
    var parts = [], basis = [];
    var v = c.avgSalary && c.avgSalary.value;
    if (typeof v === "number") { parts.push(lin(v, 450, 1450)); basis.push("平均年収" + v.toLocaleString() + "万円"); }
    if (typeof c.startingMonthly === "number") { parts.push(lin(c.startingMonthly, 20, 32)); basis.push("初任給 月" + c.startingMonthly + "万円"); }
    if (parts.length) {
      var avg = parts.reduce(function (a, b) { return a + b; }, 0) / parts.length;
      return { score: Math.round(avg * 10) / 10, kind: "data", text: basis.join("と") + "から自動計算" };
    }
    if (c.payEstimate && typeof c.payEstimate.score === "number") {
      return { score: c.payEstimate.score, kind: "estimate", text: "（推定）" + c.payEstimate.basis };
    }
    return { score: 3, kind: "none", text: "年収・初任給のデータがないため中間の3（データ不足）" };
  }
  function payScore(c) { return payInfo(c).score; }
  function scoresOf(c) {
    var sc = c.scores || {};
    return {
      pay: payScore(c),
      wlb: typeof sc.wlb === "number" ? sc.wlb : 3,
      flex: typeof sc.flex === "number" ? sc.flex : 3,
      future: typeof sc.future === "number" ? sc.future : 3
    };
  }

  // ---------- state ----------
  var weights = Object.assign({}, DEFAULT_W, load(LS.weights, {}));
  var typeFilter = "all";
  var picks = load(LS.picks, null) || COMPANIES.slice(0, 3).map(function (c) { return c.id; });

  function visible() {
    return COMPANIES.filter(function (c) { return typeFilter === "all" || (typeFilter === "北海道" ? String(c.region || "").indexOf("北海道") === 0 : c.type === typeFilter); });
  }
  function ranked() {
    var wsum = AXES.reduce(function (a, x) { return a + weights[x.key]; }, 0);
    return visible().map(function (c) {
      var s = scoresOf(c);
      var parts = AXES.map(function (x) {
        return wsum ? (weights[x.key] * s[x.key]) / wsum / 5 * 100 : 0;
      });
      var total = parts.reduce(function (a, b) { return a + b; }, 0);
      return { c: c, s: s, parts: parts, total: total };
    }).sort(function (a, b) { return b.total - a.total; });
  }

  // ---------- tooltip ----------
  var tip = document.getElementById("tooltip");
  function showTip(html, ev) {
    tip.innerHTML = html; tip.hidden = false; moveTip(ev);
  }
  function moveTip(ev) {
    var x = ev.clientX + 14, y = ev.clientY + 14;
    var r = tip.getBoundingClientRect();
    if (x + r.width > window.innerWidth - 8) x = ev.clientX - r.width - 14;
    if (y + r.height > window.innerHeight - 8) y = ev.clientY - r.height - 14;
    tip.style.left = Math.max(8, x) + "px"; tip.style.top = Math.max(8, y) + "px";
  }
  function hideTip() { tip.hidden = true; }

  // ---------- weights UI ----------
  function renderWeights() {
    var box = document.getElementById("weights");
    box.innerHTML = AXES.map(function (x) {
      return '<div class="weight"><label for="w-' + x.key + '"><span><span class="swatch" style="background:' + x.color + '"></span>' +
        x.label + '</span><output id="o-' + x.key + '">' + wordFor(weights[x.key]) + '</output></label>' +
        '<input type="range" id="w-' + x.key + '" min="0" max="5" step="1" value="' + weights[x.key] + '" aria-label="' + x.label + 'の重み"></div>';
    }).join("");
    AXES.forEach(function (x) {
      document.getElementById("w-" + x.key).addEventListener("input", function (e) {
        weights[x.key] = Number(e.target.value);
        document.getElementById("o-" + x.key).textContent = wordFor(weights[x.key]);
        save(LS.weights, weights);
        renderRank();
      });
    });
  }
  function wordFor(v) { return ["気にしない", "少し", "やや重視", "普通", "重視", "最重視"][v] || ""; }

  // ---------- ranking chart ----------
  function notify() { document.dispatchEvent(new CustomEvent("cc:update")); }
  function renderRank() {
    var data = ranked();
    document.getElementById("rankLegend").innerHTML = AXES.map(function (x) {
      return '<span><i style="background:' + x.color + '"></i>' + x.label + "</span>";
    }).join("");

    var host = document.getElementById("rankChart");
    var W = Math.max(320, host.clientWidth || 760), narrow = W < 560, labelW = narrow ? 118 : 150, rightPad = 36, rowH = 34, barH = 20, top = 22;
    var H = top + data.length * rowH + 6;
    var plotW = W - labelW - rightPad;
    var sx = function (v) { return v / 100 * plotW; };
    var svg = ['<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="重視項目で計算したランキング">'];
    [0, 25, 50, 75, 100].forEach(function (t) {
      var x = labelW + sx(t);
      svg.push('<line class="gridline" x1="' + x + '" x2="' + x + '" y1="' + (top - 4) + '" y2="' + (H - 4) + '"/>');
      svg.push('<text class="axis" x="' + x + '" y="12" text-anchor="middle">' + t + "</text>");
    });
    data.forEach(function (d, i) {
      var y = top + i * rowH, by = y + (rowH - barH) / 2;
      svg.push('<g class="row" data-i="' + i + '">');
      svg.push('<rect class="hit" x="0" y="' + y + '" width="' + W + '" height="' + rowH + '" rx="4"/>');
      svg.push('<text x="' + (labelW - 8) + '" y="' + (y + rowH / 2 + 4) + '" text-anchor="end">' + (i + 1) + ". " + esc(narrow || d.c.name.length > 10 ? shortName(d.c.name) : d.c.name) + "</text>");
      var x = labelW;
      var nonzero = d.parts.map(function (p, k) { return p > 0.01 ? k : -1; }).filter(function (k) { return k >= 0; });
      var last = nonzero[nonzero.length - 1];
      d.parts.forEach(function (p, k) {
        if (p <= 0.01) return;
        var w = Math.max(0, sx(p) - (k === last ? 0 : 2)); // 2px gap between segments
        if (k === last) {
          // rounded data-end on the right only
          var r = Math.min(4, w);
          svg.push('<path d="M' + x + "," + by + "h" + (w - r) + "a" + r + "," + r + " 0 0 1 " + r + "," + r + "v" + (barH - 2 * r) + "a" + r + "," + r + " 0 0 1 -" + r + "," + r + "h-" + (w - r) + 'z" style="fill:' + AXES[k].color + '"/>');
        } else {
          svg.push('<rect x="' + x + '" y="' + by + '" width="' + w + '" height="' + barH + '" style="fill:' + AXES[k].color + '"/>');
        }
        x += sx(p);
      });
      svg.push('<text x="' + (x + 6) + '" y="' + (y + rowH / 2 + 4) + '" font-weight="700">' + Math.round(d.total) + "</text>");
      svg.push("</g>");
    });
    svg.push("</svg>");
    host.innerHTML = svg.join("");
    host.querySelectorAll(".row").forEach(function (g) {
      var d = data[Number(g.getAttribute("data-i"))];
      var html = '<div class="t-title">' + esc(d.c.name) + "：" + Math.round(d.total) + "点</div>" +
        AXES.map(function (x, k) {
          return '<div class="t-row"><span><i style="background:' + x.color + '"></i>' + x.label + "（" + d.s[x.key] + "/5" + (x.key === "pay" ? ({ estimate: "・推定", none: "・データなし" })[payInfo(d.c).kind] || "" : "") + "）</span><span>+" + d.parts[k].toFixed(1) + "</span></div>";
        }).join("");
      g.addEventListener("mouseenter", function (e) { showTip(html, e); });
      g.addEventListener("mousemove", moveTip);
      g.addEventListener("mouseleave", hideTip);
      g.addEventListener("click", function () {
        var el = document.getElementById("detail-" + d.c.id);
        if (el) { el.open = true; el.scrollIntoView({ behavior: "smooth", block: "start" }); }
      });
    });

    // table view
    document.getElementById("rankTable").innerHTML =
      '<table><thead><tr><th>順位</th><th>企業</th>' + AXES.map(function (x) { return '<th class="num">' + x.label + "</th>"; }).join("") +
      '<th class="num">合計</th></tr></thead><tbody>' +
      data.map(function (d, i) {
        return "<tr><td>" + (i + 1) + "</td><td>" + esc(d.c.name) + "</td>" +
          AXES.map(function (x) { return '<td class="num">' + d.s[x.key] + (x.key === "pay" && payInfo(d.c).kind !== "data" ? "*" : "") + "</td>"; }).join("") +
          '<td class="num"><strong>' + Math.round(d.total) + "</strong></td></tr>";
      }).join("") + "</tbody></table>";
    notify();
  }

  // ---------- compare table ----------
  var ROWS = [
    ["一言でいうと", function (c) { return esc(c.oneLiner); }],
    ["本社・勤務地", function (c) { return esc(c.region || "要確認"); }],
    ["業界・事業", function (c) { return '<span class="badge type">' + esc(c.type) + "</span>" + esc(c.business); }],
    ["売上・規模", function (c) { return field(c.revenue) + '<br><small>' + esc(c.revenue && c.revenue.fy) + "</small>"; }],
    ["従業員数", function (c) { return field(c.employees); }],
    ["平均年収", function (c) {
      var a = c.avgSalary; if (!a) return field(null);
      return badge(a.conf) + "<strong>" + a.value.toLocaleString() + "万円</strong>（" + esc(a.age) + "）<br><small>" + esc(a.fy) + "</small>" + srcLink(a.src);
    }],
    ["初任給", function (c) { return field(c.startingSalary); }],
    ["残業時間", function (c) { return field(c.overtime); }],
    ["有給取得率", function (c) { return field(c.paidLeave); }],
    ["男性育休取得率", function (c) { return field(c.maleParental); }],
    ["働き方（リモート等）", function (c) { return field(c.remote); }],
    ["住宅手当", function (c) { return field(c.housing); }],
    ["副業", function (c) { return field(c.sideJob); }],
    ["社風・カルチャー", function (c) { return esc(c.culture); }],
    ["スコア（年収/働きやすさ/柔軟/将来性）", function (c) {
      var s = scoresOf(c); return AXES.map(function (x) { return x.label + " " + s[x.key]; }).join("<br>");
    }]
  ];
  function renderPicker() {
    var box = document.getElementById("picker");
    box.innerHTML = COMPANIES.map(function (c) {
      var on = picks.indexOf(c.id) >= 0;
      return '<label class="' + (on ? "on" : "") + '"><input type="checkbox" value="' + esc(c.id) + '"' + (on ? " checked" : "") + ">" + esc(c.name) + "</label>";
    }).join("");
    box.querySelectorAll("input").forEach(function (inp) {
      inp.addEventListener("change", function () {
        if (inp.checked) {
          if (picks.length >= 4) { inp.checked = false; alert("比較できるのは最大4社です。どれかのチェックを外してください。"); return; }
          picks.push(inp.value);
        } else {
          picks = picks.filter(function (id) { return id !== inp.value; });
        }
        save(LS.picks, picks);
        renderPicker(); renderCompare();
      });
    });
  }
  function renderCompare() {
    var sel = picks.map(function (id) { return COMPANIES.find(function (c) { return c.id === id; }); }).filter(Boolean);
    var host = document.getElementById("compareTable");
    if (!sel.length) { host.innerHTML = '<p class="hint">上で企業を選んでください。</p>'; return; }
    host.innerHTML = '<table class="compare-table"><thead><tr><th scope="col">比較項目</th>' +
      sel.map(function (c) { return '<th scope="col">' + esc(c.name) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      ROWS.map(function (r) {
        return '<tr><th scope="row">' + r[0] + "</th>" + sel.map(function (c) { return "<td>" + r[1](c) + "</td>"; }).join("") + "</tr>";
      }).join("") + "</tbody></table>";
    notify();
  }

  // ---------- details & memo ----------
  var STATUSES = ["未設定", "気になる", "説明会参加", "エントリー済", "選考中", "内定", "見送り"];
  function renderDetails() {
    var host = document.getElementById("details");
    host.innerHTML = COMPANIES.map(function (c) {
      var s = scoresOf(c), rs = c.reasons || {};
      var srcs = (c.sources || []).map(function (x) {
        var u = safeUrl(x.url); return u ? '<li><a href="' + esc(u) + '" target="_blank" rel="noopener noreferrer">' + esc(x.label) + "</a></li>" : "";
      }).join("");
      return '<details class="company" id="detail-' + esc(c.id) + '"><summary><span>' + esc(c.name) +
        ' <span class="sub">（' + esc(c.type) + "）" + esc(c.oneLiner) + '</span></span><span class="sub" id="st-label-' + esc(c.id) + '"></span></summary>' +
        '<div class="company-body">' +
        "<h3>給与・評価制度</h3><dl><dt>給与の仕組み</dt><dd>" + esc(c.payStructure) + "</dd><dt>初任給</dt><dd>" + field(c.startingSalary) + "</dd></dl>" +
        "<h3>福利厚生・働きやすさ</h3><dl><dt>住宅</dt><dd>" + field(c.housing) + "</dd><dt>男性育休取得率</dt><dd>" + field(c.maleParental) + "</dd><dt>有給取得率</dt><dd>" + field(c.paidLeave) + "</dd><dt>その他</dt><dd>" + esc(c.benefits) + "</dd><dt>副業</dt><dd>" + field(c.sideJob) + "</dd></dl>" +
        "<h3>事業の将来性・安定性</h3><dl><dt>強み</dt><dd>" + esc(c.strengths) + "</dd><dt>注力分野</dt><dd>" + esc(c.newAreas) + "</dd><dt>注意点・リスク</dt><dd>" + esc(c.risks) + "</dd></dl>" +
        '<h3>スコアの根拠</h3><ul class="score-reasons"><li>年収 ' + s.pay + "：平均年収から自動計算（800万円=1点〜1,450万円=5点）</li>" +
        "<li>働きやすさ " + s.wlb + "：" + esc(rs.wlb) + "</li><li>柔軟な働き方 " + s.flex + "：" + esc(rs.flex) + "</li><li>将来性 " + s.future + "：" + esc(rs.future) + "</li></ul>" +
        "<h3>出典</h3><ul>" + srcs + "</ul>" +
        '<div class="memo"><h3>自分用メモ</h3><label>選考状況：<select data-status="' + esc(c.id) + '">' +
        STATUSES.map(function (t) { return "<option>" + t + "</option>"; }).join("") + "</select></label>" +
        '<textarea data-memo="' + esc(c.id) + '" placeholder="説明会の感想、聞きたい質問、選考の日程など"></textarea><div class="saved" id="saved-' + esc(c.id) + '"></div></div>' +
        "</div></details>";
    }).join("");

    host.querySelectorAll("textarea[data-memo]").forEach(function (ta) {
      var id = ta.getAttribute("data-memo"), timer;
      ta.value = load(LS.memo + id, "");
      ta.addEventListener("input", function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
          save(LS.memo + id, ta.value);
          document.getElementById("saved-" + id).textContent = "保存しました（" + new Date().toLocaleTimeString() + "）";
        }, 400);
      });
    });
    host.querySelectorAll("select[data-status]").forEach(function (sel) {
      var id = sel.getAttribute("data-status");
      sel.value = load(LS.status + id, "未設定");
      setStatusLabel(id, sel.value);
      sel.addEventListener("change", function () { save(LS.status + id, sel.value); setStatusLabel(id, sel.value); });
    });
  }
  function setStatusLabel(id, v) {
    var el = document.getElementById("st-label-" + id);
    if (el) el.textContent = v && v !== "未設定" ? "📌 " + v : "";
  }

  // ---------- wiring ----------
  document.getElementById("updated").textContent = window.DATA_UPDATED || "";
  document.querySelectorAll("#typeFilter button").forEach(function (b) {
    b.addEventListener("click", function () {
      typeFilter = b.getAttribute("data-type");
      document.querySelectorAll("#typeFilter button").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      renderRank();
    });
  });
  document.getElementById("resetWeights").addEventListener("click", function () {
    weights = Object.assign({}, DEFAULT_W); save(LS.weights, weights); renderWeights(); renderRank();
  });
  document.getElementById("toggleRankTable").addEventListener("click", function (e) {
    var t = document.getElementById("rankTable"), open = t.hidden;
    t.hidden = !open; e.target.setAttribute("aria-expanded", String(open)); e.target.textContent = open ? "表を閉じる" : "表で見る";
  });

  var rt; window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(function () { renderRank(); }, 150); });
  window.CC = {
    visible: visible, ranked: ranked, scoresOf: scoresOf, payInfo: payInfo, esc: esc, AXES: AXES,
    showTip: showTip, moveTip: moveTip, hideTip: hideTip, shortName: shortName, badge: badge,
    getPicks: function () { return picks.slice(); }, companies: COMPANIES,
    openDetail: function (id) { var el = document.getElementById("detail-" + id); if (el) { el.open = true; el.scrollIntoView({ behavior: "smooth", block: "start" }); } }
  };
  renderWeights(); renderRank(); renderPicker(); renderCompare(); renderDetails();
})();
