# Aryan Nagori — Java Backend Developer Portfolio

A production-oriented personal portfolio built with Astro. The site uses an editorial, technical visual language with warm charcoal, off-white and orange accents. It is intentionally focused on backend engineering: Java, Spring Boot, REST APIs, relational databases, testing, and systems thinking.

## Highlights

- Responsive editorial layout for desktop, tablet and mobile
- Light and dark themes using shared semantic design tokens
- Replayable scroll reveals and a replayable typewriter identity animation
- Interactive project technology selectors
- Architecture diagrams for the Smart Campus & Placement Platform and Java REST API
- Purpose-led animated technology marquee positioned above the Stack tools
- Education records with grades directly beneath each qualification
- Compact two-column Proof of Work section
- Achievements: 100+ LeetCode problems solved, Top 5 in BCA by CGPA, 2nd Prize — Rally Race, 2nd Prize — BCA Cricket Competition, and Top 5 Academic Achievement — Class XII
- Connect section focused on GitHub, Email and Resume
- Reduced-motion support and keyboard-visible focus states

## Tech

- Astro
- HTML/CSS
- Vanilla JavaScript for interactions
- Manrope + DM Mono typography

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:4321`.

## Production build

```bash
npm run build
npm run preview
```

## Structure

```text
src/
  components/
    ArchitectureDiagram.astro
    Header.astro
    SectionHeading.astro
    TechStack.astro
  layouts/
    BaseLayout.astro
  pages/
    index.astro
  styles.css
public/
  assets/
    Aryan.jpeg
    Aryan-Nagori-Resume.pdf
  brand-mark.svg
```

## Content source

Professional details are based on the supplied current resume. No live statistics or unsupported project metrics are fabricated.


## Recent visual refinements

- Hero identity now uses a two-line `ARYAN / NAGORI` treatment with a filled first line and outlined second line, with a replayable typewriter reveal.
- The hero keeps the large systems statement on the right and moves the portrait into the About section for a cleaner first impression.
- The navigation brand mark is an explicit `AN` badge.
- The About section now places the profile photo on the right while preserving the existing editorial layout.

## Recent visual refinements

- The hero uses a two-line `ARYAN / NAGORI` identity treatment with a filled first line and outlined second line, plus a replayable typewriter reveal.
- The large systems statement stays on the right side of the hero at display scale.
- The profile photo is placed in the About section on the right side to keep the first viewport identity-led.
- The navigation badge explicitly reads `AN`.

## Recent UI refinements

- Architecture flows use dedicated arrow tracks to keep request direction readable and avoid node overlap.
- The technology marquee sits above the Stack section heading as a purposeful technology index.
- Proof of Work uses numbered evidence markers, with 100+ LeetCode moved into What I Have Done / Earned as item 5.
- Hero outline typography uses a thinner stroke to keep counters and letter interiors clean.

## Latest UI refinements

- Refined the outlined NAGORI treatment for cleaner letter interiors.
- Increased the hero systems statement and gave its emphasized phrase a contrasting serif treatment.
- Aligned project indices `01` and `02` with their respective project titles.
- Standardized Proof of Work numbering to `1` through `5`, with LeetCode included as item `5`.

