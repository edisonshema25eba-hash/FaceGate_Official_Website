# FaceGate Rwanda Website

Professional static React website for FaceGate Rwanda Ltd.

## Files

- `index.html` - page shell and local React runtime loading.
- `styles.css` - all responsive styling.
- `app.react.js` - React components, data, navigation behavior, form behavior, and motion canvas.
- `assets/` - logo, background video, poster image, and supporting visuals.
- `vendor/` - local React and ReactDOM runtime files.

## JavaScript Structure

The website's custom code lives in `app.react.js`, organized into:

1. Page content data, such as navigation links, pricing plans, and market details.
2. Shared components, such as the logo, buttons, and section media.
3. Components for each page section.
4. The contact form and its state.
5. Page effects for navigation, the mobile menu, and the animated canvas.
6. The `App` component, which puts the sections together.

The app uses React's `createElement` directly, so it runs in the browser without a build step. The minified files in `vendor/` are third-party runtime files and are kept separate from the website code.

## Open

Open `index.html` in a browser. No package installation is required.

## Business Source

Copy and positioning are based on `FaceGate_Rwanda_Business_Plan.docx`.
