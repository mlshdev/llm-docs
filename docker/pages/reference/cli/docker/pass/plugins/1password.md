> Commit-pinned source for Docker main: [data/cli/secrets/docker_pass_plugins_1password.yaml](https://github.com/docker/docs/blob/652986790ecf1ddf1081149f29da132a95207a04/data/cli/secrets/docker_pass_plugins_1password.yaml)

# docker pass plugins 1password

Manage the 1Password SDK plugin.

**Usage:** `docker pass plugins 1password`

> [!NOTE]
> This command is experimental.

## Description

Manage the `1password-sdk` plugin, which resolves secret references against 1Password through the official 1Password SDK.

The plugin authenticates with a [service account token](https://developer.1password.com/docs/service-accounts/get-started/) scoped to the vaults you want to expose. The token is stored in the local OS keychain. Use the subcommands to install the token (and enable the plugin) or to remove it (and disable the plugin).

Items reachable through this plugin are matched under any of:

- the raw 1Password item ID,
- `<vault-id>/<title>`,
- `<vault-name>/<title>`,
- a native 1Password secret-reference path (`<vault>/<item>/<field>` or `<vault>/<item>/<section>/<field>`), resolved directly via the SDK as if prefixed with `op://`.

Matching for the title-based forms follows 1Password's normalization rules and is case-insensitive, so existing `op://` references can be reused as-is.

## Subcommands

- [`docker pass plugins 1password purge`](https://docs.docker.com/reference/cli/docker/pass/plugins/1password/purge/)
- [`docker pass plugins 1password setup`](https://docs.docker.com/reference/cli/docker/pass/plugins/1password/setup/)

## Examples

Install the service account token and enable the plugin:

```sh
echo "$OP_SERVICE_ACCOUNT_TOKEN" | docker pass plugins 1password setup
```

Remove the token and disable the plugin:

```sh
docker pass plugins 1password purge
```
