> Pinned source for Bun bun-v1.4.4: [docs/guides/streams/node-readable-to-uint8array.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/streams/node-readable-to-uint8array.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/node-readable-to-uint8array

# Convert a Node.js Readable to an Uint8Array

To convert a Node.js `Readable` stream to a `Uint8Array` in Bun, create a `Response` with the stream as the body, then call `bytes()`.

```ts
import { Readable } from "stream";
const stream = Readable.from(["Hello, ", "world!"]);
const buf = await new Response(stream).bytes();
```
