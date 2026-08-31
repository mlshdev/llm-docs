> Commit-pinned source for Docker main: [data/sbx_cli/sbx_run.yaml](https://github.com/docker/docs/blob/ca60e92629079de412f38632876ab208d84267ef/data/sbx_cli/sbx_run.yaml)

# sbx run

Run an agent in a sandbox

**Usage:** `sbx run [flags] [AGENT] [PATH...] [-- AGENT_ARGS...]`

## Description

Run an agent in a sandbox, creating the sandbox if it does not already exist.

The first positional argument is the agent to run. To re-attach to an existing
sandbox by name, use --name; the agent positional is optional when the named
sandbox already exists and is read from its spec.

Pass agent arguments after the "--" separator. Additional workspaces can be
provided as extra arguments. Append ":ro" to mount them read-only.

To create a sandbox without attaching, use "sbx create" instead, or
pass --detached (-d) to print the sandbox ID and exit without opening an
interactive session.

Available agents: claude, codex, copilot, cursor, docker-agent, droid, gemini, kiro, opencode, shell

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--clone` |  | Run the agent on a private in-container clone of the host Git repository; must be set at sandbox creation time (no-op when re-attaching to an existing clone-mode sandbox) |
| `--cpus` |  | Number of CPUs to allocate to the sandbox (0 = auto: all host CPUs) |
| `--deny-network` |  | Add a per-sandbox network deny rule at creation time. Can be specified multiple times. The rule applies only to the new sandbox and can be listed or removed later with `sbx policy ls <NAME>` / `sbx policy rm network --sandbox <NAME> --resource <HOST>`. Safe under centralized governance because a local deny can only narrow, never widen, egress. |
| `-e`, `--env` |  | Set an environment variable in the sandbox (can be repeated): KEY=VALUE, or a bare KEY to take the value from the current environment. Applies to the agent session, so it takes effect on a re-attach too; also baked into the sandbox when this run creates it |
| `--env-file` |  | Read environment variables from a file (can be repeated). --env wins over any file; a later file wins over an earlier one. Applies to the agent session, so it takes effect on a re-attach too; also baked into the sandbox when this run creates it |
| `--kit` |  | Kit reference (directory, ZIP, or OCI). Can be specified multiple times (Experimental) |
| `-m`, `--memory` |  | Memory limit in binary units (e.g., 1024m, 8g). Default: 50% of host memory, max 32 GiB |
| `--name` |  | Name for the sandbox (default: <agent>-<workdir>) |
| `-p`, `--publish` |  | Publish a sandbox port to the host (can be repeated): [[HOST_IP:]HOST_PORT:]SANDBOX_PORT[/PROTOCOL]. Applied when the sandbox is created; ignored when re-attaching (use "sbx ports") |
| `-t`, `--template` |  | Container image to use for the sandbox (default: agent-specific image) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `-D`, `--debug` |  | Enable debug logging |

## Examples

```console
# Create and run a sandbox with claude in current directory
  sbx run claude

  # Create and run with additional workspaces (read-only)
  sbx run claude . /path/to/docs:ro

  # Re-attach to an existing sandbox by name (agent read from its spec)
  sbx run --name existing-sandbox

  # Re-attach to an existing sandbox by name and verify the expected agent
  sbx run claude --name existing-sandbox

  # Run a sandbox with agent arguments
  sbx run claude -- --continue
```
