# Caleb Ngugi Mburu — Personal Portfolio

A premium, modern, fully responsive developer portfolio built for **Caleb Ngugi Mburu** — IT student, aspiring software developer, writer, and entrepreneur based in Kenya.

## Design Features

- **Black background** with dark-green headings and neon-green (`#19db9c`) accents
- **Continuously animated polygon / triangular mesh background** powered by [particles.js](https://github.com/VincentGarreau/particles.js)
- Smooth scrolling, scroll-triggered reveal animations, typing headline effect
- Project filtering (All / Completed / In Progress / Concept / Proposal)
- Animated skill bars
- Fully responsive + accessible
- SEO metadata included

## Project Structure

```
caleb-portfolio/
├── index.html              # Main page
├── css/
│   └── style.css           # All styles
├── js/
│   ├── particles.min.js    # particles.js library (local)
│   └── main.js             # Site interactions + particles config
├── assets/
│   └── images/
│       └── portrait.jpg    # Your actual portrait
└── README.md
```

## How to Run Locally

1. Open a terminal in the project folder.
2. Start a simple static server (any of these work):

   ```bash
   # Python 3
   python -m http.server 8000

   # Node (if you have npx)
   npx serve .

   # VS Code / Cursor: use the Live Server extension
   ```

3. Visit `http://localhost:8000` in your browser.

No build step or dependencies are required — pure HTML, CSS, and JavaScript.

## Deploy

You can deploy this folder to any static host:

- **Netlify / Vercel / Cloudflare Pages**: drag-and-drop the folder or connect a Git repo
- **GitHub Pages**: push the folder to a repository and enable Pages
- **Any traditional host**: upload the files via FTP/SFTP

The site works entirely client-side. The contact form uses a `mailto:` action (opens the user’s email client). For a true backend form you would need a service such as Formspree, Netlify Forms, or a small serverless function.

## Customisation Notes

- **Portrait**: Replace `assets/images/portrait.jpg` with an updated photo if needed.
- **Particles**: Edit the config object inside `js/main.js` → `initParticles()` to change density, colour, polygon sides, speed, etc.
- **Projects / Skills / Content**: All content lives in `index.html` — easy to update.
- **Colours**: CSS custom properties are defined at the top of `css/style.css`.

## Credits

- particles.js by Vincent Garreau
- Fonts: Inter + JetBrains Mono (Google Fonts)
- Portrait: your own image from the original site

---

© 2026 Caleb Ngugi Mburu
