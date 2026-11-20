> Pinned source for Bun bun-v1.4.5: [docs/guides/write-file/stdout.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/write-file/stdout.mdx)
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
