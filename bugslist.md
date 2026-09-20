# Bugs List

| Number | Bug | Status |
| --- | --- | --- |
| 1 | Chat messages injected via `innerHTML` enabling immediate XSS from user input | Fixed |
| 2 | Project names written with `innerHTML` in `renderProjects` allowing stored XSS | Fixed |
| 3 | Inline `onclick` handlers embedding unsanitized project ids in strings | Fixed |
| 4 | Preview iframe used `allow-same-origin` letting user/AI code read `localStorage` | Fixed |
| 5 | `allow-modals`/`allow-forms` sandbox flags enabled phishing vectors from preview code | Fixed |
| 6 | `window.open()` for detached preview lacked `noopener`/`noreferrer` (tabnabbing) | Fixed |
| 7 | External scripts/styles (Monaco, Font Awesome, Google Fonts) loaded from CDNs without SRI | Fixed |
| 8 | No Content Security Policy set, leaving page unprotected against XSS | Fixed |
| 9 | Social/about links with `target="_blank"` missing `rel="noopener noreferrer"` | Fixed |
| 10 | Third-party API received full project code and prompt without user consent | Fixed |
| 11 | AI responses not validated before overwriting editor buffers | Fixed |
| 12 | `chatArea.removeChild(chatArea.lastChild)` unguarded, could throw and lock UI | Fixed |
| 13 | Save/Run/Download/New/Open buttons active before Monaco models existed | Fixed |
| 14 | `getProjects()` failed when `localStorage` was unavailable (private mode/blocked) | Fixed |
| 15 | `JSON.parse` on `localStorage` data unguarded, corrupted entry crashed startup | Fixed |
| 16 | `localStorage.setItem` in `saveProject` not wrapped, quota errors threw silently | Fixed |
| 17 | Project cards built with `innerHTML`, stored markup could break sidebar structure | Fixed |
| 18 | Autosave dot implied persistence but only reflected preview updates | Fixed |
| 19 | No real draft autosave to `localStorage`, closing tab discarded work silently | Fixed |
| 20 | README advertised light/dark mode toggle that did not exist | Pending |
| 21 | README suggested a "Contact Us" channel but no link or UI exists | Pending |
| 22 | README referenced a nonexistent `HTMLEditor` class/API | Pending |
| 23 | App claimed "100% offline capable" while depending on CDNs and external AI endpoint | Fixed |
| 24 | "Mandatory filename before download" promised, but default name used silently | Fixed |
| 25 | "Import sample templates" listed as a capability, no implementation existed | Fixed |
| 26 | README mentioned a social footer that was missing from the live UI | Pending |
| 27 | `<link rel="canonical">` pointed to wrong deployment URL | Fixed |
| 28 | Open Graph/Twitter images referenced wrong-branding remote URLs | Fixed |
| 29 | Favicon linked to remote icon despite local `favicon.ico` existing | Fixed |
| 30 | Monaco loader had no fallback if CDN was blocked; editor never initialized | Fixed |
| 31 | AI calls lacked timeouts/abort handling; stalled requests left spinner indefinitely | Fixed |
| 32 | AI fetch did not check HTTP status; non-200 responses flowed to `response.json()` | Fixed |
| 33 | Body `overflow:hidden` with AI drawer expansion made content unreachable on small screens | Fixed |
| 34 | Sidebar fixed at 300px with no responsive adjustment covered mobile screens | Fixed |
| 35 | Tab controls were plain `<div>`s without `role="tab"` or keyboard handling | Fixed |
| 36 | Icon-only buttons lacked accessible labels | Fixed |
| 37 | Text inputs (filename, AI prompt) lacked associated `<label>`s or aria attributes | Fixed |
| 38 | Modal lacked `role="dialog"`/`aria-modal` and did not trap focus | Fixed |
| 39 | Sidebar opening did not manage focus; keyboard input still edited code behind overlay | Fixed |
| 40 | AI drawer toggle did not expose `aria-expanded`/`aria-controls` | Fixed |
| 41 | Chat transcript not marked as a live region for screen readers | Fixed |
| 42 | Project cards were plain `<div>`s, not keyboard focusable | Fixed |
| 43 | Download flow created object URL but never revoked it (memory leak) | Fixed |
| 44 | Filenames from user input used directly for downloads without sanitization | Fixed |
| 45 | Deleting active project left editor content and could silently recreate project on save | Fixed |
| 46 | Loading missing/removed project id was a silent no-op with no user feedback | Fixed |
| 47 | Rapid resize events called `editor.layout()` without throttling | Fixed |
| 48 | App did not remember last opened project or tab across reloads | Fixed |
| 49 | AI prompt included full code without truncation, could exceed model limits | Fixed |
| 50 | No tests or runtime health checks for critical paths (init, save/load, preview) | Pending |