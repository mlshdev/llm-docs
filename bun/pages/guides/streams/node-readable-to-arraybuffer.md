> Pinned source for Bun bun-v1.4.3: [docs/guides/streams/node-readable-to-arraybuffer.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/streams/node-readable-to-arraybuffer.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/node-readable-to-arraybuffer

# Convert a Node.js Readable to an ArrayBuffer

To convert a Node.js `Readable` stream to an `ArrayBuffer` in Bun, create a `Response` with the stream as the body, then call `arrayBuffer()`.

```ts
import { Readable } from "stream";
const stream = Readable.from(["Hello, ", "world!"]);
const buf = await new Response(stream).arrayBuffer();
```
