> Pinned source for Bun bun-v1.4.5: [docs/guides/read-file/uint8array.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/read-file/uint8array.mdx)
> Canonical documentation: https://bun.com/docs/guides/read-file/uint8array

# Read a file to a Uint8Array

The `Bun.file()` function accepts a path and returns a `BunFile` instance. `BunFile` extends `Blob`, so you can read the file lazily in a variety of formats.

To read the file into a `Uint8Array`, use `.bytes()`.

```ts
const path = "/path/to/package.json";
const file = Bun.file(path);

const byteArray = await file.bytes();

byteArray[0]; // first byte
byteArray.length; // length of byteArray
```

***

See [Typed arrays](https://bun.com/docs/runtime/binary-data#typedarray) for more on working with `Uint8Array` and other binary data formats in Bun.
