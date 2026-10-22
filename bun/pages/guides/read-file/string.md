> Pinned source for Bun bun-v1.4.4: [docs/guides/read-file/string.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/read-file/string.mdx)
> Canonical documentation: https://bun.com/docs/guides/read-file/string

# Read a file as a string

The `Bun.file()` function accepts a path and returns a `BunFile` instance. `BunFile` extends `Blob`, so you can read the file lazily in a variety of formats. Use `.text()` to read the contents as a string.

```ts
const path = "/path/to/file.txt";
const file = Bun.file(path);

const text = await file.text();
// string
```

***

Bun resolves relative paths from the current working directory.

```ts
const path = "./file.txt";
const file = Bun.file(path);
```
