> Pinned source for Bun bun-v1.4.3: [docs/guides/install/add-optional.mdx](https://github.com/oven-sh/bun/blob/c6da4a4d3010e5553438c60f6bd76d981976867c/docs/guides/install/add-optional.mdx)
> Canonical documentation: https://bun.com/docs/guides/install/add-optional

# Add an optional dependency

To add an npm package as an optional dependency, use the `--optional` flag.

```sh terminal icon="terminal"
bun add zod --optional
```

***

This adds the package to `optionalDependencies` in `package.json`.

```json package.json icon="file-json"
{
  "optionalDependencies": {
    "zod": "^4.0.0" // [!code ++]
  }
}
```

***

See [`bun install`](https://bun.com/docs/pm/cli/install).
