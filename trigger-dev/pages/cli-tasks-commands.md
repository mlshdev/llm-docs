> Pinned source for Trigger.dev v4.7.7: [docs/cli-tasks-commands.mdx](https://github.com/triggerdotdev/trigger.dev/blob/ffc950ee0d4fb2bdfbc0d368bba8d6e25e8d6e72/docs/cli-tasks-commands.mdx)
> Canonical documentation: https://trigger.dev/docs/cli-tasks-commands

# CLI tasks commands

Use these commands to trigger tasks from your terminal.

## tasks trigger

Triggers a task and prints the run ID and its dashboard URL. It runs in the `dev` environment unless you pass `--env`, so start the [dev command](https://trigger.dev/docs/cli-dev-commands) first.

```bash npm
npx trigger.dev@latest tasks trigger hello-world --payload '{"name":"Ada"}'
```

```bash pnpm
pnpm dlx trigger.dev@latest tasks trigger hello-world --payload '{"name":"Ada"}'
```

```bash yarn
yarn dlx trigger.dev@latest tasks trigger hello-world --payload '{"name":"Ada"}'
```

Add `--wait` to wait for the run to finish. It prints the run's output, or its error and exits with code 1 if the run failed, which makes it useful in scripts and for coding agents testing a task:

```bash
npx trigger.dev@latest tasks trigger hello-world --payload '{"name":"Ada"}' --wait
```

The command fails without creating a run if the current version has no task with that ID. In `dev`, it warns you when the dev command isn't running, because the run waits in the queue until it starts.

**Property (type: --payload)**

The payload as JSON, e.g. `--payload '{"name":"Ada"}'`. Without it, the task gets no payload.

**Property (type: --payload-file)**

Read the payload from a JSON file instead.

**Property (type: --wait)**

Wait for the run to finish, then print its output or error.

**Property (type: --timeout)**

With `--wait`, stop waiting after this many seconds and exit with code 1.

**Property (type: --tag)**

A tag to add to the run. Repeat it to add more than one, e.g. `--tag cli --tag test`.

**Property (type: --idempotency-key)**

If a run with this key already exists, return it instead of creating a new one. See [idempotency](https://trigger.dev/docs/idempotency).

**Property (type: --delay)**

Wait before running, e.g. `30s`, `5m` or an ISO 8601 date.

**Property (type: --ttl)**

Expire the run if it hasn't started within this time, e.g. `10m`.

**Property (type: --queue)**

The queue to run in, instead of the queue set on the task.

**Property (type: --machine)**

The machine to run on, e.g. `small-2x`. See [machines](https://trigger.dev/docs/machines). Has no effect in `dev`.

## Options

**Property (type: --env | -e)**

The environment to use: `dev`, `prod`, `staging` or `preview`. Defaults to `dev`.

**Property (type: --config | -c)**

The name of the config file found at the project path. Defaults to `trigger.config.ts`

**Property (type: --project-ref | -p)**

The project ref. Required if there is no config file.

**Property (type: --branch | -b)**

The branch to use. Required with `--env preview`. In `dev`, it defaults to the same [dev branch](https://trigger.dev/docs/deployment/dev-branches) as the dev command.

### Common options

These options are available on most commands.

**Property (type: --profile)**

The login profile to use. Defaults to the current profile, which is set by your last `login` or `switch` (initially "default").

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
