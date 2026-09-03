> Commit-pinned source for Docker main: [data/cli/secrets/docker_pass_plugins_1password_purge.yaml](https://github.com/docker/docs/blob/ec568fb193997abb62fc206183b30ba01498291d/data/cli/secrets/docker_pass_plugins_1password_purge.yaml)

# docker pass plugins 1password purge

Disable the plugin and remove the stored 1Password service account token.

**Usage:** `docker pass plugins 1password purge`

> [!NOTE]
> This command is experimental.

## Description

Disable the `1password-sdk` plugin on the running secrets-engine daemon and remove the service account token from the local OS keychain.

After purge, the plugin no longer participates in secret resolution and the token is gone from local storage. Run `setup` again to re-enable it.
