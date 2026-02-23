<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white" />
</p>

<h1 align="center">🛡️ CipherGuard</h1>

<p align="center">
  <strong>AI-Powered Password Security Intelligence</strong>
</p>

<p align="center">
  <em>A real-time password strength analyzer with a modern glassmorphism UI, built for developers who care about security — and aesthetics.</em>
</p>

<br />

<p align="center">
  <img src="./preview.png" alt="CipherGuard Preview" width="720" />
</p>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Real-time Strength Analysis** | Instantly evaluates password security as you type |
| 🧠 **Entropy Calculation** | Mathematical entropy score (log₂(R^L)) for precise measurement |
| ⏱️ **Brute Force Time Estimation** | Shows how long it would take to crack offline |
| ✅ **Protocol Checklist** | Visual requirement tracker — length, uppercase, lowercase, numbers, symbols |
| 🤖 **AI Secure Generator** | One-click generation of cryptographically strong 18-character passwords |
| 📋 **Copy to Clipboard** | Generate & copy in a single click |
| 💡 **Smart Suggestions** | Context-aware tips to improve weak passwords |
| 👁️ **Password Visibility Toggle** | Show/hide password with a single click |
| 📱 **Fully Responsive** | Looks great on mobile, tablet, and desktop |

---

## 🎨 Design

CipherGuard features a **modern SaaS glassmorphism** design:

- 🌌 **Dark gradient background** with soft indigo, purple & cyan radial glows
- 💎 **Centered glass card** — `backdrop-blur-xl`, `rounded-3xl`, `shadow-2xl`
- ✍️ **Clean typography** — Inter + Space Grotesk
- 🎭 **Gradient accents** — Indigo → Purple → Cyan
- ⚡ **Smooth animations** — Framer Motion fade-ins, hover scales, progress bars
- 🧊 **No cyberpunk overload** — professional, portfolio-ready aesthetic

---

## 🛠️ Tech Stack

```
Frontend        React 19 + TypeScript 5.9
Build Tool      Vite 7
Styling         Tailwind CSS 4.2 (via @tailwindcss/vite)
Animations      Framer Motion 12
Icons           Lucide React
Password Logic  zxcvbn (by Dropbox)
Fonts           Inter, Space Grotesk (Google Fonts)
```

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) v20+ recommended
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/cipherguard.git
cd cipherguard

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
pwd/
├── index.html                    # Entry HTML with Google Fonts
├── vite.config.ts                # Vite + React + Tailwind CSS config
├── package.json
├── tsconfig.json
└── src/
    ├── main.tsx                  # React entry point
    ├── index.css                 # Global styles + Tailwind theme
    ├── App.tsx                   # Hero layout + glass card + state management
    ├── utils/
    │   └── passwordAnalyzer.ts   # Entropy calc, zxcvbn integration, generator
    └── components/
        ├── PasswordInput.tsx     # Styled input with visibility toggle
        ├── StrengthMeter.tsx     # Animated progress bar + step indicators
        ├── SecurityAnalysis.tsx  # Entropy/crack time cards + checklist + tips
        └── PasswordGenerator.tsx # Gradient generate button + copy
```

---

## 🔒 Security & Privacy

| Principle | Implementation |
|---|---|
| 🚫 **No storage** | Passwords are never saved, logged, or transmitted |
| 🏠 **100% client-side** | All analysis runs locally in the browser |
| 🔇 **No console logging** | Password values are never written to console |
| 🌐 **No network calls** | Zero external API calls — fully offline capable |

---

## 📊 How It Works

CipherGuard combines **mathematical entropy analysis** with **pattern-based detection** powered by Dropbox's [zxcvbn](https://github.com/dropbox/zxcvbn) library:

1. **Character Pool Analysis** — Calculates the total character space (lowercase, uppercase, digits, symbols)
2. **Entropy Score** — `E = log₂(R^L)` where R = pool size, L = password length
3. **Pattern Detection** — Detects dictionary words, keyboard patterns, dates, repeated characters
4. **Crack Time Estimation** — Estimates brute force time assuming 10,000 hashes/second
5. **Scoring** — Combines all factors into a 0–4 score (Weak → Unbreakable)

---

## 🎯 Scoring System

| Score | Label | Color | Meaning |
|:---:|---|---|---|
| 0–1 | **Weak** | 🔴 Red | Easily guessable, immediate risk |
| 2 | **Moderate** | 🟡 Amber | Some protection, but improvable |
| 3 | **Strong** | 🟢 Green | Good protection against most attacks |
| 4 | **Unbreakable** | 🔵 Cyan | Maximum security, excellent entropy |

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <strong>Built with ❤️ by Logan</strong>
</p>

<p align="center">
  <sub>If you found this useful, consider giving it a ⭐</sub>
</p>
