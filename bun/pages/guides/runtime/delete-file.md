> Pinned source for Bun bun-v1.4.3: [docs/guides/runtime/delete-file.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/runtime/delete-file.mdx)
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
