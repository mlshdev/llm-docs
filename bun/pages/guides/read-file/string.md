> Pinned source for Bun bun-v1.4.3: [docs/guides/read-file/string.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/read-file/string.mdx)
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
