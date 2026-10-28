> Pinned source for Docker main: [data/sbx_cli/sbx_settings_set.yaml](https://github.com/docker/docs/blob/f90928eb2040c4638e188868a612fd47e6a061a4/data/sbx_cli/sbx_settings_set.yaml)

# sbx settings set

Set a setting override

**Usage:** `sbx settings set KEY VALUE [flags]`

## Description

Set a user override for a setting. Values are parsed according to the
setting's type: bool (true or false), int, float, string, or raw JSON.

Administrator constraints apply; conflicting values are rejected.
Environment variables take precedence over user overrides.

Most changes take effect within about five seconds. This command reports
when a daemon restart is required.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
# Route sandbox, daemon, and CLI egress through an upstream proxy
  sbx settings set proxy http://proxy.example.com:3128

  # Pull template and kit images through a registry mirror
  sbx settings set platform.images.registryMirror artifactory.corp/docker-remote
```
