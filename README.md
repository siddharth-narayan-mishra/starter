# Fullstack Starter Kit  

A modern, feature-rich starter template for building production-ready applications with Next.js, Tailwind CSS, and TypeScript.

---

## License  

This project is licensed under the [MIT License](./LICENSE).

---

## Features  

### Core Technologies
- Next.js 15 (with App Router)  
- Tailwind CSS (Utility-first CSS framework)  
- TypeScript (Type-safe development)  
- Authentication with Clerk integration and persistent authorization toggle  
- Shadcn/ui (Accessible and customizable component library)  
- Convex DB (Real-time database with built-in file storage and serverless functions)  

### Performance Optimizations  
- Route Prefetching for instant page transitions  
- Optimized Images with eager loading for critical assets  
- System-aware dark/light mode with custom gradients  
- Responsive, mobile-first design  
- Real-time updates powered by Convex DB  
- Pre-built, customizable UI components  
- AI Playground with built-in chat interface  
- Ready-to-use dashboard template with subscription management  
- SEO optimization with meta tags and sitemap generation

---

## Convex DB Setup
To set up your Convex database, visit: [https://convex.dev](https://convex.dev)  

## Quick Start  

### 1. Clone the repository:  
```bash
git clone https://github.com/siddharth-narayan-mishra/starter
```  

### 2. Install dependencies:  
```bash
bun install
```  

### 3. Set up environment variables:  
```bash
touch .env.example .env.local
```  

### 4. Configure your environment variables:  
```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Convex
NEXT_PUBLIC_CONVEX_URL=
CONVEX_DEPLOYMENT=
CONVEX_ADMIN_KEY=

# Frontend
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Optional: OpenAI Integration
OPENAI_API_KEY=
```  

### 5. Run the development server:  
```bash
bun run dev
```  

Open [http://localhost:3000](http://localhost:3000) to see your application.  

---

## Project Structure  
```
├── app/
│   ├── (auth)/         # Authentication routes
│   ├── (marketing)/    # Marketing pages
│   ├── api/            # API routes
│   ├── dashboard/      # Dashboard pages
│   └── playground/     # AI Playground
├── components/
│   ├── homepage/       # Landing page components
│   ├── shared/         # Shared UI components
│   └── wrapper/        # Layout wrappers and navigation
├── config/             # Configuration files
├── convex/             # Convex DB schema and functions
├── lib/                # Utility functions
├── public/             
│   ├── images/         # Image assets
│   └── svg/            # SVG assets
└── styles/             # Global styles
```  

---

## Available Scripts  
- `bun run dev` — Start the development server  
- `bun run build` — Build the application for production  
- `bun run start` — Start the production server  
- `bun run lint` — Run ESLint  
- `bun run format` — Format the code using Prettier  