# Ebook Project State & Handoff Document

> **Book Title**: Изкуството на домашното пивоварство (Практическо ръководство за начинаещи и напреднали)  
> **Format**: Clean Multi-page HTML/CSS Ebook (Zero JS)  
> **Status**: Chapter 1 Complete & Verified

---

## 📁 Repository Structure

```text
e:/Server/homebrew-ebook/
├── .gemini/
│   └── rules.md                  # Project rules & guidelines for AI agents
├── index.html                    # Main landing page & Table of Contents
├── chapter-01.html               # Chapter 1 (Complete, ~800 words)
├── css/
│   └── style.css                 # Master stylesheet (Light & Dark theme)
├── images/
│   └── chronology-diagram.png    # Bulgarian timeline illustration
├── HANDOFF.md                    # Current state & memory for AI agents (This file)
└── README.md                     # Quick project overview
```

---

## 📌 Project Standards Overview

1. **Zero JavaScript**: Pure semantic HTML5 + CSS.
2. **Language**: Bulgarian. English is allowed ONLY in parentheses for hop/malt/yeast names or specific jargon (e.g. *Saccharomyces pastorianus*).
3. **Themes**: Warm paper light theme (`#faf7f2`) + automatic System Dark Mode (`prefers-color-scheme: dark`).
4. **Granularity**: 500 – 1000 words per `.html` file.
5. **Nav & Anchors**: Every chapter page has top/bottom nav buttons and section `#id` anchors.

---

## 🚀 Progress & Roadmap

### ✅ Completed Chapters
- **Index Page** (`index.html`): Full Table of Contents linked to chapter anchors.
- **Chapter 1** (`chapter-01.html`):
  - 1.1 Етимология (`#etymology`)
  - 1.2 Първичен вариант (`#origins`)
  - 1.3 Хронология (`#chronology`) + Bulgarian Vintage Diagram (`images/chronology-diagram.png`)
  - 1.4 Любопитни факти (`#facts`)

### ⏳ Upcoming Chapters (To be created in next sessions)

#### Chapter 2: Основата на бирата: Съставките и техните роли
- *Note*: PDF pages 4–18. This is long and contains heavy tables and chemical formulas ($pH$, $Ca^{2+}$, $SO_4^{2-}$, IBU tables).
- *Planned Split*:
  - `chapter-02-1-water.html` (~800 words): Water profiling, mineral impact ($Ca^{2+}$, $SO_4^{2-}$, $Cl^-$, $HCO_3^-$), Bulgarian tap water analysis (София, Пловдив, Шумен), bottled water table.
  - `chapter-02-2-malt.html` (~900 words): Malting process, milling, base/caramel/roasted malt categories, OG & ABV control table.
  - `chapter-02-3-hops.html` (~900 words): Hop roles, alpha acids, boil timing (Bittering, Flavor, Flameout, Dry Hop), IBU dosage table.

#### Chapter 3: Чистотата е здраве (и бира): Почистване и дезинфекция
- *Note*: PDF pages 18–21.
- *Planned File*: `chapter-03.html` (~850 words) - Cleaning vs. Sanitizing, Star San, Oxi, Alcohol, Sanitization checklist.

#### Chapter 4: Преходът към ферментатора: Охлаждане, аерация и засяване
- *Note*: PDF pages 21–25.
- *Planned File*: `chapter-04.html` (~800 words) - Cooling methods, Whirlpool, aeration, yeast pitching & rehydration.

#### Chapter 5: Магията на дрождите: Микробиология и ферментация
- *Note*: PDF page 25+.
- *Planned File*: `chapter-05.html` (~800 words) - Fermentation products, esters, temperature control.
