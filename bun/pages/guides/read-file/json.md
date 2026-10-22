> Pinned source for Bun bun-v1.4.4: [docs/guides/read-file/json.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/read-file/json.mdx)
> Canonical documentation: https://bun.com/docs/guides/read-file/json

# Read a JSON file

The `Bun.file()` function accepts a path and returns a `BunFile` instance. `BunFile` extends `Blob`, so you can read the file lazily in a variety of formats. Use `.json()` to read and parse the contents of a `.json` file as a plain object.

Bun sets the MIME type of the `BunFile` accordingly.

```ts index.ts icon="/icons/typescript.svg"
const path = "/path/to/package.json";
const file = Bun.file(path);

const contents = await file.json();
// { name: "my-package" }

file.type; // => "application/json;charset=utf-8";
```
