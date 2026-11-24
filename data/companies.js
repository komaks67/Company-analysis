// =====================================================================
// 企業データ（このファイルだけ編集すれば企業の追加・修正ができます）
// ---------------------------------------------------------------------
// conf（情報の確かさ）:
//   "official" = 会社の公式資料・有価証券報告書で確認
//   "secondary" = 有価証券報告書などを引用した第三者サイト・報道で確認（原本は要確認）
//   "unknown"  = 公開データが見つからない（要確認）
// scores（1〜5）: pay は平均年収から自動計算。wlb / flex / future は
//   集めた事実をもとにした「目安の評価」で、reasons に根拠を書く。
// =====================================================================
window.DATA_UPDATED = "2026-11-24";

window.COMPANIES = [
  {
    id: "lycorp",
    name: "LINEヤフー",
    type: "Web系",
    oneLiner: "LINEとYahoo!の巨大生活基盤",
    business: "LINE・Yahoo! JAPAN・PayPay連携・EC（ZOZO、アスクル等）・広告",
    revenue: { text: "売上収益 2兆363億円（+6.2%）／営業利益 3,413億円（+8.3%）", fy: "2026年3月期", conf: "official", src: "https://www2.jpx.co.jp/disc/46890/081220260507518938_tse-acedifsm-46890-20260508346890-ixbrl.htm" },
    employees: { text: "単体 10,577名／連結 29,863名", conf: "secondary" },
    avgSalary: { value: 902, age: "39.0歳", fy: "2026年3月期・単体", conf: "secondary", src: "https://the-shashi.com/tse/4689/workforce/" },
    startingSalary: { text: "新卒エンジニアの金額は公開データなし（参考：2027年度 第二新卒枠で月43.4万円〜・標準年収651万円〜）", conf: "unknown", src: "https://www.lycorp.co.jp/ja/recruit/additional-27/" },
    overtime: { text: "公開データなし（要確認）", conf: "unknown" },
    paidLeave: { text: "公開データなし（要確認）", conf: "unknown" },
    maleParental: { text: "公開データなし（要確認）", conf: "unknown" },
    remote: { text: "原則 週3日以上出社＋リモートの組み合わせ（2025年4月から出社日を設定）", conf: "official", src: "https://www.lycorp.co.jp/ja/recruit/workplace/environment/" },
    housing: { text: "住宅手当の情報なし（要確認）。働く環境の支援金「Working Style手当」月1.1万円", conf: "official", src: "https://www.lycorp.co.jp/ja/recruit/newgrads/engineer/jd0001/" },
    sideJob: { text: "要確認", conf: "unknown" },
    benefits: "育休は入社1年未満でも取得可・最長2歳まで延長可",
    culture: "（推測）大企業らしい制度の整い方と、IT企業らしい技術志向が混ざる。旧LINE・旧ヤフーの統合後で文化が変化中",
    payStructure: "（要確認）グレード制。2025年度以降AI人材の採用強化を表明",
    strengths: "LINE（国内約1億人規模）とYahoo! JAPANの利用者基盤、PayPayとの連携、広告・EC・決済をまとめて持つ",
    newAreas: "AIエージェント「Agent i」などAI領域、EC・決済の連携強化",
    risks: "2025年10月のアスクルのランサムウェア被害の影響、過去の情報漏えい問題による行政指導への対応",
    scores: { wlb: 3, flex: 3, future: 4 },
    reasons: {
      wlb: "残業・有給の公開データが見つからないため中間の3（データ不足）",
      flex: "週3日以上出社が原則。フルリモートではないため3",
      future: "増収増益（売上+6.2%、営業益+8.3%）で安定成長のため4"
    },
    sources: [
      { label: "決算短信 2026年3月期", url: "https://www2.jpx.co.jp/disc/46890/081220260507518938_tse-acedifsm-46890-20260508346890-ixbrl.htm" },
      { label: "平均年収の推移（有報ベース）", url: "https://the-shashi.com/tse/4689/workforce/" },
      { label: "公式：働く環境", url: "https://www.lycorp.co.jp/ja/recruit/workplace/environment/" },
      { label: "公式：福利厚生", url: "https://www.lycorp.co.jp/ja/recruit/workplace/benefits/" }
    ]
  },
  {
    id: "rakuten",
    name: "楽天グループ",
    type: "Web系",
    oneLiner: "EC・金融・携帯の経済圏",
    business: "楽天市場などEC、楽天カード・銀行・証券などフィンテック、楽天モバイル",
    revenue: { text: "売上収益 2兆4,966億円（+9.5%）／Non-GAAP営業利益 1,063億円／最終損益 1,778億円の赤字", fy: "2025年12月期", conf: "secondary", src: "https://www.watch.impress.co.jp/docs/news/2085426.html" },
    employees: { text: "要確認", conf: "unknown" },
    avgSalary: { value: 851, age: "要確認", fy: "2025年12月期・単体", conf: "secondary", src: "https://the-shashi.com/tse/4755/workforce/" },
    startingSalary: { text: "公開データなし（要確認）", conf: "unknown" },
    overtime: { text: "グループ全体は公開データなし（参考：子会社の楽天カードは月11時間）", conf: "unknown", src: "https://www.rakuten-card.co.jp/corporate/career/graduates/workstyle/" },
    paidLeave: { text: "82.4%（年13.3日、2024年度）", conf: "secondary", src: "https://talentsquare.co.jp/career/rakuten-salary/" },
    maleParental: { text: "69.1%（2024年度）", conf: "secondary", src: "https://talentsquare.co.jp/career/rakuten-salary/" },
    remote: { text: "出社が中心と言われる（公式な出社ルールは要確認）", conf: "unknown" },
    housing: { text: "要確認", conf: "unknown" },
    sideJob: { text: "要確認", conf: "unknown" },
    benefits: "昇給見直しは年2回（1月・7月）、賞与は6月・12月（ビジネス職の募集要項より）",
    culture: "（推測）社内公用語が英語。スピードと目標達成を重視するトップダウン型と言われる",
    payStructure: "評価と会社実績で年2回見直し（ビジネス職の募集要項より）",
    strengths: "楽天ポイントを軸にした経済圏、EC売上1兆3,697億円、カード・銀行などの金融事業",
    newAreas: "楽天モバイル（2025年に通期EBITDA黒字化、契約1,001万回線）、AI活用",
    risks: "モバイルへの巨額投資による赤字・借入の多さ、国内ECの伸び悩みの指摘",
    scores: { wlb: 4, flex: 2.5, future: 3 },
    reasons: {
      wlb: "有給取得率82.4%、男性育休69.1%と数字が出ており高めのため4",
      flex: "出社中心と言われており（要確認）2.5",
      future: "売上は29期連続で過去最高だが、最終損益は赤字のため3"
    },
    sources: [
      { label: "2025年12月期決算の報道", url: "https://www.watch.impress.co.jp/docs/news/2085426.html" },
      { label: "平均年収の推移（有報ベース）", url: "https://the-shashi.com/tse/4755/workforce/" },
      { label: "有給・育休の集計", url: "https://talentsquare.co.jp/career/rakuten-salary/" },
      { label: "公式：ウェルネス", url: "https://corp.rakuten.co.jp/sustainability/wellness/" }
    ]
  },
  {
    id: "mercari",
    name: "メルカリ",
    type: "Web系",
    oneLiner: "フリマ発の自由な働き方",
    business: "フリマアプリ「メルカリ」、決済「メルペイ」、スキマバイト「メルカリ ハロ」、米国事業",
    revenue: { text: "売上収益 2,293億円（+19.0%）／営業利益 439億円（+57.7%）過去最高", fy: "2026年6月期", conf: "official", src: "https://www2.jpx.co.jp/disc/43850/081220260804508114_tse-acedifsm-43850-20260805343850-ixbrl.htm" },
    employees: { text: "単体 1,543名／連結 2,159名（2025年6月時点）", conf: "secondary" },
    avgSalary: { value: 1233, age: "36.3歳（前期）", fy: "2026年6月期", conf: "secondary", src: "https://tleon.co.jp/media/mercari-salary/" },
    startingSalary: { text: "公開データなし（グレード制で個別に決まる）", conf: "unknown" },
    overtime: { text: "公開データなし（要確認）", conf: "unknown" },
    paidLeave: { text: "公開データなし（要確認）", conf: "unknown" },
    maleParental: { text: "公開データなし（要確認）", conf: "unknown" },
    remote: { text: "「YOUR CHOICE」：出社かフルリモートかを個人が選べ、国内なら住む場所も自由。コアタイムなしのフルフレックス", conf: "official", src: "https://careers.mercari.com/your-choice" },
    housing: { text: "要確認", conf: "unknown" },
    sideJob: { text: "要確認", conf: "unknown" },
    benefits: "週休3日なども可能（一部職種を除く）",
    culture: "（推測）成果主義・ボトムアップ。外国籍の社員が多く英語を使う場面もある",
    payStructure: "職種ごとのグレード（等級）で年収レンジが決まる。平均勤続年数は3.8年と短め",
    strengths: "国内最大級のフリマアプリ、AI活用で効率化が進み4期連続で最高益",
    newAreas: "メルカリ ハロ、フィンテック、AI（社内のAI利用率100%）",
    risks: "米国事業の採算、勤続年数が短く人の入れ替わりが多い可能性",
    scores: { wlb: 3, flex: 5, future: 5 },
    reasons: {
      wlb: "残業・有給の公開データが見つからないため中間の3（データ不足）",
      flex: "出社・フルリモートを自分で選べ、フルフレックスのため5",
      future: "売上+19%、営業益+57.7%で過去最高のため5"
    },
    sources: [
      { label: "決算短信 2026年6月期", url: "https://www2.jpx.co.jp/disc/43850/081220260804508114_tse-acedifsm-43850-20260805343850-ixbrl.htm" },
      { label: "公式：YOUR CHOICE", url: "https://careers.mercari.com/your-choice" },
      { label: "平均年収の解説", url: "https://tleon.co.jp/media/mercari-salary/" },
      { label: "平均年収 2025年6月期（LIMO）", url: "https://limo.media/articles/-/7522" }
    ]
  },
  {
    id: "cyberagent",
    name: "サイバーエージェント",
    type: "Web系",
    oneLiner: "若手抜擢のメディア・ゲーム",
    business: "インターネット広告、ゲーム（Cygames等）、ABEMAなどメディア&IP",
    revenue: { text: "売上高 8,740億円（+9.1%、28期連続増収）／営業利益 717億円（+78.9%）", fy: "2025年9月期", conf: "secondary", src: "https://gamebiz.jp/news/416048" },
    employees: { text: "要確認", conf: "unknown" },
    avgSalary: { value: 914, age: "33.8歳", fy: "2025年9月期", conf: "secondary", src: "https://talentsquare.co.jp/career/cyber-agent-salary/" },
    startingSalary: { text: "月42万円〜（年俸504万円〜）。※固定残業代を含む（月給制職種は時間外80時間分）", conf: "official", src: "https://www.cyberagent.co.jp/careers/special/students/tech_potential/" },
    overtime: { text: "全社平均は公開データなし（参考：ある求人票で月31時間）", conf: "unknown", src: "https://doda.jp/DodaFront/View/JobSearchDetail/j_jid__3015707590/" },
    paidLeave: { text: "公開データなし（入社3年目以上は毎年5日連続の「休んでファイブ」）", conf: "unknown" },
    maleParental: { text: "公開データなし（要確認）", conf: "unknown" },
    remote: { text: "出社中心（参考：ある求人票で週2日リモート可）", conf: "secondary", src: "https://doda.jp/DodaFront/View/JobSearchDetail/j_jid__3015707590/" },
    housing: { text: "「2駅ルール」：オフィス最寄駅から2駅圏内なら月3万円、勤続5年以上はどこでも月5万円", conf: "official", src: "https://www.cyberagent.co.jp/sustainability/info/detail/id=26074" },
    sideJob: { text: "要確認", conf: "unknown" },
    benefits: "家賃補助、リフレッシュ休暇「休んでファイブ」",
    culture: "（推測）若手に大きな仕事を任せる文化。チーム意識が強く、熱量高めと言われる",
    payStructure: "新卒は年俸制で固定残業代込み。成果で昇給の差が出やすいと言われる（要確認）",
    strengths: "ネット広告の大手、ゲームのヒット作（学園アイドルマスター等）、ABEMAが10年ぶり黒字化",
    newAreas: "生成AIを使った広告制作、ABEMAの収益化",
    risks: "ゲーム事業はヒット作次第で利益が大きく変わる（2026年9月期の営業益予想は500〜600億円に減少）",
    scores: { wlb: 2.5, flex: 2.5, future: 3.5 },
    reasons: {
      wlb: "固定残業80時間分込みの給与設計、求人例で月31時間残業のため2.5",
      flex: "出社中心で、リモートは部署による（求人例で週2日）ため2.5",
      future: "28期連続増収・大幅増益だが、来期は減益予想のため3.5"
    },
    sources: [
      { label: "2025年9月期決算の報道", url: "https://gamebiz.jp/news/416048" },
      { label: "公式：新卒エンジニア採用", url: "https://www.cyberagent.co.jp/careers/special/students/tech_potential/" },
      { label: "公式：家賃補助（2駅ルール）", url: "https://www.cyberagent.co.jp/sustainability/info/detail/id=26074" },
      { label: "平均年収の解説", url: "https://talentsquare.co.jp/career/cyber-agent-salary/" }
    ]
  },
  {
    id: "dena",
    name: "DeNA",
    type: "Web系",
    oneLiner: "ゲーム・スポーツ・AIに挑戦",
    business: "ゲーム（ポケポケ等）、ライブストリーミング（Pococha）、スポーツ（横浜DeNAベイスターズ）、ヘルスケア",
    revenue: { text: "売上収益 1,477億円（-9.9%）／営業利益 187億円（-35.5%）", fy: "2026年3月期", conf: "secondary", src: "https://gamebiz.jp/news/425748" },
    employees: { text: "要確認", conf: "unknown" },
    avgSalary: { value: 1118, age: "38.6歳", fy: "2026年3月期・単体（前年比+26.6%）", conf: "secondary", src: "https://gurafu.net/jpn/dena" },
    startingSalary: { text: "年俸600万円〜（AIジェネラリスト）／700万円〜（AIスペシャリスト）※2027年度以降入社", conf: "secondary", src: "https://gamebiz.jp/news/422255" },
    overtime: { text: "公開データなし（要確認）", conf: "unknown" },
    paidLeave: { text: "公開データなし（要確認）", conf: "unknown" },
    maleParental: { text: "公開データなし（要確認）", conf: "unknown" },
    remote: { text: "ハイブリッドワーク・コアタイムなしのスーパーフレックス。出社率は2割程度", conf: "official", src: "https://csr.dena.com/pdf/2024activities.pdf" },
    housing: { text: "住宅手当は要確認。遠方居住勤務OK（交通費 月15万円まで実費）", conf: "official", src: "https://csr.dena.com/pdf/2024activities.pdf" },
    sideJob: { text: "可（事前申請・承認など条件あり）", conf: "official", src: "https://csr.dena.com/intl/employees/" },
    benefits: "ベビーケア休暇、積立休暇、健康経営優良法人ホワイト500に10年連続認定",
    culture: "（推測）「こと（課題）に向かう」を重視する議論好きな文化。若手にも任せる",
    payStructure: "職種別の年俸制。2027年度から新卒の基準年俸を引き上げ",
    strengths: "ゲーム開発・運営力、プロ野球などスポーツ事業、ライブ配信の黒字化",
    newAreas: "AI（全社でAI活用を進める「AIオールイン」方針）、ヘルスケア",
    risks: "ポケポケのヒット後の反動で減収減益。ゲームの当たり外れに業績が左右されやすい",
    scores: { wlb: 3.5, flex: 4.5, future: 2.5 },
    reasons: {
      wlb: "数値は不明だがホワイト500に10年連続認定のため3.5",
      flex: "出社率2割・スーパーフレックス・遠方居住OKのため4.5",
      future: "2026年3月期は減収減益（営業益-35.5%）のため2.5"
    },
    sources: [
      { label: "2026年3月期決算の報道", url: "https://gamebiz.jp/news/425748" },
      { label: "新卒採用方針の刷新（年俸）", url: "https://gamebiz.jp/news/422255" },
      { label: "公式：CSR活動報告（働き方）", url: "https://csr.dena.com/pdf/2024activities.pdf" },
      { label: "平均年収", url: "https://gurafu.net/jpn/dena" }
    ]
  },
  {
    id: "nttdata",
    name: "NTTデータ",
    type: "SIer",
    oneLiner: "国内最大手の官公庁・金融SI",
    business: "官公庁・金融・法人向けのシステム開発（SI）、海外事業、データセンター",
    revenue: { text: "売上高 5兆46億円（+7.9%）／営業利益 4,882億円（+50.7%）過去最高", fy: "2026年3月期（グループ連結）", conf: "secondary", src: "https://news.mynavi.jp/techplus/article/20260206-4086458/" },
    employees: { text: "要確認（グループ全体で約20万人規模）", conf: "unknown" },
    avgSalary: { value: 923, age: "39.7歳", fy: "2025年3月期・持株会社単体（1,592名）", conf: "secondary", src: "https://sincereed-agent.com/?p=8289" },
    startingSalary: { text: "学士 月30.0万円／修士 月31.2万円（2026年4月）。NTTグループは住宅補助込みで月34万円以上と公表", conf: "secondary", src: "https://plus.onecareer.jp/articles/1592" },
    overtime: { text: "公開データなし（要確認）", conf: "unknown" },
    paidLeave: { text: "公開データなし（要確認）", conf: "unknown" },
    maleParental: { text: "103.1%（2025年度、平均104.4日）", conf: "official", src: "https://www.nttdata.com/global/ja/news/topics/2026/091700" },
    remote: { text: "リモートワーク制度あり（頻度は部署による・要確認）", conf: "unknown" },
    housing: { text: "住宅補助あり（NTTグループの公表で、月給＋住宅補助で月34万円以上）", conf: "secondary", src: "https://plus.onecareer.jp/articles/1592" },
    sideJob: { text: "要確認", conf: "unknown" },
    benefits: "男性の育休取得を強く推進",
    culture: "（推測）堅実でチームワーク重視。大規模案件が多く、調整力が求められる",
    payStructure: "グレード制（新卒もグレードで初任給が異なる）",
    strengths: "官公庁・金融の大型システムで国内トップ級の実績。海外売上も大きい",
    newAreas: "生成AI、データセンター、海外事業の統合",
    risks: "2025年9月にNTTの完全子会社となり上場廃止 → 以後、有価証券報告書が出ないため年収などの公開データが減る",
    scores: { wlb: 3.5, flex: 3, future: 4 },
    reasons: {
      wlb: "男性育休103%と高いが、残業・有給のデータが不明のため3.5",
      flex: "リモート制度はあるが詳細不明のため3",
      future: "売上・利益とも過去最高。NTTグループの後ろ盾があり4"
    },
    sources: [
      { label: "2026年3月期決算の報道", url: "https://news.mynavi.jp/techplus/article/20260206-4086458/" },
      { label: "公式：男性育休の取り組み", url: "https://www.nttdata.com/global/ja/news/topics/2026/091700" },
      { label: "初任給（就活メディア）", url: "https://plus.onecareer.jp/articles/1592" },
      { label: "上場廃止（JPX）", url: "https://www.jpx.co.jp/news/1023/20250829-12.html" }
    ]
  },
  {
    id: "nri",
    name: "野村総合研究所",
    type: "SIer",
    oneLiner: "コンサル×ITの高年収企業",
    business: "コンサルティング、金融向けITソリューション（証券・保険の共同システム等）、産業向けIT",
    revenue: { text: "売上収益 8,147億円（+6.5%）／営業利益 583億円（-56.8%、海外の減損損失）", fy: "2026年3月期", conf: "official", src: "https://www2.jpx.co.jp/disc/43070/081220260423509100_tse-acedifsm-43070-20260424343070-ixbrl.htm" },
    employees: { text: "要確認", conf: "unknown" },
    avgSalary: { value: 1421, age: "45.0歳", fy: "2026年3月期・単体（別の集計では1,333万円）", conf: "secondary", src: "https://the-shashi.com/tse/4307/workforce/" },
    startingSalary: { text: "大卒 月29.65万円／修士 月30.65万円（住宅手当2万円込み、2026年度予定）", conf: "secondary", src: "https://internshipguide.jp/companies/company/1197/controlelr:Companies" },
    overtime: { text: "月5.1時間（2025年度）※裁量労働でない若手社員のみ対象の数字", conf: "official", src: "https://www.nri.com/jp/sustainability/social/health_and_productivity_mgmt" },
    paidLeave: { text: "73.4%（2025年度）", conf: "official", src: "https://www.nri.com/jp/sustainability/social/health_and_productivity_mgmt" },
    maleParental: { text: "公開データなし（プラチナくるみん認定あり）", conf: "unknown" },
    remote: { text: "要確認", conf: "unknown" },
    housing: { text: "住宅手当 月2万円（全員一律）", conf: "secondary", src: "https://internshipguide.jp/companies/company/1197/controlelr:Companies" },
    sideJob: { text: "要確認", conf: "unknown" },
    benefits: "プラチナくるみん（子育てサポート企業の上位認定）",
    culture: "（推測）優秀な人が多く、自分で考えて動くプロ意識の高い文化。多くの社員が裁量労働制",
    payStructure: "（推測）賞与の比重が大きく、成果・昇格で年収が大きく伸びる",
    strengths: "証券会社向け共同システムなど金融ITで高いシェア。コンサルとITの両方を持つ",
    newAreas: "海外事業（豪州・北米）、生成AI、DX支援",
    risks: "海外買収事業で減損（営業益-56.8%）。会社は来期の大幅回復（営業益1,750億円）を予想",
    scores: { wlb: 4, flex: 3, future: 3.5 },
    reasons: {
      wlb: "有給73.4%、若手の残業月5.1時間（裁量労働の社員は対象外）のため4",
      flex: "リモートの公開情報が見つからないため中間の3（データ不足）",
      future: "本業は増収だが、海外の減損で大幅減益のため3.5"
    },
    sources: [
      { label: "決算短信 2026年3月期", url: "https://www2.jpx.co.jp/disc/43070/081220260423509100_tse-acedifsm-43070-20260424343070-ixbrl.htm" },
      { label: "公式：健康経営（残業・有給）", url: "https://www.nri.com/jp/sustainability/social/health_and_productivity_mgmt" },
      { label: "初任給（就活メディア）", url: "https://internshipguide.jp/companies/company/1197/controlelr:Companies" },
      { label: "平均年収の推移", url: "https://the-shashi.com/tse/4307/workforce/" }
    ]
  },
  {
    id: "fujitsu",
    name: "富士通",
    type: "SIer",
    oneLiner: "ジョブ型に変わる老舗IT",
    business: "システム開発・ITサービス、「Fujitsu Uvance」（社会課題を解くDX事業）、ハードウェア",
    revenue: { text: "売上収益 2兆3,469億円（+4.5%）／調整後営業利益 3,614億円（+24.7%）", fy: "2026年3月期", conf: "secondary", src: "https://cloud.watch.impress.co.jp/docs/news/2129408.html" },
    employees: { text: "要確認", conf: "unknown" },
    avgSalary: { value: 1012, age: "要確認", fy: "2026年3月期・単体", conf: "secondary", src: "https://the-shashi.com/tse/6702/workforce/" },
    startingSalary: { text: "学歴別の初任給を廃止。月31.5万円〜（担う仕事の大きさで個別に決定）", conf: "secondary", src: "https://job.career-tasu.jp/corp/00213137/employment/" },
    overtime: { text: "公開データなし（要確認）", conf: "unknown" },
    paidLeave: { text: "公開データなし（要確認）", conf: "unknown" },
    maleParental: { text: "94.1%（2025年度）", conf: "official", src: "https://global.fujitsu/-/media/Project/Fujitsu/Fujitsu-HQ/sustainability/2026/social-2026-jp.pdf" },
    remote: { text: "「Work Life Shift」：時間と場所にとらわれない働き方。テレワークとオフィスのハイブリッド", conf: "official", src: "https://telework.mhlw.go.jp/wp/wp-content/uploads/2022/09/tw-fujitsu.pdf" },
    housing: { text: "要確認", conf: "unknown" },
    sideJob: { text: "要確認", conf: "unknown" },
    benefits: "新卒向けに長期・有償インターンを新設",
    culture: "（推測）伝統的な大企業から、ジョブ型・自律型へ変わる途中",
    payStructure: "ジョブ型人事制度：仕事の役割の大きさで給与が決まる（2026年度新卒から適用）",
    strengths: "国内大手のITサービス力、官公庁・企業の顧客基盤",
    newAreas: "Fujitsu Uvance（売上7,093億円、+47%）、AI、量子コンピュータ",
    risks: "英国の郵便局システム問題などの対応、ハード事業の縮小・再編",
    scores: { wlb: 3.5, flex: 4, future: 4.5 },
    reasons: {
      wlb: "男性育休94.1%と高いが、残業・有給は不明のため3.5",
      flex: "Work Life Shiftで在宅勤務を全社的に進めてきたため4",
      future: "調整後営業益+24.7%、Uvanceが+47%と成長が速いため4.5"
    },
    sources: [
      { label: "2026年3月期決算の報道", url: "https://cloud.watch.impress.co.jp/docs/news/2129408.html" },
      { label: "公式：社会関連データ2026", url: "https://global.fujitsu/-/media/Project/Fujitsu/Fujitsu-HQ/sustainability/2026/social-2026-jp.pdf" },
      { label: "ジョブ型の新卒採用", url: "https://www.rodo.co.jp/news/179334/" },
      { label: "厚労省：テレワーク事例", url: "https://telework.mhlw.go.jp/wp/wp-content/uploads/2022/09/tw-fujitsu.pdf" }
    ]
  },
  {
    id: "nec",
    name: "NEC",
    type: "SIer",
    oneLiner: "官公庁・防衛にも強い老舗",
    business: "ITサービス（BluStellar）、官公庁・防衛、通信インフラ、顔認証などの技術",
    revenue: { text: "売上収益 3兆5,827億円／調整後営業利益 3,868億円（+34.7%）", fy: "2026年3月期", conf: "official", src: "https://www2.jpx.co.jp/disc/67010/081220260424510884_tse-acedifsm-67010-20260428367010-ixbrl.htm" },
    employees: { text: "要確認", conf: "unknown" },
    avgSalary: { value: 994, age: "要確認", fy: "2026年3月期・単体（前年比+6.1%）", conf: "secondary", src: "https://limo.media/articles/-/147281" },
    startingSalary: { text: "学部卒 月30.0万円／修士 月32.08万円（2026年4月実績・参考値。役割とスキルで個別に決定）", conf: "official", src: "https://jpn.nec.com/recruit/newgraduate/recruitinfo.html" },
    overtime: { text: "公開データなし（要確認）", conf: "unknown" },
    paidLeave: { text: "公開データなし（ファミリーフレンドリー休暇 年5日あり）", conf: "unknown" },
    maleParental: { text: "50.6%（2024年度、平均78.9日）", conf: "official", src: "https://jpn.nec.com/corporateblog/202505/02.html" },
    remote: { text: "テレワーク制度あり（詳細は要確認）", conf: "unknown" },
    housing: { text: "要確認", conf: "unknown" },
    sideJob: { text: "要確認", conf: "unknown" },
    benefits: "ファミリーフレンドリー休暇（年5日、最大20日積立）",
    culture: "（推測）技術と研究を重んじる堅実な社風。ジョブ型への転換を進めている",
    payStructure: "ジョブ型：卒業区分による一律の給与を廃止。2026年春闘で賃上げ満額回答（約6.5%）",
    strengths: "顔認証など研究開発力、官公庁・防衛・通信の大型案件",
    newAreas: "BluStellar（DX事業、上期売上+19.8%）、AIへ数百億円投資、防衛",
    risks: "官公庁・防衛の予算に左右される面、海外事業の収益性",
    scores: { wlb: 3, flex: 3, future: 4.5 },
    reasons: {
      wlb: "男性育休50.6%は他社より低め、残業・有給は不明のため3",
      flex: "テレワーク制度はあるが詳細不明のため3",
      future: "調整後営業益+34.7%で最高益水準、来期予想も上方修正のため4.5"
    },
    sources: [
      { label: "決算短信 2026年3月期", url: "https://www2.jpx.co.jp/disc/67010/081220260424510884_tse-acedifsm-67010-20260428367010-ixbrl.htm" },
      { label: "公式：新卒募集要項", url: "https://jpn.nec.com/recruit/newgraduate/recruitinfo.html" },
      { label: "公式：男性育休の実績", url: "https://jpn.nec.com/corporateblog/202505/02.html" },
      { label: "平均年収（LIMO）", url: "https://limo.media/articles/-/147281" }
    ]
  },
  {
    id: "tisi",
    name: "TISI（旧TIS）",
    type: "SIer",
    oneLiner: "決済・金融に強い独立系SI",
    business: "キャッシュレス決済・カード会社向けシステム、金融・産業向けSI。2026年7月にインテックと合併しTISIに",
    revenue: { text: "売上高 5,965億円（+4.3%）／営業利益 762億円（+10.4%）", fy: "2026年3月期（TIS）", conf: "official", src: "https://www2.jpx.co.jp/disc/36260/081220260508519053_tse-acedjpsm-36260-20260508336260-ixbrl.htm" },
    employees: { text: "要確認", conf: "unknown" },
    avgSalary: { value: 807, age: "40.6歳", fy: "2025年3月期・単体（最新期は要確認）", conf: "secondary", src: "https://talentsquare.co.jp/career/tis-salary/" },
    startingSalary: { text: "学士 月25.0万円／修士 月26.7万円（2025年4月。2026年以降は要確認）", conf: "secondary", src: "https://internshipguide.jp/companies/company/1631" },
    overtime: { text: "月12.0時間（2024年度）※グループ会社（TISソリューションリンク）の資料の可能性あり・要確認", conf: "secondary", src: "https://www.tsolweb.co.jp/pdf/attempt_health_251007.pdf" },
    paidLeave: { text: "58.7%（2024年度）※同上・要確認", conf: "secondary", src: "https://www.tsolweb.co.jp/pdf/attempt_health_251007.pdf" },
    maleParental: { text: "公開データなし（要確認）", conf: "unknown" },
    remote: { text: "テレワーク制度あり（詳細は要確認）", conf: "unknown" },
    housing: { text: "要確認", conf: "unknown" },
    sideJob: { text: "要確認", conf: "unknown" },
    benefits: "実際の残業時間に関係なく、毎月20時間分の残業手当相当額を支給（厚労省の事例より）",
    culture: "（推測）穏やかで堅実。大手グループに属さない独立系",
    payStructure: "（要確認）月20時間分の残業手当相当を一律支給",
    strengths: "クレジットカード・決済システムで高いシェア",
    newAreas: "インテックとの合併による地方・産業分野の拡大、決済プラットフォーム",
    risks: "合併直後で組織や制度が変わる途中。年収は今回の10社で最も低め",
    scores: { wlb: 3.5, flex: 3, future: 3.5 },
    reasons: {
      wlb: "残業月12時間と少ないが、有給58.7%はやや低めのため3.5",
      flex: "テレワーク制度はあるが詳細不明のため3",
      future: "増収増益で堅調だが、伸び率は緩やかなため3.5"
    },
    sources: [
      { label: "決算短信 2026年3月期", url: "https://www2.jpx.co.jp/disc/36260/081220260508519053_tse-acedjpsm-36260-20260508336260-ixbrl.htm" },
      { label: "健康経営資料（グループ会社の可能性）", url: "https://www.tsolweb.co.jp/pdf/attempt_health_251007.pdf" },
      { label: "TISIの発足（報道）", url: "https://it.impress.co.jp/articles/-/28193" },
      { label: "平均年収の解説", url: "https://talentsquare.co.jp/career/tis-salary/" }
    ]
  }
];
