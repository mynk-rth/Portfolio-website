/* ==========================================================
   data.js  –  ALL TEXT AND LINKS OF THE WEBSITE ARE HERE
   Edit the text inside quotes. Keep commas, quotes and [ ] { }.
   To add a project / skill / job, copy an existing item.
   ========================================================== */
const SITE = {
  title: "Mayank Rathore - Data Science Intern",
  description:
    "Data Science & AI/ML, specializing in Python, SQL, Pandas, exploratory data analysis, and predictive modeling.",
  logo: "assets/portfoliologo.jpg", // browser-tab icon
  resume: "assets/resume.docx", // put your own PDF here
  resumeFileName: "Mayank_Rathore_Resume.docx",

  hero: {
    badge: "Data Science Intern",
    name: "Mayank Rathore",
    role: "Data Science & AI/ML",
    intro:
      "Specialized in data analysis, predictive modeling, and Machine Learning to uncover meaningful insights from complex datasets. Expertise in Python, SQL, Pandas, and data visualization, with a focus on statistical analysis, pattern recognition, and developing data-driven solutions to solve real-world problems.",
    contactBtn: "Contact Me",
    projectsBtn: "View Projects",
    resumeBtn: "Resume",
  },
  links: {
    email: "mayank19rathore82@gmail.com",
    phone: "+91 9131637561",
    phoneLink: "+919131637561",
    github: "https://github.com/mynk-rth",
    linkedin: "https://linkedin.com/in/mynk-rth",
  },

  about: {
    title: "About Me",
    paragraphs: [
      "Dedicated Data Science enthusiast with a strong foundation in Python, SQL, and Machine Learning. Focused on analyzing complex datasets, uncovering meaningful patterns, and developing data-driven solutions that address real-world challenges.",
      "Currently working at Numeric Infosystem as a Data Science Intern, specializing in exploratory data analysis, predictive modeling, and data visualization. Applying statistical techniques and machine learning algorithms to transform raw data into actionable insights, with a focus on building reliable, data-driven solutions.",
    ],
    cards: [
      {
      label: "TECHNICAL SKILLS",
      big: "Python Data Science & AI/ML",
      text: "Python, SQL, Pandas, NumPy, Data Analysis, ML, DL & AI"
      },
      { label: "Experience", big: "10+ Months", text: "Years of professional development experience" },
      {
        label: "Education",
        big: "B.E. CSE 4<sup>th</sup> Year",
        text: "Bachelor of Engineering, Jiwaji University",
      },
      // { label: "Recognition", big: "SIH", text: "Smart India Hackathon participant" },
    ],
  },

  skills: {
  title: "Technical Expertise",
  subtitle: "Technologies and tools for Data Science, Machine Learning, and AI",
  groups: [
    { name: "Programming", items: ["Python", "C", "C++"] },
    { name: "Web Technologies", items: ["HTML5", "CSS3"] },
    { name: "Data Analysis & Databases", items: ["SQL", "MySQL", "Pandas", "NumPy", "Data Cleaning", "Exploratory Data Analysis (EDA)"] },
    { name: "Data Visualization", items: ["Matplotlib", "Seaborn", "Power BI", "Microsoft Excel"] },
    { name: "Machine Learning & AI", items: ["Regression", "Classification", "Clustering", "ML Algorithms"] },
    { name: "Development & Tools", items: ["Streamlit", "Flask", "Git", "GitHub", "VS Code", "Jupyter Notebook", "Vercel"] },
    ],
  },

  projects: {
    title: "Featured Projects",
    subtitle: "Production-grade applications demonstrating full-stack expertise",
    featuresLabel: "Key Features",
    repoLabel: "View Repository",
    liveLabel: "Live Website",
    items: [
      {
        title: "HR & Recruitment Management Suite",
        description:
          "Enterprise-grade platform unifying employee management, attendance tracking, and AI‑powered recruitment. Features role‑based panels (Admin/Employee), check‑in/out with working hours calculation, leave management with history, payslip generation, job assignment tracking, and a complete resume management system with AI‑based parsing, advanced search filters, interactive dashboards, and candidate status tracking.",
        features: [
          "Role‑based access control (Admin/Employee)",
          "Attendance: check‑in/out, late tracking, working hours, Excel export",
          "Leave management: apply, history, balance tracking",
          "Payroll: payslip records and summaries",
          "Job assignments: track assigned roles and responsibilities",
          "AI‑powered resume extraction & auto‑fill",
          "Resume search: keyword, experience, location filters",
          "Analytics dashboards: status overview (selected/pending/not selected) with pie charts",
          "Export Excel & candidate remark tracking",
        ],
        tech: [
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "MySQL",
          "ChatGPT APIs",
          "Material UI",
          "Recharts",
        ],
        repo: "",
        live: "",
      },
      {
        title: "Job Spiders – Job Platform",
        description:
          "Full‑featured job portal connecting candidates and employers. Includes job search with filters, detailed job pages, candidate dashboard with profile and resume management, application tracking, and employer tools for posting jobs and managing applicants.",
        features: [
          "50 lakh+ job listings across industries",
          "Advanced search with filters (keyword, location, category)",
          "Candidate dashboard: profile, resume upload, job alerts",
          "Application tracking with status (approved, pending, rejected)",
          "Employer side: post jobs, access verified talent pool",
          "Hiring guarantee (qualified candidates within 72 hours)",
          "Responsive UI with user ratings & testimonials",
        ],
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Authentication"],
        repo: "https://github.com/Rohan2519Y/Portfolio-Website",
        live: "https://jobspiders.com",
      },
      {
        title: "Telegram Cloud Storage",
        description:
          "A full-stack cloud storage application that uses Telegram channels as a backend storage engine. Upload, organize, and stream files of any size through a clean web interface, with real-time upload progress, folder management, and secure JWT-based authentication.",
        features: [
          "Unlimited storage via Telegram channels as backend",
          "Real-time upload progress with SSE (Server-Sent Events)",
          "Drag & drop file uploads with cancel support",
          "Folder management with nested folder navigation",
          "Inline file renaming without popups",
          "Image thumbnail previews in grid and list view",
          "Channel sync — auto-detects admin channels from Telegram",
        ],
        tech: [
          "Next.js",
          "Node.js",
          "Express.js",
          "MySQL",
          "Telegram MTProto API",
          "@mtcute/node",
          "JWT Authentication",
        ],
        repo: "https://github.com/Rohan2519Y/Cloud-Storage",
        live: "https://telegramcloudstorage.vercel.app",
      },
      {
        title: "Attendance Web/Mobile App",
        description:
          "Employee attendance tracking application with check-in/check-out functionality, working hours calculation, late tracking, and monthly summaries. Available as both web and mobile app.",
        features: [
          "Check-in/Check-out system",
          "Hours calculation",
          "Late tracking",
          "Monthly reports",
        ],
        tech: ["React.js", "React Native", "Node.js", "MySQL", "Bootstrap"],
        repo: "",
        live: "",
      },
      {
        title: "SalesBuddy",
        description:
          "Marketplace for second-hand mobiles and laptops with integrated payment gateways and SMS notifications. Features responsive UI with Redux state management.",
        features: [
          "Payment integration",
          "SMS notifications",
          "Responsive design",
          "State management",
        ],
        tech: ["React.js", "Material UI", "Redux", "REST APIs", "Payment Gateways"],
        repo: "https://github.com/Rohan2519Y/Sales-Buddy",
        live: "",
      },
      {
        title: "Electronics E-commerce App",
        description:
          "Full-featured e-commerce application built with React Native, Node.js, and Express.js. Includes secure authentication, third-party integrations, and asynchronous storage.",
        features: ["Cross-platform", "Secure auth", "Third-party integration", "Local storage"],
        tech: ["React Native", "Node.js", "Express.js", "Async Storage"],
        repo: "https://github.com/Rohan2519Y/electronicsapp",
        live: "",
      },
    ],
  },

  experience: {
    title: "Professional Experience",
    subtitle: "Data Scientist with progressive responsibility",
    items: [
      // {
      //   role: "Full Stack Developer",
      //   company: "Numeric Infosystem Pvt Ltd",
      //   period: "Oct 2025 – Present",
      //   points: [
      //     "Designed and developed production-level web applications including an Employee & HR Management System with role-based Admin and Employee panels",
      //     "Built an employee attendance web/mobile app with check-in/check-out, working hours calculation, late tracking, and monthly summaries",
      //     "Developed resume management and advanced resume search functionality with filters, status tracking, and Excel export",
      //     "Implemented AI-based resume autofill, automatically extracting candidate details from uploaded resumes",
      //     "Created interactive report dashboards for attendance, leave, payroll, and recruitment insights",
      //     "Integrated secure authentication and third-party APIs (Google APIs, SMS APIs, Gmail APIs)",
      //     "Focused on scalable architecture, performance optimization, and responsive UI/UX",
      //     "Collaborated cross-functionally with design and backend teams to deliver high-quality solutions",
      //   ],
      // },
      {
        role: "Data Science Intern",
        company: "Numeric Infosystem Pvt Ltd",
        period: "Jan 2026 – Present",
        points: [
          "Analyzed and processed datasets using Python, Pandas, and NumPy to extract meaningful insights.",
          "Performed exploratory data analysis (EDA), data cleaning, and feature engineering to prepare data for modeling.",
          "Developed and evaluated machine learning models for regression and classification tasks.",
          "Created data visualizations to identify patterns, interpret results, and communicate findings.",
        ],
      },
    ],
  },

  contact: {
    title: "Get In Touch",
    subtitle:
      "Have a project opportunity or want to discuss collaboration? Feel free to reach out.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
    location: "India",
    formTitle: "Send a Message",
    formNote: "I'll respond within 24 hours",
    labels: { name: "Full Name", email: "Email Address", subject: "Subject", message: "Message" },
    placeholders: {
      name: "John Doe",
      email: "john@example.com",
      subject: "Project collaboration?",
      message: "Tell me about your project or opportunity...",
    },
    sendBtn: "Send Message",
    sendingBtn: "Sending...",
    success: "Message sent successfully! I'll get back to you soon.",
    error: "Failed to send message. Please try again or contact me directly by email.",
    // "/api/send-email" uses the Gmail function in /api (needs Vercel). Use "" for mailto, or a Formspree URL.
    formEndpoint: "/api/send-email",
  },

  footer: {
    navTitle: "Navigation",
    connectTitle: "Connect",
    projectsLink: "Projects",
    contactLink: "Contact",
    copyright: "Mayank Rathore. All rights reserved.",
  },
};
