> Pinned source for Bun bun-v1.4.2: [docs/guides/util/file-url-to-path.mdx](https://github.com/oven-sh/bun/blob/744846f844374847c902b5e7fd59b4342a51ef99/docs/guides/util/file-url-to-path.mdx)
> Canonical documentation: https://bun.com/docs/guides/util/file-url-to-path

# Convert a file URL to an absolute path

Use `Bun.fileURLToPath()` to convert a `file://` URL to an absolute path.

```ts
Bun.fileURLToPath("file:///path/to/file.txt");
// => "/path/to/file.txt"
```

***

See [Utils](https://bun.com/docs/runtime/utils).
