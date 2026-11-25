// グラフと表を追加するスクリプト（app.js の window.CC を利用）
(function () {
  "use strict";
  var CC = window.CC;
  if (!CC) return;
  var esc = CC.esc;
  var SEQ = ["#cde2fb", "#9ec5f4", "#6da7ec", "#3987e5", "#256abf", "#184f95"]; // 青の濃淡（1点→5点）
  var REGION = { tokyo: "var(--region-tokyo)", hokkaido: "var(--region-hokkaido)" };

  function isHokkaido(c) { return String(c.region || "").indexOf("北海道") === 0; }
  function median(a) {
    if (!a.length) return null;
    var b = a.slice().sort(function (x, y) { return x - y; }), m = Math.floor(b.length / 2);
    return b.length % 2 ? b[m] : (b[m - 1] + b[m]) / 2;
  }
  function fmt(v, d) { return v == null ? "—" : (Math.round(v * Math.pow(10, d || 0)) / Math.pow(10, d || 0)).toLocaleString(); }
  function label(c, narrow) { return narrow || c.name.length > 10 ? CC.shortName(c.name) : c.name; }
  function bindTips(host, sel, htmlFor) {
    host.querySelectorAll(sel).forEach(function (g) {
      var html = htmlFor(g);
      g.addEventListener("mouseenter", function (e) { CC.showTip(html, e); });
      g.addEventListener("mousemove", CC.moveTip);
      g.addEventListener("mouseleave", CC.hideTip);
    });
  }

  // ===================== ① 数字でざっくり（KPIタイル） =====================
  function renderKpis() {
    var all = CC.companies;
    var tk = all.filter(function (c) { return !isHokkaido(c); }), hk = all.filter(isHokkaido);
    function med(list, f) { return median(list.map(f).filter(function (v) { return typeof v === "number"; })); }
    var st = function (c) { var x = CC.startingFor(c); return c.metrics && c.metrics.startingNote ? null : (x.status === "ok" ? x.v : null); };
    var ot = function (c) { return c.metrics && c.metrics.overtimeH; };
    var fields = ["revenue", "employees", "startingSalary", "overtime", "paidLeave", "maleParental", "remote", "housing", "sideJob"];
    var total = 0, known = 0;
    all.forEach(function (c) { fields.forEach(function (k) { total++; if (c[k] && c[k].conf && c[k].conf !== "unknown") known++; }); });
    var tiles = [
      { k: "収録企業", v: all.length + "社", s: "東京本社 " + tk.length + "社・北海道 " + hk.length + "社" },
      { k: CC.eduLabel() + "の初任給（月額）中央値", v: "東京 " + fmt(med(tk, st), 1) + "万円", s: "北海道 " + fmt(med(hk, st), 1) + "万円" },
      { k: "残業（月）の中央値", v: "北海道 " + fmt(med(hk, ot), 1) + "時間", s: "東京はデータが少ないため参考外" },
      { k: "データが見つかった割合", v: Math.round(known / total * 100) + "%", s: "主要9項目×" + all.length + "社のうち" }
    ];
    document.getElementById("kpis").innerHTML = tiles.map(function (t) {
      return '<div class="kpi"><div class="kpi-k">' + esc(t.k) + '</div><div class="kpi-v">' + esc(t.v) + '</div><div class="kpi-s">' + esc(t.s) + "</div></div>";
    }).join("");
  }

  // ===================== ③ スコア一覧（ヒートマップ表） =====================
  var heatSort = { key: "total", dir: -1 };
  function renderHeat() {
    var rows = CC.ranked();
    rows.forEach(function (r, i) { r.rank = i + 1; });
    rows.sort(function (a, b) {
      var va = heatSort.key === "total" ? a.total : heatSort.key === "name" ? a.c.name : a.s[heatSort.key];
      var vb = heatSort.key === "total" ? b.total : heatSort.key === "name" ? b.c.name : b.s[heatSort.key];
      return (va > vb ? 1 : va < vb ? -1 : 0) * heatSort.dir;
    });
    function th(key, text) {
      var on = heatSort.key === key, arrow = on ? (heatSort.dir < 0 ? " ▼" : " ▲") : "";
      return '<th scope="col" class="num"><button class="sort" data-key="' + key + '" aria-sort="' + (on ? (heatSort.dir < 0 ? "descending" : "ascending") : "none") + '">' + text + arrow + "</button></th>";
    }
    function cell(v, extra) {
      var idx = Math.max(0, Math.min(5, Math.round((v - 1) / 4 * 5)));
      var dark = idx >= 3;
      return '<td class="heat" style="background:' + SEQ[idx] + ";color:" + (dark ? "#fff" : "#0b0b0b") + '">' + v + (extra || "") + "</td>";
    }
    var html = '<table class="heat-table"><thead><tr><th scope="col">#</th><th scope="col"><button class="sort" data-key="name">企業' + (heatSort.key === "name" ? (heatSort.dir < 0 ? " ▼" : " ▲") : "") + "</button></th>" +
      CC.AXES.map(function (x) { return th(x.key, window.innerWidth < 600 ? ({ pay: "年収", wlb: "働き", flex: "柔軟", future: "将来" })[x.key] : x.label); }).join("") + th("total", "合計") + "</tr></thead><tbody>" +
      rows.map(function (r) {
        var est = CC.payInfo(r.c).kind !== "data" ? "*" : "";
        return "<tr><td>" + r.rank + '</td><th scope="row"><button class="link-btn plain" data-open="' + esc(r.c.id) + '" title="' + esc(r.c.name) + '">' + esc(r.c.name.length > (window.innerWidth < 600 ? 5 : 8) ? CC.shortName(r.c.name) : r.c.name) + '</button><span class="region-tag ' + (isHokkaido(r.c) ? "hk" : "tk") + '">' + (isHokkaido(r.c) ? "北海道" : "東京") + "</span></th>" +
          cell(r.s.pay, est) + cell(r.s.wlb) + cell(r.s.flex) + cell(r.s.future) +
          '<td class="num total"><span class="mini-bar"><i style="width:' + r.total + '%"></i></span><strong>' + Math.round(r.total) + "</strong></td></tr>";
      }).join("") + "</tbody></table>";
    var host = document.getElementById("heatTable");
    host.innerHTML = html;
    host.querySelectorAll("button.sort").forEach(function (b) {
      b.addEventListener("click", function () {
        var k = b.getAttribute("data-key");
        heatSort = { key: k, dir: heatSort.key === k ? -heatSort.dir : (k === "name" ? 1 : -1) };
        renderHeat();
      });
    });
    host.querySelectorAll("button[data-open]").forEach(function (b) {
      b.addEventListener("click", function () { CC.openDetail(b.getAttribute("data-open")); });
    });
    document.getElementById("heatLegend").innerHTML = "点数：" + [1, 2, 3, 4, 5].map(function (v) {
      var idx = Math.round((v - 1) / 4 * 5);
      return '<span class="heat-key" style="background:' + SEQ[idx] + ";color:" + (idx >= 3 ? "#fff" : "#0b0b0b") + '">' + v + "</span>";
    }).join("") + "<span>（濃いほど高い）　* は年収が推定またはデータなし</span>";
  }

  // ===================== ④ 数字で比べる（指標を切り替える棒グラフ） =====================
  var METRICS = [
    { key: "starting", label: "初任給（月額）", unit: "万円", d: 2, get: function (c) { var x = CC.startingFor(c); return x.status === "ok" ? x.v : null; }, note: function (c) { return c.metrics && c.metrics.startingNote; }, better: "高いほど良い", caption: "" },
    { key: "salary", label: "平均年収", unit: "万円", d: 0, get: function (c) { return c.avgSalary && c.avgSalary.value; }, note: function (c) { return c.avgSalary && c.avgSalary.fy; }, better: "高いほど良い", caption: "全社員の平均（主に単体）。平均年齢が会社ごとに違うので注意。非上場の会社は公開されていません。" },
    { key: "overtime", label: "残業時間（月）", unit: "時間", d: 1, get: function (c) { return c.metrics && c.metrics.overtimeH; }, note: function (c) { return c.metrics && c.metrics.overtimeNote; }, better: "少ないほど良い", asc: true, caption: "会社が公表した月平均の残業時間（一部は求人情報）。" },
    { key: "leave", label: "有給の取得日数（年）", unit: "日", d: 1, get: function (c) { return c.metrics && c.metrics.leaveDays; }, note: function (c) { return c.metrics && c.metrics.leaveNote; }, better: "多いほど良い", caption: "1年間に実際に取った有給休暇の平均日数。" },
    { key: "male", label: "男性の育休取得率", unit: "%", d: 1, get: function (c) { return c.metrics && c.metrics.maleParentalPct; }, note: function () { return null; }, better: "高いほど良い", caption: "100%を超える会社は、前の年に生まれた子の分も含めて数えているためです。対象者が数人しかいない会社は載せていません。" }
  ];
  var metricKey = "starting";
  function renderMetricTabs() {
    var box = document.getElementById("metricTabs");
    box.innerHTML = METRICS.map(function (m) {
      return '<button data-m="' + m.key + '" aria-pressed="' + (m.key === metricKey) + '">' + m.label + "</button>";
    }).join("");
    box.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function () { metricKey = b.getAttribute("data-m"); renderMetricTabs(); renderMetric(); });
    });
  }
  function renderMetric() {
    var m = METRICS.filter(function (x) { return x.key === metricKey; })[0];
    var list = CC.visible();
    var have = list.filter(function (c) { return typeof m.get(c) === "number"; });
    var missing = list.filter(function (c) { return typeof m.get(c) !== "number"; });
    have.sort(function (a, b) { return m.asc ? m.get(a) - m.get(b) : m.get(b) - m.get(a); });
    var host = document.getElementById("metricChart");
    var W = Math.max(320, host.clientWidth || 760), narrow = W < 560;
    var labelW = narrow ? 112 : 170, rightPad = narrow ? 64 : 80, rowH = 30, barH = 18, top = 22;
    var H = top + have.length * rowH + 6, plotW = W - labelW - rightPad;
    var max = Math.max.apply(null, have.map(m.get).concat([1]));
    var niceMax = Math.ceil(max / Math.pow(10, Math.floor(Math.log10(max)))) * Math.pow(10, Math.floor(Math.log10(max)));
    var sx = function (v) { return v / niceMax * plotW; };
    var svg = ['<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(m.label) + 'の比較">'];
    [0, 0.25, 0.5, 0.75, 1].forEach(function (f) {
      var x = labelW + sx(niceMax * f);
      svg.push('<line class="gridline" x1="' + x + '" x2="' + x + '" y1="' + (top - 4) + '" y2="' + (H - 4) + '"/>');
      svg.push('<text class="axis" x="' + x + '" y="12" text-anchor="middle">' + fmt(niceMax * f, 1) + "</text>");
    });
    var avg = have.length ? have.reduce(function (a, c) { return a + m.get(c); }, 0) / have.length : null;
    if (avg != null && have.length > 1) {
      var ax = labelW + sx(avg);
      svg.push('<line class="avgline" x1="' + ax + '" x2="' + ax + '" y1="' + (top - 4) + '" y2="' + (H - 4) + '"/>');
    }
    have.forEach(function (c, i) {
      var v = m.get(c), y = top + i * rowH, by = y + (rowH - barH) / 2, w = Math.max(2, sx(v)), r = Math.min(4, w);
      var col = isHokkaido(c) ? REGION.hokkaido : REGION.tokyo, flag = m.note(c) && m.key === "starting" ? " *" : "";
      svg.push('<g class="row" data-i="' + i + '"><rect class="hit" x="0" y="' + y + '" width="' + W + '" height="' + rowH + '" rx="4"/>');
      svg.push('<text x="' + (labelW - 8) + '" y="' + (y + rowH / 2 + 4) + '" text-anchor="end">' + esc(label(c, narrow)) + "</text>");
      svg.push('<path d="M' + labelW + "," + by + "h" + (w - r) + "a" + r + "," + r + " 0 0 1 " + r + "," + r + "v" + (barH - 2 * r) + "a" + r + "," + r + " 0 0 1 -" + r + "," + r + "h-" + (w - r) + 'z" style="fill:' + col + '"/>');
      svg.push('<text x="' + (labelW + w + 6) + '" y="' + (y + rowH / 2 + 4) + '">' + fmt(v, m.d) + m.unit + flag + "</text></g>");
    });
    svg.push("</svg>");
    host.innerHTML = have.length ? svg.join("") : '<p class="hint">この条件では数値が見つかった会社がありません。</p>';
    bindTips(host, ".row", function (g) {
      var c = have[Number(g.getAttribute("data-i"))], n = m.note(c);
      return '<div class="t-title">' + esc(c.name) + '</div><div class="t-row"><span>' + esc(m.label) + "</span><span>" + fmt(m.get(c), m.d) + m.unit + "</span></div>" +
        (n ? '<div class="t-row"><span>補足</span><span>' + esc(n) + "</span></div>" : "") +
        '<div class="t-row"><span>地域</span><span>' + esc(c.region || "") + "</span></div>";
    });
    document.getElementById("metricMeta").innerHTML =
      '<span><i style="background:' + REGION.tokyo + '"></i>東京本社</span><span><i style="background:' + REGION.hokkaido + '"></i>北海道</span>' +
      (avg != null && have.length > 1 ? '<span><i class="dash"></i>平均 ' + fmt(avg, m.d) + m.unit + "</span>" : "") +
      "<span>（" + m.better + "）</span>";
    var cap = m.key === "starting" ? "「あなたの学歴」で選んだ「" + CC.eduLabel() + "」の初任給です。手当込みの会社もあります。" : m.caption;
    document.getElementById("metricNote").innerHTML = esc(cap) + (m.key === "starting" ? " * は固定残業代込み・年俸÷12など、他社とそのまま比べにくい数字です。" : "") +
      (missing.length ? '<br><span class="missing">データなし（' + missing.length + "社）：" + missing.map(function (c) { return esc(CC.shortName(c.name)); }).join("、") + "</span>" : "");
  }

  // ===================== ⑤ レーダーチャート（選んだ会社） =====================
  var RCOL = ["var(--series-1)", "var(--series-2)", "var(--series-3)", "var(--series-4)"];
  var DASH = ["", "6 4", "2 3", "10 3 2 3"];
  function renderRadar() {
    var ids = CC.getPicks(), sel = ids.map(function (id) { return CC.companies.filter(function (c) { return c.id === id; })[0]; }).filter(Boolean);
    var host = document.getElementById("radar");
    if (!sel.length) { host.innerHTML = ""; document.getElementById("radarLegend").innerHTML = ""; return; }
    var S = 340, cx = S / 2, cy = S / 2 + 6, R = 112, ax = CC.AXES;
    function pt(i, v) { var a = -Math.PI / 2 + i * 2 * Math.PI / ax.length; return [cx + Math.cos(a) * R * v / 5, cy + Math.sin(a) * R * v / 5]; }
    var svg = ['<svg viewBox="0 0 ' + S + " " + (S + 10) + '" role="img" aria-label="選んだ会社のスコア比較（レーダーチャート）">'];
    [1, 2, 3, 4, 5].forEach(function (lv) {
      svg.push('<polygon class="radar-grid" points="' + ax.map(function (x, i) { return pt(i, lv).join(","); }).join(" ") + '"/>');
    });
    ax.forEach(function (x, i) {
      var e = pt(i, 5), l = pt(i, 6.1);
      svg.push('<line class="radar-grid" x1="' + cx + '" y1="' + cy + '" x2="' + e[0] + '" y2="' + e[1] + '"/>');
      svg.push('<text x="' + l[0] + '" y="' + (l[1] + 4) + '" text-anchor="middle" class="radar-label">' + x.label + "</text>");
    });
    sel.forEach(function (c, k) {
      var s = CC.scoresOf(c);
      var pts = ax.map(function (x, i) { return pt(i, s[x.key]); });
      svg.push('<polygon points="' + pts.map(function (p) { return p.join(","); }).join(" ") + '" style="fill:' + RCOL[k] + ";fill-opacity:.10;stroke:" + RCOL[k] + '" stroke-width="2" stroke-dasharray="' + DASH[k] + '"/>');
      pts.forEach(function (p, i) {
        svg.push('<circle class="radar-pt" cx="' + p[0] + '" cy="' + p[1] + '" r="5" style="fill:' + RCOL[k] + '" data-c="' + k + '" data-a="' + i + '"/>');
      });
    });
    svg.push("</svg>");
    host.innerHTML = svg.join("");
    bindTips(host, ".radar-pt", function (g) {
      var c = sel[Number(g.getAttribute("data-c"))], x = ax[Number(g.getAttribute("data-a"))];
      return '<div class="t-title">' + esc(c.name) + '</div><div class="t-row"><span>' + x.label + "</span><span>" + CC.scoresOf(c)[x.key] + " / 5</span></div>";
    });
    document.getElementById("radarLegend").innerHTML = sel.map(function (c, k) {
      return '<span><svg width="26" height="10" aria-hidden="true"><line x1="1" y1="5" x2="25" y2="5" style="stroke:' + RCOL[k] + '" stroke-width="3" stroke-dasharray="' + DASH[k] + '"/></svg>' + esc(c.name) + "</span>";
    }).join("");
  }

  // ===================== ⑥ データの充実度 =====================
  var FIELDS = [["revenue", "売上"], ["employees", "従業員"], ["startingSalary", "初任給"], ["overtime", "残業"], ["paidLeave", "有給"], ["maleParental", "男性育休"], ["remote", "働き方"], ["housing", "住宅手当"], ["sideJob", "副業"]];
  function renderCoverage() {
    var list = CC.visible();
    var host = document.getElementById("coverage");
    host.innerHTML = '<table class="cov-table"><thead><tr><th scope="col">企業</th>' +
      FIELDS.map(function (f) { return '<th scope="col" class="cov-h">' + f[1] + "</th>"; }).join("") + '<th scope="col">充実度</th></tr></thead><tbody>' +
      list.map(function (c) {
        var cnt = { official: 0, secondary: 0, unknown: 0 };
        var cells = FIELDS.map(function (f) {
          var conf = c[f[0]] && c[f[0]].conf ? c[f[0]].conf : "unknown";
          cnt[conf] = (cnt[conf] || 0) + 1;
          var sym = { official: "●", secondary: "○", unknown: "×" }[conf];
          return '<td class="cov ' + conf + '" title="' + esc(f[1] + "：" + ({ official: "公式", secondary: "二次", unknown: "要確認" })[conf]) + '">' + sym + "</td>";
        }).join("");
        var n = FIELDS.length;
        var bar = '<span class="cov-bar" aria-label="公式' + cnt.official + "・二次" + cnt.secondary + "・要確認" + cnt.unknown + '">' +
          '<i class="official" style="width:' + cnt.official / n * 100 + '%"></i><i class="secondary" style="width:' + cnt.secondary / n * 100 + '%"></i><i class="unknown" style="width:' + cnt.unknown / n * 100 + '%"></i></span>' +
          '<small>' + (cnt.official + cnt.secondary) + "/" + n + "</small>";
        return '<tr><th scope="row">' + esc(CC.shortName(c.name)) + "</th>" + cells + "<td>" + bar + "</td></tr>";
      }).join("") + "</tbody></table>";
  }


  // ===================== 強み・注意点の早見表（各社の詳細） =====================
  function quickPoints(c) {
    var s = CC.scoresOf(c), m = c.metrics || {}, pi = CC.payInfo(c);
    var stx = CC.startingFor(c), sv = stx.status === "ok" ? stx.v : null, el = CC.eduLabel();
    var good = [], warn = [];
    // 数字から自動で判定（しきい値は下のとおり）
    if (sv != null && !m.startingNote && sv >= 30) good.push(el + "の初任給が高め（月" + sv + "万円）");
    if (sv != null && sv < 23) warn.push(el + "の初任給が低め（月" + sv + "万円" + (m.startingNote ? "・" + m.startingNote : "") + "）");
    if (stx.status === "no") warn.push(el + "は応募対象外");
    if (m.startingNote) warn.push("初任給は" + m.startingNote + "のため、他社と単純に比べにくい");
    if (c.avgSalary && c.avgSalary.value >= 1000) good.push("平均年収が高い（" + c.avgSalary.value.toLocaleString() + "万円）");
    if (c.avgSalary && c.avgSalary.value < 700) warn.push("平均年収は低め（" + c.avgSalary.value.toLocaleString() + "万円）");
    if (typeof m.overtimeH === "number" && m.overtimeH <= 12) good.push("残業が少ない（月" + m.overtimeH + "時間" + (m.overtimeNote ? "・" + m.overtimeNote : "") + "）");
    if (typeof m.overtimeH === "number" && m.overtimeH >= 23) warn.push("残業はやや多め（月" + m.overtimeH + "時間）");
    if (typeof m.leaveDays === "number" && m.leaveDays >= 15) good.push("有給を多く取れている（年" + m.leaveDays + "日）");
    if (typeof m.leaveDays === "number" && m.leaveDays <= 11.5) warn.push("有給の取得は少なめ（年" + m.leaveDays + "日）");
    if (typeof m.leaveRate === "number" && m.leaveRate >= 80) good.push("有給取得率が高い（" + m.leaveRate + "%）");
    if (typeof m.maleParentalPct === "number" && m.maleParentalPct >= 70) good.push("男性も育休を取りやすい（取得率" + m.maleParentalPct + "%）");
    if (typeof m.maleParentalPct === "number" && m.maleParentalPct < 55) warn.push("男性の育休取得率はまだ低め（" + m.maleParentalPct + "%）");
    if (s.flex >= 4) good.push("在宅勤務など柔軟に働ける");
    if (s.flex <= 2.5) warn.push("出社が中心");
    if (s.future >= 4.5) good.push("業績が伸びている");
    if (s.future <= 2.5) warn.push("直近の業績が落ちている・赤字");
    if (pi.kind !== "data") warn.push(pi.kind === "estimate" ? "年収は求人情報からの推定" : "年収・初任給のデータがない");
    var unknown = ["startingSalary", "overtime", "paidLeave", "maleParental", "remote", "housing", "sideJob"].filter(function (k) { return !c[k] || c[k].conf === "unknown"; }).length;
    if (unknown >= 5) warn.push("公開データが少ない（7項目中" + unknown + "項目が不明）");
    return { good: good, warn: warn, unknown: unknown };
  }
  function renderQuick() {
    CC.companies.forEach(function (c) {
      var body = document.querySelector("#detail-" + c.id + " .company-body");
      if (!body || body.querySelector(".quick")) return;
      var q = quickPoints(c);
      var li = function (arr) { return arr.length ? "<ul>" + arr.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" : ""; };
      var div = document.createElement("div");
      div.className = "quick";
      div.innerHTML = '<h3>強み・注意点の早見表</h3><div class="quick-grid">' +
        '<div class="quick-col good"><div class="quick-h"><span class="qi" aria-hidden="true">✓</span>強み</div>' +
        '<p class="quick-main">' + esc(c.strengths) + '</p>' + li(q.good) + "</div>" +
        '<div class="quick-col warn"><div class="quick-h"><span class="qi" aria-hidden="true">!</span>注意点</div>' +
        '<p class="quick-main">' + esc(c.risks) + '</p>' + li(q.warn) + "</div></div>" +
        '<p class="note">太字の文は調べた内容のまとめ、箇条書きは数字から自動で判定したものです。</p>';
      body.insertBefore(div, body.firstChild);
    });
  }

  function renderAll() { renderKpis(); renderHeat(); renderMetric(); renderRadar(); renderCoverage(); }
  document.addEventListener("cc:update", function () { renderKpis(); renderHeat(); renderMetric(); renderRadar(); renderCoverage(); renderQuick(); });
  var rt; window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(function () { renderMetric(); renderHeat(); }, 150); });
  renderMetricTabs();
  renderAll();
  renderQuick();
})();
