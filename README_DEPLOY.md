# The Proof Desk · Release 1.1

## GitHub GUI + Vercel deployment

1. Download the GitHub-ready ZIP and **extract it**.
2. Upload the **contents** of the extracted folder (not the outer folder or the ZIP) to the root of the **existing** GitHub repository connected to Vercel. The root must contain `index.html`, `assets/`, `notes/`, `papers/`, `feedback/`, and `guides/`.
3. Commit. When uploading by GitHub web UI, note that it may not overwrite same-named existing files: if GitHub reports a collision, edit/replace those files explicitly or use a local Git commit. **Verify that `index.html`, `assets/js/site.js`, and `assets/css/site.css` were replaced.**
4. In Vercel, use a static site / Framework Preset **Other**, repo root as Root Directory, no special build command or output subfolder. Wait for the connected deployment to complete, then test the new domain yourself.
5. Check Overview, Benchmark 1, Benchmark 2, Toolkit, Reading Library and My Progress on mobile and laptop. Try the theme switch and the PDF/HTML links. Confirm countdown on the home page.

## Content architecture

- `#benchmark1`: 8 original exam questions, answer booklet, original Foundation Notes R0.2 light/dark, and historical qualitative feedback.
- `#toolkit`: expanded shared Release 0.4 proof notes, light/dark, printable PDF and one-page method guide. Created after Benchmark 1 and before Benchmark 2.
- `#benchmark2`: second exam paper, answer booklet, question-by-question feedback and new post-test Proof Repair Notes.
- `#library`: optional learning links.
- `#tracker`: optional on-device checklists and reflection. Existing `proofdesk-progress-v1` keys are preserved; new ones are simply added. Export/Import works across devices only when done manually.

Old bookmark routes `#notes`, `#papers` and `#feedback` are mapped to Toolkit, Benchmark 1 and Benchmark 2 respectively.

## The BMO countdown

The counter uses **Europe/London calendar dates** and updates on page focus, visibility change and every minute. On 18 November 2026 it reads `Today`; afterwards it reads `Held`. It does not require deployment each morning.

## Privacy and sharing

This is a **public static website**. Anyone with the URL can see the study materials and student-facing feedback. It is not password protected. It deliberately excludes handwritten photographs, private scores, original grading and examiner reports. `robots.txt` discourages indexing but **is not a privacy or access-control mechanism**. If you need private sharing, use real authentication or a private alternative. The tracker is saved in each browser only; there is no cross-device synchronization. External fonts and clicked reference links make connections to their providers. No custom analytics, student upload forms or server-stored student progress have been added.

## Quality notes

Benchmark marks are not presented as a fair time-controlled improvement score. The benchmark 1 numerical marking was disputed, and the benchmark 2 attempt was not fully time controlled. Source exam PDFs are included unchanged to retain the formal exam style. Site copy is formatted without em dashes.
