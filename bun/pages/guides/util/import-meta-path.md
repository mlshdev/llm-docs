> Release-pinned source for Bun bun-v1.4.2: [docs/guides/util/import-meta-path.mdx](https://bun.com/docs/guides/util/import-meta-path)

# Get the absolute path of the current file

Bun provides a handful of module-specific utilities on the [`import.meta`](https://bun.com/docs/runtime/module-resolution#import-meta) object. Use `import.meta.path` to retrieve the absolute path of the current file.

```ts /a/b/c.ts icon="/icons/typescript.svg"
import.meta.path; // => "/a/b/c.ts"
```

***

See [`import.meta`](https://bun.com/docs/runtime/module-resolution#import-meta).
