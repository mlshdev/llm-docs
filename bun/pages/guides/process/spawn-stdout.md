> Pinned source for Bun bun-v1.4.5: [docs/guides/process/spawn-stdout.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/process/spawn-stdout.mdx)
> Canonical documentation: https://bun.com/docs/guides/process/spawn-stdout

# Read stdout from a child process

When you spawn a child process with [`Bun.spawn()`](https://bun.com/docs/runtime/child-process), `proc.stdout` is a `ReadableStream` of the child's `stdout`.

```ts
const proc = Bun.spawn(["echo", "hello"]);

const output = await proc.stdout.text();
output; // => "hello\n"
```

***

To pipe the child process's `stdout` to the parent's `stdout` instead, set the `stdout` option to `"inherit"`.

```ts
const proc = Bun.spawn(["echo", "hello"], {
  stdout: "inherit",
});
```

***

See [Child processes](https://bun.com/docs/runtime/child-process).
