> Release-pinned source for Trigger.dev v4.5.16: [docs/cli-login-commands.mdx](https://trigger.dev/docs/cli-login-commands)

# CLI login command

Use these options when logging in to Trigger.dev using the CLI.

Run the command like this:

```bash npm
npx trigger.dev@latest login
```

```bash pnpm
pnpm dlx trigger.dev@latest login
```

```bash yarn
yarn dlx trigger.dev@latest login
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
