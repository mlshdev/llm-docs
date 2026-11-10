> Pinned source for Docker main: [data/sbx_cli/sbx_template_inspect.yaml](https://github.com/docker/docs/blob/34992b922461d20cc97107b84056756802584571/data/sbx_cli/sbx_template_inspect.yaml)

# sbx template inspect

Show template details

**Usage:** `sbx template inspect NAME|ID [flags]`

## Description

Show full metadata for a single template.

NAME|ID can be either a template name (resolved to its ID via the server's
?name= filter) or a template ID (tmpl\_\*).

Cloud-only in v1: requires --cloud.

## Options

| Option     | Default | Description                        |
| ---------- | ------- | ---------------------------------- |
| `--format` |         | Output format: table, json or yaml |
| `--json`   |         | Output in JSON format              |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
sbx --cloud template inspect my-template
  sbx --cloud template inspect tmpl_abc123

  # Output in JSON format
  sbx --cloud template inspect my-template --json
```
