# Hub of Knowledge

A comprehensive knowledge management platform built with Next.js 15, React 19, and modern web technologies. This platform provides a centralized location for managing and sharing knowledge resources within an organization.

## Features

- 🚀 Cutting-edge tech stack: Next.js 15, React 19, TypeScript
- 🎨 Beautiful UI components with shadcn/ui and Radix UI
- 🔒 Role-based access control with admin dashboard
- 📱 Mobile-first responsive design with Tailwind CSS
- 🔍 Advanced search capabilities
- 🌐 Robust data fetching with React Query and Axios
- 📝 Clean architecture for scalability and maintainability

## Prerequisites

- Node.js 18.17 or later
- pnpm package manager (recommended)
- Git

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/hub-of-knowledge.git
cd hub-of-knowledge
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:

```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

4. Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
src/
├── app/                # Next.js app directory
│   ├── (admin)/       # Admin routes
│   └── (home)/        # Public routes
├── components/        # Reusable UI components
│   ├── layout/        # Layout components
│   └── ui/           # shadcn/ui components
├── lib/               # Core utilities and configurations
│   ├── api/          # API integration with Axios
│   └── hooks/        # Custom React hooks
├── types/             # TypeScript type definitions
└── styles/            # Global styles and Tailwind CSS
```

## Development

- Run development server: `pnpm dev`
- Build for production: `pnpm build`
- Start production server: `pnpm start`
- Run linting: `pnpm lint`

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
