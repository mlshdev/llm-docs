> Release-pinned source for Bun bun-v1.4.2: [docs/guides/util/file-url-to-path.mdx](https://bun.com/docs/guides/util/file-url-to-path)

# Convert a file URL to an absolute path

Use `Bun.fileURLToPath()` to convert a `file://` URL to an absolute path.

```ts
Bun.fileURLToPath("file:///path/to/file.txt");
// => "/path/to/file.txt"
```

***

See [Utils](https://bun.com/docs/runtime/utils).
