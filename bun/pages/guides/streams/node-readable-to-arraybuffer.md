> Pinned source for Bun bun-v1.4.2: [docs/guides/streams/node-readable-to-arraybuffer.mdx](https://github.com/oven-sh/bun/blob/744846f844374847c902b5e7fd59b4342a51ef99/docs/guides/streams/node-readable-to-arraybuffer.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/node-readable-to-arraybuffer

# Convert a Node.js Readable to an ArrayBuffer

To convert a Node.js `Readable` stream to an `ArrayBuffer` in Bun, create a `Response` with the stream as the body, then call `arrayBuffer()`.

```ts
import { Readable } from "stream";
const stream = Readable.from(["Hello, ", "world!"]);
const buf = await new Response(stream).arrayBuffer();
```
