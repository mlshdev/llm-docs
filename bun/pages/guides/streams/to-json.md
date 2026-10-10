> Pinned source for Bun bun-v1.4.3: [docs/guides/streams/to-json.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/streams/to-json.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/to-json

# Convert a ReadableStream to JSON

Bun provides several conveniences for reading the contents of a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) into other formats. To read a stream and parse it as JSON, call its `json()` method.

```ts
const stream = new ReadableStream();
const json = await stream.json();
```

***

See [Bun's other `ReadableStream` conversion functions](https://bun.com/docs/runtime/utils#bun-readablestreamto).
