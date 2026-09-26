const fs = require('fs');
const path = require('path');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 580" width="100%" height="100%">
  <defs>
    <style>
      .bg { fill: #fbf8f3; }
      .border { stroke: #2c2825; stroke-width: 3; fill: none; }
      .inner-border { stroke: #b86b14; stroke-width: 1; fill: none; }
      .header-title { font-family: 'Georgia', 'Times New Roman', serif; font-size: 24px; font-weight: bold; fill: #1a1614; text-anchor: middle; }
      .header-sub { font-family: 'Georgia', 'Times New Roman', serif; font-size: 14px; font-style: italic; fill: #b86b14; text-anchor: middle; }
      .card-bg { fill: #f2ebd9; stroke: #d8cbb5; stroke-width: 1.5; rx: 6px; }
      .badge-bg { fill: #b86b14; rx: 4px; }
      .badge-text { font-family: -apple-system, sans-serif; font-size: 12px; font-weight: bold; fill: #ffffff; text-anchor: middle; }
      .card-title { font-family: 'Georgia', serif; font-size: 16px; font-weight: bold; fill: #1a1614; }
      .card-desc { font-family: -apple-system, sans-serif; font-size: 12.5px; fill: #3a3532; line-height: 1.4; }
      .connector { stroke: #b86b14; stroke-width: 2; stroke-dasharray: 4; }
      .icon-text { font-size: 28px; text-anchor: middle; }
    </style>
  </defs>

  <!-- Background Canvas -->
  <rect width="1000" height="580" class="bg" />
  
  <!-- Decorative Frame -->
  <rect x="15" y="15" width="970" height="550" class="border" />
  <rect x="22" y="22" width="956" height="536" class="inner-border" />

  <!-- Header Banner -->
  <text x="500" y="55" class="header-title">ХРОНОЛОГИЯ НА БИРАТА</text>
  <text x="500" y="78" class="header-sub">КРАТКА ИСТОРИЯ НА ЕДНА НАПИТКА ПРЕЗ ВЕКОВЕТЕ</text>
  <line x1="200" y1="90" x2="800" y2="90" stroke="#b86b14" stroke-width="1.5" />

  <!-- Row 1: Cards 1, 2, 3 -->
  
  <!-- Card 1: Ancient Mesopotamia -->
  <g transform="translate(40, 115)">
    <rect width="280" height="180" class="card-bg" />
    <rect x="15" y="15" width="130" height="24" class="badge-bg" />
    <text x="80" y="31" class="badge-text">~3000 г. пр.н.е.</text>
    <text x="235" y="38" class="icon-text">🏺</text>
    <text x="15" y="65" class="card-title">Древна Месопотамия</text>
    <text x="15" y="90" class="card-desc">Химнът за Нинкаси:</text>
    <text x="15" y="110" class="card-desc">Първи писмени доказателства</text>
    <text x="15" y="130" class="card-desc">за производство на хляб</text>
    <text x="15" y="150" class="card-desc">и първична бира.</text>
  </g>

  <!-- Card 2: Ancient Egypt -->
  <g transform="translate(360, 115)">
    <rect width="280" height="180" class="card-bg" />
    <rect x="15" y="15" width="130" height="24" class="badge-bg" />
    <text x="80" y="31" class="badge-text">~2500 г. пр.н.е.</text>
    <text x="235" y="38" class="icon-text">📐</text>
    <text x="15" y="65" class="card-title">Древен Египет</text>
    <text x="15" y="90" class="card-desc">Заплащане в бира:</text>
    <text x="15" y="110" class="card-desc">Строителите на пирамидите</text>
    <text x="15" y="130" class="card-desc">получават 4-5л бира дневно</text>
    <text x="15" y="150" class="card-desc">като част от заплатата си.</text>
  </g>

  <!-- Card 3: Medieval Monasteries -->
  <g transform="translate(680, 115)">
    <rect width="280" height="180" class="card-bg" />
    <rect x="15" y="15" width="110" height="24" class="badge-bg" />
    <text x="70" y="31" class="badge-text">IX – X век</text>
    <text x="235" y="38" class="icon-text">🏰</text>
    <text x="15" y="65" class="card-title">Средновековни манастири</text>
    <text x="15" y="90" class="card-desc">Въвеждане на хмела:</text>
    <text x="15" y="110" class="card-desc">Монасите научават да добавят</text>
    <text x="15" y="130" class="card-desc">хмел за консервация,</text>
    <text x="15" y="150" class="card-desc">горчивина и естествен аромат.</text>
  </g>

  <!-- Row 2: Cards 4, 5, 6 -->

  <!-- Card 4: Reinheitsgebot -->
  <g transform="translate(40, 335)">
    <rect width="280" height="180" class="card-bg" />
    <rect x="15" y="15" width="90" height="24" class="badge-bg" />
    <text x="60" y="31" class="badge-text">1516 г.</text>
    <text x="235" y="38" class="icon-text">📜</text>
    <text x="15" y="65" class="card-title">Бавария (Закон за чистотата)</text>
    <text x="15" y="90" class="card-desc">Reinheitsgebot:</text>
    <text x="15" y="110" class="card-desc">Ограничава съставките</text>
    <text x="15" y="130" class="card-desc">на бирата единствено до</text>
    <text x="15" y="150" class="card-desc">вода, ечемик и хмел.</text>
  </g>

  <!-- Card 5: Pasteur & Yeast -->
  <g transform="translate(360, 335)">
    <rect width="280" height="180" class="card-bg" />
    <rect x="15" y="15" width="90" height="24" class="badge-bg" />
    <text x="60" y="31" class="badge-text">1857 г.</text>
    <text x="235" y="38" class="icon-text">🔬</text>
    <text x="15" y="65" class="card-title">Луи Пастьор</text>
    <text x="15" y="90" class="card-desc">Ролята на дрождите:</text>
    <text x="15" y="110" class="card-desc">Открива, че ферментацията</text>
    <text x="15" y="130" class="card-desc">се причинява от живи</text>
    <text x="15" y="150" class="card-desc">микроорганизми (дрожди).</text>
  </g>

  <!-- Card 6: Modern Craft Brewing -->
  <g transform="translate(680, 335)">
    <rect width="280" height="180" class="card-bg" />
    <rect x="15" y="15" width="80" height="24" class="badge-bg" />
    <text x="55" y="31" class="badge-text">Днес</text>
    <text x="235" y="38" class="icon-text">🍺</text>
    <text x="15" y="65" class="card-title">Крафт &amp; Домашно пивоварство</text>
    <text x="15" y="90" class="card-desc">Възраждане на стиловете:</text>
    <text x="15" y="110" class="card-desc">Разнообразие от сортове,</text>
    <text x="15" y="130" class="card-desc">експериментиране и варене</text>
    <text x="15" y="150" class="card-desc">на уникална бира у дома.</text>
  </g>

  <!-- Connecting Arrows / Paths -->
  <path d="M 320 205 L 360 205" class="connector" />
  <path d="M 640 205 L 680 205" class="connector" />
  <path d="M 820 295 L 820 335" class="connector" />
  <path d="M 680 425 L 640 425" class="connector" />
  <path d="M 360 425 L 320 425" class="connector" />

</svg>`;

fs.writeFileSync(path.join(__dirname, 'images', 'chronology-diagram.svg'), svgContent, 'utf8');
console.log('SVG Timeline created successfully at images/chronology-diagram.svg');
