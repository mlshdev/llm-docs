> Pinned source for Bun bun-v1.4.4: [docs/guides/test/watch-mode.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/test/watch-mode.mdx)
> Canonical documentation: https://bun.com/docs/guides/test/watch-mode

# Run tests in watch mode with Bun

Use the `--watch` flag to run your tests in watch mode.

```sh terminal icon="terminal"
bun test --watch
```

***

Watch mode restarts the running Bun process whenever a file changes. It's fast. In this example, the editor saves the file on every keystroke.

![Running tests in watch mode in
Bun](https://github.com/oven-sh/bun/assets/3084745/dc49a36e-ba82-416f-b960-1c883a924248)

***

See [`bun test`](https://bun.com/docs/test).
