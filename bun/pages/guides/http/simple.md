> Pinned source for Bun bun-v1.4.5: [docs/guides/http/simple.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/http/simple.mdx)
> Canonical documentation: https://bun.com/docs/guides/http/simple

# Write a simple HTTP server

This code starts an HTTP server listening on port `3000`. It responds to every request with a `200` status and the body `"Welcome to Bun!"`.

See [`Bun.serve`](https://bun.com/docs/runtime/http/server) for details.

```ts server.ts icon="/icons/typescript.svg"
const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("Welcome to Bun!");
  },
});

console.log(`Listening on ${server.url}`);
```
