> Pinned source for Docker main: [data/sbx_cli/sbx_login.yaml](https://github.com/docker/docs/blob/171f597d4e166d42879d7d620a8a29e3b1a17a80/data/sbx_cli/sbx_login.yaml)

# sbx login

Sign in to Docker

**Usage:** `sbx login [flags]`

## Options

| Option             | Default | Description                               |
| ------------------ | ------- | ----------------------------------------- |
| `--password-stdin` |         | Read password or access token from stdin  |
| `--username`       |         | Docker username for non-interactive login |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx login

  # Non-interactive sign-in, for CI
  echo "$DOCKER_PAT" | sbx login --username me --password-stdin
```
