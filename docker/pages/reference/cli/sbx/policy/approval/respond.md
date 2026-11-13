> Pinned source for Docker main: [data/sbx_cli/sbx_policy_approval_respond.yaml](https://github.com/docker/docs/blob/a0442378fca4987b1235614ec917b4138b5d5e5d/data/sbx_cli/sbx_policy_approval_respond.yaml)

# sbx policy approval respond

Respond to a pending approval

**Usage:** `sbx policy approval respond APPROVAL-ID --option OPTION-ID [flags]`

## Description

Respond to a pending approval using one of its offered options.

Use "sbx policy approval inspect APPROVAL-ID" to review the request and
option IDs before responding. An approval that has already been answered
or is no longer pending cannot be answered again.

After granting access, retry the blocked operation.

## Options

| Option     | Default | Description                       |
| ---------- | ------- | --------------------------------- |
| `--option` |         | Option ID offered by the approval |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
sbx policy approval inspect APPROVAL-ID
  sbx policy approval respond APPROVAL-ID --option OPTION-ID
```
