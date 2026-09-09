> Commit-pinned source for Docker main: [data/sbx_cli/sbx_completion_bash.yaml](https://github.com/docker/docs/blob/3d15caeca7608231f930137accb6d933be157b5d/data/sbx_cli/sbx_completion_bash.yaml)

# sbx completion bash

Generate the autocompletion script for bash

**Usage:** `sbx completion bash`

## Description

Generate the autocompletion script for the bash shell.

This script depends on the 'bash-completion' package.
If it is not installed already, you can install it via your OS's package manager.

To load completions in your current shell session:

	source <(sbx completion bash)

To load completions for every new session, execute once:

#### Linux:

	sbx completion bash > /etc/bash_completion.d/sbx

#### macOS:

	sbx completion bash > $(brew --prefix)/etc/bash_completion.d/sbx

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
