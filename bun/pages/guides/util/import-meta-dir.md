> Pinned source for Bun bun-v1.4.4: [docs/guides/util/import-meta-dir.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/util/import-meta-dir.mdx)
> Canonical documentation: https://bun.com/docs/guides/util/import-meta-dir

# Get the directory of the current file

Bun provides a handful of module-specific utilities on the [`import.meta`](https://bun.com/docs/runtime/module-resolution#import-meta) object. Use `import.meta.dir` to retrieve the absolute path to the directory containing the current file.

```ts /a/b/c.ts icon="/icons/typescript.svg"
import.meta.dir; // => "/a/b"
```

***

See [`import.meta`](https://bun.com/docs/runtime/module-resolution#import-meta).
