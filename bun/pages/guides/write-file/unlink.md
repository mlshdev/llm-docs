> Pinned source for Bun bun-v1.4.2: [docs/guides/write-file/unlink.mdx](https://github.com/oven-sh/bun/blob/744846f844374847c902b5e7fd59b4342a51ef99/docs/guides/write-file/unlink.mdx)
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
