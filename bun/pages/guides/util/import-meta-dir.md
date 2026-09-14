> Pinned source for Bun bun-v1.4.2: [docs/guides/util/import-meta-dir.mdx](https://github.com/oven-sh/bun/blob/744846f844374847c902b5e7fd59b4342a51ef99/docs/guides/util/import-meta-dir.mdx)
> Canonical documentation: https://bun.com/docs/guides/util/import-meta-dir

# Get the directory of the current file

Bun provides a handful of module-specific utilities on the [`import.meta`](https://bun.com/docs/runtime/module-resolution#import-meta) object. Use `import.meta.dir` to retrieve the absolute path to the directory containing the current file.

```ts /a/b/c.ts icon="/icons/typescript.svg"
import.meta.dir; // => "/a/b"
```

***

See [`import.meta`](https://bun.com/docs/runtime/module-resolution#import-meta).
