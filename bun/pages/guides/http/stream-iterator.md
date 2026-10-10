> Pinned source for Bun bun-v1.4.3: [docs/guides/http/stream-iterator.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/http/stream-iterator.mdx)
> Canonical documentation: https://bun.com/docs/guides/http/stream-iterator

# Streaming HTTP Server with Async Iterators

In Bun, a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) accepts an async generator function as its body, so you can stream data to the client as it becomes available rather than waiting for the entire response to be ready.

```ts stream-iterator.ts icon="/icons/typescript.svg"
Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response(
      // An async generator function
      async function* () {
        yield "Hello, ";
        await Bun.sleep(100);
        yield "world!";

        // you can also yield a TypedArray or Buffer
        yield new Uint8Array(["\n".charCodeAt(0)]);
      },
      { headers: { "Content-Type": "text/plain" } },
    );
  },
});
```

***

You can pass any async iterable directly to `Response`:

```ts stream-iterator.ts icon="/icons/typescript.svg"
Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response(
      {
        [Symbol.asyncIterator]: async function* () {
          yield "Hello, ";
          await Bun.sleep(100);
          yield "world!";
        },
      },
      { headers: { "Content-Type": "text/plain" } },
    );
  },
});
```
