> Commit-pinned source for Docker main: [data/sbx_cli/sbx_create.yaml](https://github.com/docker/docs/blob/2028912e0e64869c14702deec64ba2ef5cc10441/data/sbx_cli/sbx_create.yaml)

# sbx create

Create a sandbox for an agent

**Usage:** `sbx create [flags] AGENT PATH [PATH...]`

## Description

Create a sandbox with access to a host workspace for an agent.

Use "sbx run --name SANDBOX" to attach to the agent after creation.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--clone` |  | Run the agent on a private in-container clone of the host Git repository (mounted read-only) instead of bind-mounting the workspace; the agent's commits are accessible via the sandbox-<name> git remote on the host |
| `--cpus` |  | Number of CPUs to allocate to the sandbox (0 = auto: all host CPUs) |
| `--deny-network` |  | Add a per-sandbox network deny rule at creation time. Can be specified multiple times. The rule applies only to the new sandbox and can be listed or removed later with `sbx policy ls <NAME>` / `sbx policy rm network --sandbox <NAME> --resource <HOST>`. Safe under centralized governance because a local deny can only narrow, never widen, egress. |
| `-e`, `--env` |  | Set an environment variable in the sandbox (can be repeated): KEY=VALUE, or a bare KEY to take the value from the current environment |
| `--env-file` |  | Read environment variables from a file (can be repeated). --env wins over any file; a later file wins over an earlier one |
| `--kit` |  | Kit reference (directory, ZIP, or OCI). Can be specified multiple times (Experimental) |
| `-m`, `--memory` |  | Memory limit in binary units (e.g., 1024m, 8g). Default: 50% of host memory, max 32 GiB |
| `--name` |  | Name for the sandbox (defaults to <agent>-<workdir>; at least two characters, starting with a letter or number, containing only letters, numbers, hyphens and periods; 'default' is reserved) |
| `-p`, `--publish` |  | Publish a sandbox port to the host (can be repeated): [[HOST_IP:]HOST_PORT:]SANDBOX_PORT[/PROTOCOL] |
| `-q`, `--quiet` |  | Suppress verbose output |
| `-t`, `--template` |  | Container image to use for the sandbox (default: agent-specific image) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Create a sandbox for Claude in the current directory
  sbx create claude .

  # Create a sandbox with a custom name
  sbx create --name my-project claude /path/to/project

  # Create with additional read-only workspaces
  sbx create claude . /path/to/docs:ro

  # Run the agent on an in-container clone of the host repo, wired back via a git-daemon
  sbx create --clone claude .
```
