> Pinned source for Bun bun-v1.4.2: [docs/guides/install/add.mdx](https://github.com/oven-sh/bun/blob/744846f844374847c902b5e7fd59b4342a51ef99/docs/guides/install/add.mdx)
> Canonical documentation: https://bun.com/docs/guides/install/add

# Add a dependency

To add an npm package as a dependency, use `bun add`.

```sh terminal icon="terminal"
bun add zod
```

***

This adds the package to `dependencies` in `package.json`. By default, Bun uses the `^` range specifier, which accepts future minor and patch versions.

```json package.json icon="file-json"
{
  "dependencies": {
    "zod": "^4.0.0" // [!code ++]
  }
}
```

***

To pin your project to the exact version you installed, use `--exact`. This adds the package to `dependencies` without the `^`.

```sh terminal icon="terminal"
bun add zod --exact
```

***

To specify an exact version or a tag:

```sh terminal icon="terminal"
bun add zod@3.0.0
bun add zod@next
```

***

See [`bun install`](https://bun.com/docs/pm/cli/install).
