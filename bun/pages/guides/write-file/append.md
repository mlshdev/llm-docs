> Pinned source for Bun bun-v1.4.4: [docs/guides/write-file/append.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/write-file/append.mdx)
> Canonical documentation: https://bun.com/docs/guides/write-file/append

# Append content to a file

Bun implements the `node:fs` module, which includes the `fs.appendFile` and `fs.appendFileSync` functions for appending content to files.

***

`fs.appendFile` asynchronously appends data to a file, creating the file if it does not yet exist. The content can be a string or a `Buffer`.

```ts
import { appendFile } from "node:fs/promises";

await appendFile("message.txt", "data to append");
```

***

To use the non-`Promise` API:

```ts
import { appendFile } from "node:fs";

appendFile("message.txt", "data to append", err => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
```

***

To specify the encoding of the content:

```js
import { appendFile } from "node:fs";

appendFile("message.txt", "data to append", "utf8", callback);
```

***

To append the data synchronously, use `fs.appendFileSync`:

```ts
import { appendFileSync } from "node:fs";

appendFileSync("message.txt", "data to append", "utf8");
```

***

See the [Node.js documentation](https://nodejs.org/api/fs.html#fspromisesappendfilepath-data-options) for `fs.appendFile`.
