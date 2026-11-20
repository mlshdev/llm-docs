> Pinned source for Bun bun-v1.4.5: [docs/guides/read-file/mime.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/read-file/mime.mdx)
> Canonical documentation: https://bun.com/docs/guides/read-file/mime

# Get the MIME type of a file

The `Bun.file()` function accepts a path and returns a `BunFile` instance. The `BunFile` class extends `Blob`, so use the `.type` property to read the MIME type.

```ts
const file = Bun.file("./package.json");
file.type; // application/json;charset=utf-8

const html = Bun.file("./index.html");
html.type; // text/html;charset=utf-8

const image = Bun.file("./image.png");
image.type; // image/png
```

***

See [File I/O](https://bun.com/docs/runtime/file-io) for more on working with `BunFile`.
