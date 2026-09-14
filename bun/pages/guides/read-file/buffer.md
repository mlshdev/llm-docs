> Pinned source for Bun bun-v1.4.2: [docs/guides/read-file/buffer.mdx](https://github.com/oven-sh/bun/blob/744846f844374847c902b5e7fd59b4342a51ef99/docs/guides/read-file/buffer.mdx)
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
