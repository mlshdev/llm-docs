> Pinned source for Bun bun-v1.4.5: [docs/guides/streams/to-buffer.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/streams/to-buffer.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/to-buffer

# Convert a ReadableStream to a Buffer

To convert a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) to a `Buffer`, read its contents into an [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) with `Bun.readableStreamToArrayBuffer`, then create a [`Buffer`](https://nodejs.org/api/buffer.html) that points to it.

```ts
const stream = new ReadableStream();
const arrBuf = await Bun.readableStreamToArrayBuffer(stream);
const nodeBuf = Buffer.from(arrBuf);
```

***

See [Bun's other `ReadableStream` conversion functions](https://bun.com/docs/runtime/utils#bun-readablestreamto).
