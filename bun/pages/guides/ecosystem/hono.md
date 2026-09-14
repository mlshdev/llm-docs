> Pinned source for Bun bun-v1.4.2: [docs/guides/ecosystem/hono.mdx](https://github.com/oven-sh/bun/blob/744846f844374847c902b5e7fd59b4342a51ef99/docs/guides/ecosystem/hono.mdx)
> Canonical documentation: https://bun.com/docs/guides/ecosystem/hono

# Build an HTTP server using Hono and Bun

[Hono](https://github.com/honojs/hono) is a lightweight web framework designed for the edge.

```ts server.ts icon="/icons/typescript.svg"
import { Hono } from "hono";
const app = new Hono();

app.get("/", c => c.text("Hono!"));

export default app;
```

***

Use `create-hono` to get started with one of Hono's project templates. Select `bun` when prompted for a template.

```sh terminal icon="terminal"
bun create hono myapp
```

```txt
create-hono version 0.19.4
✔ Using target directory … myapp
✔ Which template do you want to use? bun
✔ Do you want to install project dependencies? Yes
✔ Which package manager do you want to use? bun
✔ Cloning the template
✔ Installing project dependencies
🎉 Copied project files
Get started with: cd myapp
```

```sh terminal icon="terminal"
cd myapp
bun install
```

***

Then start the dev server and visit [localhost:3000](http://localhost:3000).

```sh terminal icon="terminal"
bun run dev
```

***

Refer to Hono's [getting started with Bun](https://hono.dev/docs/getting-started/bun) guide.
