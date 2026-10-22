> Pinned source for Bun bun-v1.4.4: [docs/guides/write-file/response.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/write-file/response.mdx)
> Canonical documentation: https://bun.com/docs/guides/write-file/response

# Write a Response to a file

Use [`Bun.write()`](https://bun.com/docs/runtime/file-io#writing-files-bun-write) to write a `Response` to disk. Bun writes the body of the `Response` to the destination.

The first argument is a *destination*, like an absolute path or `BunFile` instance. The second argument is the *data* to write.

```ts
const result = await fetch("https://bun.com");
const path = "./file.txt";
await Bun.write(path, result);
```

***

See [`Bun.write()`](https://bun.com/docs/runtime/file-io#writing-files-bun-write).
