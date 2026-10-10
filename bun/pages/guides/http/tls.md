> Pinned source for Bun bun-v1.4.3: [docs/guides/http/tls.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/http/tls.mdx)
> Canonical documentation: https://bun.com/docs/guides/http/tls

# Configure TLS on an HTTP server

Set the `tls` key to configure TLS. Both `key` and `cert` are required: `key` is the contents of your private key and `cert` is the contents of your issued certificate. Use [`Bun.file()`](https://bun.com/docs/runtime/file-io#reading-files-bun-file) to read them.

```ts server.ts icon="/icons/typescript.svg"
const server = Bun.serve({
  fetch: request => new Response("Welcome to Bun!"),
  tls: {
    cert: Bun.file("cert.pem"),
    key: Bun.file("key.pem"),
  },
});
```

***

By default, Bun trusts the Mozilla-curated list of well-known root CAs. To override this list, pass an array of certificates as `ca`. On a server, Bun uses this list to verify *client* certificates, so also set `requestCert: true`.

```ts server.ts icon="/icons/typescript.svg"
const server = Bun.serve({
  fetch: request => new Response("Welcome to Bun!"),
  tls: {
    cert: Bun.file("cert.pem"),
    key: Bun.file("key.pem"),
    ca: [Bun.file("ca1.pem"), Bun.file("ca2.pem")],
    requestCert: true,
  },
});
```
