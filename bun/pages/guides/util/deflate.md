> Pinned source for Bun bun-v1.4.5: [docs/guides/util/deflate.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/util/deflate.mdx)
> Canonical documentation: https://bun.com/docs/guides/util/deflate

# Compress and decompress data with DEFLATE

Use `Bun.deflateSync()` to compress a `Uint8Array` with DEFLATE.

```ts
const data = Buffer.from("Hello, world!");
const compressed = Bun.deflateSync(data);
// => Uint8Array

const decompressed = Bun.inflateSync(compressed);
// => Uint8Array
```

***

See [Utils](https://bun.com/docs/runtime/utils).
