> Pinned source for Bun bun-v1.4.4: [docs/guides/install/add-optional.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/install/add-optional.mdx)
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
