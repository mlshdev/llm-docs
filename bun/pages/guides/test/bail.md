> Pinned source for Bun bun-v1.4.3: [docs/guides/test/bail.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/test/bail.mdx)
> Canonical documentation: https://bun.com/docs/guides/test/bail

Use the `--bail` flag to abort a test run after the first failure, so a continuous integration run fails as early as possible.

```sh terminal icon="terminal"
bun test --bail
```

***

To bail after a certain number of failures, pass a number after the flag.

```sh terminal icon="terminal"
# bail after 10 failures
bun test --bail=10
```

***

See [`bun test`](https://bun.com/docs/test).
