> Pinned source for Docker main: [data/sbx_cli/sbx_policy_approval_ls.yaml](https://github.com/docker/docs/blob/61cbfdc1e72d0ac62dbac59ceaf7b94dcbe69c80/data/sbx_cli/sbx_policy_approval_ls.yaml)

# sbx policy approval ls

List pending approvals

**Usage:** `sbx policy approval ls [flags]`

## Description

List pending approvals from the local daemon, including their IDs, sandboxes, and available options.

## Options

| Option          | Default | Description                        |
| --------------- | ------- | ---------------------------------- |
| `--format`      |         | Output format: table, json or yaml |
| `--json`        |         | Output in JSON format              |
| `-q`, `--quiet` |         | Only display approval IDs          |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
# List pending approvals
  sbx policy approval ls

  # List only approval IDs
  sbx policy approval ls -q
```
