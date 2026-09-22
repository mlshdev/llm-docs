> Pinned source for Trigger.dev v4.6.4: [docs/cli-runs-commands.mdx](https://github.com/triggerdotdev/trigger.dev/blob/51e29f4b13c04ca4f2ac161bfeb839f10b4e81b7/docs/cli-runs-commands.mdx)
> Canonical documentation: https://trigger.dev/docs/cli-runs-commands

# CLI runs commands

Use these commands to list, inspect, replay and cancel runs from your terminal.

## runs list

Lists runs, newest first, in a table of ID, task, status, version, created time and duration.

```bash npm
npx trigger.dev@latest runs list
```

```bash pnpm
pnpm dlx trigger.dev@latest runs list
```

```bash yarn
yarn dlx trigger.dev@latest runs list
```

**Property (type: --limit)**

The number of runs to list, up to 100. Defaults to 20.

**Property (type: --status)**

Only show runs with this status, e.g. `FAILED`.

**Property (type: --task)**

Only show runs for this task identifier.

**Property (type: --tag)**

Only show runs with this tag.

**Property (type: --cursor)**

The pagination cursor printed at the end of the previous page.

## runs get

Prints the status, version, tags, timings, duration, cost and error of a single run.

```bash
npx trigger.dev@latest runs get run_abc123
```

## runs replay

Triggers a new run with the same payload as an existing one, using the latest version of the task.

```bash
npx trigger.dev@latest runs replay run_abc123
```

## runs cancel

Cancels a run that has not finished yet. You are asked to confirm first.

```bash
npx trigger.dev@latest runs cancel run_abc123
```

**Property (type: --yes | -y)**

Cancel without the confirmation prompt. Required in non-interactive environments such as CI.

## Options

**Property (type: --env | -e)**

The environment to use: `dev`, `prod`, `staging` or `preview`. Defaults to `prod`.

**Property (type: --config | -c)**

The name of the config file found at the project path. Defaults to `trigger.config.ts`

**Property (type: --project-ref | -p)**

The project ref. Required if there is no config file.

**Property (type: --branch | -b)**

When using `--env preview` the branch is automatically detected from git. But you can manually
specify it by using this option, e.g. `--branch my-branch` or `-b my-branch`.

### Common options

These options are available on most commands.

**Property (type: --profile)**

The login profile to use. Defaults to "default".

**Property (type: --api-url | -a)**

Override the default API URL. If not specified, it uses `https://api.trigger.dev`. This can also be set via the `TRIGGER_API_URL` environment variable.

**Property (type: --log-level | -l)**

The CLI log level to use. Options are `debug`, `info`, `log`, `warn`, `error`, and `none`. This does not affect the log level of your trigger.dev tasks. Defaults to `log`.

**Property (type: --skip-telemetry)**

Opt-out of sending telemetry data. This can also be done via the `TRIGGER_TELEMETRY_DISABLED` environment variable. Just set it to anything other than an empty string.

**Property (type: --help | -h)**

Shows the help information for the command.

**Property (type: --version | -v)**

Displays the version number of the CLI.
