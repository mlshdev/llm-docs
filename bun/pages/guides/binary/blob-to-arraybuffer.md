> Pinned source for Bun bun-v1.4.3: [docs/guides/binary/blob-to-arraybuffer.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/binary/blob-to-arraybuffer.mdx)
> Canonical documentation: https://bun.com/docs/guides/binary/blob-to-arraybuffer

# Convert a Blob to an ArrayBuffer

The [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) class provides several methods for consuming its contents in different formats, including `.arrayBuffer()`.

```ts
const blob = new Blob(["hello world"]);
const buf = await blob.arrayBuffer();
```

***

See [Binary Data](https://bun.com/docs/runtime/binary-data#conversion).
