> Release-pinned source for Bun bun-v1.4.2: [docs/guides/write-file/cat.mdx](https://bun.com/docs/guides/write-file/cat)

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
