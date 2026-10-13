# Yalda Habibi Portfolio

A responsive React + Vite portfolio styled with Tailwind CSS v4 and animated with Motion for React (`motion/react`).

## Features

- Responsive navigation with mobile menu
- Hero and About sections, each with its own image
- Project-category image cards
- All supplied project URLs grouped into React, Bootcamps, Figma, HTML & CSS Work, HTML, and CSS
- Search and category filters
- React Router client-side project detail pages: project cards open an instant internal detail page before launching the live site
- Motion-powered scroll reveals, staggered category cards, animated project cards, responsive menu transitions, and filter/search layout animations
- Hover/tap micro-interactions and reduced-motion CSS support
- Motion animations are applied inside the About and Projects components so navigation anchors remain attached to the correct sections
- Responsive layouts for phones, tablets, and desktop

## Run locally

1. Install Node.js (LTS) if it is not already installed.
2. Extract this ZIP.
3. Open the extracted `yalda-habibi-portfolio` folder in VS Code.
4. Open Terminal in that folder and run:

```bash
npm install
npm run dev
```

5. Open the local URL Vite prints, usually `http://localhost:5173`.

To make a production build:

```bash
npm run build
```

## Important customization

- **Photos:** The Hero and About currently use professional stock photography from Unsplash as placeholders because personal photo files were not included with the request. Replace the image URLs in `src/components/Hero.jsx` and `src/components/About.jsx` with your own photos when available.
- **Email:** Replace `hello@example.com` in `src/components/Contact.jsx` with your preferred contact email.
- **Social links:** Replace the GitHub and LinkedIn homepage links in `src/components/Contact.jsx` with your personal profile URLs.
- **Portfolio structure:** This ZIP recreates the portfolio around the previously described Navbar, Hero, About, and project-category sections. The original current portfolio source folder was not attached, so exact line-for-line structure preservation could not be verified.
- Project links are listed in `src/data/projects.js`, making them easy to edit.

## Folder structure

```text
yalda-habibi-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Projects.jsx
    │   └── Contact.jsx
    └── data/
        └── projects.js
```

## About project loading speed

React Router makes navigation between pages inside this portfolio client-side, so it does not reload the whole portfolio document for each project. The live project button opens the actual Vercel or Figma URL in a new tab. React Router cannot control the load speed of those external websites; their speed depends on their hosting and network connection.
