
/*
    data.js
    This file contains all portfolio content.
    You can edit your details, skills, projects and experience here.
*/

const SITE = {

    // Basic website details
    title: "Mayank Rathore - Data Science Intern",

    description:
        "Data Science & AI/ML, specializing in Python, SQL, Pandas, exploratory data analysis, and predictive modeling.",

    logo: "assets/portfoliologo.jpg",
    resume: "assets/resume.docx",
    resumeFileName: "Mayank_Rathore_Resume.docx",


    // Hero section
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


    // Contact and social links
    links: {
        email: "mayank19rathore82@gmail.com",
        phone: "+91 9131637561",
        phoneLink: "+919131637561",
        github: "https://github.com/mynk-rth",
        linkedin: "https://linkedin.com/in/mynk-rth",
    },


    // About section
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
                text: "Python, SQL, Pandas, NumPy, Data Analysis, ML, DL & AI",
            },
            {
                label: "Experience",
                big: "10+ Months",
                text: "Years of professional development experience",
            },
            {
                label: "Education",
                big: "B.E. CSE 4<sup>th</sup> Year",
                text: "Bachelor of Engineering, Jiwaji University",
            },
        ],
    },


    // Skills section
    skills: {
        title: "Technical Expertise",

        subtitle:
            "Technologies and tools for Data Science, Machine Learning, and AI",

        groups: [
            {
                name: "Programming",
                items: ["Python", "C", "C++"],
            },
            {
                name: "Web Technologies",
                items: ["HTML5", "CSS3"],
            },
            {
                name: "Data Analysis & Databases",
                items: [
                    "SQL",
                    "MySQL",
                    "Pandas",
                    "NumPy",
                    "Data Cleaning",
                    "Exploratory Data Analysis (EDA)",
                ],
            },
            {
                name: "Data Visualization",
                items: [
                    "Matplotlib",
                    "Seaborn",
                    "Power BI",
                    "Microsoft Excel",
                ],
            },
            {
                name: "Machine Learning & AI",
                items: [
                    "Regression",
                    "Classification",
                    "Clustering",
                    "ML Algorithms",
                ],
            },
            {
                name: "Development & Tools",
                items: [
                    "Streamlit",
                    "Flask",
                    "Git",
                    "GitHub",
                    "VS Code",
                    "Jupyter Notebook",
                    "Vercel",
                ],
            },
        ],
    },


    // Projects section
    projects: {
        title: "Projects",
        subtitle: "A place for projects I can personally share.",
        emptyState: "I'm preparing projects to share here. Check back soon.",

        featuresLabel: "Key Features",
        repoLabel: "View Repository",
        liveLabel: "Live Website",

        items: [],
    },


    // Experience section
    experience: {
        title: "Professional Experience",
        subtitle: "Data Scientist with progressive responsibility",

        items: [
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


    // Contact section
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

        labels: {
            name: "Full Name",
            email: "Email Address",
            subject: "Subject",
            message: "Message",
        },

        placeholders: {
            name: "John Doe",
            email: "john@example.com",
            subject: "Project collaboration?",
            message: "Tell me about your project or opportunity...",
        },

        sendBtn: "Send Message",
        sendingBtn: "Sending...",

        success:
            "Message sent successfully! I'll get back to you soon.",

        error:
            "Failed to send message. Please try again or contact me directly by email.",

        // Contact form API endpoint
        formEndpoint: "/api/send-email",
    },


    // Footer section
    footer: {
        navTitle: "Navigation",
        connectTitle: "Connect",
        projectsLink: "Projects",
        contactLink: "Contact",
        copyright: "Mayank Rathore. All rights reserved.",
    },

};
