> Commit-pinned source for Docker main: [data/sbx_cli/sbx_completion_powershell.yaml](https://github.com/docker/docs/blob/b744dd31039efeac59c11e017ac6ab62d9077339/data/sbx_cli/sbx_completion_powershell.yaml)

# sbx completion powershell

Generate the autocompletion script for powershell

**Usage:** `sbx completion powershell [flags]`

## Description

Generate the autocompletion script for powershell.

To load completions in your current shell session:

	sbx completion powershell | Out-String | Invoke-Expression

To load completions for every new session, add the output of the above command
to your powershell profile.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--no-descriptions` |  | disable completion descriptions |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |
