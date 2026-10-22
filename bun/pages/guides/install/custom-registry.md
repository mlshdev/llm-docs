> Pinned source for Bun bun-v1.4.4: [docs/guides/install/custom-registry.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/guides/install/custom-registry.mdx)
> Canonical documentation: https://bun.com/docs/guides/install/custom-registry

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

Your `bunfig.toml` can reference environment variables. `bun install` automatically loads environment variables from `.env.production.local`, `.env.local`, `.env.production`, and `.env`. When `BUN_ENV` (or, if it is not set, `NODE_ENV`) is `development`, it reads `.env.development.local` and `.env.development` in place of the two production files. It does not read `.env.test`. To load a specific file, pass `--env-file`. To load no file, pass `--no-env-file`. See [Environment variables](https://bun.com/docs/runtime/environment-variables).

```toml bunfig.toml icon="settings"
[install]
registry = { url = "https://registry.npmjs.org", token = "$npm_token" }
```

***

See [`bun install`](https://bun.com/docs/pm/cli/install).
