> Commit-pinned source for Docker main: [data/sbx_cli/sbx_env_plan.yaml](https://github.com/docker/docs/blob/2f7b1064bd44cf6c3eddead9e945823e4f565a7b/data/sbx_cli/sbx_env_plan.yaml)

# sbx env plan

Show what an environment would change outside the sandbox

**Usage:** `sbx env plan [PATH...] [flags]`

> [!NOTE]
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

A directory resolves to the sbxenv.yaml in it and to no other name; any
other file is read only when a PATH names it. The hidden .sbxenv.yaml was once
read as a directory's own environment too, so a project still holding one now
reads as having none.

With no PATH, an existing .sbxenv.yaml in your home directory is merged
underneath as a base layer for defaults shared across projects; naming any
PATH skips the layer. It may not set "name:" or "workspace:", each of which
identifies a single project. Changing its "agent:" changes the derived
<agent>-<directory-basename> sandbox name, leaving sandboxes created under
the previous name for "sbx env rm" to miss.

A list such as "ports" or "mcp.servers" concatenates across layers rather
than overriding, so an entry declared in both appears twice.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--clone` |  | Override workspace.clone in sbxenv.yaml (see 'sbx create --clone') |
| `--env-arg` |  | Value for an argument the environment file declares, as name=value (can be repeated) (Experimental) |
| `--env-args-file` |  | File of name=value environment arguments, one per line (can be repeated); --env-arg overrides (Experimental) |
| `--kit-arg` |  | Value for an argument a kit declares, as name=value for every kit or kit.name=value for one (can be repeated); overrides the args a kits: entry pins in sbxenv.yaml (Experimental) |
| `--kit-args-file` |  | File of name=value kit arguments, one per line (can be repeated); --kit-arg overrides (Experimental) |
| `--skip-host-commands` |  | Plan without the host lifecycle commands the environment declares |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--cloud` |  | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `--cloud-api-url` | `https://api.sandboxes-cloud.docker.com` | Cloud Sandboxes API base URL; only used with --cloud. Defaults to prod (https://api.sandboxes-cloud.docker.com). Set DOCKER_CLOUD_API_URL or pass this flag to override; a legacy value ending in /v1 is accepted. |
| `-D`, `--debug` |  | Enable debug logging |
