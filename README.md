# cultraroandrea.com

My personal site: portfolio, project showcase and — sooner or later — a blog.
Live at [cultraroandrea.com](https://cultraroandrea.com).

## Structure

```
index.html          markup and content
assets/
  ├── style.css     styles
  ├── main.js       scroll reveal, active nav item
  └── favicon.svg   logo
CNAME               custom domain
```

## Technical choices

Hand-written HTML, CSS and JavaScript. No framework, no build step, no
dependencies to install: open `index.html` in a browser and it works.

For a single-page static site, adding a generator or a bundler would have meant
more things to maintain in exchange for nothing. And I wanted to understand every
line of what's in here — which is, after all, the reason this site exists.

Some details:

- **Layout** built with CSS Grid and Flexbox. The vertical navigation rail on
  desktop becomes a horizontal bar below 820px.
- **Animations** kept to a minimum: a scroll reveal via `IntersectionObserver`
  and a blinking cursor. Both are disabled under `prefers-reduced-motion`.
- **No raster images.** The logo and the illustration are hand-written SVG:
  sharp at any size, a few kilobytes, and they pick up the theme's CSS variables.
- **Fonts** from Google Fonts: Newsreader for headings, Manrope for body text,
  IBM Plex Mono for labels and status markers.

## Deployment

Hosted on GitHub Pages from the `main` branch. Every push redeploys the site.
The `CNAME` file keeps the custom domain attached.

## License

Dual-licensed, because this repository holds two different things:

- **Code** (HTML structure, CSS, JavaScript) — [MIT](LICENSE). Take it, reuse it,
  no need to ask.
- **Content** (written text, logo, illustrations) —
  [CC BY-NC-SA 4.0](LICENSE-CONTENT). Feel free to borrow the structure, but
  please write your own words.
