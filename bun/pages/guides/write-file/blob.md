> Pinned source for Bun bun-v1.4.5: [docs/guides/write-file/blob.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/write-file/blob.mdx)
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
