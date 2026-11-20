> Pinned source for Bun bun-v1.4.5: [docs/guides/util/gzip.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/util/gzip.mdx)
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
