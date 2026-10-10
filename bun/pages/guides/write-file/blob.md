> Pinned source for Bun bun-v1.4.3: [docs/guides/write-file/blob.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/write-file/blob.mdx)
> Canonical documentation: https://bun.com/docs/guides/write-file/blob

# Write a Blob to a file

Use [`Bun.write()`](https://bun.com/docs/runtime/file-io#writing-files-bun-write) to write a `Blob` to disk. The first argument is a *destination*, like an absolute path or `BunFile` instance. The second argument is the *data* to write.

```ts
const path = "/path/to/file.txt";
const data = new Blob(["Lorem ipsum"]);
await Bun.write(path, data);
```

***

The `BunFile` class extends `Blob`, so you can pass a `BunFile` directly into `Bun.write()` as well.

```ts
const path = "./out.txt";
const data = Bun.file("./in.txt");

// write the contents of ./in.txt to ./out.txt
await Bun.write(path, data);
```

***

See [`Bun.write()`](https://bun.com/docs/runtime/file-io#writing-files-bun-write).
