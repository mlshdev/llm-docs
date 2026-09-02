> Release-pinned source for Bun bun-v1.4.0: [docs/runtime/http/error-handling.mdx](https://bun.com/docs/runtime/http/error-handling)

# Error Handling

To activate development mode, set `development: true`.

```ts title="server.ts" icon="/icons/typescript.svg"
Bun.serve({
  development: true, // [!code ++]
  fetch(req) {
    throw new Error("woops!");
  },
});
```

In development mode, Bun surfaces errors in-browser with a built-in error page.

![Bun's built-in 500 page](https://raw.githubusercontent.com/oven-sh/bun/34cbb9a40b4bd1bd767d134a7065e66c2432a676/docs/images/exception_page.png)

### `error` callback

To handle server-side errors, implement an `error` handler. Return a `Response` to serve to the client when an error occurs. In `development` mode, this response replaces Bun's default error page.

```ts
Bun.serve({
  fetch(req) {
    throw new Error("woops!");
  },
  error(error) {
    return new Response(`<pre>${error}\n${error.stack}</pre>`, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
});
```

> **Note**
>
> [Learn more about debugging in Bun](https://bun.com/docs/runtime/debugger)
