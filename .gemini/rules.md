# Homebrew Ebook - AI Agent Rules & Standards

## Source Content Location
- **Original Source PDFs**: Located in `docs/`:
  - `docs/book-source.pdf` (Part 1: Pages 1–25, Chapters 1–5)
  - `docs/book-source-2.pdf` (Part 2: Pages 26–51, Chapters 5–10+)
- All text, tables, formulas, and structural content for upcoming chapters MUST be referenced from these two PDF files.

## Project Architecture & Tech Stack
- **HTML/CSS Only**: Strict Zero JavaScript policy. No external JS libraries (no React, Vue, jQuery, MathJax, or Tailwind).
- **Pure Semantic HTML5**: Use `<article>`, `<section>`, `<header>`, `<footer>`, `<nav>`, `<figure>`, `<table>`, `<sup>`, `<sub>`.
- **Single CSS Stylesheet**: All styles must reside in `css/style.css`.
- **Responsive & Accessible**: Responsive layout with native CSS grid/flexbox. Fully supports Light Warm Paper theme and automatic Dark Mode via `@media (prefers-color-scheme: dark)`.

## Language & Content Guidelines
- **Primary Language**: Bulgarian (Български език).
- **English Terms**: English terms are ONLY permitted for specific hop/malt/yeast strain names or technical terms, and MUST always be provided in parentheses as clarifications to the Bulgarian text, e.g., *кисел малц (Acidulated Malt)*, *Saccharomyces pastorianus*.
- **Visuals & Diagram Quality**:
  - All generated or rendered images MUST feature Bulgarian Cyrillic text.
  - Image typography must be clean and free of typos, duplicate text labels, or misplaced apostrophes.

## File Structure & Granularity Rules
- **Word Target per HTML File**: 500 – 1000 readable words per `.html` file.
  - Short chapters (e.g. Chapter 1 ~800 words) reside in a single file (`chapter-01.html`).
  - Longer chapters (e.g. Chapter 2) MUST be split logically into sub-pages (e.g. `chapter-02-1-water.html`, `chapter-02-2-malt.html`, `chapter-02-3-hops.html`).
- **URL & Anchor Navigation**:
  - All major subsections MUST have explicit `id="..."` anchor tags (e.g., `<section id="etymology">`) for deep-linking and bookmarking.
  - Top & bottom navigation bars (`← Съдържание`, `▲ Нагоре`, `Следваща глава →`) MUST be included on every chapter page.

## Chemical & Mathematical Formulas
- Do NOT use MathJax or LaTeX JS libraries.
- Render formulas using standard HTML formatting: `pH`, `Ca<sup>2+</sup>`, `SO<sub>4</sub><sup>2-</sup>`, `HCO<sub>3</sub><sup>-</sup>`, `8–12°C`.
