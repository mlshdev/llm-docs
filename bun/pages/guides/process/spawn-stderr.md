> Pinned source for Bun bun-v1.4.5: [docs/guides/process/spawn-stderr.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/process/spawn-stderr.mdx)
> Canonical documentation: https://bun.com/docs/guides/process/spawn-stderr

# Read stderr from a child process

When you spawn a child process with [`Bun.spawn()`](https://bun.com/docs/runtime/child-process), it inherits the `stderr` of the spawning process. To read and handle `stderr` instead, set the `stderr` option to `"pipe"`.

```ts
const proc = Bun.spawn(["echo", "hello"], {
  stderr: "pipe",
});

proc.stderr; // => ReadableStream
```

***

To read `stderr` until the child process exits, use `.text()`.

```ts
const proc = Bun.spawn(["echo", "hello"], {
  stderr: "pipe",
});

const errors: string = await proc.stderr.text();
if (errors) {
  // handle errors
}
```

***

See [Child processes](https://bun.com/docs/runtime/child-process).
