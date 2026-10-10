> Pinned source for Bun bun-v1.4.3: [docs/guides/util/gzip.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/util/gzip.mdx)
> Canonical documentation: https://bun.com/docs/guides/util/gzip

# Compress and decompress data with gzip

Use `Bun.gzipSync()` to compress a `Uint8Array` with gzip.

```ts
const data = Buffer.from("Hello, world!");
const compressed = Bun.gzipSync(data);
// => Uint8Array

const decompressed = Bun.gunzipSync(compressed);
// => Uint8Array
```

***

See [Utils](https://bun.com/docs/runtime/utils).
