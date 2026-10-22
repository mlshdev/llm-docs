> Pinned source for Bun bun-v1.4.4: [docs/guides/streams/to-json.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/streams/to-json.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/to-json

# Convert a ReadableStream to JSON

Bun provides several conveniences for reading the contents of a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) into other formats. To read a stream and parse it as JSON, call its `json()` method.

```ts
const stream = new ReadableStream();
const json = await stream.json();
```

***

See [Bun's other `ReadableStream` conversion functions](https://bun.com/docs/runtime/utils#bun-readablestreamto).
