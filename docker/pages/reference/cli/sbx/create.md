> Commit-pinned source for Docker main: [data/sbx_cli/sbx_create.yaml](https://github.com/docker/docs/blob/c4f0e5b32deb9d3365c1f0be62305038a24e15e5/data/sbx_cli/sbx_create.yaml)

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

Without --cpus/--memory a cloud sandbox defaults to 2 CPUs and 4 GiB.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--allow-network` |  | Network pattern to allow for cloud sandbox egress (cloud only; can be specified multiple times) |
| `--clone` |  | Run the agent on a private in-container clone of the host Git repository (mounted read-only) instead of bind-mounting the workspace; the agent's commits are accessible via the sandbox-<name> git remote on the host |
| `--cpus` |  | Number of CPUs to allocate to the sandbox (0 = auto: all host CPUs) |
| `--deny-network` |  | Add a per-sandbox network deny rule at creation time. Can be specified multiple times. The rule applies only to the new sandbox and can be listed or removed later with `sbx policy ls <NAME>` / `sbx policy rm network --sandbox <NAME> --resource <HOST>`. Safe under centralized governance because a local deny can only narrow, never widen, egress. |
| `-e`, `--env` |  | Set an environment variable in the sandbox (can be repeated): KEY=VALUE, or a bare KEY to take the value from the current environment |
| `--env-file` |  | Read environment variables from a file (can be repeated). --env wins over any file; a later file wins over an earlier one |
| `--image-ref` |  | OCI image reference for inline-mode cloud create (mutually exclusive with --template; requires --cpus and --memory) |
| `--kit` |  | Additional kit reference (must be a mixin; directory, ZIP, git, or OCI). Can be specified multiple times (Experimental) |
| `--kit-arg` |  | Value for an argument the kit declares, as name=value for every kit or kit.name=value for one (can be repeated) (Experimental) |
| `--kit-args-file` |  | File of name=value kit arguments, one per line (can be repeated); --kit-arg overrides (Experimental) |
| `-m`, `--memory` |  | Memory limit in binary units (e.g., 1024m, 8g). Default: 50% of host memory, max 32 GiB |
| `--name` |  | Name for the sandbox (defaults to <agent>-<workdir>; at least two characters, starting with a letter or number, containing only letters, numbers, hyphens and periods; 'default' is reserved) |
| `--on-timeout` |  | What happens when --ttl lapses: 'delete' (default) tombstones the sandbox, or 'stop' stops it in place so it can be started again later (cloud only; 'stop' requires your account to be entitled to it). |
| `-p`, `--publish` |  | Publish a sandbox port to the host (can be repeated): [[HOST_IP:]HOST_PORT:]SANDBOX_PORT[/PROTOCOL] |
| `-q`, `--quiet` |  | Suppress verbose output |
| `-t`, `--template` |  | Container image to use for the sandbox (default: agent-specific image) |
| `--ttl` |  | Cloud sandbox time-to-live before it times out (e.g. 30m, 2h; cloud only; default: server-side) |
| `-v`, `--volume` |  | Attach an existing persistent volume, NAME:MOUNTPATH (cloud only, experimental; repeatable) (Experimental) |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |

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
```
