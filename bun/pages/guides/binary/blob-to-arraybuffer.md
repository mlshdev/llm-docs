> Release-pinned source for Bun bun-v1.4.2: [docs/guides/binary/blob-to-arraybuffer.mdx](https://bun.com/docs/guides/binary/blob-to-arraybuffer)

# Convert a Blob to an ArrayBuffer

The [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) class provides several methods for consuming its contents in different formats, including `.arrayBuffer()`.

```ts
const blob = new Blob(["hello world"]);
const buf = await blob.arrayBuffer();
```

***

See [Binary Data](https://bun.com/docs/runtime/binary-data#conversion).
