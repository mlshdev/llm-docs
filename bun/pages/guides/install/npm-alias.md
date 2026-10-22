> Pinned source for Bun bun-v1.4.4: [docs/guides/install/npm-alias.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/install/npm-alias.mdx)
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
