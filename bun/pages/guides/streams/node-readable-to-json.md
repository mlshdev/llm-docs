> Pinned source for Bun bun-v1.4.2: [docs/guides/streams/node-readable-to-json.mdx](https://github.com/oven-sh/bun/blob/744846f844374847c902b5e7fd59b4342a51ef99/docs/guides/streams/node-readable-to-json.mdx)
> Canonical documentation: https://bun.com/docs/guides/streams/node-readable-to-json

# Convert a Node.js Readable to JSON

To convert a Node.js `Readable` stream to a JSON object in Bun, create a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) with the stream as the body, then call [`response.json()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/json).

```ts
import { Readable } from "stream";
const stream = Readable.from([JSON.stringify({ hello: "world" })]);
const json = await new Response(stream).json();
console.log(json); // { hello: "world" }
```
