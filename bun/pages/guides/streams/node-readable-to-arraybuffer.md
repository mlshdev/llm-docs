> Pinned source for Bun bun-v1.4.4: [docs/guides/streams/node-readable-to-arraybuffer.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/streams/node-readable-to-arraybuffer.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/node-readable-to-arraybuffer

# Convert a Node.js Readable to an ArrayBuffer

To convert a Node.js `Readable` stream to an `ArrayBuffer` in Bun, create a `Response` with the stream as the body, then call `arrayBuffer()`.

```ts
import { Readable } from "stream";
const stream = Readable.from(["Hello, ", "world!"]);
const buf = await new Response(stream).arrayBuffer();
```
