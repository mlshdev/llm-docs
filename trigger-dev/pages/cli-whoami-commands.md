> Pinned source for Trigger.dev v4.8.3: [docs/cli-whoami-commands.mdx](https://github.com/triggerdotdev/trigger.dev/blob/645cc47dd2eeb99387f604cad2c90ba2ef568680/docs/cli-whoami-commands.mdx)
> Canonical documentation: https://trigger.dev/docs/cli-whoami-commands

# CLI whoami command

Use these options to display the current logged in user and project details.

Run the command like this:

```bash npm
npx trigger.dev@latest whoami
```

```bash pnpm
pnpm dlx trigger.dev@latest whoami
```

```bash yarn
yarn dlx trigger.dev@latest whoami
```

## Options

**Property (type: -c, --config \<config file>)**

The name of the config file.

**Property (type: -p, --project-ref \<project ref>)**

The project ref. Overrides the project in the config file.

**Property (type: --env-file \<env file>)**

Path to a `.env` file to read `TRIGGER_PROJECT_REF` from. Defaults to `.env`, `.env.development`, `.env.local`, `.env.development.local` and `dev.vars` in the current directory.

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
