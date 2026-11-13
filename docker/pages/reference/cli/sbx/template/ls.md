> Pinned source for Docker main: [data/sbx_cli/sbx_template_ls.yaml](https://github.com/docker/docs/blob/a0442378fca4987b1235614ec917b4138b5d5e5d/data/sbx_cli/sbx_template_ls.yaml)

# sbx template ls

List template images

**Usage:** `sbx template ls [flags]`

## Description

List tagged template images stored in the sandbox runtime's image store.

With --cloud:
List cloud sandbox templates.

## Options

| Option          | Default | Description                             |
| --------------- | ------- | --------------------------------------- |
| `-a`, `--all`   |         | Include digest-only and untagged images |
| `--digests`     |         | Show image digests                      |
| `--format`      |         | Output format: table, json or yaml      |
| `--json`        |         | Output in JSON format                   |
| `--no-trunc`    |         | Show full image IDs                     |
| `-q`, `--quiet` |         | Only display template names             |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
# List tagged template images
  sbx template ls

  # Include digest-only and untagged images with their digests and full IDs
  sbx template ls --all --digests --no-trunc

  # Output in JSON format
  sbx template ls --json

  # Cloud: list templates
  sbx --cloud template ls

  # Cloud: output in JSON format
  sbx --cloud template ls --json
```
