> Pinned source for Bun bun-v1.4.4: [docs/guides/ecosystem/express.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/ecosystem/express.mdx)
> Canonical documentation: https://bun.com/docs/guides/ecosystem/express

# Build an HTTP server using Express and Bun

Express and other major Node.js HTTP libraries should work in Bun without changes. Bun implements the [`node:http`](https://nodejs.org/api/http.html) and [`node:https`](https://nodejs.org/api/https.html) modules that these libraries rely on.

> **Note**
>
> See&#x20;
>
> [Node.js compatibility](https://bun.com/docs/runtime/nodejs-compat#node-http)
>
> &#x20;for details.

```sh terminal icon="terminal"
bun add express
```

***

To define an HTTP route and start a server with Express:

```ts server.ts icon="/icons/typescript.svg"
import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
```

***

To start the server on `localhost`:

```sh terminal icon="terminal"
bun server.ts
```
