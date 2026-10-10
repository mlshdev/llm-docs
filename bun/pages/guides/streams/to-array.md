> Pinned source for Bun bun-v1.4.3: [docs/guides/streams/to-array.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/streams/to-array.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/to-array

# Convert a ReadableStream to an array of chunks

`Bun.readableStreamToArray` reads the contents of a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) into an array of chunks.

```ts
const stream = new ReadableStream();
const chunks = await Bun.readableStreamToArray(stream);
```

***

See [Bun's other `ReadableStream` conversion functions](https://bun.com/docs/runtime/utils#bun-readablestreamto).
