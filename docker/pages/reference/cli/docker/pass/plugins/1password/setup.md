> Commit-pinned source for Docker main: [data/cli/secrets/docker_pass_plugins_1password_setup.yaml](https://github.com/docker/docs/blob/652986790ecf1ddf1081149f29da132a95207a04/data/cli/secrets/docker_pass_plugins_1password_setup.yaml)

# docker pass plugins 1password setup

Set the 1Password service account token and enable the plugin.

**Usage:** `docker pass plugins 1password setup`

> [!NOTE]
> This command is experimental.

## Description

Store a 1Password [service account token](https://developer.1password.com/docs/service-accounts/get-started/) in the local OS keychain and enable the `1password-sdk` plugin.

The token is read from STDIN and replaces any previously stored token. Once it is stored, the secrets engine is asked to enable the plugin so subsequent lookups resolve against 1Password.

Service account tokens are scoped to a fixed set of vaults; only items in those vaults are reachable through the plugin.
