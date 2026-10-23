> Pinned source for Docker main: [data/sbx_cli/sbx_policy_refresh.yaml](https://github.com/docker/docs/blob/1d503f8b7c2b2008da6cbc08bb5be163666c84bf/data/sbx_cli/sbx_policy_refresh.yaml)

# sbx policy refresh

Force an immediate policy refresh

**Usage:** `sbx policy refresh [flags]`

## Description

Force sandboxd to fetch and apply governance policy immediately.

The daemon normally polls for policy changes on a regular interval. Use this
after changing an org policy setting (for example, toggling AI Governance) so
the change takes effect without waiting for the next poll. This also
invalidates the cached registry credential; it never restarts the daemon or
stops running sandboxes.

The refreshed policy applies to new connections only. Connections a sandbox
opened while the previous policy allowed them stay open even if the new
policy denies them; restart the sandbox to drop them.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx policy refresh
```
