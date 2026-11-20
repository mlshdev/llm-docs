> Pinned source for Bun bun-v1.4.5: [docs/runtime/node-api.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/runtime/node-api.mdx)
> Canonical documentation: https://bun.com/docs/runtime/node-api

# Node-API

Node-API is an interface for building native add-ons to Node.js. Bun implements this interface from scratch, so most existing Node-API extensions work with Bun out of the box.

As in Node.js, you can `require()` `.node` files (Node-API modules) directly.

```js
const napi = require("./my-node-module.node");
```

Alternatively, use `process.dlopen`:

```js
let mod = { exports: {} };
process.dlopen(mod, "./my-node-module.node");
```
