> Commit-pinned source for Docker main: [data/sbx_cli/sbx_completion_zsh.yaml](https://github.com/docker/docs/blob/d47e43dee68bd9cbd16af81b1aa6aef45023e17c/data/sbx_cli/sbx_completion_zsh.yaml)

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
| `-D`, `--debug` |  | Enable debug logging |
