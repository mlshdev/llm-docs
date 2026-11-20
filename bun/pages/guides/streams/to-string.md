> Pinned source for Bun bun-v1.4.5: [docs/guides/streams/to-string.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/streams/to-string.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/to-string

# Convert a ReadableStream to a string

Bun provides several conveniences for reading the contents of a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) into other formats. To read a stream into a string, call its `text()` method.

```ts
const stream = new ReadableStream();
const str = await stream.text();
```

`Bun.readableStreamToText(stream)` does the same thing, but is deprecated in favor of `stream.text()`.

***

See [Bun's other `ReadableStream` conversion functions](https://bun.com/docs/runtime/utils#bun-readablestreamto).
