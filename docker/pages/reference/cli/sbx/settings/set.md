> Pinned source for Docker main: [data/sbx_cli/sbx_settings_set.yaml](https://github.com/docker/docs/blob/0bd254d2b506fd6c8bbf8b55affcce84fc02bb48/data/sbx_cli/sbx_settings_set.yaml)

# sbx settings set

Set a setting override

**Usage:** `sbx settings set <key> <value> [flags]`

## Description

Set a user override for a setting.

The value is parsed according to the setting's type:
bool   "true" or "false"
int    integer value
float  floating-point value
string plain text
json   raw JSON

Environment variables take precedence over user overrides.

Most changes take effect within about five seconds. If a daemon restart is
required, this command tells you to run 'sbx daemon restart'.

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
