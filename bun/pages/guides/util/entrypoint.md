> Pinned source for Bun bun-v1.4.5: [docs/guides/util/entrypoint.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/util/entrypoint.mdx)
> Canonical documentation: https://bun.com/docs/guides/util/entrypoint

# Check if the current file is the entrypoint

Bun provides a handful of module-specific utilities on the [`import.meta`](https://bun.com/docs/runtime/module-resolution#import-meta) object. Use `import.meta.main` to check if the current file is the entrypoint of the current process.

```ts index.ts icon="/icons/typescript.svg"
if (import.meta.main) {
  // this file is directly executed with `bun run`
} else {
  // this file is being imported by another file
}
```

***

See [`import.meta`](https://bun.com/docs/runtime/module-resolution#import-meta).
