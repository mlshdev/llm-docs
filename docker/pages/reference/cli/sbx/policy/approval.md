> Pinned source for Docker main: [data/sbx_cli/sbx_policy_approval.yaml](https://github.com/docker/docs/blob/a0442378fca4987b1235614ec917b4138b5d5e5d/data/sbx_cli/sbx_policy_approval.yaml)

# sbx policy approval

Review and respond to pending approvals

**Usage:** `sbx policy approval COMMAND`

## Description

Review and respond to pending approvals from the local daemon.

Use "sbx policy approval ls" to find an approval ID, then inspect it to see
the available options. Respond with an option ID shown by that approval.

A persistent grant applies to matching requests in the approval's sandbox.
Retry the blocked operation after granting access. Dismissing an approval
does not grant access; a later request can prompt again.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |
