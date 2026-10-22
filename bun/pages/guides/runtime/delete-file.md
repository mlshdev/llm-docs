> Pinned source for Bun bun-v1.4.4: [docs/guides/runtime/delete-file.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/runtime/delete-file.mdx)
> Canonical documentation: https://bun.com/docs/guides/runtime/delete-file

# Delete files

To delete a file, use `Bun.file(path).delete()`.

```ts delete-file.ts icon="/icons/typescript.svg"
// Delete a file
const file = Bun.file("path/to/file.txt");
await file.delete();

// Now the file doesn't exist
const exists = await file.exists();
// => false
```

***

See [File I/O](https://bun.com/docs/runtime/file-io) for more filesystem operations.
