> Pinned source for Docker main: [data/sbx_cli/sbx_env_plan.yaml](https://github.com/docker/docs/blob/09d7cacc04ae5b1298b811fa31cfb830f3ef194f/data/sbx_cli/sbx_env_plan.yaml)

# sbx env plan

Show what an environment would change outside the sandbox

**Usage:** `sbx env plan [PATH...] [flags]`

> \[!NOTE]
> This command is experimental.

## Description

Read the environment file from PATH (default: current directory) and print
everything applying it would set up: the host commands it runs, the credentials
and bindings it provisions, the MCP servers it registers, the directories it
creates, the ports it publishes, and the sandbox itself along with the variables
it runs with.

The plan is compared against what this environment last applied on this machine,
against what was approved where nothing applied it, and against what is there
now, so a second run shows only what moved. Nothing is applied, approved, or
recorded: use "sbx env create" or "sbx env run" for that.

Each PATH may be a directory (the file is <PATH>/sbxenv.yaml) or the
path to the environment file itself. Passing more than one PATH deep-merges them
in order, matching the other "sbx env" subcommands.

A directory PATH selects sbxenv.yaml; a file PATH selects that file.
With no PATH, \~/.sbxenv.yaml supplies shared defaults when present.
Explicit PATHs skip those defaults. Later files override earlier values;
lists such as ports and mcp.servers are concatenated.

## Options

| Option                 | Default | Description                                                                                                                                                                        |
| ---------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--clone`              |         | Override workspace.clone in sbxenv.yaml (see 'sbx create --clone')                                                                                                                 |
| `--env-arg`            |         | Value for an argument the environment file declares, as name=value (can be repeated) (Experimental)                                                                                |
| `--env-args-file`      |         | File of name=value environment arguments, one per line (can be repeated); --env-arg overrides (Experimental)                                                                       |
| `--kit-arg`            |         | Value for an argument a kit declares, as name=value for every kit or kit.name=value for one (can be repeated); overrides the args a kits: entry pins in sbxenv.yaml (Experimental) |
| `--kit-args-file`      |         | File of name=value kit arguments, one per line (can be repeated); --kit-arg overrides (Experimental)                                                                               |
| `--name`               |         | Name for the sandbox, overriding 'name:' in sbxenv.yaml and the derived <agent>-<directory> (every 'sbx env' command addressing this environment needs the same value)             |
| `--skip-host-commands` |         | Plan without the host lifecycle commands the environment declares                                                                                                                  |

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |

## Examples

```console
sbx env plan
  sbx env plan ./project
```
