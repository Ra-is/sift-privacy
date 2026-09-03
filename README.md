# sift.renobytes.com

The static site behind Sift, the screenshot search app for iPhone. Three pages,
no build step and no dependencies — these have to keep working years from now
with nobody maintaining them.

| Path        | Purpose                                                      |
|-------------|--------------------------------------------------------------|
| `/`         | What Sift is.                                                 |
| `/privacy/` | Privacy policy. **App Store Connect → Privacy Policy URL.**    |
| `/support/` | Support page. **App Store Connect → Support URL.**             |

## Keeping it honest

The privacy page states that Sift collects nothing, makes no network requests
and bundles no third-party libraries. A reviewer can check every one of those
against `PrivacyInfo.xcprivacy` and the app's behaviour. If any of them stops
being true, this page changes in the same commit as the code that changed it.

## Custom domain

Served at `sift.renobytes.com` via a `CNAME` file in this repository plus a DNS
record in Route 53 pointing `sift.renobytes.com` at `ra-is.github.io`. GitHub
issues and renews the TLS certificate automatically once DNS resolves.
