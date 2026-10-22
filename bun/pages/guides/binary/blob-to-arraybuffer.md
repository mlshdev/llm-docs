> Pinned source for Bun bun-v1.4.4: [docs/guides/binary/blob-to-arraybuffer.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/binary/blob-to-arraybuffer.mdx)
> Canonical documentation: https://bun.com/docs/guides/binary/blob-to-arraybuffer

# Convert a Blob to an ArrayBuffer

The [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) class provides several methods for consuming its contents in different formats, including `.arrayBuffer()`.

```ts
const blob = new Blob(["hello world"]);
const buf = await blob.arrayBuffer();
```

***

See [Binary Data](https://bun.com/docs/runtime/binary-data#conversion).
