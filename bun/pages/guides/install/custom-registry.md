> Release-pinned source for Bun bun-v1.4.0: [docs/guides/install/custom-registry.mdx](https://bun.com/docs/guides/install/custom-registry)

The default registry is `registry.npmjs.org`. Override it globally in `bunfig.toml`.

```toml bunfig.toml icon="settings"
[install]
# set default registry as a string
registry = "https://registry.npmjs.org"

# if needed, set a token
# registry = { url = "https://registry.npmjs.org", token = "123456" }

# if needed, set a username/password
# registry = "https://username:password@registry.npmjs.org"
```

***

Your `bunfig.toml` can reference environment variables. `bun install` automatically loads environment variables from `.env.production.local`, `.env.local`, `.env.production`, and `.env`, regardless of `NODE_ENV`. It does not read `.env.development` or `.env.test`. See [Environment variables](https://bun.com/docs/runtime/environment-variables).

```toml bunfig.toml icon="settings"
[install]
registry = { url = "https://registry.npmjs.org", token = "$npm_token" }
```

***

See [`bun install`](https://bun.com/docs/pm/cli/install).
