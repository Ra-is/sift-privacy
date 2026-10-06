# Website redesign

Static GitHub Pages site: HTML, CSS, and a small progressive-enhancement script.
No build step, external fonts, analytics, cookies, automatic redirects, or app changes.

## Pages

- `/`: full product homepage with real screenshots and interactive feature preview.
- `/download/`: focused ad landing page with an explicit App Store button.
- `/privacy/` and `/support/`: existing content, with refreshed styling and navigation.

Preview: `python3 -m http.server 8765 --directory Website` from the app workspace.
Deploy only this website repository, never the iOS source repository. Keep `CNAME` unchanged.

## Verification

Desktop and narrow-mobile layouts inspected in Chrome. Feature selection changes the
preview image and accessible pressed state. Download buttons target App Store ID
6810718256. Motion respects reduced-motion preferences. Core content and download
links work without JavaScript.

Before publication, review the existing privacy/support wording separately: it predates
the current Home screen, deliberate imports, and user-created reminders. This redesign
does not silently rewrite the policy. No terms page was invented.

The new advertising destination will be `https://sift.renobytes.com/download/` after
deployment. This is a real landing page, not an automatic App Store redirect, and does
not guarantee Meta approval or provide install attribution.
