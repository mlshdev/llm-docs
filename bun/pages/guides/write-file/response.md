> Pinned source for Bun bun-v1.4.3: [docs/guides/write-file/response.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/write-file/response.mdx)
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
