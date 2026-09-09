> Commit-pinned source for Docker main: [data/sbx_cli/sbx_policy_deny_network.yaml](https://github.com/docker/docs/blob/22e32a82b28b6dabf125325fe9cd79133dc1de4a/data/sbx_cli/sbx_policy_deny_network.yaml)

# sbx policy deny network

Deny network access to specified hosts

**Usage:** `sbx policy deny network [--sandbox SANDBOX] RESOURCES [flags]`

## Description

Block sandbox network access to the specified hosts.

RESOURCES is a comma-separated list of hostnames, domains, or IP addresses.
Deny rules take precedence over allow rules for the same hostname or CIDR. An
allowed hostname isn't checked against CIDR rules for its resolved IP address.

The rule applies globally to all sandboxes by default. Use --sandbox to add
the rule to policy "local" scoped to a single sandbox instead.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--sandbox` |  | Scope the rule to a specific sandbox (default: all sandboxes) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
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
