> Release-pinned source for Bun bun-v1.4.0: [docs/guides/install/add-peer.mdx](https://bun.com/docs/guides/install/add-peer)

# Add a peer dependency

To add an npm package as a peer dependency, use the `--peer` flag.

```sh terminal icon="terminal"
bun add @types/bun --peer
```

***

This adds the package to `peerDependencies` in `package.json`.

```json package.json icon="file-json"
{
  "peerDependencies": {
    "@types/bun": "^1.3.3" // [!code ++]
  }
}
```

***

`bun install` installs peer dependencies by default, unless they are marked optional in `peerDependenciesMeta`.

```json package.json icon="file-json"
{
  "peerDependencies": {
    "@types/bun": "^1.3.3"
  },
  "peerDependenciesMeta": {
    "@types/bun": { // [!code ++]
      "optional": true // [!code ++]
    } // [!code ++]
  }
}
```

***

See [`bun install`](https://bun.com/docs/pm/cli/install).
