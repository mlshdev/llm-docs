> Pinned source for Docker main: [data/sbx_cli/sbx_env_run.yaml](https://github.com/docker/docs/blob/16e452c8eaea26cec842cbf1065037fb2015001f/data/sbx_cli/sbx_env_run.yaml)

# sbx env run

Create (if needed) and attach to a sandbox environment

**Usage:** `sbx env run [PATH...] [-- ARG...] [flags]`

> \[!NOTE]
> This command is experimental.

## Description

Read the environment file from PATH (default: current directory)
and launch its agent. If the sandbox already exists it is started
and re-attached without re-provisioning; otherwise it is created first
(provisioning secrets and bindings) and then attached.

Each PATH may be a directory (the file is <PATH>/sbxenv.yaml) or the
path to the environment file itself. Passing more than one PATH deep-merges them
in order (docker-compose `-f` semantics): later files override earlier ones.
Values may reference the arguments the file declares with ${{ env.args.NAME }},
supplied by --env-arg, plus ${{ env.projectDir }} and ${{ env.fileDir }}.
Nothing else is expanded, so a "$" is literal text.

Optional entrypoint and cmd arrays override the agent launch for this environment
only. Omitted or null fields inherit defaults; empty arrays clear
them. Later files replace these arrays rather than concatenate them. Arguments
after -- replace cmd when an override is configured; otherwise they are forwarded
to the agent's saved launcher. No shell expansion is performed on array elements.
Overrides bypass the saved launcher, apply on each env run, and leave env exec,
plain sbx run, the published kit, and the sandbox's PID 1 unchanged. A detached
run starts only the sandbox, not the configured command. Inheriting launch
defaults may require resolving the environment's workload kit again.

A directory PATH selects sbxenv.yaml; a file PATH selects that file.
With no PATH, \~/.sbxenv.yaml supplies shared defaults when present.
Explicit PATHs skip those defaults. Later files override earlier values;
lists such as ports and mcp.servers are concatenated.

## Options

| Option                 | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--clone`              |         | Override workspace.clone in sbxenv.yaml (see 'sbx create --clone')                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `-d`, `--detach`       |         | Create/start the sandbox without attaching                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `--env-arg`            |         | Value for an argument the environment file declares, as name=value (can be repeated) (Experimental)                                                                                                                                                                                                                                                                                                                                                                                          |
| `--env-args-file`      |         | File of name=value environment arguments, one per line (can be repeated); --env-arg overrides (Experimental)                                                                                                                                                                                                                                                                                                                                                                                 |
| `-f`, `--force`        |         | Apply the environment plan without asking                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `--kit-arg`            |         | Value for an argument a kit declares, as name=value for every kit or kit.name=value for one (can be repeated); overrides the args a kits: entry pins in sbxenv.yaml (Experimental)                                                                                                                                                                                                                                                                                                           |
| `--kit-args-file`      |         | File of name=value kit arguments, one per line (can be repeated); --kit-arg overrides (Experimental)                                                                                                                                                                                                                                                                                                                                                                                         |
| `--name`               |         | Name for the sandbox, overriding 'name:' in sbxenv.yaml and the derived <agent>-<directory> (every 'sbx env' command addressing this environment needs the same value)                                                                                                                                                                                                                                                                                                                       |
| `--on-timeout`         |         | What happens when --ttl lapses: 'stop' stops the sandbox in place so it can be started again later, 'restart' keeps it running by stopping and immediately starting it, or 'delete' removes it. Omit the flag and the server stops the sandbox when it can be started again later, and deletes it otherwise. With 'restart' a supplied --ttl must be at least 1h (cloud only). Only applies when the sandbox is created; 'sbx --cloud env run' refuses it when attaching to an existing one. |
| `--skip-host-commands` |         | Skip host lifecycle commands and disable environment MCP commands until a later env run without this flag                                                                                                                                                                                                                                                                                                                                                                                    |
| `--ttl`                |         | Cloud sandbox time-to-live before it times out (e.g. 30m, 2h, 1h30m; units are case-insensitive; cloud only; default: server-side). Only applies when the sandbox is created; 'sbx --cloud env run' refuses it when attaching to an existing one                                                                                                                                                                                                                                             |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
| `--no-input`    |         | Never prompt; commands that need an answer fail with the command to run instead                                                                        |

## Examples

```console
sbx env run

  # Start without attaching
  sbx env run --detach ./project

  # Replace cmd while keeping the configured entrypoint
  sbx env run . -- --base HEAD
```
