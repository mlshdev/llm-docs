> Pinned source for Bun bun-v1.4.4: [docs/guides/write-file/unlink.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/write-file/unlink.mdx)
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
