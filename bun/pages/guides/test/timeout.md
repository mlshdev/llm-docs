> Pinned source for Bun bun-v1.4.3: [docs/guides/test/timeout.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/test/timeout.mdx)
> Canonical documentation: https://bun.com/docs/guides/test/timeout

# Set a per-test timeout with the Bun test runner

Use the `--timeout` flag to set a timeout for each test in milliseconds. Bun marks a test that exceeds this timeout as failed.

The default timeout is `5000` (5 seconds).

```sh terminal icon="terminal"
bun test --timeout 3000 # 3 seconds
```

***

See [`bun test`](https://bun.com/docs/test).
