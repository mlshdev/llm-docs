> Release-pinned source for Trigger.dev v4.5.16: [docs/cli-init-commands.mdx](https://trigger.dev/docs/cli-init-commands)

# CLI init command

Use these options when running the CLI `init` command.

Run the command like this:

```bash npm
npx trigger.dev@latest init
```

```bash pnpm
pnpm dlx trigger.dev@latest init
```

```bash yarn
yarn dlx trigger.dev@latest init
```

## Options

**Property (type: --javascript)**

By default, the init command assumes you are using TypeScript. Use this flag to initialize a
project that uses JavaScript.

**Property (type: --project-ref | -p)**

The project ref to use when initializing the project.

**Property (type: --tag | -t)**

The version of the `@trigger.dev/sdk` package to install. Defaults to `latest`.

**Property (type: --skip-package-install)**

Skip installing the `@trigger.dev/sdk` package.

**Property (type: --override-config)**

Override the existing config file if it exists.

**Property (type: --pkg-args)**

Additional arguments to pass to the package manager. Accepts CSV for multiple args.

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
