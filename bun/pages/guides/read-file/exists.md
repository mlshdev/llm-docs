> Pinned source for Bun bun-v1.4.3: [docs/guides/read-file/exists.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/read-file/exists.mdx)
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
