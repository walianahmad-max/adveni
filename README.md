# Adveni Hotel

React, Tailwind CSS and Vite power the English and Spanish hotel pages.

## Run locally

Install Node.js 20 or later, then run these commands from the project folder.

```sh
npm ci
npm run dev
```

## Production

Run `npm run build` to generate the static site in `dist/`. Use `npm run preview` to check the build locally.

## Edit the site

Page sections live in `src/pages/`. Each language has its own home, privacy policy and terms pages. Section components contain the text and layout. Photos, fonts and logo assets are under `public/assets/`. The booking and contact buttons use the destinations shown on the reference site.
