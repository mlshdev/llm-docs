> Pinned source for Bun bun-v1.4.3: [docs/guides/streams/node-readable-to-string.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/streams/node-readable-to-string.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/node-readable-to-string

# Convert a Node.js Readable to a string

To convert a Node.js `Readable` stream to a string in Bun, create a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) with the stream as the body, then call [`response.text()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/text).

```ts
import { Readable } from "stream";
const stream = Readable.from([Buffer.from("Hello, world!")]);
const text = await new Response(stream).text();
console.log(text); // "Hello, world!"
```
