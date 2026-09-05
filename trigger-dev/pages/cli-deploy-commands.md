> Release-pinned source for Trigger.dev v4.5.16: [docs/cli-deploy-commands.mdx](https://trigger.dev/docs/cli-deploy-commands)

# CLI deploy command

Use the deploy command to deploy your tasks to Trigger.dev.

Run the command like this:

```bash npm
npx trigger.dev@latest deploy
```

```bash pnpm
pnpm dlx trigger.dev@latest deploy
```

```bash yarn
yarn dlx trigger.dev@latest deploy
```

> **Warning**
>
> This will fail in CI if any version mismatches are detected. Ensure everything runs locally first
> using the [dev](https://trigger.dev/docs/cli-dev-commands) command and don't bypass the version checks!

It performs a few steps to deploy:

1. Optionally updates packages when running locally.
2. Compiles and bundles the code.
3. Deploys the code to the Trigger.dev instance.
4. Registers the tasks as a new version in the environment (prod by default).

## Deploying from CI

When deploying from CI/CD environments such as GitHub Actions, GitLab CI, or Jenkins, you need to authenticate non-interactively by setting the `TRIGGER_ACCESS_TOKEN` environment variable. Please see the [CI / GitHub Actions guide](https://trigger.dev/docs/github-actions) for more information.

## Arguments

```
npx trigger.dev@latest deploy [path]
```

**Property (type: \[path])**

The path to the project. Defaults to the current directory.

## Options

**Property (type: --config | -c)**

The name of the config file found at the project path. Defaults to `trigger.config.ts`

**Property (type: --project-ref | -p)**

The project ref. Required if there is no config file.

**Property (type: --env-file)**

Load environment variables from a file. This will only hydrate the `process.env` of the CLI
process, not the tasks.

**Property (type: --skip-update-check)**

Skip checking for `@trigger.dev` package updates.

**Property (type: --env | -e)**

Defaults to `prod` but you can specify `staging` or `preview`. If you specify `preview` we will
try and automatically detect the branch name from git.

**Property (type: --branch | -b)**

When using `--env preview` the branch is automatically detected from git. But you can manually
specify it by using this option, e.g. `--branch my-branch` or `-b my-branch`.

**Property (type: --dry-run)**

Create a deployable build but don't deploy it. Prints out the build path so you can inspect it.

**Property (type: --skip-promotion)**

Skips automatically promoting the newly deployed version to the "current" deploy.

**Property (type: --skip-sync-env-vars)**

Turn off syncing environment variables with the Trigger.dev instance.

**Property (type: --external-id)**

Attach your own identifier to this deployment — a commit SHA, release tag or CI run id, up to 128
characters. Your app can then send the same id when triggering, and runs are pinned to this
deployment. See [version skew protection](https://trigger.dev/docs/deployment/version-skew-protection).

Repeating an id that is already deployed doesn't build again: the CLI reports the existing version,
sets the same outputs, and exits successfully. Repeating an id that has a build in flight is an
error. An id whose build failed rebuilds normally.

The short-circuit is keyed on the id, not on the build inputs — so redeploying the same id after
changing a synced environment variable produces no new build.

**Property (type: --force)**

Start a new build for an `--external-id` that already has one. Non-destructive with respect to
deployments that already succeeded — both remain and the newer version wins. If a build for that
id is still in flight, `--force` **cancels** it first, so one id never has two live builds. A
cancelled build usually stops within seconds, but one running on another machine can keep going
briefly before it notices. Requires `--external-id`.

**Property (type: --native-build)**

Use the native build server to install, bundle and build your project.

**Property (type: --local-bundle)**

Install and bundle on your machine, then build the image on the build server from the uploaded
bundle. Requires `--native-build`. Use it if you prefer dependencies to be installed on your
machine rather than on the build server.

**Property (type: --detach)**

Exit once the build is queued instead of streaming the build logs. The deployment continues on
the build server. Requires `--native-build`.

**Property (type: --depot-build)**

Build the image with Depot, the default build provider.

**Property (type: --local-build)**

Force building the deployment image locally using your local Docker. This is automatic when self-hosting.

**Property (type: --build-logs)**

How build logs are shown: `compact` (default, a single updating line) or `full` (every log line).
CI and piped output always use `full`.

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

### Self-hosting

When [self-hosting](https://trigger.dev/docs/self-hosting/overview), builds are performed locally by default. Once you've logged in to your self-hosted instance using the CLI, you can deploy with:

```bash
npx trigger.dev@latest deploy
```

For CI/CD environments, set `TRIGGER_ACCESS_TOKEN` and `TRIGGER_API_URL` environment variables. See the [GitHub Actions guide](https://trigger.dev/docs/github-actions#self-hosting) for more details.
