> Commit-pinned source for Docker main: [data/sbx_cli/sbx_completion_fish.yaml](https://github.com/docker/docs/blob/432aa8fa3c1b4c3500e6795ee5090f427ce28efb/data/sbx_cli/sbx_completion_fish.yaml)

# sbx completion fish

Generate the autocompletion script for fish

**Usage:** `sbx completion fish [flags]`

## Description

Generate the autocompletion script for the fish shell.

To load completions in your current shell session:

	sbx completion fish | source

To load completions for every new session, execute once:

	sbx completion fish > ~/.config/fish/completions/sbx.fish

You will need to start a new shell for this setup to take effect.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--no-descriptions` |  | disable completion descriptions |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |
