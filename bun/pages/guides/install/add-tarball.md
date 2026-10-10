> Pinned source for Bun bun-v1.4.3: [docs/guides/install/add-tarball.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/install/add-tarball.mdx)
> Canonical documentation: https://bun.com/docs/guides/install/add-tarball

# Add a tarball dependency

Bun's package manager can install any publicly available tarball URL as a dependency of your project.

```sh terminal icon="terminal"
bun add zod@https://registry.npmjs.org/zod/-/zod-3.21.4.tgz
```

***

This command downloads, extracts, and installs the tarball into your project's `node_modules` directory, and adds the following line to your `package.json`:

```json package.json icon="file-json"
{
  "dependencies": {
    "zod": "https://registry.npmjs.org/zod/-/zod-3.21.4.tgz" // [!code ++]
  }
}
```

***

You can now import `zod` as usual.

```ts
import { z } from "zod";
```

***

See [`bun install`](https://bun.com/docs/pm/cli/install).
