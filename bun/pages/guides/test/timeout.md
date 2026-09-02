> Release-pinned source for Bun bun-v1.4.0: [docs/guides/test/timeout.mdx](https://bun.com/docs/guides/test/timeout)

# Set a per-test timeout with the Bun test runner

Use the `--timeout` flag to set a timeout for each test in milliseconds. Bun marks a test that exceeds this timeout as failed.

The default timeout is `5000` (5 seconds).

```sh terminal icon="terminal"
bun test --timeout 3000 # 3 seconds
```

***

See [`bun test`](https://bun.com/docs/test).
