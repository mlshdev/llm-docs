> Release-pinned source for Bun bun-v1.4.2: [docs/guides/write-file/unlink.mdx](https://bun.com/docs/guides/write-file/unlink)

# Delete a file

The `Bun.file()` function accepts a path and returns a `BunFile` instance. Use the `.delete()` method to delete the file.

```ts
const path = "/path/to/file.txt";
const file = Bun.file(path);

await file.delete();
```

***

See [`Bun.file()`](https://bun.com/docs/runtime/file-io#reading-files-bun-file).
