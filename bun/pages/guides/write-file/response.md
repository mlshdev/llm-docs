> Pinned source for Bun bun-v1.4.5: [docs/guides/write-file/response.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/write-file/response.mdx)
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
