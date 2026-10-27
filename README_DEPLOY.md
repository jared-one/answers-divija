# THE PROOF DESK | Static site, Release 1.0

## Deployment with GitHub GUI and Vercel

1. Unzip `Proof_Desk_SITE_READY_FOR_GITHUB.zip`.
2. Open the extracted folder. **Upload its contents, not the enclosing folder**, into the root of the GitHub repository linked to Vercel. The repository root must contain `index.html`, `assets/`, `notes/`, `feedback/`, `papers/`, and `guides/`.
3. Commit the changes. On a Vercel project connected to that repository, the new commit usually triggers a fresh deployment.
4. Ensure Vercel project Framework Preset is **Other** and the Root Directory is the repo root. No build command is required for this plain static HTML site. Do not set an output subfolder that excludes `index.html`.
5. Visit the Vercel URL and test notes, PDFs, feedback and dark mode on phone and laptop.

The ZIP is a prebuilt site. No npm, keys, backend, database, paid API, or command line is required. Existing GitHub files outside these paths can remain, but remove obsolete deployment routes only if you understand their impact.

## Navigation

- `index.html` is the central dashboard.
- `notes/` holds the actual Release 0.4 HTML learning pages.
- `papers/` holds full and subject-specific PDF student examination papers.
- `feedback/` holds student-facing learning feedback without marks.
- `guides/` holds the 12-page notes PDF and single-page method guide.
- `assets/css/site.css` and `assets/js/site.js` implement responsive navigation, theme and local progress.

## Personal data and privacy

This directory contains **no original handwritten student photos, no examiner PDF, no private marking data, and no scores**. This is intentional. A public Vercel site is accessible to anyone with the URL even if its routes are unlisted; robots.txt and noindex are NOT security controls. The separate optional local evidence ZIP includes the original submissions and is **NOT** for deployment. Do not upload that ZIP to a public repository. If you want a private archive, use an authenticated access-controlled service.

Progress checkboxes and reflections are kept only in the browser's localStorage. They do not sync across devices. Use Export/Import JSON to move them manually. The page does not transmit data to our servers and has no analytics; Google Fonts is an external font request and external reading links naturally contact their destination sites.

## Limitations

- Benchmark 1 grades were disputed by independent review. This site displays qualitative historical feedback without presenting them as final marks.
- Benchmark 2 work included hints and extra time; no valid timed improvement statistic is claimed.
- The child study notes and feedback pages are copied from the supplied earlier releases, with a small back-to-hub link added.
- The exam papers are independent formative papers, not UKMT- or IMO-issued.
- A static GitHub/Vercel site has no student account, private storage, server-side tracking, or login.

## Personalisation

Edit the heading and description in `index.html`; change visual tokens at the top of `assets/css/site.css` to adjust colours. Prefer retaining the `notes/` visual style and `papers/` PDFs.
