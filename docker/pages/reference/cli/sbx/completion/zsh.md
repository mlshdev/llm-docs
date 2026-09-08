> Commit-pinned source for Docker main: [data/sbx_cli/sbx_completion_zsh.yaml](https://github.com/docker/docs/blob/1808ce9024d6e24a418ae6b43b2413042e2c8e42/data/sbx_cli/sbx_completion_zsh.yaml)

# sbx completion zsh

Generate the autocompletion script for zsh

**Usage:** `sbx completion zsh [flags]`

## Description

Generate the autocompletion script for the zsh shell.

If shell completion is not already enabled in your environment you will need
to enable it.  You can execute the following once:

	echo "autoload -U compinit; compinit" >> ~/.zshrc

To load completions in your current shell session:

	source <(sbx completion zsh)

To load completions for every new session, execute once:

#### Linux:

	sbx completion zsh > "${fpath[1]}/_sbx"

#### macOS:

	sbx completion zsh > $(brew --prefix)/share/zsh/site-functions/_sbx

You will need to start a new shell for this setup to take effect.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--no-descriptions` |  | disable completion descriptions |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |
