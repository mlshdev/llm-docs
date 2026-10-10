> Pinned source for Bun bun-v1.4.3: [docs/guides/http/hot.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/http/hot.mdx)
> Canonical documentation: https://bun.com/docs/guides/http/hot

# Hot reload an HTTP server

The [`--hot`](https://bun.com/docs/runtime/watch-mode#hot-mode) flag runs a file with hot reloading enabled. When that file or a file it imports changes, Bun re-runs it. Bun does not watch files that no module imports, such as `.env`, `bunfig.toml`, and `tsconfig.json`. Restart Bun to apply a change to one of those files.

```sh terminal icon="terminal"
bun --hot run index.ts
```

***

Bun detects when you are running an HTTP server with `Bun.serve()`. It reloads your fetch handler when source files change, *without* restarting the `bun` process. This makes hot reloads nearly instantaneous.

> **Note**
>
> Hot reloading doesn't reload the page in your browser.

```ts index.ts icon="/icons/typescript.svg"
Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Hello world");
  },
});
```
