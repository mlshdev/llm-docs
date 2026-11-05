> Pinned source for Docker main: [data/sbx_cli/sbx_policy_allow_network.yaml](https://github.com/docker/docs/blob/c98501277b974550688eeed803c975e2665d6468/data/sbx_cli/sbx_policy_allow_network.yaml)

# sbx policy allow network

Allow network access to specified hosts

**Usage:** `sbx policy allow network [--sandbox SANDBOX] RESOURCES [flags]`

## Description

Allow sandbox network access to the specified hosts.

RESOURCES is a comma-separated list of hostnames, domains, IP addresses, or
CIDR prefixes. Rules apply to TCP by default; use --protocol to select UDP or
both transports. Supports exact domains (example.com), wildcard subdomains
(*.example.com), multi-label wildcards (**.example.com), single-character
globs (api?.example.com), character classes (api\[12].example.com,
api\[!1].example.com), and optional port suffixes (example.com:443). An IPv6
address takes a port in brackets (\[2001:db8::1]:443) or a CIDR prefix
(2001:db8::1/128); a bare one is refused. Use "**" to allow all hosts. A bare
"*", an escaped glob character such as "\*", and any other pattern outside
these forms are rejected rather than stored as a rule that matches nothing.

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

With --cloud:
Allow cloud sandbox network access to the specified hosts.

A matching deny entry in the same scope is replaced by the allow entry.

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
| `--protocol` |         | Network protocol: tcp or udp; repeat or comma-separate for both                         |
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
# Allow access to a single host (all sandboxes)
  sbx policy allow network api.example.com

  # Allow access to multiple hosts
  sbx policy allow network "api.example.com,cdn.example.com"

  # Allow a host only for a specific sandbox
  sbx policy allow network --sandbox my-sandbox api.example.com

  # Allow all subdomains of a host
  sbx policy allow network "*.npmjs.org"

  # Allow all outbound traffic on both transports
  sbx policy allow network --protocol tcp,udp "**"

  # Allow GET and HEAD requests to a path
  sbx policy allow network api.example.com --method GET,HEAD --path '/v1/**'

  # Allow a host in the account policy
  sbx --cloud policy allow network api.example.com

  # Allow a host for one sandbox
  sbx --cloud policy allow network --sandbox my-sandbox api.example.com
```
