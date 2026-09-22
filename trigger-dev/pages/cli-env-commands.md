> Pinned source for Trigger.dev v4.6.4: [docs/cli-env-commands.mdx](https://github.com/triggerdotdev/trigger.dev/blob/51e29f4b13c04ca4f2ac161bfeb839f10b4e81b7/docs/cli-env-commands.mdx)
> Canonical documentation: https://trigger.dev/docs/cli-env-commands

# CLI env commands

List, get, set, and pull environment variables for a Trigger.dev project.

These commands manage environment variables on a project environment. They default to `prod`. Use `--env staging` or `--env preview` (with `--branch`) for the other environments. There is no `dev` target: local `trigger dev` reads your local `.env`.

```bash npm
npx trigger.dev@latest env list
```

```bash pnpm
pnpm dlx trigger.dev@latest env list
```

```bash yarn
yarn dlx trigger.dev@latest env list
```

## env list

Lists user-set environment variables. `TRIGGER_` system variables are omitted. Values are hidden unless you pass `--show-values`.

```bash
npx trigger.dev@latest env list
npx trigger.dev@latest env list --show-values
```

**Property (type: --show-values)**

Print the actual values, including secrets.

## env get

Prints one variable. `--raw` prints only the value, with no banner or extra text, so you can capture it in a script.

```bash
npx trigger.dev@latest env get MY_VAR
npx trigger.dev@latest env get MY_VAR --raw
```

**Property (type: \<name>)**

The name of the environment variable.

**Property (type: --raw)**

Print only the value.

## env set

Creates the variable if it does not exist, and overwrites the value if it does. Empty or whitespace-only values are rejected.

Updating an existing secret without `--secret` changes the value and leaves it secret. Pass `--secret` when you first create a secret, or when you want a non-secret variable to become one.

```bash
npx trigger.dev@latest env set MY_VAR my-value
npx trigger.dev@latest env set STRIPE_KEY sk_live_abc --secret
```

**Property (type: \<name>)**

The name of the environment variable.

**Property (type: \<value>)**

The value to set. Cannot be empty.

**Property (type: --secret)**

Store the value as a secret, so it cannot be read back.

## env pull

Writes the project's environment variables to a local file. Defaults to `.env.local`. Fails if the file already exists unless you pass `--force`.

```bash
npx trigger.dev@latest env pull
npx trigger.dev@latest env pull --output .env.trigger --force
```

**Property (type: -o, --output \<file>)**

The file to write. Defaults to `.env.local`.

**Property (type: --force)**

Overwrite the output file if it exists.

## Options

**Property (type: --env | -e)**

The environment to use: `prod`, `staging` or `preview`. Defaults to `prod`.

**Property (type: --config | -c)**

The name of the config file found at the project path. Defaults to `trigger.config.ts`

**Property (type: --project-ref | -p)**

The project ref. Required if there is no config file.

**Property (type: --branch | -b)**

When using `--env preview` the branch is automatically detected from git. But you can manually
specify it by using this option, e.g. `--branch my-branch` or `-b my-branch`.

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
