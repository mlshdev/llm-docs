> Pinned source for Docker main: [data/sbx_cli/sbx_completion_powershell.yaml](https://github.com/docker/docs/blob/16e452c8eaea26cec842cbf1065037fb2015001f/data/sbx_cli/sbx_completion_powershell.yaml)

# sbx completion powershell

Generate the autocompletion script for powershell

**Usage:** `sbx completion powershell [flags]`

## Description

Generate the autocompletion script for powershell.

To load completions in your current shell session:

```
sbx completion powershell | Out-String | Invoke-Expression
```

To load completions for every new session, add the output of the above command
to your powershell profile.

## Options

| Option              | Default | Description                     |
| ------------------- | ------- | ------------------------------- |
| `--no-descriptions` |         | disable completion descriptions |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
# Load completions in the current session
  sbx completion powershell | Out-String | Invoke-Expression

  # Install for every new session
  sbx completion powershell >> $PROFILE
```
