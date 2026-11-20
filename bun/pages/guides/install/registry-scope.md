> Pinned source for Bun bun-v1.4.5: [docs/guides/install/registry-scope.mdx](https://github.com/oven-sh/bun/blob/a7733435cf40429e3b35c36072769df2052b80f1/docs/guides/install/registry-scope.mdx)
> Canonical documentation: https://bun.com/docs/guides/install/registry-scope

You can configure private registries in [`.npmrc`](https://bun.com/docs/pm/npmrc) or [`bunfig.toml`](https://bun.com/docs/runtime/bunfig#install-registry). Both work; we recommend `bunfig.toml` for its Bun-specific options.

To configure a registry for a particular npm scope:

```toml bunfig.toml icon="settings"
[install.scopes]
# as a string
"@myorg1" = "https://username:password@registry.myorg.com/"

# as an object with username/password
# you can reference environment variables
"@myorg2" = {
  username = "myusername",
  password = "$npm_pass",
  url = "https://registry.myorg.com/"
}

# as an object with token
"@myorg3" = { token = "$npm_token", url = "https://registry.myorg.com/" }

```

***

Your `bunfig.toml` can reference environment variables. `bun install` automatically loads environment variables from `.env.production.local`, `.env.local`, `.env.production`, and `.env`. When `BUN_ENV` (or, if it is not set, `NODE_ENV`) is `development`, it reads `.env.development.local` and `.env.development` in place of the two production files. It does not read `.env.test`. To load a specific file, pass `--env-file`. To load no file, pass `--no-env-file`. See [Environment variables](https://bun.com/docs/runtime/environment-variables).

```toml bunfig.toml icon="settings"
[install.scopes]
"@myorg3" = { token = "$npm_token", url = "https://registry.myorg.com/" }
```

***

See [`bun install`](https://bun.com/docs/pm/cli/install).
