> Pinned source for Bun bun-v1.4.3: [docs/guides/util/deflate.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/util/deflate.mdx)
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
