> Pinned source for Bun bun-v1.4.4: [docs/guides/streams/to-arraybuffer.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/streams/to-arraybuffer.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/to-arraybuffer

# Convert a ReadableStream to an ArrayBuffer

`Bun.readableStreamToArrayBuffer` reads the contents of a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) into an `ArrayBuffer`.

```ts
const stream = new ReadableStream();
const buf = await Bun.readableStreamToArrayBuffer(stream);
```

***

See [Bun's other `ReadableStream` conversion functions](https://bun.com/docs/runtime/utils#bun-readablestreamto).
