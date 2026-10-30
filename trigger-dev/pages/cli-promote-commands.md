> Pinned source for Trigger.dev v4.8.3: [docs/cli-promote-commands.mdx](https://github.com/triggerdotdev/trigger.dev/blob/645cc47dd2eeb99387f604cad2c90ba2ef568680/docs/cli-promote-commands.mdx)
> Canonical documentation: https://trigger.dev/docs/cli-promote-commands

# CLI promote command

Use the promote command to promote a previously deployed version to the current version.

Run the command like this:

```bash npm
npx trigger.dev@latest promote <version>
```

```bash pnpm
pnpm dlx trigger.dev@latest promote <version>
```

```bash yarn
yarn dlx trigger.dev@latest promote <version>
```

## Arguments

```
npx trigger.dev@latest promote <version>
```

**Property (type: \<version>)**

The version to promote, e.g. `20250208.1`.

## Options

**Property (type: -c, --config \<config file>)**

The name of the config file.

**Property (type: -e, --env \<env>)**

The environment to promote in: `prod`, `staging` or `preview`. Defaults to the environment of the
API key in `TRIGGER_ACCESS_TOKEN`, otherwise `prod`.

**Property (type: --prod)**

Promote in the `prod` environment. Shorthand for `--env prod`.

**Property (type: -b, --branch \<branch>)**

The preview branch when `--env` is `preview`. If omitted, it's read from `TRIGGER_PREVIEW_BRANCH`, then `VERCEL_GIT_COMMIT_REF`, then your git branch.

**Property (type: -p, --project-ref \<project ref>)**

The project ref. Required if there is no config file. Overrides the project in the config file.

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
