# Sift privacy policy site

A single static page, hosted on GitHub Pages, so the App Store listing has a
privacy policy URL to point at. Kept in its own repository so that publishing it
does not mean publishing the app's source.

## Publishing it

1. Create a **public** repository on GitHub named `sift-privacy`.
2. Copy `index.html` into the root of that repository and push it.
3. In the repository, open **Settings → Pages**, set *Source* to
   **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. Wait a minute, then confirm the page loads at
   `https://<your-github-username>.github.io/sift-privacy/`.
5. Paste that URL into App Store Connect under
   **App Privacy → Privacy Policy URL**.

## Keeping it honest

This page states that Sift collects nothing, makes no network requests and
bundles no third-party libraries. Those are claims a reviewer can check against
`PrivacyInfo.xcprivacy` and the app's behaviour. If any of them ever stops being
true, this page has to change in the same commit as the code that changed it.
