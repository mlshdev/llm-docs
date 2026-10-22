> Pinned source for Bun bun-v1.4.4: [docs/pm/scopes-registries.mdx](https://github.com/oven-sh/bun/blob/38afee6c84fcf48c0edb2466aa4b27d287a59c30/docs/pm/scopes-registries.mdx)
> Canonical documentation: https://bun.com/docs/pm/scopes-registries

The default registry is `registry.npmjs.org`. To change it globally, set it in `bunfig.toml`:

```toml bunfig.toml icon="settings"
[install]
# set default registry as a string
registry = "https://registry.npmjs.org"
# set a token
registry = { url = "https://registry.npmjs.org", token = "123456" }
# set a username/password
registry = "https://username:password@registry.npmjs.org"
```

To configure a private registry scoped to a particular organization:

```toml bunfig.toml icon="settings"
[install.scopes]
# registry as string
"@myorg1" = "https://username:password@registry.myorg.com/"

# registry with username/password
# you can reference environment variables
"@myorg2" = { username = "myusername", password = "$NPM_PASS", url = "https://registry.myorg.com/" }

# registry with token
"@myorg3" = { token = "$npm_token", url = "https://registry.myorg.com/" }
```

If the environment variable is not set, Bun warns and treats the field as empty. It then uses the credentials `.npmrc` has for that registry, if any.

Credentials written into a URL are percent-encoded, like the rest of the URL: the password `p@ss` is written `p%40ss`. Bun decodes them before it sends them. The `username`, `password` and `token` fields are sent as written.

### `.npmrc`

Bun also reads [`.npmrc`](https://bun.com/docs/pm/npmrc) files.
