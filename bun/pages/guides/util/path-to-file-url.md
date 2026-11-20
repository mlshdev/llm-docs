> Pinned source for Bun bun-v1.4.5: [docs/guides/util/path-to-file-url.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/util/path-to-file-url.mdx)
> Canonical documentation: https://bun.com/docs/guides/util/path-to-file-url

# Convert an absolute path to a file URL

Use `Bun.pathToFileURL()` to convert an absolute path to a `file://` URL.

```ts
Bun.pathToFileURL("/path/to/file.txt").href;
// => "file:///path/to/file.txt"
```

***

See [Utils](https://bun.com/docs/runtime/utils).
