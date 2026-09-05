> Release-pinned source for Trigger.dev v4.5.16: [docs/cli-promote-commands.mdx](https://trigger.dev/docs/cli-promote-commands)

# CLI promote command

Use the promote command to promote a previously deployed version to the current version.

Run the command like this:

```bash npm
npx trigger.dev@latest promote [version]
```

```bash pnpm
pnpm dlx trigger.dev@latest promote [version]
```

```bash yarn
yarn dlx trigger.dev@latest promote [version]
```

## Arguments

```
npx trigger.dev@latest promote [version]
```

**Property (type: \[version])**

The version to promote. This is the version that was previously deployed.

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
