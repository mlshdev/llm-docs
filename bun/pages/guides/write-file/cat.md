> Pinned source for Bun bun-v1.4.3: [docs/guides/write-file/cat.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/write-file/cat.mdx)
> Canonical documentation: https://bun.com/docs/guides/write-file/cat

# Write a file to stdout

Bun exposes `stdout` as a `BunFile` with the `Bun.stdout` property. Pass it as the destination to [`Bun.write()`](https://bun.com/docs/runtime/file-io#writing-files-bun-write).

The following code writes a file to `stdout`, like the Unix `cat` command.

```ts cat.ts icon="/icons/typescript.svg"
const path = "/path/to/file.txt";
const file = Bun.file(path);
await Bun.write(Bun.stdout, file);
```

***

See [`Bun.write()`](https://bun.com/docs/runtime/file-io#writing-files-bun-write).
