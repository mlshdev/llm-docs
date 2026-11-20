> Pinned source for Bun bun-v1.4.5: [docs/guides/streams/node-readable-to-string.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/streams/node-readable-to-string.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/node-readable-to-string

# Convert a Node.js Readable to a string

To convert a Node.js `Readable` stream to a string in Bun, create a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) with the stream as the body, then call [`response.text()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/text).

```ts
import { Readable } from "stream";
const stream = Readable.from([Buffer.from("Hello, world!")]);
const text = await new Response(stream).text();
console.log(text); // "Hello, world!"
```
