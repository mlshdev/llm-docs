> Pinned source for Bun bun-v1.4.3: [docs/guides/write-file/unlink.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/write-file/unlink.mdx)
> Canonical documentation: https://bun.com/docs/guides/write-file/unlink

# Delete a file

The `Bun.file()` function accepts a path and returns a `BunFile` instance. Use the `.delete()` method to delete the file.

```ts
const path = "/path/to/file.txt";
const file = Bun.file(path);

await file.delete();
```

***

See [`Bun.file()`](https://bun.com/docs/runtime/file-io#reading-files-bun-file).
