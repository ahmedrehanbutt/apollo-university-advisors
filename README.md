# Apollo University Advisors

Static marketing site for Apollo University Advisors (college admissions
counseling, university placement, and guidance/counseling services).

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
- **A Vercel serverless function** — more control, more setup, useful if
  you later want to store submissions or trigger other automation.

## Deploying to Vercel

The code is already pushed to GitHub:
https://github.com/ahmedrehanbutt/apollo-university-advisors

1. Go to https://vercel.com and sign in (choosing "Continue with GitHub"
   is easiest since it's the same `ahmedrehanbutt` account).
2. Click **Add New → Project**, and import the
   `apollo-university-advisors` repo.
3. Framework preset: choose **Other** (it's a static site — no build
   command or output directory needed).
4. Deploy. You'll get a temporary `*.vercel.app` URL to confirm it works.

## Pointing www.apollouniversityadvisors.com at Vercel

1. In the Vercel project, go to **Settings → Domains** and add
   `apollouniversityadvisors.com` and `www.apollouniversityadvisors.com`.
2. Vercel will show you DNS records to add at your domain registrar
   (wherever you bought the domain). Typically:
   - An **A record** for the root domain pointing to Vercel's IP, or
   - A **CNAME record** for `www` pointing to `cname.vercel-dns.com`
   (Vercel shows the exact values for your specific domain — use those.)
3. Add those records in your registrar's DNS settings.
4. Decide whether `apollouniversityadvisors.com` or
   `www.apollouniversityadvisors.com` should be the primary (Vercel lets
   you redirect one to the other automatically).
5. DNS changes can take anywhere from a few minutes to ~24 hours to
   propagate.

## Suggested next steps beyond the site itself

- Set up business email on the domain (e.g. Google Workspace) so you can
  send/receive mail as `you@apollouniversityadvisors.com`.
- Decide on a scheduling tool (Calendly or similar) if you want
  prospective clients to book consultations directly rather than just
  emailing.
- Once a logo/brand palette exists, update the CSS variables at the top
  of `css/style.css` (`--navy`, `--gold`, fonts) to match.
