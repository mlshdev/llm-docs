> Pinned source for Bun bun-v1.4.4: [docs/guides/streams/to-typedarray.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/streams/to-typedarray.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/to-typedarray

# Convert a ReadableStream to a Uint8Array

To convert a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) to a `Uint8Array`, read its contents into an [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) with `Bun.readableStreamToArrayBuffer`, then create a [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) that points to the buffer.

```ts
const stream = new ReadableStream();
const buf = await Bun.readableStreamToArrayBuffer(stream);
const uint8 = new Uint8Array(buf);
```

The stream's `bytes()` method converts to a `Uint8Array` directly.

```ts
const stream = new ReadableStream();
const uint8 = await stream.bytes();
```

`Bun.readableStreamToBytes(stream)` does the same thing, but is deprecated in favor of `stream.bytes()`.

***

See [Bun's other `ReadableStream` conversion functions](https://bun.com/docs/runtime/utils#bun-readablestreamto).
