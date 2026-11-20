> Pinned source for Bun bun-v1.4.5: [docs/guides/streams/to-json.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/streams/to-json.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/to-json

# Convert a ReadableStream to JSON

Bun provides several conveniences for reading the contents of a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) into other formats. To read a stream and parse it as JSON, call its `json()` method.

```ts
const stream = new ReadableStream();
const json = await stream.json();
```

***

See [Bun's other `ReadableStream` conversion functions](https://bun.com/docs/runtime/utils#bun-readablestreamto).
