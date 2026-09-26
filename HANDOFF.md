# Ebook Project State & Handoff Document

> **Book Title**: Изкуството на домашното пивоварство (Практическо ръководство за начинаещи и напреднали)  
> **Source Documents**:
> - `docs/book-source.pdf` (Част 1: Страници 1–25)
> - `docs/book-source-2.pdf` (Част 2: Страници 26–51)
> **Format**: Clean Multi-page HTML/CSS Ebook (Zero JS)  
> **Status**: Chapters 1 & 2 Complete & Verified

---

## 📁 Repository Structure

```text
e:/Server/homebrew-ebook/
├── .gemini/
│   └── rules.md                  # Project rules & guidelines for AI agents
├── docs/
│   ├── book-source.pdf           # Original PDF Part 1 (Pages 1–25, Chapters 1–5)
│   └── book-source-2.pdf         # Original PDF Part 2 (Pages 26–51, Chapters 5–10+)
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

1. **Source Content**:
   - `docs/book-source.pdf`: Contains Chapters 1 through 5 (History, Ingredients, Cleaning, Fermentation transfer, Yeast basics).
   - `docs/book-source-2.pdf`: Contains Chapters 5+ through end (Yeast dynamics, Bottling, Recipes, Troubleshooting).
2. **Zero JavaScript**: Pure semantic HTML5 + CSS.
3. **Language**: Bulgarian. English is allowed ONLY in parentheses for hop/malt/yeast names or specific jargon (e.g. *Saccharomyces pastorianus*).
4. **Themes**: Warm paper light theme (`#faf7f2`) + automatic System Dark Mode (`prefers-color-scheme: dark`).
5. **Granularity**: 500 – 1000 words per `.html` file.
6. **Nav & Anchors**: Every chapter page has top/bottom nav buttons and section `#id` anchors.

---

## 🚀 Progress & Roadmap

### ✅ Completed Chapters
- **Index Page** (`index.html`): Full Table of Contents linked to chapter anchors.
- **Chapter 1** (`chapter-01.html`):
  - 1.1 Етимология (`#etymology`)
  - 1.2 Първичен вариант (`#origins`)
  - 1.3 Хронология (`#chronology`) + Bulgarian Vintage Diagram (`images/chronology-diagram.png`)
  - 1.4 Любопитни факти (`#facts`)
- **Chapter 2** (`chapter-02-1-water.html`, `chapter-02-2-malt.html`, `chapter-02-3-hops.html`):
  - 2.1 Водата – Първата съставка и профилирането (Минерали, български води, бутилирани води, pH) + Vintage Diagram (`images/water-profiles-diagram.jpg`)
  - 2.2 Малцът – Душата на бирата, видове и контрол на плътността (Смилане, базови/карамелени/тъмни малцове, OG & ABV за 10L)
  - 2.3 Хмелът – Подправката, душеприказчикът и консервантът (Изомеризация, варене, Dry Hopping, IBU дозировки)

### ⏳ Upcoming Chapters (To be created in next sessions)

#### Chapter 3: Чистотата е здраве (и бира): Почистване и дезинфекция
- *Source*: `docs/book-source.pdf` (Pages 18–21).
- *Planned File*: `chapter-03.html` (~850 words) - Cleaning vs. Sanitizing, Star San, Oxi, Alcohol, Sanitization checklist.

#### Chapter 4: Преходът към ферментатора: Охлаждане, аерация и засяване
- *Source*: `docs/book-source.pdf` (Pages 21–25).
- *Planned File*: `chapter-04.html` (~800 words) - Cooling methods, Whirlpool, aeration, yeast pitching & rehydration.

#### Chapter 5+: Магията на дрождите & Следващи Глави
- *Source*: `docs/book-source.pdf` (Page 25+) & `docs/book-source-2.pdf` (Pages 26–51).
- *Planned Files*: `chapter-05.html` and onward as outlined in `book-source-2.pdf`.
