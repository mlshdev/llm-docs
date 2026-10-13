> Pinned source for Docker main: [data/sbx_cli/sbx_completion_fish.yaml](https://github.com/docker/docs/blob/db384a4bd8b8f7eefbd6ed3796e49b5bfa517aad/data/sbx_cli/sbx_completion_fish.yaml)

# sbx completion fish

Generate the autocompletion script for fish

**Usage:** `sbx completion fish [flags]`

## Description

Generate the autocompletion script for the fish shell.

To load completions in your current shell session:

```
sbx completion fish | source
```

To load completions for every new session, execute once:

```
sbx completion fish > ~/.config/fish/completions/sbx.fish
```

You will need to start a new shell for this setup to take effect.

## Options

| Option              | Default | Description                     |
| ------------------- | ------- | ------------------------------- |
| `--no-descriptions` |         | disable completion descriptions |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
