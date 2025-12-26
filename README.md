# Crensa Creator Beta Program Landing Page

A modern, responsive landing page for the Crensa Creator Beta Program with form submission and database integration.

## 🌐 Live Site
**URL:** https://crensa-3545a.web.app

## 📁 Project Structure
```
Crensa/
├── public/
│   └── index.html          # Main landing page
├── .firebase/              # Firebase cache (auto-generated)
├── firebase.json           # Firebase hosting configuration
├── .firebaserc            # Firebase project settings
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## 🚀 Features
- ✅ Responsive design (mobile & desktop)
- ✅ Interactive swipe cards for mobile
- ✅ Testimonial slideshow
- ✅ Supabase database integration
- ✅ Form with scroll effects
- ✅ Email confirmation ready (EmailJS)
- ✅ Professional animations

## 🔧 Technologies Used
- **Frontend:** HTML5, Tailwind CSS, JavaScript
- **Hosting:** Firebase Hosting
- **Database:** Supabase
- **Email:** EmailJS (optional)

## 📝 Form Fields
- Full Name
- Email Address
- Mobile Number
- Creator URL/Portfolio Link
- Example Video Link (optional)
- Story Idea (optional)


## 🎨 Color Palette
- Navy: `#01164D`
- Green: `#62CF6F`
- Teal: `#00BA9C`
- Lime: `#D5E73C`
- Yellow: `#CCE53F`
- Magenta: `#85125E`
- Pink: `#C81D84`
- Rose: `#D9208F`

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## SCREENSHOT 
<img width="1917" height="880" alt="image" src="https://github.com/user-attachments/assets/615cb244-9ba1-4dd8-833d-335a98c3ae31" />


## 📄 License
All rights reserved - Crensa

## 👥 Contact
For support or inquiries, contact the Crensa team.

---

## Local development: run the API endpoint locally ✅

This project is primarily a static site, but for local development you can run a tiny Express dev server to host the `/api/send-email` endpoint:

1. Copy `.env.example` to `.env` and add the required values (especially `EMAIL_USER` and `EMAIL_PASS`).

2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

4. The server will be available at `http://localhost:3000` and the endpoint at `http://localhost:3000/api/send-email`.

Notes:
- For production, deploy `api/send-email.js` to your serverless platform (Vercel/Netlify) or run a proper backend. The local `server.js` is for development only.
- If your front-end is served from a different origin (e.g., Live Server at `http://127.0.0.1:5500`) ensure that origin is included in `ALLOWED_ORIGINS` in `api/send-email.js` or set `Origin` appropriately.
