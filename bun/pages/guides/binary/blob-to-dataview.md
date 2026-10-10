> Pinned source for Bun bun-v1.4.3: [docs/guides/binary/blob-to-dataview.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/binary/blob-to-dataview.mdx)
> Canonical documentation: https://bun.com/docs/guides/binary/blob-to-dataview

# Convert a Blob to a DataView

The [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) class provides several methods for consuming its contents in different formats. Read the contents into an `ArrayBuffer` with `.arrayBuffer()`, then create a `DataView` from the buffer.

```ts
const blob = new Blob(["hello world"]);
const arr = new DataView(await blob.arrayBuffer());
```

***

See [Binary Data](https://bun.com/docs/runtime/binary-data#conversion).
