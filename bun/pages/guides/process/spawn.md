> Release-pinned source for Bun bun-v1.4.0: [docs/guides/process/spawn.mdx](https://bun.com/docs/guides/process/spawn)

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
