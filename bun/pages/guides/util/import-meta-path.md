> Pinned source for Bun bun-v1.4.5: [docs/guides/util/import-meta-path.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/util/import-meta-path.mdx)
> Canonical documentation: https://bun.com/docs/guides/util/import-meta-path

# Get the absolute path of the current file

Bun provides a handful of module-specific utilities on the [`import.meta`](https://bun.com/docs/runtime/module-resolution#import-meta) object. Use `import.meta.path` to retrieve the absolute path of the current file.

```ts /a/b/c.ts icon="/icons/typescript.svg"
import.meta.path; // => "/a/b/c.ts"
```

***

See [`import.meta`](https://bun.com/docs/runtime/module-resolution#import-meta).
