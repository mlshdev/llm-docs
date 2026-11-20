> Pinned source for Bun bun-v1.4.5: [docs/guides/streams/node-readable-to-arraybuffer.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/streams/node-readable-to-arraybuffer.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/node-readable-to-arraybuffer

# Convert a Node.js Readable to an ArrayBuffer

To convert a Node.js `Readable` stream to an `ArrayBuffer` in Bun, create a `Response` with the stream as the body, then call `arrayBuffer()`.

```ts
import { Readable } from "stream";
const stream = Readable.from(["Hello, ", "world!"]);
const buf = await new Response(stream).arrayBuffer();
```
