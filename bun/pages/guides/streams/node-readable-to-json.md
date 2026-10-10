> Pinned source for Bun bun-v1.4.3: [docs/guides/streams/node-readable-to-json.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/streams/node-readable-to-json.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/node-readable-to-json

# Convert a Node.js Readable to JSON

To convert a Node.js `Readable` stream to a JSON object in Bun, create a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) with the stream as the body, then call [`response.json()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/json).

```ts
import { Readable } from "stream";
const stream = Readable.from([JSON.stringify({ hello: "world" })]);
const json = await new Response(stream).json();
console.log(json); // { hello: "world" }
```
