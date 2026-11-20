> Pinned source for Bun bun-v1.4.5: [docs/guides/streams/node-readable-to-uint8array.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/streams/node-readable-to-uint8array.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/node-readable-to-uint8array

# Convert a Node.js Readable to an Uint8Array

To convert a Node.js `Readable` stream to a `Uint8Array` in Bun, create a `Response` with the stream as the body, then call `bytes()`.

```ts
import { Readable } from "stream";
const stream = Readable.from(["Hello, ", "world!"]);
const buf = await new Response(stream).bytes();
```
