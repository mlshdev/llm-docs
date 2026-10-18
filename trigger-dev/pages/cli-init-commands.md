> Pinned source for Trigger.dev v4.7.4: [docs/cli-init-commands.mdx](https://github.com/triggerdotdev/trigger.dev/blob/7bbcf0073ef3d32f0306ffbb4622cf5b5314ad43/docs/cli-init-commands.mdx)
> Canonical documentation: https://trigger.dev/docs/cli-init-commands

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

## Arguments

**Property (type: \[path])**

The path to the project. Defaults to `.`.

## Options

**Property (type: --javascript)**

By default, the init command assumes you are using TypeScript. Use this flag to initialize a
project that uses JavaScript.

**Property (type: --project-ref | -p)**

The project ref to use when initializing the project.

**Property (type: --tag | -t)**

The version of the `@trigger.dev/sdk` package to install. Defaults to the CLI version.

**Property (type: --skip-package-install)**

Skip installing the `@trigger.dev/sdk` package.

**Property (type: --override-config)**

Override the existing config file if it exists.

**Property (type: --project-name \<name>)**

The name of the project to create when your account has no projects yet.

**Property (type: --org-name \<name>)**

The organization to create the first project in. Matches an existing organization by name, or creates it if you have none.

**Property (type: -r, --runtime \<runtime>)**

The runtime to use: `node`, `node-22`, `node-24`, `node-26` or `bun`. Defaults to `node-24`.

**Property (type: -y, --yes)**

Skip all prompts. Requires `--project-ref`, or `--project-name` with `--org-name` for a new account.

**Property (type: --no-browser)**

Do not open the browser during login. Print the URL only.

**Property (type: --pkg-args)**

Additional arguments to pass to the package manager. Accepts CSV for multiple args.

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
