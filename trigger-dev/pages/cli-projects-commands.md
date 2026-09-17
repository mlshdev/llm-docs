> Pinned source for Trigger.dev v4.6.3: [docs/cli-projects-commands.mdx](https://github.com/triggerdotdev/trigger.dev/blob/2d03fee2e3ff368128302ed4c783ba4e32d1cb00/docs/cli-projects-commands.mdx)
> Canonical documentation: https://trigger.dev/docs/cli-projects-commands

# CLI projects commands

Create, inspect, and rename Trigger.dev projects from the terminal.

These commands act on the organizations and projects your account can access, so run
[`login`](https://trigger.dev/docs/cli-login-commands) first.

## projects create

Creates a project. You are prompted for the organization and name when the options are omitted.

```bash npm
npx trigger.dev@latest projects create
```

```bash pnpm
pnpm dlx trigger.dev@latest projects create
```

```bash yarn
yarn dlx trigger.dev@latest projects create
```

**Property (type: --org | -o)**

The organization slug or ID to create the project in.

**Property (type: --name | -n)**

The name of the new project.

## projects get

Prints the name, ref, slug, organization, default runtime and region of a project.

```bash
npx trigger.dev@latest projects get proj_abc123
```

## projects rename

Renames a project. The project ref does not change.

```bash
npx trigger.dev@latest projects rename proj_abc123 "My new name"
```

## Options

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
