> Release-pinned source for Bun bun-v1.4.2: [docs/guides/binary/blob-to-dataview.mdx](https://bun.com/docs/guides/binary/blob-to-dataview)

# Convert a Blob to a DataView

The [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) class provides several methods for consuming its contents in different formats. Read the contents into an `ArrayBuffer` with `.arrayBuffer()`, then create a `DataView` from the buffer.

```ts
const blob = new Blob(["hello world"]);
const arr = new DataView(await blob.arrayBuffer());
```

***

See [Binary Data](https://bun.com/docs/runtime/binary-data#conversion).
