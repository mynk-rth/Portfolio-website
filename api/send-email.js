// Vercel serverless function – sends the contact form by Gmail (same idea as the original project).

const nodemailer = require("nodemailer");

const clean = (v) =>
  String(v || "").trim().slice(0, 1000);

const esc = (s) =>
  s.replace(/[&<>"']/g, (c) =>
    ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[c]
  );

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const name = clean(req.body?.name);
    const email = clean(req.body?.email);
    const subject = clean(req.body?.subject);
    const message = clean(req.body?.message);

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: "Missing fields",
      });
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        error: "Invalid email",
      });
    }

    const me = process.env.EMAIL_USER;
    const password = process.env.EMAIL_PASSWORD;
    const contactTo = process.env.CONTACT_TO || me;

    if (!me || !password) {
      return res.status(500).json({
        error: "Email configuration missing",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: me,
        pass: password,
      },
    });

    const safeSubject = subject.replace(/[\r\n]+/g, " ");

    // 1. Send notification to yourself
    await transporter.sendMail({
      from: me,
      to: contactTo,
      replyTo: email,
      subject: `New Portfolio Contact: ${safeSubject}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><b>Name:</b> ${esc(name)}</p>
        <p><b>Email:</b> ${esc(email)}</p>
        <p><b>Subject:</b> ${esc(subject)}</p>
        <p style="white-space:pre-wrap">${esc(message)}</p>
      `,
    });

    // 2. Send confirmation to visitor
    await transporter.sendMail({
      from: me,
      to: email,
      subject: "Thank you for reaching out!",
      html: `
        <p>Hi ${esc(name)},</p>
        <p>I received your message and will get back to you soon.</p>
        <p style="white-space:pre-wrap">
          <b>Your message:</b>
          ${esc(message)}
        </p>
      `,
    });

    return res.status(200).json({
      message: "Email sent",
    });

  } catch (e) {
    console.error("Email sending error:", e);

    return res.status(500).json({
      error: "Failed to send email",
    });
  }
};
