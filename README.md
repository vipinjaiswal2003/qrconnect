# 📦 QR Code Generator (Vercel Deployable)

A simple **QR Code Generator Web App** using `qr-image` and Vercel serverless functions.

## 🚀 Features
- Input a URL and generate a QR code instantly
- Deployed on **Vercel**
- Lightweight and simple

## 📂 Project Structure
```
qr-generator/
├── api/
│   └── generate.js   # Serverless function to generate QR
├── public/
│   └── index.html    # Frontend form
├── package.json
└── vercel.json
```

## ⚡ Installation (Local Development)
```bash
git clone https://github.com/your-username/qr-generator.git
cd qr-generator
npm install
npm run dev
```

## 🌐 Deploy on Vercel
1. Push this project to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import repository and deploy
4. Visit your app 🎉

## 🔗 Usage
After deployment, open:
```
https://your-app.vercel.app
```
Enter a URL → Get a QR code image.

---
Made with ❤️ using Node.js and Vercel
