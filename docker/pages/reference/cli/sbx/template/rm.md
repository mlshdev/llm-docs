> Pinned source for Docker main: [data/sbx_cli/sbx_template_rm.yaml](https://github.com/docker/docs/blob/61cbfdc1e72d0ac62dbac59ceaf7b94dcbe69c80/data/sbx_cli/sbx_template_rm.yaml)

# sbx template rm

Remove a template image

**Usage:** `sbx template rm TAG|DIGEST|ID|NAME [flags]`

## Description

Remove a template image from the sandbox runtime's image store.

Identify the image by tag, repository digest (REPOSITORY\@sha256:DIGEST),
or image ID (full or prefix). Use "sbx template ls --all --digests" to see
available images and their digests.

With --cloud:
Remove a cloud sandbox template by name or tmpl\_\* ID.
Use "sbx --cloud template ls" to list templates.

## Options

| Option          | Default | Description                        |
| --------------- | ------- | ---------------------------------- |
| `-f`, `--force` |         | Skip confirmation prompts          |
| `--format`      |         | Output format: table, json or yaml |
| `--json`        |         | Output in JSON format              |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
# Remove by tag
  sbx template rm myimage:v1.0

  # Remove by image ID (prefix)
  sbx template rm abc123

  # Remove by repository digest
  sbx template rm myimage@sha256:0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef

  # Cloud: remove by name
  sbx --cloud template rm my-template

  # Cloud: remove by tmpl_* id
  sbx --cloud template rm tmpl_abc123
```
