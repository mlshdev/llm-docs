> Commit-pinned source for Docker main: [data/sbx_cli/sbx_policy_deny_network.yaml](https://github.com/docker/docs/blob/ec568fb193997abb62fc206183b30ba01498291d/data/sbx_cli/sbx_policy_deny_network.yaml)

# sbx policy deny network

Deny network access to specified hosts

**Usage:** `sbx policy deny network [--sandbox SANDBOX] RESOURCES [flags]`

## Description

Block sandbox network access to the specified hosts.

RESOURCES is a comma-separated list of hostnames, domains, or IP addresses.
Deny rules always take precedence over allow rules.

The rule applies globally to all sandboxes by default. Use --sandbox to add
the rule to policy "local" scoped to a single sandbox instead.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--sandbox` |  | Scope the rule to a specific sandbox (default: all sandboxes) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Block access to a host (all sandboxes)
  sbx policy deny network ads.example.com

  # Block a host only for a specific sandbox
  sbx policy deny network --sandbox my-sandbox ads.example.com

  # Block all outbound traffic
  sbx policy deny network "**"
```
