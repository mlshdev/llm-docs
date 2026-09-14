> Pinned source for Bun bun-v1.4.2: [docs/guides/write-file/cat.mdx](https://github.com/oven-sh/bun/blob/744846f844374847c902b5e7fd59b4342a51ef99/docs/guides/write-file/cat.mdx)
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
