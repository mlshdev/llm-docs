> Pinned source for Bun bun-v1.4.4: [docs/guides/read-file/exists.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/read-file/exists.mdx)
> Canonical documentation: https://bun.com/docs/guides/read-file/exists

# Check if a file exists

The `Bun.file()` function accepts a path and returns a `BunFile` instance. Use the `.exists()` method to check if a file exists at the given path.

```ts index.ts icon="/icons/typescript.svg"
const path = "/path/to/package.json";
const file = Bun.file(path);

await file.exists(); // boolean;
```

***

See [File I/O](https://bun.com/docs/runtime/file-io) for more on working with `BunFile`.
