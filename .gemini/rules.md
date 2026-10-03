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

## CSS Layout System (Two-Tier Max-Width)
- **`body` max-width**: `60em` (`--max-width: 60em`) — gives the page container ample room for figures, tables, and wide blocks.
- **Text element max-width**: `80ch` (`--text-max-width: 80ch`) — applied individually to `p`, `h1`–`h4`, `ol`, `ul`, `blockquote`, `.book-title`, `.book-subtitle`, and `figcaption`. The `ch` unit is relative to each element's own font-size, so the readable line length scales correctly with headings.
- **Images & Tables**: `<figure>`, `.wide-figure`, and `.table-wrapper` elements are NOT constrained by `--text-max-width`; they expand to fill the full `60em` body width naturally.
- **No Lightbox / Zoom**: Image zoom (lightbox) functionality has been removed. Do NOT re-add `zoom-trigger`, `lightbox-checkbox`, `lightbox-modal`, or related markup or CSS classes. Images are displayed at full width inline and are sufficiently readable at the new body width.

## Language & Content Guidelines
- **Primary Language**: Bulgarian (Български език).
- **English Terms**: English terms are ONLY permitted for specific hop/malt/yeast strain names or technical terms, and MUST always be provided in parentheses as clarifications to the Bulgarian text, e.g., *кисел малц (Acidulated Malt)*, *Saccharomyces pastorianus*.
- **Visuals & Diagram Quality**:
  - **Задължително генериране с Nano Banana**: За всяка графика, схема или илюстрация, налична в оригиналните PDF файлове (`docs/book-source.pdf` и `docs/book-source-2.pdf`), задължително се генерира нова графика с Nano Banana (`generate_image`).
  - **Стил на илюстрациите**: Графиките задължително следват установения визуален стил на книгата:
    - Винтидж гравюра / гравюра на мед / линогравюра с фини щрихи и висок контраст (тъмно мастило върху фон топъл пергамент/хартия `#faf7f2`).
    - Двойна декоративна рамка с флорални/хмелови/ечемични орнаменти в ъглите.
    - Стандартно съотношение 16:9, вградено чрез `<figure class="wide-figure">`.
  - **Език и типография**:
    - Всички надписи задължително са на чист български език (кирилица).
    - Типографията трябва да е безупречна, без печатни грешки, без дублиращи се думи и с елегантен серифен шрифт за заглавията.
    - Английски/латински термини се допускат само в скоби като пояснение (напр. *(Germination)*, *(Kilning)*).

## Динамично поддържане и обновяване на правилата (Living Guidelines)
- **Често и проактивно обновяване**: Правилата на проекта (`.gemini/rules.md`) ТРЯБВА редовно и своевременно да се обновяват и допълват при всяко ново потребителско задание, корекция или обратна връзка.
- При получаване на насока за корекция (напр. относно стил на визуализации, структура на съдържанието, терминология или форматиране), агентът не просто изпълнява конкретната задача, а задължително формулира и записва новото/коригираното правило тук.
- Това гарантира дългосрочна приемственост и консистентност между работните сесии и при създаване на бъдещи глави.

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
