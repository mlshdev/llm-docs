> Commit-pinned source for Docker main: [data/sbx_cli/sbx_policy_deny.yaml](https://github.com/docker/docs/blob/652986790ecf1ddf1081149f29da132a95207a04/data/sbx_cli/sbx_policy_deny.yaml)

# sbx policy deny

Add a deny rule for sandboxes

**Usage:** `sbx policy deny COMMAND`

## Description

Add a rule that blocks sandboxes from accessing specified resources.

Deny rules always take precedence over allow rules. If a resource matches
both an allow and a deny rule, the request is blocked.

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |
