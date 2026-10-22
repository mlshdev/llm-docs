> Pinned source for Bun bun-v1.4.4: [docs/guides/streams/node-readable-to-blob.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/streams/node-readable-to-blob.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/node-readable-to-blob

# Convert a Node.js Readable to a Blob

To convert a Node.js `Readable` stream to a [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) in Bun, create a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) with the stream as the body, then call [`response.blob()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/blob).

```ts
import { Readable } from "stream";
const stream = Readable.from(["Hello, ", "world!"]);
const blob = await new Response(stream).blob();
```
