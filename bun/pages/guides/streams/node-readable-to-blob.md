> Pinned source for Bun bun-v1.4.3: [docs/guides/streams/node-readable-to-blob.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/streams/node-readable-to-blob.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/node-readable-to-blob

# Convert a Node.js Readable to a Blob

To convert a Node.js `Readable` stream to a [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) in Bun, create a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) with the stream as the body, then call [`response.blob()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/blob).

```ts
import { Readable } from "stream";
const stream = Readable.from(["Hello, ", "world!"]);
const blob = await new Response(stream).blob();
```
