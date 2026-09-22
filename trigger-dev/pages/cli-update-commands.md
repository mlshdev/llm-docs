> Pinned source for Trigger.dev v4.6.4: [docs/cli-update-commands.mdx](https://github.com/triggerdotdev/trigger.dev/blob/51e29f4b13c04ca4f2ac161bfeb839f10b4e81b7/docs/cli-update-commands.mdx)
> Canonical documentation: https://trigger.dev/docs/cli-update-commands

# CLI update command

Use these options when using the `update` CLI command.

Run the command like this:

```bash npm
npx trigger.dev@latest update
```

```bash pnpm
pnpm dlx trigger.dev@latest update
```

```bash yarn
yarn dlx trigger.dev@latest update
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
