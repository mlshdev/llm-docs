> Pinned source for Docker main: [data/sbx_cli/sbx_env_create.yaml](https://github.com/docker/docs/blob/09d7cacc04ae5b1298b811fa31cfb830f3ef194f/data/sbx_cli/sbx_env_create.yaml)

# sbx env create

Create a sandbox environment from sbxenv.yaml

**Usage:** `sbx env create [PATH...] [flags]`

> \[!NOTE]
> This command is experimental.

## Description

Read the environment file from PATH (default: current directory),
provision its declared secrets at the sandbox scope, merge its credential
bindings, and create the sandbox. Use "sbx env run" to attach.

Each PATH may be a directory (the file is <PATH>/sbxenv.yaml) or the
path to the environment file itself. Passing more than one PATH deep-merges them
in order (docker-compose `-f` semantics): later files override earlier ones.
Values may reference the arguments the file declares with ${{ env.args.NAME }},
supplied by --env-arg, plus ${{ env.projectDir }} and ${{ env.fileDir }}.
Nothing else is expanded, so a "$" is literal text.

A directory PATH selects sbxenv.yaml; a file PATH selects that file.
With no PATH, \~/.sbxenv.yaml supplies shared defaults when present.
Explicit PATHs skip those defaults. Later files override earlier values;
lists such as ports and mcp.servers are concatenated.

## Options

| Option                 | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--clone`              |         | Override workspace.clone in sbxenv.yaml (see 'sbx create --clone')                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `--env-arg`            |         | Value for an argument the environment file declares, as name=value (can be repeated) (Experimental)                                                                                                                                                                                                                                                                                                                                                                                          |
| `--env-args-file`      |         | File of name=value environment arguments, one per line (can be repeated); --env-arg overrides (Experimental)                                                                                                                                                                                                                                                                                                                                                                                 |
| `-f`, `--force`        |         | Apply the environment plan without asking                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `--kit-arg`            |         | Value for an argument a kit declares, as name=value for every kit or kit.name=value for one (can be repeated); overrides the args a kits: entry pins in sbxenv.yaml (Experimental)                                                                                                                                                                                                                                                                                                           |
| `--kit-args-file`      |         | File of name=value kit arguments, one per line (can be repeated); --kit-arg overrides (Experimental)                                                                                                                                                                                                                                                                                                                                                                                         |
| `--name`               |         | Name for the sandbox, overriding 'name:' in sbxenv.yaml and the derived <agent>-<directory> (every 'sbx env' command addressing this environment needs the same value)                                                                                                                                                                                                                                                                                                                       |
| `--on-timeout`         |         | What happens when --ttl lapses: 'stop' stops the sandbox in place so it can be started again later, 'restart' keeps it running by stopping and immediately starting it, or 'delete' removes it. Omit the flag and the server stops the sandbox when it can be started again later, and deletes it otherwise. With 'restart' a supplied --ttl must be at least 1h (cloud only). Only applies when the sandbox is created; 'sbx --cloud env run' refuses it when attaching to an existing one. |
| `--skip-host-commands` |         | Skip the host lifecycle commands the environment declares                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `--ttl`                |         | Cloud sandbox time-to-live before it times out (e.g. 30m, 2h, 1h30m; units are case-insensitive; cloud only; default: server-side). Only applies when the sandbox is created; 'sbx --cloud env run' refuses it when attaching to an existing one                                                                                                                                                                                                                                             |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
# Create the environment described in the current directory
  sbx env create

  # Approve the plan without asking
  sbx env create --force ./project
```
