> Pinned source for Bun bun-v1.4.5: [docs/guides/util/import-meta-file.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/util/import-meta-file.mdx)
> Canonical documentation: https://bun.com/docs/guides/util/import-meta-file

# Get the file name of the current file

Bun provides a handful of module-specific utilities on the [`import.meta`](https://bun.com/docs/runtime/module-resolution#import-meta) object. Use `import.meta.file` to retrieve the name of the current file.

```ts /a/b/c.ts icon="/icons/typescript.svg"
import.meta.file; // => "c.ts"
```

***

See [`import.meta`](https://bun.com/docs/runtime/module-resolution#import-meta).
