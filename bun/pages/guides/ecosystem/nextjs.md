> Release-pinned source for Bun bun-v1.4.2: [docs/guides/ecosystem/nextjs.mdx](https://bun.com/docs/guides/ecosystem/nextjs)

# Build an app with Next.js and Bun

[Next.js](https://nextjs.org/) is a React framework for building full-stack web applications. It supports server-side rendering, static site generation, and API routes. Bun installs packages fast and can run Next.js development and production servers.

***

1. Use the interactive CLI to scaffold a new Next.js project and install its dependencies.

   ```sh terminal icon="terminal"
   bun create next-app@latest my-bun-app
   ```
2. Change to the project directory and run the dev server with Bun.

   ```sh terminal icon="terminal"
   cd my-bun-app
   bun --bun run dev
   ```

   This starts the Next.js dev server with Bun's runtime.

   Open [`http://localhost:3000`](http://localhost:3000) in your browser to see the result. Changes you make to `app/page.tsx` are hot-reloaded in the browser.
3. Prefix the Next.js CLI commands in your `package.json` scripts with `bun --bun` so that Bun executes the Next.js CLI for `dev`, `build`, and `start`.

   ```json package.json icon="file-json"
   {
     "scripts": {
       "dev": "bun --bun next dev", // [!code ++]
       "build": "bun --bun next build", // [!code ++]
       "start": "bun --bun next start" // [!code ++]
     }
   }
   ```

***

## Hosting

- [Vercel](https://bun.com/docs/guides/deployment/vercel)

  Deploy on Vercel
- [Railway](https://bun.com/docs/guides/deployment/railway)

  Deploy on Railway
- [DigitalOcean](https://bun.com/docs/guides/deployment/digital-ocean)

  Deploy on DigitalOcean
- [AWS Lambda](https://bun.com/docs/guides/deployment/aws-lambda)

  Deploy on AWS Lambda
- [Google Cloud Run](https://bun.com/docs/guides/deployment/google-cloud-run)

  Deploy on Google Cloud Run
- [Render](https://bun.com/docs/guides/deployment/render)

  Deploy on Render

***

## Templates

- [Bun + Next.js Basic Starter](https://github.com/bun-templates/bun-nextjs-basic)

  A basic App Router starter with Bun, Next.js, and Tailwind CSS.
- [Todo App with Next.js + Bun](https://github.com/bun-templates/bun-nextjs-todo)

  A full-stack todo application built with Bun, Next.js, and PostgreSQL.

***

Refer to the [Next.js documentation](https://nextjs.org/docs) for more on building and deploying Next.js applications.
