> Pinned source for Bun bun-v1.4.4: [docs/guides/util/import-meta-path.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/util/import-meta-path.mdx)
> Canonical documentation: https://bun.com/docs/guides/util/import-meta-path

# Get the absolute path of the current file

Bun provides a handful of module-specific utilities on the [`import.meta`](https://bun.com/docs/runtime/module-resolution#import-meta) object. Use `import.meta.path` to retrieve the absolute path of the current file.

```ts /a/b/c.ts icon="/icons/typescript.svg"
import.meta.path; // => "/a/b/c.ts"
```

***

See [`import.meta`](https://bun.com/docs/runtime/module-resolution#import-meta).
