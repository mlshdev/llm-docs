> Commit-pinned source for Docker main: [data/sbx_cli/sbx_template_inspect.yaml](https://github.com/docker/docs/blob/c4f0e5b32deb9d3365c1f0be62305038a24e15e5/data/sbx_cli/sbx_template_inspect.yaml)

# sbx template inspect

Show full metadata for a single template

**Usage:** `sbx template inspect NAME|ID [flags]`

## Description

Show full metadata for a single template.

NAME|ID can be either a template name (resolved to its ID via the server's
?name= filter) or a template ID (tmpl_*).

Cloud-only in v1: requires --cloud.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--json` |  | Output in JSON format |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
sbx template inspect my-template --cloud
  sbx template inspect tmpl_abc123 --cloud

  # Output in JSON format
  sbx template inspect my-template --cloud --json
```
