# Portfolio Website

A responsive personal portfolio built with plain **HTML, CSS and JavaScript**, with a working contact form powered by **Nodemailer** and deployed on **Vercel**.

**Live site:** https://mynkrthportfolio.vercel.app

## Features

- Dark and light theme, with the choice remembered in the browser
- Sections for hero, about, skills, projects, experience and contact
- Fully responsive layout for phones, tablets and desktops
- Resume download button
- Contact form that sends the message to my Gmail and a thank-you email to the visitor
- All text and links live in one file (`data.js`), so the content is easy to update

## Tech Stack

| Part | Technology |
| --- | --- |
| Frontend | HTML5, CSS3, vanilla JavaScript |
| Email | Node.js, Nodemailer (Gmail) |
| Hosting | Vercel (static site + serverless function) |

## Project Structure

```
├── index.html          Page shell
├── style.css           All styling and theme colors
├── script.js           Builds the page from data.js, theme toggle, contact form
├── data.js             All text and links (edit this to change the content)
├── api/
│   └── send-email.js   Serverless function that sends the contact emails
├── assets/
│   ├── resume.pdf
│   └── portfoliologo.png
├── package.json
└── .env.example        Example environment variables
```

## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
```

### 2. Add your Gmail details

Copy `.env.example` to `.env` and fill it in:

```
EMAIL_USER=yourname@gmail.com
EMAIL_PASSWORD=your-16-letter-app-password
CONTACT_TO=yourname@gmail.com   # optional, where messages are delivered
```

`EMAIL_PASSWORD` must be a Gmail **App Password** (Google Account > Security > 2-Step Verification > App passwords), not your normal password. Never commit the `.env` file.

### 3. Run locally

```bash
npm i -g vercel
vercel dev
```

Open http://localhost:3000. Opening `index.html` directly shows the page, but the contact form needs `vercel dev` to send email.

## Customize

Open `data.js` and change the text, links, projects, skills and experience. Replace `assets/resume.pdf` with your own resume. Colors can be changed at the top of `style.css`.

## Deploy on Vercel

1. Push the project to GitHub.
2. Import the repository on [vercel.com](https://vercel.com) (framework: **Other**, no build command).
3. Add `EMAIL_USER` and `EMAIL_PASSWORD` under **Settings > Environment Variables**.
4. Deploy. Redeploy after changing any environment variable.

## Contact

- Email: mayank19rathore82@gmail.com
- Live portfolio: https://mynkrthportfolio.vercel.app
