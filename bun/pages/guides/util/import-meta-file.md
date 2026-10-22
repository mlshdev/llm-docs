> Pinned source for Bun bun-v1.4.4: [docs/guides/util/import-meta-file.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/util/import-meta-file.mdx)
> Canonical documentation: https://bun.com/docs/guides/util/import-meta-file

# Get the file name of the current file

Bun provides a handful of module-specific utilities on the [`import.meta`](https://bun.com/docs/runtime/module-resolution#import-meta) object. Use `import.meta.file` to retrieve the name of the current file.

```ts /a/b/c.ts icon="/icons/typescript.svg"
import.meta.file; // => "c.ts"
```

***

See [`import.meta`](https://bun.com/docs/runtime/module-resolution#import-meta).
