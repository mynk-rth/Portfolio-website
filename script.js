/*
  script.js
  Builds the whole page from the content in data.js.
  You normally don't need to edit this file.
*/

const { links, hero, about, skills, projects, experience, contact, footer } = SITE;

const $ = (selector) => document.querySelector(selector);
const NEW_TAB = 'target="_blank" rel="noopener noreferrer"';

/* ---------- Icons (from lucide.dev) ---------- */

const ICONS = {
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  phone:
    '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  download:
    '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  github:
    '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  linkedin:
    '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  external:
    '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  arrowDown: '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
};

function icon(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;
}

/* ---------- Small helpers used by several sections ---------- */

function tagList(items) {
  return items.map((item) => `<span class="tag">${item}</span>`).join("");
}

function sectionHead(title, subtitle) {
  return `
    <div class="section-head">
      <h2>${title}</h2>
      <p>${subtitle}</p>
    </div>`;
}

function socialIcons() {
  return `
    <a class="icon-btn" href="${links.github}" ${NEW_TAB} aria-label="GitHub">${icon("github")}</a>
    <a class="icon-btn" href="${links.linkedin}" ${NEW_TAB} aria-label="LinkedIn">${icon("linkedin")}</a>
    <a class="icon-btn" href="mailto:${links.email}" aria-label="Email">${icon("mail")}</a>`;
}

/* ---------- One function per section ---------- */

function renderHero() {
  return `
    <section class="hero">
      <div class="container">
        <div class="hero-stack">
          <div class="hero-top fade-in">
            <div class="badge-wrap"><span class="badge">${hero.badge}</span></div>
            <div>
              <h1>${hero.name}</h1>
              <p class="role">${hero.role}</p>
            </div>
            <p class="intro">${hero.intro}</p>
          </div>

          <div class="action-row fade-in" style="animation-delay: 0.2s">
            <a class="btn btn-primary" href="mailto:${links.email}">${icon("mail")}${hero.contactBtn}</a>
            <a class="btn btn-outline" href="#projects">${hero.projectsBtn}</a>
            <a class="btn btn-secondary" href="${SITE.resume}" download="${SITE.resumeFileName}">
              ${icon("download")}${hero.resumeBtn}
            </a>
          </div>

          <div class="action-row fade-in" style="animation-delay: 0.4s">${socialIcons()}</div>

          <div class="scroll-arrow">${icon("arrowDown")}</div>
        </div>
      </div>
    </section>`;
}

function renderAbout() {
  const paragraphs = about.paragraphs.map((text) => `<p>${text}</p>`).join("");
  const cards = about.cards
    .map(
      (card) => `
        <div class="card">
          <h3 class="card-label">${card.label}</h3>
          <p class="stat-value">${card.big}</p>
          <p class="muted text-small">${card.text}</p>
        </div>`,
    )
    .join("");

  return `
    <section>
      <div class="container about">
        <h2>${about.title}</h2>
        ${paragraphs}
        <div class="grid grid-3">${cards}</div>
      </div>
    </section>`;
}

function renderSkills() {
  const groups = skills.groups
    .map(
      (group) => `
        <div class="card card-hover skill-card">
          <h3>${group.name}</h3>
          <div class="tag-list">${tagList(group.items)}</div>
        </div>`,
    )
    .join("");

  return `
    <section>
      <div class="container">
        ${sectionHead(skills.title, skills.subtitle)}
        <div class="grid grid-3">${groups}</div>
      </div>
    </section>`;
}

function renderProject(project) {
  const features = project.features.map((text) => `<li>${text}</li>`).join("");
  const repoLink = project.repo
    ? `<a href="${project.repo}" ${NEW_TAB}>${icon("github")}${projects.repoLabel}</a>`
    : "";
  const liveLink = project.live
    ? `<a href="${project.live}" ${NEW_TAB}>${icon("external")}${projects.liveLabel}</a>`
    : "";

  return `
    <div class="card card-hover project">
      <h3>${project.title}</h3>
      <p class="muted">${project.description}</p>
      <h4 class="card-label">${projects.featuresLabel}</h4>
      <ul class="feature-list">${features}</ul>
      <div class="tag-list">${tagList(project.tech)}</div>
      <div class="project-links">${repoLink}${liveLink}</div>
    </div>`;
}

function renderProjects() {
  return `
    <section id="projects">
      <div class="container">
        ${sectionHead(projects.title, projects.subtitle)}
        ${projects.items.map(renderProject).join("")}
      </div>
    </section>`;
}

function renderJob(job) {
  const points = job.points.map((text) => `<li><span>${text}</span></li>`).join("");

  return `
    <div class="card card-hover job">
      <div class="job-head">
        <div>
          <h3>${job.role}</h3>
          <p class="company">${job.company}</p>
        </div>
        <span class="card-label">${job.period}</span>
      </div>
      <ul>${points}</ul>
    </div>`;
}

function renderExperience() {
  return `
    <section>
      <div class="container">
        ${sectionHead(experience.title, experience.subtitle)}
        ${experience.items.map(renderJob).join("")}
      </div>
    </section>`;
}

function renderContact() {
  const { labels, placeholders } = contact;

  return `
    <section id="contact">
      <div class="container">
        ${sectionHead(contact.title, contact.subtitle)}

        <div class="grid grid-3">
          <div class="card card-hover contact-card">
            <span class="icon-btn">${icon("mail")}</span>
            <h3>${contact.emailLabel}</h3>
            <a href="mailto:${links.email}">${links.email}</a>
          </div>
          <div class="card card-hover contact-card">
            <span class="icon-btn">${icon("phone")}</span>
            <h3>${contact.phoneLabel}</h3>
            <a href="tel:${links.phoneLink}">${links.phone}</a>
          </div>
          <div class="card card-hover contact-card">
            <span class="icon-btn">${icon("pin")}</span>
            <h3>${contact.locationLabel}</h3>
            <p>${contact.location}</p>
          </div>
        </div>

        <div class="card form-card">
          <h3>${contact.formTitle}</h3>
          <p class="muted">${contact.formNote}</p>
          <form id="contact-form">
            <div class="grid-2">
              <label>${labels.name}
                <input name="name" required placeholder="${placeholders.name}">
              </label>
              <label>${labels.email}
                <input name="email" type="email" required placeholder="${placeholders.email}">
              </label>
            </div>
            <label>${labels.subject}
              <input name="subject" required placeholder="${placeholders.subject}">
            </label>
            <label>${labels.message}
              <textarea name="message" rows="5" required placeholder="${placeholders.message}"></textarea>
            </label>
            <div id="form-status" hidden></div>
            <button class="btn btn-primary" type="submit">${contact.sendBtn}</button>
          </form>
        </div>
      </div>
    </section>`;
}

function renderFooter() {
  return `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div>
            <h3>${hero.name}</h3>
            <p class="muted text-small">${hero.role}</p>
          </div>
          <div>
            <h4 class="card-label">${footer.navTitle}</h4>
            <ul>
              <li><a href="#projects">${footer.projectsLink}</a></li>
              <li><a href="#contact">${footer.contactLink}</a></li>
            </ul>
          </div>
          <div>
            <h4 class="card-label">${footer.connectTitle}</h4>
            <div class="action-row">${socialIcons()}</div>
          </div>
        </div>
        <p class="copyright">© ${new Date().getFullYear()} ${footer.copyright}</p>
      </div>
    </footer>`;
}

function renderPage() {
  document.title = SITE.title;
  $("meta[name=description]").content = SITE.description;
  $("link[rel=icon]").href = SITE.logo;

  $("#app").innerHTML = [
    renderHero(),
    renderAbout(),
    renderSkills(),
    renderProjects(),
    renderExperience(),
    renderContact(),
    renderFooter(),
  ].join("");
}

/* ---------- Dark / light theme (dark by default, choice is remembered) ---------- */

function setupThemeToggle() {
  const root = document.documentElement;
  const button = $("#theme-toggle");

  const showIcon = () => {
    button.innerHTML = icon(root.classList.contains("dark") ? "sun" : "moon");
  };

  button.addEventListener("click", () => {
    root.classList.toggle("dark");
    showIcon();
    try {
      localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
    } catch (error) {
      /* storage blocked – the theme just won't be remembered */
    }
  });

  showIcon();
}

/* ---------- Contact form ---------- */

function setupContactForm() {
  const form = $("#contact-form");
  const status = $("#form-status");
  const button = form.querySelector("button");

  function showStatus(isSuccess, text) {
    status.hidden = false;
    status.className = `message ${isSuccess ? "success" : "error"}`;
    status.textContent = text;
  }

  // No server set up: open the visitor's email app with the message filled in.
  function openEmailApp(data) {
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(`${data.message}\n\n${data.name} (${data.email})`);
    location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
  }

  async function sendToServer(data) {
    const response = await fetch(contact.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Request failed");
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));

    if (!contact.formEndpoint) {
      openEmailApp(data);
      return;
    }

    button.disabled = true;
    button.textContent = contact.sendingBtn;
    try {
      await sendToServer(data);
      showStatus(true, contact.success);
      form.reset();
    } catch (error) {
      showStatus(false, contact.error);
    }
    button.disabled = false;
    button.textContent = contact.sendBtn;
  });
}

/* ---------- Start ---------- */

renderPage();
setupThemeToggle();
setupContactForm();
