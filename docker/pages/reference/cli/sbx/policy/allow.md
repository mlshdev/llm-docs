> Commit-pinned source for Docker main: [data/sbx_cli/sbx_policy_allow.yaml](https://github.com/docker/docs/blob/c596433b17b6e062376dcd24395336f316e1714a/data/sbx_cli/sbx_policy_allow.yaml)

# sbx policy allow

Add an allow rule for sandboxes

**Usage:** `sbx policy allow COMMAND`

## Description

Add a rule that permits sandboxes to access specified resources.

Allowed resources are accessible within the selected policy scope. If a
resource matches both an allow and a deny rule, the deny rule takes
precedence.

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |
