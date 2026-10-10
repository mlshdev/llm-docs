> Pinned source for Bun bun-v1.4.3: [docs/guides/streams/to-buffer.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/streams/to-buffer.mdx)
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
