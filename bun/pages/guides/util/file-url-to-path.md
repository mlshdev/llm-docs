> Pinned source for Bun bun-v1.4.3: [docs/guides/util/file-url-to-path.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/util/file-url-to-path.mdx)
> Canonical documentation: https://bun.com/docs/guides/util/file-url-to-path

# Convert a file URL to an absolute path

Use `Bun.fileURLToPath()` to convert a `file://` URL to an absolute path.

```ts
Bun.fileURLToPath("file:///path/to/file.txt");
// => "/path/to/file.txt"
```

***

See [Utils](https://bun.com/docs/runtime/utils).
