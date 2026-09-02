> Commit-pinned source for Docker main: [data/sbx_cli/sbx_template_ls.yaml](https://github.com/docker/docs/blob/ff96ad1711065cf2e9c3f1d701dad04775834f70/data/sbx_cli/sbx_template_ls.yaml)

# sbx template ls

List template images

**Usage:** `sbx template ls [flags]`

## Description

List all template images stored in the sandbox runtime's image store.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--json` |  | Output in JSON format |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# List all template images
  sbx template ls

  # Output in JSON format
  sbx template ls --json
```
