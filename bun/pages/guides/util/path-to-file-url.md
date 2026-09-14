> Pinned source for Bun bun-v1.4.2: [docs/guides/util/path-to-file-url.mdx](https://github.com/oven-sh/bun/blob/744846f844374847c902b5e7fd59b4342a51ef99/docs/guides/util/path-to-file-url.mdx)
> Canonical documentation: https://bun.com/docs/guides/util/path-to-file-url

# Convert an absolute path to a file URL

Use `Bun.pathToFileURL()` to convert an absolute path to a `file://` URL.

```ts
Bun.pathToFileURL("/path/to/file.txt").href;
// => "file:///path/to/file.txt"
```

***

See [Utils](https://bun.com/docs/runtime/utils).
