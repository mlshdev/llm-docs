> Release-pinned source for Bun bun-v1.4.0: [docs/guides/util/path-to-file-url.mdx](https://bun.com/docs/guides/util/path-to-file-url)

# Convert an absolute path to a file URL

Use `Bun.pathToFileURL()` to convert an absolute path to a `file://` URL.

```ts
Bun.pathToFileURL("/path/to/file.txt").href;
// => "file:///path/to/file.txt"
```

***

See [Utils](https://bun.com/docs/runtime/utils).
