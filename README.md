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

Follow these steps to run the portfolio on your computer.

### 1. Download the project

Download the repository from GitHub and extract the ZIP file.

Open the project folder in VS Code.

### 2. Install dependencies

Open the VS Code terminal and run:

```bash
npm install
```

### 3. Set up email

Create a file named `.env` in the main project folder.

Add your Gmail details:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
CONTACT_TO=your-email@gmail.com
```

Use a Gmail App Password instead of your regular Gmail password.

Keep your `.env` file private. Never upload it to GitHub.

### 4. Run the website

Install Vercel CLI:

```bash
npm install -g vercel
```

Then start the project:

```bash
vercel dev
```

Open **http://localhost:3000** in your browser.

That's it! Your portfolio is running locally.


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
