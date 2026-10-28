> Pinned source for Docker main: [data/sbx_cli/sbx_policy_allow.yaml](https://github.com/docker/docs/blob/f90928eb2040c4638e188868a612fd47e6a061a4/data/sbx_cli/sbx_policy_allow.yaml)

# sbx policy allow

Add an allow rule for sandboxes

**Usage:** `sbx policy allow COMMAND`

## Description

Add a rule that permits sandboxes to access specified resources.

Allowed resources are accessible within the selected policy scope. If a
resource matches both an allow and a deny rule, the deny rule takes
precedence.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
