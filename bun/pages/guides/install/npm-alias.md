> Pinned source for Bun bun-v1.4.3: [docs/guides/install/npm-alias.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/install/npm-alias.mdx)
> Canonical documentation: https://bun.com/docs/guides/install/npm-alias

# Install a package under a different name

To install an npm package under an alias:

```sh terminal icon="terminal"
bun add my-custom-name@npm:zod
```

***

You can now import the `zod` package as `my-custom-name`.

```ts index.ts icon="/icons/typescript.svg"
import { z } from "my-custom-name";

z.string();
```

***

See [`bun install`](https://bun.com/docs/pm/cli/install).
