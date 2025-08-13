# Orbitz Technology Website

A professional IT services website built with Next.js, featuring cutting-edge design and optimal performance.

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/orbitiz-technology)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## 🛠️ Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/orbitiz-technology.git
   cd orbitiz-technology
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect GitHub Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Build Settings**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `out`
   - Install Command: `npm install`

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

### Manual Deployment

```bash
# Build for production
npm run build

# The output will be in the 'out' directory
# Upload the 'out' directory to any static hosting service
```

## 🔧 Environment Variables

For production deployment, set these environment variables:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📁 Project Structure

```
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/          # React components
│   ├── home/           # Home page components
│   ├── layout/         # Layout components
│   └── ui/             # Reusable UI components
├── lib/                # Utility functions
├── public/             # Static assets
└── styles/             # Additional styles
```

## 🎨 Features

- ⚡ **Next.js 13** with App Router
- 🎨 **Tailwind CSS** for styling
- 🌟 **Framer Motion** for animations
- 📱 **Fully Responsive** design
- 🔍 **SEO Optimized** with proper metadata
- 🚀 **Performance Optimized** for fast loading
- 🎯 **Professional Design** for enterprise trust

## 🛡️ Security & Performance

- **CSP Headers** for security
- **Image Optimization** with Next.js
- **Code Splitting** for faster loading
- **SEO Meta Tags** for better visibility
- **Social Media Cards** for sharing

## 📞 Support

For support and questions:
- Email: support@orbitztechnology.com
- Website: [orbitztechnology.com](https://orbitztechnology.com)

---

Built with ❤️ by Orbitz Technology Team
