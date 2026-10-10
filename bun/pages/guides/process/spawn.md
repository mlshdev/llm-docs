> Pinned source for Bun bun-v1.4.3: [docs/guides/process/spawn.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/process/spawn.mdx)
> Canonical documentation: https://bun.com/docs/guides/process/spawn

# Spawn a child process

Use [`Bun.spawn()`](https://bun.com/docs/runtime/child-process) to spawn a child process.

```ts
const proc = Bun.spawn(["echo", "hello"]);

// await completion
await proc.exited;
```

***

The second argument is a configuration object.

```ts
const proc = Bun.spawn(["echo", "Hello, world!"], {
  cwd: "/tmp",
  env: { FOO: "bar" },
  onExit(proc, exitCode, signalCode, error) {
    // exit handler
  },
});
```

***

By default, `proc.stdout` is a `ReadableStream` of the child process's `stdout`.

```ts
const proc = Bun.spawn(["echo", "hello"]);

const output = await proc.stdout.text();
output; // => "hello\n"
```

***

See [Child processes](https://bun.com/docs/runtime/child-process).
