> Release-pinned source for Bun bun-v1.4.0: [docs/guides/write-file/file-cp.mdx](https://bun.com/docs/guides/write-file/file-cp)

# Copy a file to another location

Use [`Bun.write()`](https://bun.com/docs/runtime/file-io#writing-files-bun-write) to copy a file to another location on disk. The first argument is a *destination*, like an absolute path or `BunFile` instance. The second argument is the *data* to write.

```ts
const file = Bun.file("/path/to/original.txt");
await Bun.write("/path/to/copy.txt", file);
```

***

See [`Bun.write()`](https://bun.com/docs/runtime/file-io#writing-files-bun-write).
