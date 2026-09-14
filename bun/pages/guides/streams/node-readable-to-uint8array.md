> Pinned source for Bun bun-v1.4.2: [docs/guides/streams/node-readable-to-uint8array.mdx](https://github.com/oven-sh/bun/blob/744846f844374847c902b5e7fd59b4342a51ef99/docs/guides/streams/node-readable-to-uint8array.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/node-readable-to-uint8array

# Convert a Node.js Readable to an Uint8Array

To convert a Node.js `Readable` stream to a `Uint8Array` in Bun, create a `Response` with the stream as the body, then call `bytes()`.

```ts
import { Readable } from "stream";
const stream = Readable.from(["Hello, ", "world!"]);
const buf = await new Response(stream).bytes();
```
