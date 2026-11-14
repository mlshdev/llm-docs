> Pinned source for Docker main: [data/sbx_cli/sbx_policy_approval_inspect.yaml](https://github.com/docker/docs/blob/553482ce632f00c6e7faabab863422b4916e7c18/data/sbx_cli/sbx_policy_approval_inspect.yaml)

# sbx policy approval inspect

Inspect a pending approval

**Usage:** `sbx policy approval inspect APPROVAL-ID [flags]`

## Description

Show the request and available option IDs for a pending approval.

Get APPROVAL-ID from "sbx policy approval ls". Only pending approvals
can be inspected.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
sbx policy approval inspect APPROVAL-ID
```
