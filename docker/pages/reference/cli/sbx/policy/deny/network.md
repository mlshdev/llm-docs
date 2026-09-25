> Pinned source for Docker main: [data/sbx_cli/sbx_policy_deny_network.yaml](https://github.com/docker/docs/blob/0bd254d2b506fd6c8bbf8b55affcce84fc02bb48/data/sbx_cli/sbx_policy_deny_network.yaml)

# sbx policy deny network

Deny network access to specified hosts

**Usage:** `sbx policy deny network [--sandbox SANDBOX] RESOURCES [flags]`

## Description

Block sandbox network access to the specified hosts.

RESOURCES takes the same forms as "sbx policy allow network": exact domains,
wildcard subdomains, IP addresses, and CIDR prefixes, with optional port
suffixes. Rules apply to TCP and UDP by default; use --protocol to restrict a
rule to one transport. Deny rules take precedence over allow rules for the
same hostname or CIDR. An allowed hostname isn't checked against CIDR rules
for its resolved IP address.

The rule applies globally to all sandboxes by default. Use --sandbox to add
the rule to policy "local" scoped to a single sandbox instead.

## Options

| Option       | Default | Description                                                     |
| ------------ | ------- | --------------------------------------------------------------- |
| `--protocol` |         | Restrict the rule to one protocol: tcp or udp (default tcp,udp) |
| `--sandbox`  |         | Scope the rule to a specific sandbox (default: all sandboxes)   |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
# Block access to a host (all sandboxes)
  sbx policy deny network ads.example.com

  # Block a host only for a specific sandbox
  sbx policy deny network --sandbox my-sandbox ads.example.com

  # Block all outbound traffic, TCP and UDP
  sbx policy deny network "**"

  # Block only UDP to a host
  sbx policy deny network --protocol udp media.example.com
```
