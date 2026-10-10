> Pinned source for Bun bun-v1.4.3: [docs/guides/install/add-dev.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/install/add-dev.mdx)
> Canonical documentation: https://bun.com/docs/guides/install/add-dev

# Add a development dependency

To add an npm package as a development dependency, use `bun add --development`.

```sh terminal icon="terminal"
bun add zod --dev
bun add zod -d # shorthand
```

***

This adds the package to `devDependencies` in `package.json`.

```json
{
  "devDependencies": {
    "zod": "^4.0.0" // [!code ++]
  }
}
```

***

See [`bun install`](https://bun.com/docs/pm/cli/install).
