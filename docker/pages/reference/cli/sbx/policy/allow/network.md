> Commit-pinned source for Docker main: [data/sbx_cli/sbx_policy_allow_network.yaml](https://github.com/docker/docs/blob/5e8a1f493e574ad6a8b44d838e8df07f2befa31e/data/sbx_cli/sbx_policy_allow_network.yaml)

# sbx policy allow network

Allow network access to specified hosts

**Usage:** `sbx policy allow network [--sandbox SANDBOX] RESOURCES [flags]`

## Description

Allow sandbox network access to the specified hosts.

RESOURCES is a comma-separated list of hostnames, domains, or IP addresses.
Supports exact domains (example.com), wildcard subdomains (*.example.com),
and optional port suffixes (example.com:443). Use "**" to allow all hosts.

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
# Allow access to a single host (all sandboxes)
  sbx policy allow network api.example.com

  # Allow access to multiple hosts
  sbx policy allow network "api.example.com,cdn.example.com"

  # Allow a host only for a specific sandbox
  sbx policy allow network --sandbox my-sandbox api.example.com

  # Allow all subdomains of a host
  sbx policy allow network "*.npmjs.org"

  # Allow all outbound traffic
  sbx policy allow network "**"
```
