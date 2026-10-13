# Anirudh — Portfolio

A responsive React + TypeScript portfolio with a Human view and a machine-readable Agent view. The visual language is warm white, navy, restrained blue, editorial typography, and hand-drawn-style technical diagrams.

## Requirements
- Node.js 20+
- npm

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Deploy to Vercel
Import the repository into Vercel and use the default Vite build settings:
- Build command: `npm run build`
- Output directory: `dist`

The included `vercel.json` supports client-side routes if you add them later.

## Agent-readable files
- `/llms.txt`
- `/llms-full.txt`
- `/profile.json`
- `/projects.json`

These are static public files. The Agent view is a structured profile browser, not an autonomous agent API.

## Before publishing
1. Verify every repository URL in `public/projects.json`. Some entries are intentionally flagged for verification.
2. Confirm the TrustLens F1 score against its split and evaluation procedure before publicizing it.
3. Replace the illustrative SpecMatch chart with reproducible measured data or remove it.
4. Add dedicated Bastion/Sentinel repositories and update status only when implementation exists.
5. Replace any placeholder project descriptions with facts from the current README.
6. Add a real resume PDF only if you want a resume download link.
7. Confirm your preferred public display name and contact email. No email is exposed by this starter.

## Editing project data
Update `public/projects.json`. The Human project cards and Agent view both use this file as their source of truth. Keep `public/llms-full.txt` and `public/llms.txt` consistent when changing major profile details.


## Public contact links
In `src/App.tsx`, set `xProfile` and `publicEmail` to your real public X URL and email address. They are blank by default so no guessed contact details are published. Update `public/profile.json` with the same values before deploying.


## Current layout (v1.2)

- Home: intro, animated skill ticker rows, and currently exploring.
- Projects: featured projects first, more projects below, then About and contact.
- Social links: GitHub, LinkedIn, X, and email.
- The skill animation pauses on hover and disables motion when reduced motion is requested.
