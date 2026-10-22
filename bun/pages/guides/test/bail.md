> Pinned source for Bun bun-v1.4.4: [docs/guides/test/bail.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/test/bail.mdx)
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
