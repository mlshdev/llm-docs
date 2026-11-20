> Pinned source for Bun bun-v1.4.5: [docs/guides/util/file-url-to-path.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/util/file-url-to-path.mdx)
> Canonical documentation: https://bun.com/docs/guides/util/file-url-to-path

# Convert a file URL to an absolute path

Use `Bun.fileURLToPath()` to convert a `file://` URL to an absolute path.

```ts
Bun.fileURLToPath("file:///path/to/file.txt");
// => "/path/to/file.txt"
```

***

See [Utils](https://bun.com/docs/runtime/utils).
