> Pinned source for Bun bun-v1.4.4: [docs/guides/read-file/buffer.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/read-file/buffer.mdx)
> Canonical documentation: https://bun.com/docs/guides/read-file/buffer

# Read a file to a Buffer

The `Bun.file()` function accepts a path and returns a `BunFile` instance. `BunFile` extends `Blob`, so you can read the file lazily in a variety of formats.

To read the file into a `Buffer`, read it as an `ArrayBuffer` with `.arrayBuffer()`, then pass the result to `Buffer.from()`.

```ts index.ts icon="/icons/typescript.svg"
const path = "/path/to/package.json";
const file = Bun.file(path);

const arrbuf = await file.arrayBuffer();
const buffer = Buffer.from(arrbuf);
```

***

See [Buffer](https://bun.com/docs/runtime/binary-data#buffer) for more on working with `Buffer` and other binary data formats in Bun.
