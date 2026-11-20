> Pinned source for Bun bun-v1.4.5: [docs/guides/streams/to-arraybuffer.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/streams/to-arraybuffer.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/to-arraybuffer

# Convert a ReadableStream to an ArrayBuffer

`Bun.readableStreamToArrayBuffer` reads the contents of a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) into an `ArrayBuffer`.

```ts
const stream = new ReadableStream();
const buf = await Bun.readableStreamToArrayBuffer(stream);
```

***

See [Bun's other `ReadableStream` conversion functions](https://bun.com/docs/runtime/utils#bun-readablestreamto).
