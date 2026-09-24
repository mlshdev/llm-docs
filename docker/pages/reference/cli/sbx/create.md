> Pinned source for Docker main: [data/sbx_cli/sbx_create.yaml](https://github.com/docker/docs/blob/4ef3a0062f7cdb22aa0423459f513d4d3783db7d/data/sbx_cli/sbx_create.yaml)

# sbx create

Create a sandbox for an agent

**Usage:** `sbx create [flags] AGENT|SANDBOX_KIT [PATH...]`

## Description

Create a sandbox with access to a host workspace for an agent.

The first positional argument may be a built-in agent name or a sandbox kit
reference. Sandbox kit references may be local directories, ZIP files, git
repositories, or OCI references. Relative local references must be explicit
paths such as ./my-kit or ../my-kit.zip.

Omit the path to create a sandbox without a workspace bind mount: the agent
then works in the container's own filesystem instead of on your files.

Use "sbx run --name SANDBOX" to attach to the agent after creation.

Available agents: claude, codex, copilot, cursor, devin, docker-agent, droid, gemini, kiro, opencode, shell

With --cloud:
Create a cloud sandbox for an agent.

Cloud sandboxes have no host workspace, so no path follows the agent. Sizing
comes from --cpus and --memory and must land on a billable shape; without them
a cloud sandbox gets 2 CPUs and 4 GiB. A template named with -t / --template
must already exist in the cloud registry.

Cloud sandboxes use cloud network policies. Host network and HTTP policies
do not apply. Set cloud account defaults with
"sbx --cloud policy init \<allow-all|balanced|deny-all>".

Use "sbx --cloud run --name SANDBOX" to attach to the agent after creation.

## Options

| Option             | Default  | Description                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--allow-network`  |          | Network pattern to allow for cloud sandbox egress (cloud only; can be specified multiple times)                                                                                                                                                                                                                                                                                                            |
| `--clone`          |          | Run the agent on a private in-container clone of the host Git repository (mounted read-only) instead of bind-mounting the workspace; the agent's commits are accessible via the sandbox-<name> git remote on the host                                                                                                                                                                                      |
| `--cpus`           |          | Number of CPUs to allocate to the sandbox (0 = auto: all host CPUs)                                                                                                                                                                                                                                                                                                                                        |
| `--deny-network`   |          | Add a per-sandbox network deny rule at creation time. Can be specified multiple times. The rule applies only to the new sandbox and can be listed or removed later with 'sbx policy ls <NAME>' or 'sbx policy rm network --sandbox <NAME> --resource <HOST>'. Safe under centralized governance because a local deny can only narrow, never widen, egress.                                                 |
| `-e`, `--env`      |          | Set an environment variable in the sandbox (can be repeated): KEY=VALUE, or a bare KEY to take the value from the current environment                                                                                                                                                                                                                                                                      |
| `--env-file`       |          | Read environment variables from a file (can be repeated). --env wins over any file; a later file wins over an earlier one                                                                                                                                                                                                                                                                                  |
| `--image-ref`      |          | OCI image reference for inline-mode cloud create (mutually exclusive with --template; requires --cpus and --memory)                                                                                                                                                                                                                                                                                        |
| `--kit`            |          | Additional kit reference (must be a mixin; directory, ZIP, git, or OCI). Can be specified multiple times (Experimental)                                                                                                                                                                                                                                                                                    |
| `--kit-arg`        |          | Value for an argument the kit declares, as name=value for every kit or kit.name=value for one (can be repeated) (Experimental)                                                                                                                                                                                                                                                                             |
| `--kit-args-file`  |          | File of name=value kit arguments, one per line (can be repeated); --kit-arg overrides (Experimental)                                                                                                                                                                                                                                                                                                       |
| `-m`, `--memory`   |          | Memory limit in binary units (e.g., 512m, 8g). Minimum: 512 MiB. Default: 50% of host memory, clamped to 512 MiB–32 GiB. Maximum: max(75% of host memory, 512 MiB)                                                                                                                                                                                                                                         |
| `--name`           |          | Name for the sandbox (defaults to <agent>-<workdir>; at least two characters, starting with a letter or number, containing only letters, numbers, hyphens and periods (periods are rejected with --cloud); 'default' is reserved)                                                                                                                                                                          |
| `--on-timeout`     |          | What happens when --ttl lapses: 'stop' stops the sandbox in place so it can be started again later, 'restart' keeps it running by stopping and immediately starting it, or 'delete' removes it. Omit the flag and the server stops the sandbox when it can be started again later, and deletes it otherwise. With 'restart' a supplied --ttl must be at least 1h (cloud only).                             |
| `-p`, `--publish`  |          | Publish a sandbox port to the host (can be repeated): \[\[HOST\_IP:]HOST\_PORT:]SANDBOX\_PORT\[/PROTOCOL]                                                                                                                                                                                                                                                                                                  |
| `--pull`           | `always` | Image pull policy (always\|missing\|never)                                                                                                                                                                                                                                                                                                                                                                 |
| `-q`, `--quiet`    |          | Suppress verbose output                                                                                                                                                                                                                                                                                                                                                                                    |
| `--skills`         |          | Shared skills store mode for the agent's skills directory (e.g. \~/.claude/skills): off, readonly (store linked in read-only, directory stays writable), or readwrite (store mounted over it, writes are shared). Default: readonly, or the configured skills.defaultMode setting.                                                                                                                         |
| `--static-mcp`     |          | MCP server names that form the sandbox's fixed (static) MCP set. Accepts a comma-separated list (--static-mcp notion,atlassian), repeated flags (--static-mcp notion --static-mcp atlassian), or a mix; all forms accumulate into the same set. The set is chosen once at creation time. Local sandboxes take names registered with 'sbx mcp add'. Cloud sandboxes resolve names on the cloud MCP gateway. |
| `-t`, `--template` |          | Container image to use for the sandbox (default: agent-specific image)                                                                                                                                                                                                                                                                                                                                     |
| `--ttl`            |          | Cloud sandbox time-to-live before it times out (e.g. 30m, 2h, 1h30m; units are case-insensitive; cloud only; default: server-side)                                                                                                                                                                                                                                                                         |
| `-v`, `--volume`   |          | Attach an existing persistent volume, NAME:MOUNTPATH (cloud only, experimental; repeatable) (Experimental)                                                                                                                                                                                                                                                                                                 |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
# Create a sandbox for Claude in the current directory
  sbx create claude .

  # Create a sandbox with a custom name
  sbx create --name my-project claude /path/to/project

  # Create with additional read-only workspaces
  sbx create claude . /path/to/docs:ro

  # Create without a workspace bind mount
  sbx create claude

  # Create from a local sandbox kit
  sbx create ../path/to/my-agent/

  # Add a mixin to a built-in agent
  sbx create claude --kit ./my-mixin/

  # Run the agent on an in-container clone of the host repo, wired back via a git-daemon
  sbx create --clone claude .

  # Create a cloud sandbox for claude
  sbx --cloud create claude

  # Create a named cloud sandbox with a mixin baked in
  sbx --cloud create --name my-project claude --kit ./my-mixin/

  # Create from a template that already exists in the cloud registry
  sbx --cloud create -t TEMPLATE
```
