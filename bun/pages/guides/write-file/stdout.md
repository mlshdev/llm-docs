> Pinned source for Bun bun-v1.4.3: [docs/guides/write-file/stdout.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/write-file/stdout.mdx)
> Canonical documentation: https://bun.com/docs/guides/write-file/stdout

# Write to stdout

The `console.log` function writes to `stdout` and appends a line break to the printed data.

```ts
console.log("Lorem ipsum");
```

***

Bun also exposes `stdout` as a `BunFile` with the `Bun.stdout` property. Pass it as the destination to [`Bun.write()`](https://bun.com/docs/runtime/file-io#writing-files-bun-write).

```ts
await Bun.write(Bun.stdout, "Lorem ipsum");
```

***

See [`Bun.write()`](https://bun.com/docs/runtime/file-io#writing-files-bun-write).
