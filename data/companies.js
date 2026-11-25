// =====================================================================
// 企業データ（このファイルだけ編集すれば企業の追加・修正ができます）
// ---------------------------------------------------------------------
// conf（情報の確かさ）:
//   "official" = 会社の公式資料・有価証券報告書で確認
//   "secondary" = 有価証券報告書などを引用した第三者サイト・報道で確認（原本は要確認）
//   "unknown"  = 公開データが見つからない（要確認）
// scores（1〜5）: pay は平均年収・初任給（startingMonthly, 万円）から自動計算。
//   どちらもない場合は payEstimate.score（推定）を使い、それもなければ3点。
//wlb / flex / future は
//   集めた事実をもとにした「目安の評価」で、reasons に根拠を書く。
// salaryByEdu: 学歴別の初任給（月額・万円）。s2=専門2・3年制, s4=専門4年制, kosen=高専, univ=大卒, grad=大学院卒。
//   status: ok=金額あり / no=応募対象外 / unknown=不明
// metrics: グラフ用の数値（overtimeH=月の残業時間, leaveDays=有給の平均取得日数,
//   leaveRate=有給取得率%, maleParentalPct=男性育休取得率%）。出典は各項目の src と同じ。
// =====================================================================
window.DATA_UPDATED = "2026-11-25";

window.COMPANIES = [
  {
    "id": "lycorp",
    "name": "LINEヤフー",
    "type": "Web系",
    "region": "東京本社（全国）",
    "oneLiner": "LINEとYahoo!の巨大生活基盤",
    "business": "LINE・Yahoo! JAPAN・PayPay連携・EC（ZOZO、アスクル等）・広告",
    "revenue": {
      "text": "売上収益 2兆363億円（+6.2%）／営業利益 3,413億円（+8.3%）",
      "fy": "2026年3月期",
      "conf": "official",
      "src": "https://www2.jpx.co.jp/disc/46890/081220260507518938_tse-acedifsm-46890-20260508346890-ixbrl.htm"
    },
    "employees": {
      "text": "単体 10,577名／連結 29,863名",
      "conf": "secondary"
    },
    "avgSalary": {
      "value": 902,
      "age": "39.0歳",
      "fy": "2026年3月期・単体",
      "conf": "secondary",
      "src": "https://the-shashi.com/tse/4689/workforce/"
    },
    "startingSalary": {
      "text": "新卒エンジニアの金額は公開データなし（参考：2027年度 第二新卒枠で月43.4万円〜・標準年収651万円〜）",
      "conf": "unknown",
      "src": "https://www.lycorp.co.jp/ja/recruit/additional-27/"
    },
    "overtime": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "paidLeave": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "maleParental": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "remote": {
      "text": "原則 週3日以上出社＋リモートの組み合わせ（2025年4月から出社日を設定）",
      "conf": "official",
      "src": "https://www.lycorp.co.jp/ja/recruit/workplace/environment/"
    },
    "housing": {
      "text": "住宅手当の情報なし（要確認）。働く環境の支援金「Working Style手当」月1.1万円",
      "conf": "official",
      "src": "https://www.lycorp.co.jp/ja/recruit/newgrads/engineer/jd0001/"
    },
    "sideJob": {
      "text": "要確認",
      "conf": "unknown"
    },
    "benefits": "育休は入社1年未満でも取得可・最長2歳まで延長可",
    "culture": "（推測）大企業らしい制度の整い方と、IT企業らしい技術志向が混ざる。旧LINE・旧ヤフーの統合後で文化が変化中",
    "payStructure": "（要確認）グレード制。2025年度以降AI人材の採用強化を表明",
    "strengths": "LINE（国内約1億人規模）とYahoo! JAPANの利用者基盤、PayPayとの連携、広告・EC・決済をまとめて持つ",
    "newAreas": "AIエージェント「Agent i」などAI領域、EC・決済の連携強化",
    "risks": "2025年10月のアスクルのランサムウェア被害の影響、過去の情報漏えい問題による行政指導への対応",
    "scores": {
      "wlb": 3,
      "flex": 3,
      "future": 4
    },
    "reasons": {
      "wlb": "残業・有給の公開データが見つからないため中間の3（データ不足）",
      "flex": "週3日以上出社が原則。フルリモートではないため3",
      "future": "増収増益（売上+6.2%、営業益+8.3%）で安定成長のため4"
    },
    "sources": [
      {
        "label": "決算短信 2026年3月期",
        "url": "https://www2.jpx.co.jp/disc/46890/081220260507518938_tse-acedifsm-46890-20260508346890-ixbrl.htm"
      },
      {
        "label": "平均年収の推移（有報ベース）",
        "url": "https://the-shashi.com/tse/4689/workforce/"
      },
      {
        "label": "公式：働く環境",
        "url": "https://www.lycorp.co.jp/ja/recruit/workplace/environment/"
      },
      {
        "label": "公式：福利厚生",
        "url": "https://www.lycorp.co.jp/ja/recruit/workplace/benefits/"
      }
    ],
    "metrics": {},
    "salaryByEdu": {
      "note": "エンジニア職は学歴・学部・学科不問（高専生・専門学生も応募可）。金額は非公開",
      "src": "https://www.lycorp.co.jp/ja/recruit/newgrads/engineer/jd0001/",
      "conf": "official",
      "s2": {
        "status": "unknown"
      },
      "s4": {
        "status": "unknown"
      },
      "kosen": {
        "status": "unknown"
      },
      "univ": {
        "status": "unknown"
      },
      "grad": {
        "status": "unknown"
      }
    }
  },
  {
    "id": "rakuten",
    "name": "楽天グループ",
    "type": "Web系",
    "region": "東京本社（全国）",
    "oneLiner": "EC・金融・携帯の経済圏",
    "business": "楽天市場などEC、楽天カード・銀行・証券などフィンテック、楽天モバイル",
    "revenue": {
      "text": "売上収益 2兆4,966億円（+9.5%）／Non-GAAP営業利益 1,063億円／最終損益 1,778億円の赤字",
      "fy": "2025年12月期",
      "conf": "secondary",
      "src": "https://www.watch.impress.co.jp/docs/news/2085426.html"
    },
    "employees": {
      "text": "要確認",
      "conf": "unknown"
    },
    "avgSalary": {
      "value": 851,
      "age": "要確認",
      "fy": "2025年12月期・単体",
      "conf": "secondary",
      "src": "https://the-shashi.com/tse/4755/workforce/"
    },
    "startingSalary": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "overtime": {
      "text": "グループ全体は公開データなし（参考：子会社の楽天カードは月11時間）",
      "conf": "unknown",
      "src": "https://www.rakuten-card.co.jp/corporate/career/graduates/workstyle/"
    },
    "paidLeave": {
      "text": "82.4%（年13.3日、2024年度）",
      "conf": "secondary",
      "src": "https://talentsquare.co.jp/career/rakuten-salary/"
    },
    "maleParental": {
      "text": "69.1%（2024年度）",
      "conf": "secondary",
      "src": "https://talentsquare.co.jp/career/rakuten-salary/"
    },
    "remote": {
      "text": "出社が中心と言われる（公式な出社ルールは要確認）",
      "conf": "unknown"
    },
    "housing": {
      "text": "要確認",
      "conf": "unknown"
    },
    "sideJob": {
      "text": "要確認",
      "conf": "unknown"
    },
    "benefits": "昇給見直しは年2回（1月・7月）、賞与は6月・12月（ビジネス職の募集要項より）",
    "culture": "（推測）社内公用語が英語。スピードと目標達成を重視するトップダウン型と言われる",
    "payStructure": "評価と会社実績で年2回見直し（ビジネス職の募集要項より）",
    "strengths": "楽天ポイントを軸にした経済圏、EC売上1兆3,697億円、カード・銀行などの金融事業",
    "newAreas": "楽天モバイル（2025年に通期EBITDA黒字化、契約1,001万回線）、AI活用",
    "risks": "モバイルへの巨額投資による赤字・借入の多さ、国内ECの伸び悩みの指摘",
    "scores": {
      "wlb": 4,
      "flex": 2.5,
      "future": 3
    },
    "reasons": {
      "wlb": "有給取得率82.4%、男性育休69.1%と数字が出ており高めのため4",
      "flex": "出社中心と言われており（要確認）2.5",
      "future": "売上は29期連続で過去最高だが、最終損益は赤字のため3"
    },
    "sources": [
      {
        "label": "2025年12月期決算の報道",
        "url": "https://www.watch.impress.co.jp/docs/news/2085426.html"
      },
      {
        "label": "平均年収の推移（有報ベース）",
        "url": "https://the-shashi.com/tse/4755/workforce/"
      },
      {
        "label": "有給・育休の集計",
        "url": "https://talentsquare.co.jp/career/rakuten-salary/"
      },
      {
        "label": "公式：ウェルネス",
        "url": "https://corp.rakuten.co.jp/sustainability/wellness/"
      }
    ],
    "metrics": {
      "leaveDays": 13.3,
      "leaveRate": 82.4,
      "maleParentalPct": 69.1
    },
    "salaryByEdu": {
      "note": "ビジネス総合コースの応募資格は大学・大学院卒業予定者。エンジニア職の学歴要件と金額は要確認",
      "src": "https://corp.rakuten.co.jp/careers/graduates/recruit_business/business.html",
      "conf": "official",
      "s2": {
        "status": "unknown"
      },
      "s4": {
        "status": "unknown"
      },
      "kosen": {
        "status": "unknown"
      },
      "univ": {
        "status": "unknown"
      },
      "grad": {
        "status": "unknown"
      }
    }
  },
  {
    "id": "mercari",
    "name": "メルカリ",
    "type": "Web系",
    "region": "東京本社（全国）",
    "oneLiner": "フリマ発の自由な働き方",
    "business": "フリマアプリ「メルカリ」、決済「メルペイ」、スキマバイト「メルカリ ハロ」、米国事業",
    "revenue": {
      "text": "売上収益 2,293億円（+19.0%）／営業利益 439億円（+57.7%）過去最高",
      "fy": "2026年6月期",
      "conf": "official",
      "src": "https://www2.jpx.co.jp/disc/43850/081220260804508114_tse-acedifsm-43850-20260805343850-ixbrl.htm"
    },
    "employees": {
      "text": "単体 1,543名／連結 2,159名（2025年6月時点）",
      "conf": "secondary"
    },
    "avgSalary": {
      "value": 1233,
      "age": "36.3歳（前期）",
      "fy": "2026年6月期",
      "conf": "secondary",
      "src": "https://tleon.co.jp/media/mercari-salary/"
    },
    "startingSalary": {
      "text": "公開データなし（グレード制で個別に決まる）",
      "conf": "unknown"
    },
    "overtime": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "paidLeave": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "maleParental": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "remote": {
      "text": "「YOUR CHOICE」：出社かフルリモートかを個人が選べ、国内なら住む場所も自由。コアタイムなしのフルフレックス",
      "conf": "official",
      "src": "https://careers.mercari.com/your-choice"
    },
    "housing": {
      "text": "要確認",
      "conf": "unknown"
    },
    "sideJob": {
      "text": "要確認",
      "conf": "unknown"
    },
    "benefits": "週休3日なども可能（一部職種を除く）",
    "culture": "（推測）成果主義・ボトムアップ。外国籍の社員が多く英語を使う場面もある",
    "payStructure": "職種ごとのグレード（等級）で年収レンジが決まる。平均勤続年数は3.8年と短め",
    "strengths": "国内最大級のフリマアプリ、AI活用で効率化が進み4期連続で最高益",
    "newAreas": "メルカリ ハロ、フィンテック、AI（社内のAI利用率100%）",
    "risks": "米国事業の採算、勤続年数が短く人の入れ替わりが多い可能性",
    "scores": {
      "wlb": 3,
      "flex": 5,
      "future": 5
    },
    "reasons": {
      "wlb": "残業・有給の公開データが見つからないため中間の3（データ不足）",
      "flex": "出社・フルリモートを自分で選べ、フルフレックスのため5",
      "future": "売上+19%、営業益+57.7%で過去最高のため5"
    },
    "sources": [
      {
        "label": "決算短信 2026年6月期",
        "url": "https://www2.jpx.co.jp/disc/43850/081220260804508114_tse-acedifsm-43850-20260805343850-ixbrl.htm"
      },
      {
        "label": "公式：YOUR CHOICE",
        "url": "https://careers.mercari.com/your-choice"
      },
      {
        "label": "平均年収の解説",
        "url": "https://tleon.co.jp/media/mercari-salary/"
      },
      {
        "label": "平均年収 2025年6月期（LIMO）",
        "url": "https://limo.media/articles/-/7522"
      }
    ],
    "metrics": {},
    "salaryByEdu": {
      "note": "学歴別の初任給・応募資格は公開データなし",
      "src": null,
      "conf": "unknown",
      "s2": {
        "status": "unknown"
      },
      "s4": {
        "status": "unknown"
      },
      "kosen": {
        "status": "unknown"
      },
      "univ": {
        "status": "unknown"
      },
      "grad": {
        "status": "unknown"
      }
    }
  },
  {
    "id": "cyberagent",
    "name": "サイバーエージェント",
    "type": "Web系",
    "region": "東京本社（全国）",
    "startingMonthly": 42,
    "oneLiner": "若手抜擢のメディア・ゲーム",
    "business": "インターネット広告、ゲーム（Cygames等）、ABEMAなどメディア&IP",
    "revenue": {
      "text": "売上高 8,740億円（+9.1%、28期連続増収）／営業利益 717億円（+78.9%）",
      "fy": "2025年9月期",
      "conf": "secondary",
      "src": "https://gamebiz.jp/news/416048"
    },
    "employees": {
      "text": "要確認",
      "conf": "unknown"
    },
    "avgSalary": {
      "value": 914,
      "age": "33.8歳",
      "fy": "2025年9月期",
      "conf": "secondary",
      "src": "https://talentsquare.co.jp/career/cyber-agent-salary/"
    },
    "startingSalary": {
      "text": "月42万円〜（年俸504万円〜）。※固定残業代を含む（月給制職種は時間外80時間分）",
      "conf": "official",
      "src": "https://www.cyberagent.co.jp/careers/special/students/tech_potential/"
    },
    "overtime": {
      "text": "全社平均は公開データなし（参考：ある求人票で月31時間）",
      "conf": "unknown",
      "src": "https://doda.jp/DodaFront/View/JobSearchDetail/j_jid__3015707590/"
    },
    "paidLeave": {
      "text": "公開データなし（入社3年目以上は毎年5日連続の「休んでファイブ」）",
      "conf": "unknown"
    },
    "maleParental": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "remote": {
      "text": "出社中心（参考：ある求人票で週2日リモート可）",
      "conf": "secondary",
      "src": "https://doda.jp/DodaFront/View/JobSearchDetail/j_jid__3015707590/"
    },
    "housing": {
      "text": "「2駅ルール」：オフィス最寄駅から2駅圏内なら月3万円、勤続5年以上はどこでも月5万円",
      "conf": "official",
      "src": "https://www.cyberagent.co.jp/sustainability/info/detail/id=26074"
    },
    "sideJob": {
      "text": "要確認",
      "conf": "unknown"
    },
    "benefits": "家賃補助、リフレッシュ休暇「休んでファイブ」",
    "culture": "（推測）若手に大きな仕事を任せる文化。チーム意識が強く、熱量高めと言われる",
    "payStructure": "新卒は年俸制で固定残業代込み。成果で昇給の差が出やすいと言われる（要確認）",
    "strengths": "ネット広告の大手、ゲームのヒット作（学園アイドルマスター等）、ABEMAが10年ぶり黒字化",
    "newAreas": "生成AIを使った広告制作、ABEMAの収益化",
    "risks": "ゲーム事業はヒット作次第で利益が大きく変わる（2026年9月期の営業益予想は500〜600億円に減少）",
    "scores": {
      "wlb": 2.5,
      "flex": 2.5,
      "future": 3.5
    },
    "reasons": {
      "wlb": "固定残業80時間分込みの給与設計、求人例で月31時間残業のため2.5",
      "flex": "出社中心で、リモートは部署による（求人例で週2日）ため2.5",
      "future": "28期連続増収・大幅増益だが、来期は減益予想のため3.5"
    },
    "sources": [
      {
        "label": "2025年9月期決算の報道",
        "url": "https://gamebiz.jp/news/416048"
      },
      {
        "label": "公式：新卒エンジニア採用",
        "url": "https://www.cyberagent.co.jp/careers/special/students/tech_potential/"
      },
      {
        "label": "公式：家賃補助（2駅ルール）",
        "url": "https://www.cyberagent.co.jp/sustainability/info/detail/id=26074"
      },
      {
        "label": "平均年収の解説",
        "url": "https://talentsquare.co.jp/career/cyber-agent-salary/"
      }
    ],
    "metrics": {
      "startingNote": "固定残業代（80時間分）込み"
    },
    "salaryByEdu": {
      "note": "学年・学科・専攻不問（入社時に高卒以上）。初任給は学歴による差の記載なし（42万円〜、固定残業代込み）",
      "src": "https://www.cyberagent.co.jp/careers/special/students/tech/faq.html",
      "conf": "official",
      "s2": {
        "status": "ok",
        "v": 42
      },
      "s4": {
        "status": "ok",
        "v": 42
      },
      "kosen": {
        "status": "ok",
        "v": 42
      },
      "univ": {
        "status": "ok",
        "v": 42
      },
      "grad": {
        "status": "ok",
        "v": 42
      }
    }
  },
  {
    "id": "dena",
    "name": "DeNA",
    "type": "Web系",
    "region": "東京本社（全国）",
    "startingMonthly": 50,
    "oneLiner": "ゲーム・スポーツ・AIに挑戦",
    "business": "ゲーム（ポケポケ等）、ライブストリーミング（Pococha）、スポーツ（横浜DeNAベイスターズ）、ヘルスケア",
    "revenue": {
      "text": "売上収益 1,477億円（-9.9%）／営業利益 187億円（-35.5%）",
      "fy": "2026年3月期",
      "conf": "secondary",
      "src": "https://gamebiz.jp/news/425748"
    },
    "employees": {
      "text": "要確認",
      "conf": "unknown"
    },
    "avgSalary": {
      "value": 1118,
      "age": "38.6歳",
      "fy": "2026年3月期・単体（前年比+26.6%）",
      "conf": "secondary",
      "src": "https://gurafu.net/jpn/dena"
    },
    "startingSalary": {
      "text": "年俸600万円〜（AIジェネラリスト）／700万円〜（AIスペシャリスト）※2027年度以降入社",
      "conf": "secondary",
      "src": "https://gamebiz.jp/news/422255"
    },
    "overtime": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "paidLeave": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "maleParental": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "remote": {
      "text": "ハイブリッドワーク・コアタイムなしのスーパーフレックス。出社率は2割程度",
      "conf": "official",
      "src": "https://csr.dena.com/pdf/2024activities.pdf"
    },
    "housing": {
      "text": "住宅手当は要確認。遠方居住勤務OK（交通費 月15万円まで実費）",
      "conf": "official",
      "src": "https://csr.dena.com/pdf/2024activities.pdf"
    },
    "sideJob": {
      "text": "可（事前申請・承認など条件あり）",
      "conf": "official",
      "src": "https://csr.dena.com/intl/employees/"
    },
    "benefits": "ベビーケア休暇、積立休暇、健康経営優良法人ホワイト500に10年連続認定",
    "culture": "（推測）「こと（課題）に向かう」を重視する議論好きな文化。若手にも任せる",
    "payStructure": "職種別の年俸制。2027年度から新卒の基準年俸を引き上げ",
    "strengths": "ゲーム開発・運営力、プロ野球などスポーツ事業、ライブ配信の黒字化",
    "newAreas": "AI（全社でAI活用を進める「AIオールイン」方針）、ヘルスケア",
    "risks": "ポケポケのヒット後の反動で減収減益。ゲームの当たり外れに業績が左右されやすい",
    "scores": {
      "wlb": 3.5,
      "flex": 4.5,
      "future": 2.5
    },
    "reasons": {
      "wlb": "数値は不明だがホワイト500に10年連続認定のため3.5",
      "flex": "出社率2割・スーパーフレックス・遠方居住OKのため4.5",
      "future": "2026年3月期は減収減益（営業益-35.5%）のため2.5"
    },
    "sources": [
      {
        "label": "2026年3月期決算の報道",
        "url": "https://gamebiz.jp/news/425748"
      },
      {
        "label": "新卒採用方針の刷新（年俸）",
        "url": "https://gamebiz.jp/news/422255"
      },
      {
        "label": "公式：CSR活動報告（働き方）",
        "url": "https://csr.dena.com/pdf/2024activities.pdf"
      },
      {
        "label": "平均年収",
        "url": "https://gurafu.net/jpn/dena"
      }
    ],
    "metrics": {
      "startingNote": "年俸600万円÷12（賞与込み）"
    },
    "salaryByEdu": {
      "note": "年俸600万円〜（AIジェネラリスト）。専門・高専卒の応募可否は要確認",
      "src": "https://gamebiz.jp/news/422255",
      "conf": "secondary",
      "s2": {
        "status": "unknown"
      },
      "s4": {
        "status": "unknown"
      },
      "kosen": {
        "status": "unknown"
      },
      "univ": {
        "status": "ok",
        "v": 50
      },
      "grad": {
        "status": "ok",
        "v": 50
      }
    }
  },
  {
    "id": "nttdata",
    "name": "NTTデータ",
    "type": "SIer",
    "region": "東京本社（全国）",
    "startingMonthly": 30,
    "oneLiner": "国内最大手の官公庁・金融SI",
    "business": "官公庁・金融・法人向けのシステム開発（SI）、海外事業、データセンター",
    "revenue": {
      "text": "売上高 5兆46億円（+7.9%）／営業利益 4,882億円（+50.7%）過去最高",
      "fy": "2026年3月期（グループ連結）",
      "conf": "secondary",
      "src": "https://news.mynavi.jp/techplus/article/20260206-4086458/"
    },
    "employees": {
      "text": "要確認（グループ全体で約20万人規模）",
      "conf": "unknown"
    },
    "avgSalary": {
      "value": 923,
      "age": "39.7歳",
      "fy": "2025年3月期・持株会社単体（1,592名）",
      "conf": "secondary",
      "src": "https://sincereed-agent.com/?p=8289"
    },
    "startingSalary": {
      "text": "学士 月30.0万円／修士 月31.2万円（2026年4月）。NTTグループは住宅補助込みで月34万円以上と公表",
      "conf": "secondary",
      "src": "https://plus.onecareer.jp/articles/1592"
    },
    "overtime": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "paidLeave": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "maleParental": {
      "text": "103.1%（2025年度、平均104.4日）",
      "conf": "official",
      "src": "https://www.nttdata.com/global/ja/news/topics/2026/091700"
    },
    "remote": {
      "text": "リモートワーク制度あり（頻度は部署による・要確認）",
      "conf": "unknown"
    },
    "housing": {
      "text": "住宅補助あり（NTTグループの公表で、月給＋住宅補助で月34万円以上）",
      "conf": "secondary",
      "src": "https://plus.onecareer.jp/articles/1592"
    },
    "sideJob": {
      "text": "要確認",
      "conf": "unknown"
    },
    "benefits": "男性の育休取得を強く推進",
    "culture": "（推測）堅実でチームワーク重視。大規模案件が多く、調整力が求められる",
    "payStructure": "グレード制（新卒もグレードで初任給が異なる）",
    "strengths": "官公庁・金融の大型システムで国内トップ級の実績。海外売上も大きい",
    "newAreas": "生成AI、データセンター、海外事業の統合",
    "risks": "2025年9月にNTTの完全子会社となり上場廃止 → 以後、有価証券報告書が出ないため年収などの公開データが減る",
    "scores": {
      "wlb": 3.5,
      "flex": 3,
      "future": 4
    },
    "reasons": {
      "wlb": "男性育休103%と高いが、残業・有給のデータが不明のため3.5",
      "flex": "リモート制度はあるが詳細不明のため3",
      "future": "売上・利益とも過去最高。NTTグループの後ろ盾があり4"
    },
    "sources": [
      {
        "label": "2026年3月期決算の報道",
        "url": "https://news.mynavi.jp/techplus/article/20260206-4086458/"
      },
      {
        "label": "公式：男性育休の取り組み",
        "url": "https://www.nttdata.com/global/ja/news/topics/2026/091700"
      },
      {
        "label": "初任給（就活メディア）",
        "url": "https://plus.onecareer.jp/articles/1592"
      },
      {
        "label": "上場廃止（JPX）",
        "url": "https://www.jpx.co.jp/news/1023/20250829-12.html"
      }
    ],
    "metrics": {
      "maleParentalPct": 103.1
    },
    "salaryByEdu": {
      "note": "2026年4月入社予定者の初任給（グレード6）。専門卒の扱いは要確認",
      "src": "https://plus.onecareer.jp/articles/1592",
      "conf": "secondary",
      "s2": {
        "status": "unknown"
      },
      "s4": {
        "status": "unknown"
      },
      "kosen": {
        "status": "ok",
        "v": 28.2
      },
      "univ": {
        "status": "ok",
        "v": 30
      },
      "grad": {
        "status": "ok",
        "v": 31.2
      }
    }
  },
  {
    "id": "nri",
    "name": "野村総合研究所",
    "type": "SIer",
    "region": "東京本社（全国）",
    "startingMonthly": 29.65,
    "oneLiner": "コンサル×ITの高年収企業",
    "business": "コンサルティング、金融向けITソリューション（証券・保険の共同システム等）、産業向けIT",
    "revenue": {
      "text": "売上収益 8,147億円（+6.5%）／営業利益 583億円（-56.8%、海外の減損損失）",
      "fy": "2026年3月期",
      "conf": "official",
      "src": "https://www2.jpx.co.jp/disc/43070/081220260423509100_tse-acedifsm-43070-20260424343070-ixbrl.htm"
    },
    "employees": {
      "text": "要確認",
      "conf": "unknown"
    },
    "avgSalary": {
      "value": 1421,
      "age": "45.0歳",
      "fy": "2026年3月期・単体（別の集計では1,333万円）",
      "conf": "secondary",
      "src": "https://the-shashi.com/tse/4307/workforce/"
    },
    "startingSalary": {
      "text": "大卒 月29.65万円／修士 月30.65万円（住宅手当2万円込み、2026年度予定）",
      "conf": "secondary",
      "src": "https://internshipguide.jp/companies/company/1197/controlelr:Companies"
    },
    "overtime": {
      "text": "月5.1時間（2025年度）※裁量労働でない若手社員のみ対象の数字",
      "conf": "official",
      "src": "https://www.nri.com/jp/sustainability/social/health_and_productivity_mgmt"
    },
    "paidLeave": {
      "text": "73.4%（2025年度）",
      "conf": "official",
      "src": "https://www.nri.com/jp/sustainability/social/health_and_productivity_mgmt"
    },
    "maleParental": {
      "text": "公開データなし（プラチナくるみん認定あり）",
      "conf": "unknown"
    },
    "remote": {
      "text": "要確認",
      "conf": "unknown"
    },
    "housing": {
      "text": "住宅手当 月2万円（全員一律）",
      "conf": "secondary",
      "src": "https://internshipguide.jp/companies/company/1197/controlelr:Companies"
    },
    "sideJob": {
      "text": "要確認",
      "conf": "unknown"
    },
    "benefits": "プラチナくるみん（子育てサポート企業の上位認定）",
    "culture": "（推測）優秀な人が多く、自分で考えて動くプロ意識の高い文化。多くの社員が裁量労働制",
    "payStructure": "（推測）賞与の比重が大きく、成果・昇格で年収が大きく伸びる",
    "strengths": "証券会社向け共同システムなど金融ITで高いシェア。コンサルとITの両方を持つ",
    "newAreas": "海外事業（豪州・北米）、生成AI、DX支援",
    "risks": "海外買収事業で減損（営業益-56.8%）。会社は来期の大幅回復（営業益1,750億円）を予想",
    "scores": {
      "wlb": 4,
      "flex": 3,
      "future": 3.5
    },
    "reasons": {
      "wlb": "有給73.4%、若手の残業月5.1時間（裁量労働の社員は対象外）のため4",
      "flex": "リモートの公開情報が見つからないため中間の3（データ不足）",
      "future": "本業は増収だが、海外の減損で大幅減益のため3.5"
    },
    "sources": [
      {
        "label": "決算短信 2026年3月期",
        "url": "https://www2.jpx.co.jp/disc/43070/081220260423509100_tse-acedifsm-43070-20260424343070-ixbrl.htm"
      },
      {
        "label": "公式：健康経営（残業・有給）",
        "url": "https://www.nri.com/jp/sustainability/social/health_and_productivity_mgmt"
      },
      {
        "label": "初任給（就活メディア）",
        "url": "https://internshipguide.jp/companies/company/1197/controlelr:Companies"
      },
      {
        "label": "平均年収の推移",
        "url": "https://the-shashi.com/tse/4307/workforce/"
      }
    ],
    "metrics": {
      "overtimeH": 5.1,
      "leaveRate": 73.4,
      "overtimeNote": "裁量労働でない若手のみ"
    },
    "salaryByEdu": {
      "note": "応募資格は四年制大学・大学院の卒業（修了）見込み",
      "src": "https://gaishishukatsu.com/recruiting_info/view/13627",
      "conf": "secondary",
      "s2": {
        "status": "no"
      },
      "s4": {
        "status": "no"
      },
      "kosen": {
        "status": "no"
      },
      "univ": {
        "status": "ok",
        "v": 29.65
      },
      "grad": {
        "status": "ok",
        "v": 30.65
      }
    }
  },
  {
    "id": "fujitsu",
    "name": "富士通",
    "type": "SIer",
    "region": "東京本社（全国）",
    "startingMonthly": 31.5,
    "oneLiner": "ジョブ型に変わる老舗IT",
    "business": "システム開発・ITサービス、「Fujitsu Uvance」（社会課題を解くDX事業）、ハードウェア",
    "revenue": {
      "text": "売上収益 2兆3,469億円（+4.5%）／調整後営業利益 3,614億円（+24.7%）",
      "fy": "2026年3月期",
      "conf": "secondary",
      "src": "https://cloud.watch.impress.co.jp/docs/news/2129408.html"
    },
    "employees": {
      "text": "要確認",
      "conf": "unknown"
    },
    "avgSalary": {
      "value": 1012,
      "age": "要確認",
      "fy": "2026年3月期・単体",
      "conf": "secondary",
      "src": "https://the-shashi.com/tse/6702/workforce/"
    },
    "startingSalary": {
      "text": "学歴別の初任給を廃止。月31.5万円〜（担う仕事の大きさで個別に決定）",
      "conf": "secondary",
      "src": "https://job.career-tasu.jp/corp/00213137/employment/"
    },
    "overtime": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "paidLeave": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "maleParental": {
      "text": "94.1%（2025年度）",
      "conf": "official",
      "src": "https://global.fujitsu/-/media/Project/Fujitsu/Fujitsu-HQ/sustainability/2026/social-2026-jp.pdf"
    },
    "remote": {
      "text": "「Work Life Shift」：時間と場所にとらわれない働き方。テレワークとオフィスのハイブリッド",
      "conf": "official",
      "src": "https://telework.mhlw.go.jp/wp/wp-content/uploads/2022/09/tw-fujitsu.pdf"
    },
    "housing": {
      "text": "要確認",
      "conf": "unknown"
    },
    "sideJob": {
      "text": "要確認",
      "conf": "unknown"
    },
    "benefits": "新卒向けに長期・有償インターンを新設",
    "culture": "（推測）伝統的な大企業から、ジョブ型・自律型へ変わる途中",
    "payStructure": "ジョブ型人事制度：仕事の役割の大きさで給与が決まる（2026年度新卒から適用）",
    "strengths": "国内大手のITサービス力、官公庁・企業の顧客基盤",
    "newAreas": "Fujitsu Uvance（売上7,093億円、+47%）、AI、量子コンピュータ",
    "risks": "英国の郵便局システム問題などの対応、ハード事業の縮小・再編",
    "scores": {
      "wlb": 3.5,
      "flex": 4,
      "future": 4.5
    },
    "reasons": {
      "wlb": "男性育休94.1%と高いが、残業・有給は不明のため3.5",
      "flex": "Work Life Shiftで在宅勤務を全社的に進めてきたため4",
      "future": "調整後営業益+24.7%、Uvanceが+47%と成長が速いため4.5"
    },
    "sources": [
      {
        "label": "2026年3月期決算の報道",
        "url": "https://cloud.watch.impress.co.jp/docs/news/2129408.html"
      },
      {
        "label": "公式：社会関連データ2026",
        "url": "https://global.fujitsu/-/media/Project/Fujitsu/Fujitsu-HQ/sustainability/2026/social-2026-jp.pdf"
      },
      {
        "label": "ジョブ型の新卒採用",
        "url": "https://www.rodo.co.jp/news/179334/"
      },
      {
        "label": "厚労省：テレワーク事例",
        "url": "https://telework.mhlw.go.jp/wp/wp-content/uploads/2022/09/tw-fujitsu.pdf"
      }
    ],
    "metrics": {
      "maleParentalPct": 94.1
    },
    "salaryByEdu": {
      "note": "学歴別の初任給を廃止。月31.5万円〜（担う仕事で決定）。インターンは高専も対象。専門卒の応募可否は要確認",
      "src": "https://job.career-tasu.jp/corp/00213137/employment/",
      "conf": "secondary",
      "s2": {
        "status": "unknown"
      },
      "s4": {
        "status": "unknown"
      },
      "kosen": {
        "status": "ok",
        "v": 31.5
      },
      "univ": {
        "status": "ok",
        "v": 31.5
      },
      "grad": {
        "status": "ok",
        "v": 31.5
      }
    }
  },
  {
    "id": "nec",
    "name": "NEC",
    "type": "SIer",
    "region": "東京本社（全国）",
    "startingMonthly": 30,
    "oneLiner": "官公庁・防衛にも強い老舗",
    "business": "ITサービス（BluStellar）、官公庁・防衛、通信インフラ、顔認証などの技術",
    "revenue": {
      "text": "売上収益 3兆5,827億円／調整後営業利益 3,868億円（+34.7%）",
      "fy": "2026年3月期",
      "conf": "official",
      "src": "https://www2.jpx.co.jp/disc/67010/081220260424510884_tse-acedifsm-67010-20260428367010-ixbrl.htm"
    },
    "employees": {
      "text": "要確認",
      "conf": "unknown"
    },
    "avgSalary": {
      "value": 994,
      "age": "要確認",
      "fy": "2026年3月期・単体（前年比+6.1%）",
      "conf": "secondary",
      "src": "https://limo.media/articles/-/147281"
    },
    "startingSalary": {
      "text": "学部卒 月30.0万円／修士 月32.08万円（2026年4月実績・参考値。役割とスキルで個別に決定）",
      "conf": "official",
      "src": "https://jpn.nec.com/recruit/newgraduate/recruitinfo.html"
    },
    "overtime": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "paidLeave": {
      "text": "公開データなし（ファミリーフレンドリー休暇 年5日あり）",
      "conf": "unknown"
    },
    "maleParental": {
      "text": "50.6%（2024年度、平均78.9日）",
      "conf": "official",
      "src": "https://jpn.nec.com/corporateblog/202505/02.html"
    },
    "remote": {
      "text": "テレワーク制度あり（詳細は要確認）",
      "conf": "unknown"
    },
    "housing": {
      "text": "要確認",
      "conf": "unknown"
    },
    "sideJob": {
      "text": "要確認",
      "conf": "unknown"
    },
    "benefits": "ファミリーフレンドリー休暇（年5日、最大20日積立）",
    "culture": "（推測）技術と研究を重んじる堅実な社風。ジョブ型への転換を進めている",
    "payStructure": "ジョブ型：卒業区分による一律の給与を廃止。2026年春闘で賃上げ満額回答（約6.5%）",
    "strengths": "顔認証など研究開発力、官公庁・防衛・通信の大型案件",
    "newAreas": "BluStellar（DX事業、上期売上+19.8%）、AIへ数百億円投資、防衛",
    "risks": "官公庁・防衛の予算に左右される面、海外事業の収益性",
    "scores": {
      "wlb": 3,
      "flex": 3,
      "future": 4.5
    },
    "reasons": {
      "wlb": "男性育休50.6%は他社より低め、残業・有給は不明のため3",
      "flex": "テレワーク制度はあるが詳細不明のため3",
      "future": "調整後営業益+34.7%で最高益水準、来期予想も上方修正のため4.5"
    },
    "sources": [
      {
        "label": "決算短信 2026年3月期",
        "url": "https://www2.jpx.co.jp/disc/67010/081220260424510884_tse-acedifsm-67010-20260428367010-ixbrl.htm"
      },
      {
        "label": "公式：新卒募集要項",
        "url": "https://jpn.nec.com/recruit/newgraduate/recruitinfo.html"
      },
      {
        "label": "公式：男性育休の実績",
        "url": "https://jpn.nec.com/corporateblog/202505/02.html"
      },
      {
        "label": "平均年収（LIMO）",
        "url": "https://limo.media/articles/-/147281"
      }
    ],
    "metrics": {
      "maleParentalPct": 50.6
    },
    "salaryByEdu": {
      "note": "募集対象は大学（学部）・大学院・高専。専門学校は対象に含まれていない。2026年4月実績（参考値）",
      "src": "https://jpn.nec.com/recruit/newgraduate/recruitinfo.html",
      "conf": "official",
      "s2": {
        "status": "no"
      },
      "s4": {
        "status": "no"
      },
      "kosen": {
        "status": "ok",
        "v": 27.95
      },
      "univ": {
        "status": "ok",
        "v": 30
      },
      "grad": {
        "status": "ok",
        "v": 32.08
      }
    }
  },
  {
    "id": "tisi",
    "name": "TISI（旧TIS）",
    "type": "SIer",
    "region": "東京本社（全国）",
    "startingMonthly": 25,
    "oneLiner": "決済・金融に強い独立系SI",
    "business": "キャッシュレス決済・カード会社向けシステム、金融・産業向けSI。2026年7月にインテックと合併しTISIに",
    "revenue": {
      "text": "売上高 5,965億円（+4.3%）／営業利益 762億円（+10.4%）",
      "fy": "2026年3月期（TIS）",
      "conf": "official",
      "src": "https://www2.jpx.co.jp/disc/36260/081220260508519053_tse-acedjpsm-36260-20260508336260-ixbrl.htm"
    },
    "employees": {
      "text": "要確認",
      "conf": "unknown"
    },
    "avgSalary": {
      "value": 807,
      "age": "40.6歳",
      "fy": "2025年3月期・単体（最新期は要確認）",
      "conf": "secondary",
      "src": "https://talentsquare.co.jp/career/tis-salary/"
    },
    "startingSalary": {
      "text": "学士 月25.0万円／修士 月26.7万円（2025年4月。2026年以降は要確認）",
      "conf": "secondary",
      "src": "https://internshipguide.jp/companies/company/1631"
    },
    "overtime": {
      "text": "月12.0時間（2024年度）※グループ会社（TISソリューションリンク）の資料の可能性あり・要確認",
      "conf": "secondary",
      "src": "https://www.tsolweb.co.jp/pdf/attempt_health_251007.pdf"
    },
    "paidLeave": {
      "text": "58.7%（2024年度）※同上・要確認",
      "conf": "secondary",
      "src": "https://www.tsolweb.co.jp/pdf/attempt_health_251007.pdf"
    },
    "maleParental": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "remote": {
      "text": "テレワーク制度あり（詳細は要確認）",
      "conf": "unknown"
    },
    "housing": {
      "text": "要確認",
      "conf": "unknown"
    },
    "sideJob": {
      "text": "要確認",
      "conf": "unknown"
    },
    "benefits": "実際の残業時間に関係なく、毎月20時間分の残業手当相当額を支給（厚労省の事例より）",
    "culture": "（推測）穏やかで堅実。大手グループに属さない独立系",
    "payStructure": "（要確認）月20時間分の残業手当相当を一律支給",
    "strengths": "クレジットカード・決済システムで高いシェア",
    "newAreas": "インテックとの合併による地方・産業分野の拡大、決済プラットフォーム",
    "risks": "合併直後で組織や制度が変わる途中。年収は今回の10社で最も低め",
    "scores": {
      "wlb": 3.5,
      "flex": 3,
      "future": 3.5
    },
    "reasons": {
      "wlb": "残業月12時間と少ないが、有給58.7%はやや低めのため3.5",
      "flex": "テレワーク制度はあるが詳細不明のため3",
      "future": "増収増益で堅調だが、伸び率は緩やかなため3.5"
    },
    "sources": [
      {
        "label": "決算短信 2026年3月期",
        "url": "https://www2.jpx.co.jp/disc/36260/081220260508519053_tse-acedjpsm-36260-20260508336260-ixbrl.htm"
      },
      {
        "label": "健康経営資料（グループ会社の可能性）",
        "url": "https://www.tsolweb.co.jp/pdf/attempt_health_251007.pdf"
      },
      {
        "label": "TISIの発足（報道）",
        "url": "https://it.impress.co.jp/articles/-/28193"
      },
      {
        "label": "平均年収の解説",
        "url": "https://talentsquare.co.jp/career/tis-salary/"
      }
    ],
    "metrics": {},
    "salaryByEdu": {
      "note": "2025年4月の総合職。高専・専門卒は要確認",
      "src": "https://internshipguide.jp/companies/company/1631",
      "conf": "secondary",
      "s2": {
        "status": "unknown"
      },
      "s4": {
        "status": "unknown"
      },
      "kosen": {
        "status": "unknown"
      },
      "univ": {
        "status": "ok",
        "v": 25
      },
      "grad": {
        "status": "ok",
        "v": 26.7
      }
    }
  },
  {
    "id": "tads",
    "name": "つうけんアドバンスシステムズ",
    "type": "SIer",
    "region": "北海道（札幌）",
    "oneLiner": "コムシス系・札幌本社のSIer",
    "business": "ソフトウェア開発、ネットワーク・サーバ構築（SI/NI）、24時間365日の運用監視（MSP）、回線・機器の販売（リセール）、アウトソーシング。顧客はNTTグループ各社・自治体（札幌市ほか）・一般企業など",
    "revenue": {
      "text": "売上高 142億円（2025年度）。2024年度は132億円、2022年度に100億円を突破",
      "fy": "2025年度",
      "conf": "official",
      "src": "https://www.tads.co.jp/company/profile/index.html"
    },
    "employees": {
      "text": "443名（2026年4月）。平均年齢39.1歳・平均勤続14.6年",
      "conf": "official",
      "src": "https://www.tads.co.jp/company/profile/index.html"
    },
    "avgSalary": null,
    "startingSalary": {
      "text": "大学卒 月25.65万円／大学院修了 月26.25万円／高専・専門・短大卒 月25.05万円以上（2026年4月時点。入社後3年間の一律の育成手当1万円を含む）",
      "conf": "official",
      "src": "https://www.tads.co.jp/recruit/newgrads/recruitinfo/index.html"
    },
    "overtime": {
      "text": "月平均18.8時間（2025年度実績）",
      "conf": "official",
      "src": "https://www.tads.co.jp/recruit/recruitinfo/#career"
    },
    "paidLeave": {
      "text": "平均13.7日取得（2025年度実績）。年間休日124日（新卒向け案内）",
      "conf": "official",
      "src": "https://www.tads.co.jp/recruit/recruitinfo/#career"
    },
    "maleParental": {
      "text": "60.0%（2025年度：対象5名中3名が取得）。2024年度は33.3%",
      "conf": "secondary",
      "src": "https://job.mynavi.jp/28/pc/search/corp104391/outline.html"
    },
    "remote": {
      "text": "テレワークあり（中途求人で「在宅勤務率40%」「社員の7割がテレワーク」と記載。札幌での自社内開発が9割）",
      "conf": "secondary",
      "src": "https://tenshoku.mynavi.jp/jobinfo-153423-4-2-1/"
    },
    "housing": {
      "text": "住宅手当・社宅制度・住宅融資制度あり（公式）。口コミでは「札幌勤務は住宅補助なし、東京勤務はあり」との声も。金額は要確認",
      "conf": "official",
      "src": "https://www.tads.co.jp/recruit/recruitinfo/#career"
    },
    "sideJob": {
      "text": "公開された規定なし（要確認）",
      "conf": "unknown"
    },
    "benefits": "年間休日124日以上、GW・夏季・冬季特別休暇、リフレッシュ休暇、会員制福利厚生サービス、資格受験費用の会社負担と合格一時金、在宅勤務手当、東京勤務手当",
    "culture": "（口コミ）手を挙げれば挑戦させてもらえる、研修が充実、という声がある一方、「IT企業としては社風が古い」「年功序列的」という声も",
    "payStructure": "職能資格制度で年1回昇給（減給もあり）。賞与は年2回（6月・12月）。口コミでは夏3〜4.5カ月（評価・業績で変動）、冬2カ月",
    "strengths": "NTTグループや自治体との長い取引、ネットワークからソフト・運用監視までまとめて対応できる。親会社コムシスグループは過去最高益",
    "newAreas": "運用監視（MSP）、クラウドなどITインフラ。2025年7月からコムシス情報システムの子会社としてグループのIT事業を拡大",
    "risks": "親会社の方針に左右される。評価制度は年功的との口コミ。札幌勤務は住宅補助がない可能性。女性管理職4.2%と低め",
    "scores": {
      "wlb": 3.5,
      "flex": 4,
      "future": 4
    },
    "reasons": {
      "wlb": "残業 月18.8時間、有給 平均13.7日、年間休日124日のため3.5",
      "flex": "在宅勤務率40%〜テレワーク7割（求人）と、在宅勤務がよく使われているため4",
      "future": "売上が100億円（2022年度）→142億円（2025年度）と伸び、親会社コムシスHDも過去最高益のため4"
    },
    "sources": [
      {
        "label": "公式：会社概要",
        "url": "https://www.tads.co.jp/company/profile/index.html"
      },
      {
        "label": "公式：新卒 募集要項",
        "url": "https://www.tads.co.jp/recruit/newgrads/recruitinfo/index.html"
      },
      {
        "label": "公式：採用情報（実績）",
        "url": "https://www.tads.co.jp/recruit/recruitinfo/#career"
      },
      {
        "label": "マイナビ2028",
        "url": "https://job.mynavi.jp/28/pc/search/corp104391/outline.html"
      },
      {
        "label": "OpenWork",
        "url": "https://www.openwork.jp/company.php?m_id=a0C1000000V5JsZ"
      }
    ],
    "startingMonthly": 25.65,
    "metrics": {
      "overtimeH": 18.8,
      "leaveDays": 13.7,
      "maleParentalPct": 60
    },
    "salaryByEdu": {
      "note": "2026年4月時点（公式）。入社後3年間の育成手当1万円を含む。専門4年卒の区分は記載なし",
      "src": "https://www.tads.co.jp/recruit/newgrads/recruitinfo/index.html",
      "conf": "official",
      "s2": {
        "status": "ok",
        "v": 25.05,
        "note": "高専・専門・短大卒（以上）。古い掲載では専門3年卒は月25.35万円"
      },
      "s4": {
        "status": "unknown"
      },
      "kosen": {
        "status": "ok",
        "v": 25.05,
        "note": "高専・専門・短大卒（以上）"
      },
      "univ": {
        "status": "ok",
        "v": 25.65,
        "conf": "official"
      },
      "grad": {
        "status": "ok",
        "v": 26.25
      }
    },
    "deepDive": "tads.html"
  },
  {
    "id": "hba",
    "name": "HBA",
    "type": "SIer",
    "region": "北海道（札幌）",
    "oneLiner": "道内最大級の独立系SIer",
    "business": "自治体・医療・金融・企業向けのシステム開発と運用、ITインフラ",
    "revenue": {
      "text": "売上高 263億円（2025年3月期）※報道では2025年度 278億円",
      "fy": "2025年3月期",
      "conf": "secondary",
      "src": "https://job.mynavi.jp/27/pc/search/corp4685/outline.html"
    },
    "employees": {
      "text": "843名（2026年4月）。平均年齢42.9歳・平均勤続19年",
      "conf": "official",
      "src": "https://www.hba.co.jp/recruit/data/"
    },
    "avgSalary": null,
    "startingMonthly": 23.7,
    "startingSalary": {
      "text": "大学・専門4年制卒 月23.7万円／大学院卒 月24.4万円／専門3年制卒 月22.34万円／専門2年制・高専・短大卒 月21.71万円（北海道勤務、2027年卒向け）。東京・大阪・山梨勤務は＋6万円",
      "conf": "official",
      "src": "https://www.hba.co.jp/recruit/requirements/"
    },
    "overtime": {
      "text": "月平均19時間（2025年度実績）",
      "conf": "official",
      "src": "https://www.hba.co.jp/recruit/data/"
    },
    "paidLeave": {
      "text": "平均17.4日取得（2025年度実績）",
      "conf": "official",
      "src": "https://www.hba.co.jp/recruit/data/"
    },
    "maleParental": {
      "text": "男性76.9%・女性100%（2025年度。前年度は男性30.0%）",
      "conf": "secondary",
      "src": "https://job.mynavi.jp/27/pc/search/corp4685/outline.html"
    },
    "remote": {
      "text": "要確認（中途求人では「客先常駐なし」）",
      "conf": "unknown",
      "src": "https://doda.jp/DodaFront/View/CompanyJobs/j_id__00011842581/"
    },
    "housing": {
      "text": "要確認",
      "conf": "unknown"
    },
    "sideJob": {
      "text": "要確認",
      "conf": "unknown"
    },
    "benefits": "要確認",
    "culture": "（推測）平均勤続19年と長く、腰を据えて働く人が多い。地元密着で落ち着いた社風",
    "payStructure": "勤務地で初任給が変わる（道外勤務は調整手当あり）",
    "strengths": "道内の自治体・病院・金融機関との長い取引、社員800名超の規模",
    "newAreas": "要確認（DX支援、クラウドなど）",
    "risks": "道内の公共・金融案件への依存。初任給は東京の大手より低め",
    "scores": {
      "wlb": 4,
      "flex": 3,
      "future": 3.5
    },
    "reasons": {
      "wlb": "残業 月19時間、有給 平均17.4日、男性育休76.9%、平均勤続19年のため4",
      "flex": "リモートの情報がないため3。客先常駐がない点はプラス",
      "future": "売上263億→278億円と伸び、社員も増加中のため3.5"
    },
    "sources": [
      {
        "label": "公式：数字で見るHBA",
        "url": "https://www.hba.co.jp/recruit/data/"
      },
      {
        "label": "マイナビ2028 会社概要",
        "url": "https://job.mynavi.jp/28/pc/search/corp4685/outline.html"
      },
      {
        "label": "マイナビニュース",
        "url": "https://news.mynavi.jp/article/20261026-5135042/"
      },
      {
        "label": "doda 求人",
        "url": "https://doda.jp/DodaFront/View/CompanyJobs/j_id__00011842581/"
      }
    ],
    "metrics": {
      "overtimeH": 19,
      "leaveDays": 17.4,
      "maleParentalPct": 76.9
    },
    "salaryByEdu": {
      "note": "北海道勤務の2027年卒向け（公式）。東京・大阪・山梨勤務は調整手当6万円が上乗せ。専門3年制卒は月22.34万円",
      "src": "https://www.hba.co.jp/recruit/requirements/",
      "conf": "official",
      "s2": {
        "status": "ok",
        "v": 21.71,
        "note": "専門2年制。3年制は月22.34万円"
      },
      "s4": {
        "status": "ok",
        "v": 23.7
      },
      "kosen": {
        "status": "ok",
        "v": 21.71
      },
      "univ": {
        "status": "ok",
        "v": 23.7
      },
      "grad": {
        "status": "ok",
        "v": 24.4
      }
    }
  },
  {
    "id": "nttdata-hokkaido",
    "name": "NTTデータ北海道",
    "type": "SIer",
    "region": "北海道（札幌）",
    "oneLiner": "NTTデータの道内拠点会社",
    "business": "北海道の自治体・金融・企業向けのシステム開発と運用（NTTデータグループ）",
    "revenue": {
      "text": "売上高 113.9億円（2026年3月期）",
      "fy": "2026年3月期",
      "conf": "secondary",
      "src": "https://job.mynavi.jp/28/pc/search/corp51667/outline.html"
    },
    "employees": {
      "text": "316名（2026年4月）。平均勤続13.4年",
      "conf": "secondary",
      "src": "https://job.mynavi.jp/28/pc/search/corp51667/outline.html"
    },
    "avgSalary": null,
    "startingSalary": {
      "text": "大学卒 月25.93万円／大学院卒 月26.79万円／高専卒 月24.64万円（2026年4月実績）",
      "conf": "secondary",
      "src": "https://job.mynavi.jp/27/pc/search/corp51667/employment.html"
    },
    "overtime": {
      "text": "月平均25.6時間（2025年10月時点の公表値。前年度は26.2時間）",
      "conf": "secondary",
      "src": "https://www.j-career.jp/2027/recruitment/a2300761252/"
    },
    "paidLeave": {
      "text": "平均21.5日取得（2024年度、夏季休暇5日を含む）。年間休日123日（求人）",
      "conf": "secondary",
      "src": "https://job.mynavi.jp/27/pc/corpinfo/displayPrevEmployment/index?corpId=51667&recruitingCourseId=26001737"
    },
    "maleParental": {
      "text": "男性66.7%・女性100%（2024年度）",
      "conf": "secondary",
      "src": "https://job.mynavi.jp/27/pc/corpinfo/displayPrevEmployment/index?corpId=51667&recruitingCourseId=26001737"
    },
    "remote": {
      "text": "テレワーク制度あり（利用頻度は要確認）",
      "conf": "secondary",
      "src": "https://en-ambi.com/job/j-16015298/"
    },
    "housing": {
      "text": "要確認",
      "conf": "unknown"
    },
    "sideJob": {
      "text": "要確認",
      "conf": "unknown"
    },
    "benefits": "年間休日123日（求人より）",
    "culture": "（推測）NTTグループらしい堅実さ。札幌で道内の大型案件に関われる",
    "payStructure": "要確認（NTTグループの制度に近いと推測）",
    "strengths": "NTTデータグループの技術・ブランド、道内の公共・金融システムの実績",
    "newAreas": "要確認（自治体DXなど）",
    "risks": "親会社の方針に左右される。給与は親会社と同じとは限らない",
    "scores": {
      "wlb": 3.5,
      "flex": 3.5,
      "future": 4
    },
    "reasons": {
      "wlb": "有給 平均21.5日・男性育休66.7%と良いが、残業 月25.6時間はやや多いため3.5",
      "flex": "テレワーク制度ありのため3.5",
      "future": "NTTデータグループで安定、社員も増加（299→316名）のため4"
    },
    "sources": [
      {
        "label": "マイナビ 前年度採用データ",
        "url": "https://job.mynavi.jp/27/pc/corpinfo/displayPrevEmployment/index?corpId=51667&recruitingCourseId=26001737"
      },
      {
        "label": "ジョブキャリア 採用情報",
        "url": "https://www.j-career.jp/2027/recruitment/a2300761252/"
      },
      {
        "label": "マイナビ2028 会社概要",
        "url": "https://job.mynavi.jp/28/pc/search/corp51667/outline.html"
      },
      {
        "label": "エン転職 求人（公共）",
        "url": "https://en-ambi.com/job/j-15841426/"
      },
      {
        "label": "エン転職 求人（金融）",
        "url": "https://en-ambi.com/job/j-16015298/"
      }
    ],
    "startingMonthly": 25.932,
    "metrics": {
      "overtimeH": 25.6,
      "leaveDays": 21.5,
      "maleParentalPct": 66.7,
      "leaveNote": "夏季休暇5日を含む"
    },
    "salaryByEdu": {
      "note": "2026年4月実績。専門学校卒の金額は記載なし（2025年は短大卒＝高専卒と同額）",
      "src": "https://job.mynavi.jp/27/pc/search/corp51667/employment.html",
      "conf": "secondary",
      "s2": {
        "status": "unknown"
      },
      "s4": {
        "status": "unknown"
      },
      "kosen": {
        "status": "ok",
        "v": 24.642
      },
      "univ": {
        "status": "ok",
        "v": 25.932
      },
      "grad": {
        "status": "ok",
        "v": 26.792
      }
    }
  },
  {
    "id": "tis-hokkaido",
    "name": "TIS北海道",
    "type": "SIer",
    "region": "北海道（札幌）",
    "oneLiner": "転勤なしで働けるTISI系",
    "business": "TISIグループの道内開発会社。システム開発・運用",
    "revenue": {
      "text": "要確認",
      "fy": "",
      "conf": "unknown"
    },
    "employees": {
      "text": "77名（2026年4月）",
      "conf": "secondary",
      "src": "https://tenshoku.mynavi.jp/jobinfo-332443-4-22-1/"
    },
    "avgSalary": null,
    "startingSalary": {
      "text": "大学卒 月20.5万〜21.0万円／大学院卒 月21.3万円／短大・専門・高専卒 月19.7万円（2024年4月実績）",
      "conf": "secondary",
      "src": "https://job.mynavi.jp/27/pc/corpinfo/displayPrevEmployment/index?corpId=79463&recruitingCourseId=26000115"
    },
    "overtime": {
      "text": "月10〜12時間程度（求人より）",
      "conf": "secondary",
      "src": "https://tenshoku.mynavi.jp/jobinfo-332443-4-17-1/"
    },
    "paidLeave": {
      "text": "求人に「有休消化率70%超」。付与は3年目まで年14日・以降20日。年間休日121〜125日",
      "conf": "secondary",
      "src": "https://tenshoku.mynavi.jp/jobinfo-332443-4-6-1/"
    },
    "maleParental": {
      "text": "率は非公開（産休・育休の取得実績あり）",
      "conf": "secondary",
      "src": "https://tenshoku.mynavi.jp/jobinfo-332443-4-6-1/"
    },
    "remote": {
      "text": "リモートワーク可（プロジェクトによってはフルリモート）",
      "conf": "secondary",
      "src": "https://tenshoku.mynavi.jp/jobinfo-332443-4-17-1/"
    },
    "housing": {
      "text": "要確認",
      "conf": "unknown"
    },
    "sideJob": {
      "text": "要確認",
      "conf": "unknown"
    },
    "benefits": "転勤なし（札幌勤務）、新人研修 約3カ月半",
    "culture": "（推測）少人数で落ち着いた環境。口コミは件数が少なく古い",
    "payStructure": "要確認",
    "strengths": "TISIグループ（決済・金融システムに強い）の案件と技術",
    "newAreas": "要確認",
    "risks": "77名と小規模。親会社の合併（TISI発足）の影響を受ける可能性",
    "scores": {
      "wlb": 4,
      "flex": 3.5,
      "future": 3.5
    },
    "reasons": {
      "wlb": "残業月12時間、年間休日125日、時間単位の有給があるため4",
      "flex": "案件によってフルリモート可のため3.5",
      "future": "TISIグループで安定しているが、小規模のため3.5"
    },
    "sources": [
      {
        "label": "マイナビ転職 求人",
        "url": "https://tenshoku.mynavi.jp/jobinfo-332443-4-22-1/"
      },
      {
        "label": "マイナビ2028 会社概要",
        "url": "https://job.mynavi.jp/28/pc/search/corp79463/outline.html"
      },
      {
        "label": "マイナビ転職 求人（リモート・休暇）",
        "url": "https://tenshoku.mynavi.jp/jobinfo-332443-4-6-1/"
      }
    ],
    "metrics": {
      "overtimeH": 11,
      "overtimeNote": "求人の「10〜12時間」の中間"
    },
    "salaryByEdu": {
      "note": "2024年4月実績（掲載によって大学卒は20.5万〜21.0万円と差あり）。募集対象に専門学校生・高専生を含む",
      "src": "https://job.mynavi.jp/27/pc/corpinfo/displayPrevEmployment/index?corpId=79463&recruitingCourseId=26000115",
      "conf": "secondary",
      "s2": {
        "status": "ok",
        "v": 19.7
      },
      "s4": {
        "status": "unknown"
      },
      "kosen": {
        "status": "ok",
        "v": 19.7
      },
      "univ": {
        "status": "ok",
        "v": 20.5
      },
      "grad": {
        "status": "ok",
        "v": 21.3
      }
    },
    "startingMonthly": 20.5
  },
  {
    "id": "hotnet",
    "name": "北海道総合通信網（HOTnet）",
    "type": "SIer",
    "region": "北海道（札幌）",
    "oneLiner": "北電系の通信・データセンター",
    "business": "法人向け通信回線、データセンター、ITソリューション（北海道電力グループ）",
    "revenue": {
      "text": "売上高 166.4億円（2025年3月期）",
      "fy": "2025年3月期",
      "conf": "secondary",
      "src": "https://job.mynavi.jp/28/pc/search/corp84367/outline.html"
    },
    "employees": {
      "text": "282名（2026年4月）。平均勤続16.8年",
      "conf": "secondary",
      "src": "https://job.mynavi.jp/28/pc/search/corp84367/outline.html"
    },
    "avgSalary": null,
    "startingSalary": {
      "text": "大学卒 月25.0万円／大学院卒 月27.0万円／高専本科卒 月22.56万円／短大・専門卒 月21.76万円（2027年3月卒向け、固定残業代なし）",
      "conf": "official",
      "src": "https://www.hotnet.co.jp/recruit/job/new-graduate/"
    },
    "overtime": {
      "text": "月平均19.5時間（2024年度）",
      "conf": "secondary",
      "src": "https://job.mynavi.jp/27/pc/corpinfo/displayPrevEmployment/index?corpId=84367&recruitingCourseId=26027530"
    },
    "paidLeave": {
      "text": "初年度から20日付与。取得率は口コミ集計で56.6%",
      "conf": "secondary",
      "src": "https://www.openwork.jp/company.php?m_id=a0C1000000sj0Sl"
    },
    "maleParental": {
      "text": "率は非公開（産休・育休の取得実績あり）",
      "conf": "secondary",
      "src": "https://job.mynavi.jp/27/pc/corpinfo/displayPrevEmployment/index?corpId=84367&recruitingCourseId=26027530"
    },
    "remote": {
      "text": "週2日まで在宅勤務可（中途求人より）",
      "conf": "secondary",
      "src": "https://doda.jp/DodaFront/View/JobSearchDetail/j_jid__3014048058/"
    },
    "housing": {
      "text": "家族手当・住宅手当あり（中途求人で「充実」。金額は要確認）",
      "conf": "secondary",
      "src": "https://doda.jp/DodaFront/View/JobSearchDetail/j_jid__3014048058/"
    },
    "sideJob": {
      "text": "要確認",
      "conf": "unknown"
    },
    "benefits": "賞与 年2回（約4.7カ月分、求人より）",
    "culture": "（推測）電力グループらしい安定志向。平均年齢44.3歳とベテランが多い",
    "payStructure": "賞与 約4.7カ月分（求人より）",
    "strengths": "北海道電力グループの通信網とデータセンター。インフラなので景気に左右されにくい",
    "newAreas": "要確認（データセンター需要の拡大など）",
    "risks": "道内市場が中心。若手が少なめ（平均年齢44.3歳）",
    "scores": {
      "wlb": 3.5,
      "flex": 3.5,
      "future": 3.5
    },
    "reasons": {
      "wlb": "残業 月19.5時間、平均勤続16.8年と長く安定。有給の取得率は口コミで56.6%のため3.5",
      "flex": "週2日まで在宅勤務可（求人）のため3.5",
      "future": "電力グループのインフラ事業で安定、社員も増加（271→282名）のため3.5"
    },
    "sources": [
      {
        "label": "マイナビ 前年度採用データ",
        "url": "https://job.mynavi.jp/27/pc/corpinfo/displayPrevEmployment/index?corpId=84367&recruitingCourseId=26027530"
      },
      {
        "label": "マイナビ2028 会社概要",
        "url": "https://job.mynavi.jp/28/pc/search/corp84367/outline.html"
      },
      {
        "label": "doda 求人",
        "url": "https://doda.jp/DodaFront/View/CompanyJobs/j_id__10000113886/"
      },
      {
        "label": "doda 求人（在宅・住宅手当）",
        "url": "https://doda.jp/DodaFront/View/JobSearchDetail/j_jid__3014048058/"
      },
      {
        "label": "OpenWork",
        "url": "https://www.openwork.jp/company.php?m_id=a0C1000000sj0Sl"
      }
    ],
    "startingMonthly": 25,
    "metrics": {
      "overtimeH": 19.5
    },
    "salaryByEdu": {
      "note": "2027年3月卒向け（公式、固定残業代なし）。応募資格欄は大学・大学院・高専のみ記載のため、専門卒は応募前に確認を",
      "src": "https://www.hotnet.co.jp/recruit/job/new-graduate/",
      "conf": "official",
      "s2": {
        "status": "ok",
        "v": 21.76,
        "note": "短大・専門卒。応募可否は要確認"
      },
      "s4": {
        "status": "unknown"
      },
      "kosen": {
        "status": "ok",
        "v": 22.56,
        "note": "高専本科卒。専攻科卒は月25.0万円"
      },
      "univ": {
        "status": "ok",
        "v": 25
      },
      "grad": {
        "status": "ok",
        "v": 27
      }
    }
  },
  {
    "id": "jigsaw",
    "name": "JIG-SAW",
    "type": "Web系",
    "region": "北海道（札幌）",
    "oneLiner": "クラウド自動監視の上場企業",
    "business": "サーバー・クラウドの自動運用監視サービス、IoTの仕組み（東証グロース上場、札幌本社）",
    "revenue": {
      "text": "売上高 36.3億円（+4.4%）",
      "fy": "2025年12月期",
      "conf": "secondary",
      "src": "https://finboard.jp/companies/JP:3914/workforce"
    },
    "employees": {
      "text": "単体 161名（2025年12月）",
      "conf": "secondary",
      "src": "https://finboard.jp/companies/JP:3914/workforce"
    },
    "avgSalary": {
      "value": 668,
      "age": "要確認",
      "fy": "2024年12月期・単体（別の集計では2025年12月期 698万円）",
      "conf": "secondary",
      "src": "https://finboard.jp/companies/JP:3914/workforce"
    },
    "startingSalary": {
      "text": "新卒は公開データなし（参考：札幌配属の求人で月33万円。固定残業40時間分・深夜手当を含む）",
      "conf": "unknown",
      "src": "https://paiza.jp/job_offers/32914"
    },
    "overtime": {
      "text": "月平均23.9時間（前年度、会社公表の雇用管理データ）",
      "conf": "secondary",
      "src": "https://paiza.jp/job_offers/40960"
    },
    "paidLeave": {
      "text": "平均10.1日取得（前年度）",
      "conf": "secondary",
      "src": "https://paiza.jp/job_offers/40960"
    },
    "maleParental": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "remote": {
      "text": "テレワーク制度あり（中途の札幌求人より）",
      "conf": "secondary",
      "src": "https://mynavi-agent.jp/corpdetail/3998"
    },
    "housing": {
      "text": "要確認",
      "conf": "unknown"
    },
    "sideJob": {
      "text": "要確認",
      "conf": "unknown"
    },
    "benefits": "要確認",
    "culture": "（推測）少人数の技術者集団。自社サービスを持つ",
    "payStructure": "固定残業代（月40時間分）込みの給与が多い（求人より）",
    "strengths": "自社の自動監視サービスで、毎月の利用料が積み上がる仕組み",
    "newAreas": "IoT分野",
    "risks": "小規模で、成長は緩やか（+4.4%）",
    "scores": {
      "wlb": 2.5,
      "flex": 3.5,
      "future": 3
    },
    "reasons": {
      "wlb": "残業 月23.9時間、有給 平均10.1日とやや少なめ、固定残業40時間込みの求人があるため2.5",
      "flex": "テレワーク制度あり（求人）のため3.5",
      "future": "増収だが伸びは+4.4%と緩やかなため3"
    },
    "sources": [
      {
        "label": "従業員・平均年収（有報ベース）",
        "url": "https://finboard.jp/companies/JP:3914/workforce"
      },
      {
        "label": "平均年収の推移",
        "url": "https://the-shashi.com/tse/3914/workforce/"
      },
      {
        "label": "paiza 求人（雇用管理データ）",
        "url": "https://paiza.jp/job_offers/40960"
      },
      {
        "label": "マイナビエージェント 企業ページ",
        "url": "https://mynavi-agent.jp/corpdetail/3998"
      }
    ],
    "metrics": {
      "overtimeH": 23.9,
      "leaveDays": 10.1
    },
    "salaryByEdu": {
      "note": "学歴別の初任給は公開データなし",
      "src": null,
      "conf": "unknown",
      "s2": {
        "status": "unknown"
      },
      "s4": {
        "status": "unknown"
      },
      "kosen": {
        "status": "unknown"
      },
      "univ": {
        "status": "unknown"
      },
      "grad": {
        "status": "unknown"
      }
    }
  },
  {
    "id": "ecomott",
    "name": "エコモット",
    "type": "Web系",
    "region": "北海道（札幌）",
    "oneLiner": "IoTで現場を見守る上場企業",
    "business": "IoTを使った遠隔監視サービス（建設現場など）。東証グロース上場、札幌本社",
    "revenue": {
      "text": "売上高 30.0億円／経常利益 0.53億円／最終損益 0.35億円の赤字",
      "fy": "2025年8月期",
      "conf": "official",
      "src": "https://www2.jpx.co.jp/disc/39870/081220251014572564_tse-acedjpsm-39870-20251014339870-ixbrl.htm"
    },
    "employees": {
      "text": "要確認",
      "conf": "unknown"
    },
    "avgSalary": {
      "value": 496,
      "age": "38.4歳",
      "fy": "年度不明（第三者サイト）",
      "conf": "secondary",
      "src": "https://www.nikkei.com/nkd/company/salary/?scode=3987"
    },
    "startingSalary": {
      "text": "想定月収 20.8万円（基本給16.8万円＋固定残業10時間分）",
      "conf": "official",
      "src": "https://www.ecomott.co.jp/recruit/requirements/"
    },
    "overtime": {
      "text": "平均 月10時間",
      "conf": "official",
      "src": "https://www.ecomott.co.jp/recruit/requirements/"
    },
    "paidLeave": {
      "text": "平均11.4日取得（求人票）。入社半年で10日付与",
      "conf": "secondary",
      "src": "https://doda.jp/DodaFront/View/CompanyJobs/j_id__10102272056/"
    },
    "maleParental": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "remote": {
      "text": "要確認",
      "conf": "unknown"
    },
    "housing": {
      "text": "要確認",
      "conf": "unknown"
    },
    "sideJob": {
      "text": "要確認",
      "conf": "unknown"
    },
    "benefits": "福利厚生は公式採用ページに掲載",
    "culture": "（推測）札幌発のベンチャー気質。ハードとソフトの両方に関われる",
    "payStructure": "要確認",
    "strengths": "建設現場向けIoT監視の実績、北海道発の上場企業",
    "newAreas": "要確認（IoT・AIの活用拡大）",
    "risks": "最終損益が赤字。平均年収は東京の大手より大幅に低い",
    "scores": {
      "wlb": 3.5,
      "flex": 3,
      "future": 2.5
    },
    "reasons": {
      "wlb": "残業 月10時間と少なめ。有給は平均11.4日（求人票）のため3.5",
      "flex": "リモートの情報がないため中間の3（データ不足）",
      "future": "経常黒字だが最終赤字のため2.5"
    },
    "sources": [
      {
        "label": "公式：募集要項",
        "url": "https://www.ecomott.co.jp/recruit/requirements/"
      },
      {
        "label": "公式：福利厚生",
        "url": "https://www.ecomott.co.jp/recruit/benefits/"
      },
      {
        "label": "決算短信 2025年8月期",
        "url": "https://www2.jpx.co.jp/disc/39870/081220251014572564_tse-acedjpsm-39870-20251014339870-ixbrl.htm"
      },
      {
        "label": "有価証券報告書（EDINET）",
        "url": "https://disclosure2dl.edinet-fsa.go.jp/searchdocument/pdf/S100X72V.pdf"
      },
      {
        "label": "就活会議（平均年収）",
        "url": "https://syukatsu-kaigi.jp/companies/65232"
      },
      {
        "label": "日経：平均年収",
        "url": "https://www.nikkei.com/nkd/company/salary/?scode=3987"
      }
    ],
    "startingMonthly": 20.8,
    "metrics": {
      "overtimeH": 10,
      "leaveDays": 11.4,
      "startingNote": "固定残業代（10時間分）込み"
    },
    "salaryByEdu": {
      "note": "想定月収20.8万円（固定残業10時間分込み）。学歴別の区分は見当たらない（2018年度は全学歴同額）",
      "src": "https://www.ecomott.co.jp/recruit/requirements/",
      "conf": "secondary",
      "s2": {
        "status": "ok",
        "v": 20.8
      },
      "s4": {
        "status": "ok",
        "v": 20.8
      },
      "kosen": {
        "status": "ok",
        "v": 20.8
      },
      "univ": {
        "status": "ok",
        "v": 20.8
      },
      "grad": {
        "status": "ok",
        "v": 20.8
      }
    }
  },
  {
    "id": "infiniteloop",
    "name": "インフィニットループ",
    "type": "Web系",
    "region": "北海道（札幌）",
    "oneLiner": "ゲーム・VRの技術者集団",
    "business": "スマホゲームなどの開発・運営、VR・AR開発（札幌本社）",
    "revenue": {
      "text": "売上高 14.8億円（2025年5月期）",
      "fy": "2025年5月期",
      "conf": "secondary",
      "src": "https://www.hokkaido-np.co.jp/article/1275924/"
    },
    "employees": {
      "text": "175名（2026年1月、パート・アルバイト含む）",
      "conf": "secondary",
      "src": "https://www.hokkaido-np.co.jp/article/1275924/"
    },
    "avgSalary": null,
    "startingSalary": {
      "text": "学士・高専専攻科卒 月25.06万円／修士・博士 月25.58万円（2025年6月実績、一律手当込み）",
      "conf": "secondary",
      "src": "https://job.mynavi.jp/27/pc/search/corp265436/recruiting_course27010943/recruiting_course.html?site_preference=pc"
    },
    "overtime": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "paidLeave": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "maleParental": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "remote": {
      "text": "要確認",
      "conf": "unknown"
    },
    "housing": {
      "text": "要確認",
      "conf": "unknown"
    },
    "sideJob": {
      "text": "要確認",
      "conf": "unknown"
    },
    "benefits": "新卒採用は毎年8〜12名程度。札幌・仙台に拠点",
    "culture": "（推測）技術好きのエンジニアが多い。「最先端の最後尾を独走」がキャッチフレーズ",
    "payStructure": "賞与は年2回、おおよそ基本給の2カ月分×2回（業績・評価による）",
    "strengths": "ゲーム開発とVR・ARの技術力、札幌で東京の案件に関われる",
    "newAreas": "VR・AR",
    "risks": "受託開発が中心だと取引先の状況に左右されやすい（要確認）",
    "scores": {
      "wlb": 3,
      "flex": 3,
      "future": 3.5
    },
    "reasons": {
      "wlb": "残業・有給のデータが見つからないため中間の3（データ不足）",
      "flex": "リモートの情報がないため中間の3（データ不足）",
      "future": "道新の「注目企業」に選ばれ、VR・ARなど成長分野のため3.5"
    },
    "sources": [
      {
        "label": "公式：採用FAQ（賞与・採用人数）",
        "url": "https://www.infiniteloop.co.jp/recruitment/faq/"
      },
      {
        "label": "マイナビ 採用データ",
        "url": "https://job.mynavi.jp/27/pc/search/corp265436/recruiting_course27010943/recruiting_course.html?site_preference=pc"
      },
      {
        "label": "北海道新聞 注目企業",
        "url": "https://www.hokkaido-np.co.jp/article/1275924/"
      },
      {
        "label": "paiza 企業ページ",
        "url": "https://paiza.jp/recruiters/5818"
      },
      {
        "label": "リクルートダイレクトスカウト 求人",
        "url": "https://directscout.recruit.co.jp/job_descriptions/2790500"
      }
    ],
    "startingMonthly": 25.06,
    "metrics": {
      "startingNote": "固定残業代（25時間分）込み"
    },
    "salaryByEdu": {
      "note": "2025年6月実績。いずれも固定残業代（月25時間分）込み",
      "src": "https://job.mynavi.jp/27/pc/search/corp265436/recruiting_course27010943/recruiting_course.html?site_preference=pc",
      "conf": "secondary",
      "s2": {
        "status": "ok",
        "v": 24.02,
        "note": "専門・高専本科卒"
      },
      "s4": {
        "status": "ok",
        "v": 24.02,
        "note": "専門・高専本科卒の区分"
      },
      "kosen": {
        "status": "ok",
        "v": 24.02
      },
      "univ": {
        "status": "ok",
        "v": 25.06
      },
      "grad": {
        "status": "ok",
        "v": 25.58
      }
    }
  },
  {
    "id": "crypton",
    "name": "クリプトン・フューチャー・メディア",
    "type": "Web系",
    "region": "北海道（札幌）",
    "oneLiner": "初音ミクを生んだ札幌企業",
    "business": "音声合成ソフト「初音ミク」、音素材配信「SONICWIRE」、投稿サイト「piapro」、キャラクターのライセンス",
    "revenue": {
      "text": "公開データなし（要確認）",
      "fy": "",
      "conf": "unknown"
    },
    "employees": {
      "text": "164名。平均年齢35歳・平均勤続7.6年",
      "conf": "official",
      "src": "https://wakamono-koyou-sokushin.mhlw.go.jp/search/service/portalkigyodetail.action?action=showDetail&kigyo_id=28245"
    },
    "avgSalary": null,
    "startingSalary": {
      "text": "大卒 月23.8万円／大学院了 月24.8万円（固定残業代なし。掲載年度は要確認）",
      "conf": "secondary",
      "src": "https://job.mynavi.jp/27/pc/search/corp223940/recruiting_course27014037/recruiting_course.html?site_preference=pc"
    },
    "overtime": {
      "text": "月平均9.8時間",
      "conf": "official",
      "src": "https://wakamono-koyou-sokushin.mhlw.go.jp/search/service/portalkigyodetail.action?action=showDetail&kigyo_id=28245"
    },
    "paidLeave": {
      "text": "平均11.7日取得・取得率66.1%",
      "conf": "official",
      "src": "https://wakamono-koyou-sokushin.mhlw.go.jp/search/service/portalkigyodetail.action?action=showDetail&kigyo_id=28245"
    },
    "maleParental": {
      "text": "男性 対象1人中1人が取得（女性は4人中3人）",
      "conf": "official",
      "src": "https://wakamono-koyou-sokushin.mhlw.go.jp/search/service/portalkigyodetail.action?action=showDetail&kigyo_id=28245"
    },
    "remote": {
      "text": "要確認",
      "conf": "unknown"
    },
    "housing": {
      "text": "要確認",
      "conf": "unknown"
    },
    "sideJob": {
      "text": "要確認",
      "conf": "unknown"
    },
    "benefits": "要確認",
    "culture": "（推測）音楽・クリエイター文化が強い。自社サービスの開発・運用ができる",
    "payStructure": "要確認",
    "strengths": "世界的に知られるキャラクター「初音ミク」と、自社のWebサービス",
    "newAreas": "要確認",
    "risks": "非上場で公開データがほとんどない。新卒エンジニアの募集があるかは年により異なる可能性",
    "scores": {
      "wlb": 4,
      "flex": 3,
      "future": 3.5
    },
    "reasons": {
      "wlb": "残業 月9.8時間と少なく、有給取得率66.1%、男性の育休取得ありのため4",
      "flex": "リモートの情報がないため中間の3（データ不足）",
      "future": "強いキャラクターIPと自社サービスを持つが、業績データがないため3.5"
    },
    "sources": [
      {
        "label": "厚労省 若者雇用促進総合サイト",
        "url": "https://wakamono-koyou-sokushin.mhlw.go.jp/search/service/portalkigyodetail.action?action=showDetail&kigyo_id=28245"
      },
      {
        "label": "マイナビ 採用データ",
        "url": "https://job.mynavi.jp/27/pc/search/corp223940/recruiting_course27014037/recruiting_course.html?site_preference=pc"
      },
      {
        "label": "マイナビ2028 会社概要",
        "url": "https://job.mynavi.jp/28/pc/search/corp223940/outline.html"
      },
      {
        "label": "Green 企業ページ",
        "url": "https://www.green-japan.com/company/8341"
      },
      {
        "label": "OpenWork",
        "url": "https://www.openwork.jp/company.php?m_id=a0910000000G12B"
      }
    ],
    "startingMonthly": 23.8,
    "metrics": {
      "overtimeH": 9.8,
      "leaveDays": 11.7,
      "leaveRate": 66.1
    },
    "salaryByEdu": {
      "note": "固定残業代なし。掲載年度は要確認。専門4年制の区分は記載なし",
      "src": "https://job.mynavi.jp/27/pc/search/corp223940/recruiting_course27014037/recruiting_course.html?site_preference=pc",
      "conf": "secondary",
      "s2": {
        "status": "ok",
        "v": 22.3,
        "note": "短大・専門卒"
      },
      "s4": {
        "status": "unknown"
      },
      "kosen": {
        "status": "ok",
        "v": 22.3
      },
      "univ": {
        "status": "ok",
        "v": 23.8
      },
      "grad": {
        "status": "ok",
        "v": 24.8
      }
    }
  },
  {
    "id": "awl",
    "name": "AWL",
    "type": "Web系",
    "region": "北海道（札幌・東京）",
    "oneLiner": "北大発のAIスタートアップ",
    "business": "店舗向けのAIカメラ・画像解析（リテールAI）など。東京と札幌の二本社制、ベトナム・インドにも拠点",
    "revenue": {
      "text": "公開データなし（資金調達：シリーズB後の評価額 約112億円、2024年4月時点）",
      "fy": "",
      "conf": "secondary",
      "src": "https://initial.inc/companies/A-28173"
    },
    "employees": {
      "text": "グローバル連結 72名（2025年4月）",
      "conf": "secondary",
      "src": "https://www.jetro.go.jp/hrportal/company/detail/100131.html"
    },
    "avgSalary": null,
    "startingSalary": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "overtime": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "paidLeave": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "maleParental": {
      "text": "公開データなし（要確認）",
      "conf": "unknown"
    },
    "remote": {
      "text": "要確認",
      "conf": "unknown"
    },
    "housing": {
      "text": "要確認",
      "conf": "unknown"
    },
    "sideJob": {
      "text": "要確認",
      "conf": "unknown"
    },
    "benefits": "新卒は1年間のOJTで経験を積む",
    "culture": "（推測）エンジニアの9割が外国籍で、英語を使う国際的な環境",
    "payStructure": "要確認",
    "strengths": "AI画像解析の技術、北海道大学との関係、海外の開発拠点",
    "newAreas": "リテールAI（小売店のAI活用）",
    "risks": "スタートアップのため業績・資金状況で環境が大きく変わる可能性",
    "scores": {
      "wlb": 3,
      "flex": 3,
      "future": 3.5
    },
    "reasons": {
      "wlb": "残業・有給のデータが見つからないため中間の3（データ不足）",
      "flex": "リモートの情報がないため中間の3（データ不足）",
      "future": "AIという成長分野で大型の資金調達をしたが、スタートアップの不確実さがあるため3.5"
    },
    "sources": [
      {
        "label": "JETRO 企業情報",
        "url": "https://www.jetro.go.jp/hrportal/company/detail/100131.html"
      },
      {
        "label": "INITIAL（資金調達）",
        "url": "https://initial.inc/companies/A-28173"
      },
      {
        "label": "北大向け会社紹介（PDF）",
        "url": "https://awl.co.jp/wp-content/uploads/2022/10/Hokkaido-Univ-Career-Handbook-2023-AWL.pdf"
      }
    ],
    "metrics": {},
    "salaryByEdu": {
      "note": "学歴別の初任給は公開データなし",
      "src": null,
      "conf": "unknown",
      "s2": {
        "status": "unknown"
      },
      "s4": {
        "status": "unknown"
      },
      "kosen": {
        "status": "unknown"
      },
      "univ": {
        "status": "unknown"
      },
      "grad": {
        "status": "unknown"
      }
    }
  }
];
