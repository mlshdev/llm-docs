> Pinned source for Bun bun-v1.4.5: [docs/guides/read-file/string.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/read-file/string.mdx)
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
