> Pinned source for Bun bun-v1.4.4: [docs/guides/test/timeout.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/test/timeout.mdx)
> Canonical documentation: https://bun.com/docs/guides/test/timeout

# Set a per-test timeout with the Bun test runner

Use the `--timeout` flag to set a timeout for each test in milliseconds. Bun marks a test that exceeds this timeout as failed.

The default timeout is `5000` (5 seconds).

```sh terminal icon="terminal"
bun test --timeout 3000 # 3 seconds
```

***

See [`bun test`](https://bun.com/docs/test).
