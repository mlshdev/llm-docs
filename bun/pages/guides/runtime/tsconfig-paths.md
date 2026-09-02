> Release-pinned source for Bun bun-v1.4.0: [docs/guides/runtime/tsconfig-paths.mdx](https://bun.com/docs/guides/runtime/tsconfig-paths)

# Re-map import paths

Bun reads the `paths` field in your `tsconfig.json` to re-write import paths. This is useful for aliasing package names or avoiding long relative paths.

```json tsconfig.json icon="file-json"
{
  "compilerOptions": {
    "paths": {
      "my-custom-name": ["./node_modules/zod"],
      "@components/*": ["./src/components/*"]
    }
  }
}
```

***

With this `tsconfig.json`, Bun re-writes the following imports:

```ts tsconfig.ts icon="/icons/typescript.svg"
import { z } from "my-custom-name"; // imports from "zod"
import { Button } from "@components/Button"; // imports from "./src/components/Button"
```

***

See [TypeScript](https://bun.com/docs/runtime/typescript).
