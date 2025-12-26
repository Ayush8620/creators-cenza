import nodemailer from "nodemailer";

const ALLOWED_ORIGINS = [
    "https://example.com",
    "https://www.example.com",
    "http://localhost:3000",
    "http://localhost",
    "http://127.0.0.1",
    "http://127.0.0.1:5500",
    "http://localhost:5500"
];

export default async function handler(req, res) {
    const origin = req.headers.origin;

    if (origin && ALLOWED_ORIGINS.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
        res.setHeader("Vary", "Origin");
    }

    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // ✅ FIXED OPTIONS HANDLER
    if (req.method === "OPTIONS") {
        return res.status(200).json({ ok: true });
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    // Allow same-origin requests (no Origin header) as well as whitelisted origins
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
        return res.status(403).json({ error: "Forbidden origin" });
    }

    const body = req.body || {};

    const to = body.to || body.email;
    const name = body.name || 'there';

    // ✅ HARD-CODED
    const subject = "Application Received – Crensa Creator Program";

    const html = `
  <div style="font-family: Arial, sans-serif; line-height: 1.6;">
    <h2>Hello ${name},</h2>
    <p>Thank you for applying to the <strong>Crensa Creator Program</strong>.</p>
    <p>Your application has been received and is currently under review.</p>
    <p>We’ll get back to you soon if you’re shortlisted.</p>
    <br/>
    <p>Best regards,<br><strong>Crensa Team</strong></p>
  </div>
`;


    if (!to) {
        return res.status(400).json({ error: "Missing 'to' field" });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('Email credentials not set');
        return res.status(500).json({ error: "Email credentials not configured" });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: process.env.EMAIL_SECURE === 'true',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: `"Crensa" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html
        });

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error('Email send error:', err);
        return res.status(500).json({ error: "Email failed", details: String(err.message || err) });
    }
}
