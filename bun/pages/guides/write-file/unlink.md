> Pinned source for Bun bun-v1.4.5: [docs/guides/write-file/unlink.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/write-file/unlink.mdx)
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
