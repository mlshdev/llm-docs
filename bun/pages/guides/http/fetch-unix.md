> Pinned source for Bun bun-v1.4.3: [docs/guides/http/fetch-unix.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/http/fetch-unix.mdx)
> Canonical documentation: https://bun.com/docs/guides/http/fetch-unix

# fetch with unix domain sockets in Bun

In Bun, `fetch()` can send HTTP requests over a [unix domain socket](https://en.wikipedia.org/wiki/Unix_domain_socket) with the `unix` option.

```ts fetch-unix.ts icon="/icons/typescript.svg"
const unix = "/var/run/docker.sock";

const response = await fetch("http://localhost/info", { unix });

const body = await response.json();
console.log(body); // { ... }
```

***

The `unix` option is the local file path to a unix domain socket. `fetch()` sends the request over that socket instead of a TCP connection. HTTPS is also supported: use the `https://` protocol in the URL instead of `http://`.

To send a `POST` request to an API endpoint over a unix domain socket:

```ts fetch-unix.ts icon="/icons/typescript.svg"
const response = await fetch("https://hostname/a/path", {
  unix: "/var/run/path/to/unix.sock",
  method: "POST",
  body: JSON.stringify({ message: "Hello from Bun!" }),
  headers: {
    "Content-Type": "application/json",
  },
});

const body = await response.json();
```
