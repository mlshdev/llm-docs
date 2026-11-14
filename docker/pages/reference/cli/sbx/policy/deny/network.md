> Pinned source for Docker main: [data/sbx_cli/sbx_policy_deny_network.yaml](https://github.com/docker/docs/blob/553482ce632f00c6e7faabab863422b4916e7c18/data/sbx_cli/sbx_policy_deny_network.yaml)

# sbx policy deny network

Deny network access to specified hosts

**Usage:** `sbx policy deny network [--sandbox SANDBOX] RESOURCES [flags]`

## Description

Block sandbox network access to the specified hosts.

RESOURCES takes the same forms as "sbx policy allow network": exact domains,
wildcard subdomains, IP addresses, and CIDR prefixes, with optional port
suffixes. Rules apply to TCP and UDP by default; use --protocol to restrict a
rule to one transport.

Deny rules take precedence over allow rules for the same hostname or CIDR. A
direct connection to an allowed hostname is also checked against CIDR rules for
its resolved IP address, and a deny on either takes precedence. Connections
through an upstream proxy that resolves the hostname are checked by hostname
only.

The rule applies globally to all sandboxes by default. Use --sandbox to add
the rule to policy "local" scoped to a single sandbox instead.

Without --cloud, a rule is refused, and nothing is added, when the same scope
already holds the opposite decision for the same resource on any of the same
protocols (for HTTP rules, the same methods, path, and query constraints).
Remove the existing rule with "sbx policy rm network --id RULE\_ID" first, adding
\--sandbox SANDBOX if the rule is sandbox-scoped. Rules in different scopes, such
as a global allow and a sandbox-scoped deny, can coexist, and the deny rule
takes precedence. Rules from your organization's policy never cause this
refusal. With --cloud, the new rule replaces the opposite rule in the same scope
instead.

Use --method to add an HTTP rule. --method accepts comma-separated HTTP
methods or ANY; --path defaults to /\*\*. Repeat --query name=value to require
query parameters.

HTTP paths, query parameter names, and query values match without regard to
ASCII letter case. For example, /API/\*\* matches /api/items, and Tag=PROD
matches tag=prod.

With --cloud:
Block cloud sandbox network access to the specified hosts.

A matching allow entry in the same scope is replaced by the deny entry.

RESOURCES is a comma-separated list of network patterns, such as api.example.com,
\*.example.com, 10.0.0.0/8, or api.example.com:443. HTTP method, path, query, and
transport protocol selectors are not supported.

Rules apply to the account by default. Use --sandbox with a sandbox name or ID
to change one sandbox's policy. Use "sbx --cloud policy ls" to list the rules.

## Options

| Option       | Default | Description                                                                             |
| ------------ | ------- | --------------------------------------------------------------------------------------- |
| `--method`   |         | Restrict the rule to these HTTP methods (comma-separated); use ANY to match all methods |
| `--path`     |         | Restrict the rule to this HTTP path glob (e.g. /repos/**); defaults to /**              |
| `--protocol` |         | Network protocol: tcp or udp; repeat or comma-separate for both (default tcp,udp)       |
| `--query`    |         | Require an HTTP query parameter (name=value pattern); repeatable                        |
| `--sandbox`  |         | Scope the rule to a specific sandbox (default: all sandboxes)                           |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

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

  # Block POST requests to a path
  sbx policy deny network api.example.com --method POST --path '/admin/**'

  # Block a host in the account policy
  sbx --cloud policy deny network ads.example.com

  # Block a host for one sandbox
  sbx --cloud policy deny network --sandbox my-sandbox ads.example.com
```
