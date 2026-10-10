> Pinned source for Bun bun-v1.4.3: [docs/guides/http/fetch.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/http/fetch.mdx)
> Canonical documentation: https://bun.com/docs/guides/http/fetch

# Send an HTTP request using fetch

Bun implements the Web-standard [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API for sending HTTP requests. To send a `GET` request to a URL:

```ts fetch.ts icon="/icons/typescript.svg"
const response = await fetch("https://bun.com");
const html = await response.text(); // HTML string
```

***

To send a `POST` request to an API endpoint:

```ts fetch.ts icon="/icons/typescript.svg"
const response = await fetch("https://bun.com/api", {
  method: "POST",
  body: JSON.stringify({ message: "Hello from Bun!" }),
  headers: { "Content-Type": "application/json" },
});

const body = await response.json();
```
