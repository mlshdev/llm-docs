> Pinned source for Bun bun-v1.4.3: [docs/guides/streams/node-readable-to-uint8array.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/streams/node-readable-to-uint8array.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/node-readable-to-uint8array

# Convert a Node.js Readable to an Uint8Array

To convert a Node.js `Readable` stream to a `Uint8Array` in Bun, create a `Response` with the stream as the body, then call `bytes()`.

```ts
import { Readable } from "stream";
const stream = Readable.from(["Hello, ", "world!"]);
const buf = await new Response(stream).bytes();
```
