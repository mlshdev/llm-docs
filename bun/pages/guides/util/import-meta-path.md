> Pinned source for Bun bun-v1.4.3: [docs/guides/util/import-meta-path.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/util/import-meta-path.mdx)
> Canonical documentation: https://bun.com/docs/guides/util/import-meta-path

# Get the absolute path of the current file

Bun provides a handful of module-specific utilities on the [`import.meta`](https://bun.com/docs/runtime/module-resolution#import-meta) object. Use `import.meta.path` to retrieve the absolute path of the current file.

```ts /a/b/c.ts icon="/icons/typescript.svg"
import.meta.path; // => "/a/b/c.ts"
```

***

See [`import.meta`](https://bun.com/docs/runtime/module-resolution#import-meta).
