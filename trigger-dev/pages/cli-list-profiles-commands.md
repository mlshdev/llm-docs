> Release-pinned source for Trigger.dev v4.5.16: [docs/cli-list-profiles-commands.mdx](https://trigger.dev/docs/cli-list-profiles-commands)

# CLI list-profiles command

Use these options when using the `list-profiles` CLI command.

Run the command like this:

```bash npm
npx trigger.dev@latest list-profiles
```

```bash pnpm
pnpm dlx trigger.dev@latest list-profiles
```

```bash yarn
yarn dlx trigger.dev@latest list-profiles
```

## Options

### Common options

These options are available on most commands.

**Property (type: --log-level | -l)**

The CLI log level to use. Options are `debug`, `info`, `log`, `warn`, `error`, and `none`. This does not affect the log level of your trigger.dev tasks. Defaults to `log`.

**Property (type: --skip-telemetry)**

Opt-out of sending telemetry data. This can also be done via the `TRIGGER_TELEMETRY_DISABLED` environment variable. Just set it to anything other than an empty string.

**Property (type: --help | -h)**

Shows the help information for the command.

**Property (type: --version | -v)**

Displays the version number of the CLI.
