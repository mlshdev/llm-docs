> Pinned source for Bun bun-v1.4.4: [docs/guides/util/file-url-to-path.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/util/file-url-to-path.mdx)
> Canonical documentation: https://bun.com/docs/guides/util/file-url-to-path

# Convert a file URL to an absolute path

Use `Bun.fileURLToPath()` to convert a `file://` URL to an absolute path.

```ts
Bun.fileURLToPath("file:///path/to/file.txt");
// => "/path/to/file.txt"
```

***

See [Utils](https://bun.com/docs/runtime/utils).
