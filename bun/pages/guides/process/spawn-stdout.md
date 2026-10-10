> Pinned source for Bun bun-v1.4.3: [docs/guides/process/spawn-stdout.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/process/spawn-stdout.mdx)
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
