# Apollo University Advisors

Static marketing site for Apollo University Advisors (college admissions
counseling, university placement, and guidance/counseling services).

## Live status

- **Live at:** https://apollouniversityadvisors.com/ (and `www.` — both work, `www` redirects to the apex)
- **HTTPS:** enforced — `http://` automatically redirects to `https://`
- **Hosted on:** GitHub Pages, deployed from
  https://github.com/ahmedrehanbutt/apollo-university-advisors (auto-deploys
  on every push to `master`)
- **Google:** verified in Search Console, sitemap submitted, homepage indexed

## Structure

```
index.html          Home
services.html        Services
about.html            About / Team
testimonials.html     Testimonials
contact.html          Contact form
css/style.css         All styling (CSS variables at the top for colors/fonts)
js/main.js            Mobile nav toggle, active-link highlighting, contact form handler
images/                Put your logo and photos here once ready
CNAME                  Tells GitHub Pages the custom domain (do not remove)
robots.txt             Allows crawling, points to sitemap.xml
sitemap.xml             Lists all pages for Google Search Console
```

No build step, no dependencies — just static files. Open `index.html`
directly in a browser to preview locally, or run a tiny local server:

```
npx serve .
```

## What still needs real content

Search the HTML files for these placeholders and replace them:

- Stats on the homepage (`XX+`, `XXX+`, `XX%`)
- Team bios and photos in `about.html`
- Testimonials in `testimonials.html` and on the homepage
- Email/phone/address in the footer of every page and in `contact.html`
- The `<div class="brand-mark">A</div>` text logo — swap for an `<img>`
  once you have a real logo (see `images/`)

## Connecting the contact form

Right now the form in `contact.html` only shows a "thanks" message — it
doesn't send anywhere. Easiest options once you're ready:

- **Formspree** (https://formspree.io) — free tier, no backend needed.
  Just change the form's `action` to your Formspree endpoint and add
  `method="POST"`.
- **A serverless function** (Vercel, Netlify, etc.) — more control, more
  setup, useful if you later want to store submissions or trigger other
  automation.

## Deployed on GitHub Pages

The site is live on GitHub Pages, deployed straight from this repo:
https://github.com/ahmedrehanbutt/apollo-university-advisors

- Pages is enabled to build from the `master` branch, root path — every
  push to `master` redeploys automatically.
- Default URL: https://ahmedrehanbutt.github.io/apollo-university-advisors/
- A `CNAME` file at the repo root tells GitHub Pages the custom domain is
  `apollouniversityadvisors.com`.

## DNS configuration (already done, for reference)

Configured at GoDaddy, where the domain is registered:

- **Apex domain** (`apollouniversityadvisors.com`) — four **A records**
  on `@` pointing to GitHub Pages:
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```
- **www subdomain** — **CNAME record**: `www` → `ahmedrehanbutt.github.io`
- GoDaddy's default "Parked" record on `@` was removed (it was injecting
  two extra IPs that conflicted with the GitHub ones).
- HTTPS is enforced via the Pages API (`https_enforced: true`).

## Suggested next steps beyond the site itself

- Set up business email on the domain (e.g. Google Workspace) so you can
  send/receive mail as `you@apollouniversityadvisors.com`.
- Decide on a scheduling tool (Calendly or similar) if you want
  prospective clients to book consultations directly rather than just
  emailing.
- Once a logo/brand palette exists, update the CSS variables at the top
  of `css/style.css` (`--navy`, `--gold`, fonts) to match.
