> Release-pinned source for Bun bun-v1.4.0: [docs/guides/streams/to-blob.mdx](https://bun.com/docs/guides/streams/to-blob)

# Convert a ReadableStream to a Blob

Bun provides several conveniences for reading the contents of a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) into other formats. To read a stream into a `Blob`, call its `blob()` method.

```ts
const stream = new ReadableStream();
const blob = await stream.blob();
```

`Bun.readableStreamToBlob(stream)` does the same thing, but is deprecated in favor of `stream.blob()`.

***

See [Bun's other `ReadableStream` conversion functions](https://bun.com/docs/runtime/utils#bun-readablestreamto).
