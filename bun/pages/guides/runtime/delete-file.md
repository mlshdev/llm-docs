> Pinned source for Bun bun-v1.4.2: [docs/guides/runtime/delete-file.mdx](https://github.com/oven-sh/bun/blob/744846f844374847c902b5e7fd59b4342a51ef99/docs/guides/runtime/delete-file.mdx)
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
