> Pinned source for Runpod main: [flash/cli/app.mdx](https://github.com/runpod/docs/blob/fa4985146919262a6e9cdb946c50eec1ed81ffc9/flash/cli/app.mdx)
> Canonical documentation: https://docs.runpod.io/flash/cli/app

# app

Create, inspect, list, and delete Flash applications that organize deployment environments, build artifacts, and configuration.

Manage Flash applications. An app is the top-level container that groups your deployment environments, build artifacts, and configuration.

```bash Command
flash app <subcommand> [OPTIONS]
```

## Subcommands

| Subcommand | Description                         |
| ---------- | ----------------------------------- |
| `list`     | Show all apps in your account       |
| `create`   | Create a new app                    |
| `get`      | Show details of an app              |
| `delete`   | Delete an app and all its resources |

***

## app list

Show all Flash apps under your account.

```bash Command
flash app list
```

### Output

```text
┏━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━┓
┃ Name           ┃ ID                   ┃ Environments            ┃ Builds           ┃
┡━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━┩
│ my-project     │ app_abc123           │ dev, staging, prod      │ build_1, build_2 │
│ demo-api       │ app_def456           │ production              │ build_3          │
│ ml-inference   │ app_ghi789           │ dev, production         │ build_4, build_5 │
└────────────────┴──────────────────────┴─────────────────────────┴──────────────────┘
```

***

## app create

Register a new Flash app on Runpod's backend.

```bash Command
flash app create <NAME>
```

### Arguments

**NAME (type: string; required)**

Name for the new Flash app. Must be unique within your account.

### What it creates

This command registers a Flash app in Runpod's backend—essentially creating a namespace for your environments and builds. It does not:

- Create local files (use `flash init` for that).
- Provision cloud resources (endpoints, volumes, etc.).
- Deploy any code.

The app is just a container that groups environments and builds together.

### When to use

> **Note**
>
> Most users don't need to run `flash app create` explicitly. Apps are created automatically when you first run `flash deploy`. This command is primarily for CI/CD pipelines that need to pre-register apps before deployment.

***

## app get

Get detailed information about a Flash app.

```bash Command
flash app get <NAME>
```

### Arguments

**NAME (type: string; required)**

Name of the Flash app to inspect.

### Output

```text
╭─────────────────────────────────╮
│ Flash App: my-project           │
├─────────────────────────────────┤
│ Name: my-project                │
│ ID: app_abc123                  │
│ Environments: 3                 │
│ Builds: 5                       │
╰─────────────────────────────────╯

              Environments
┏━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━┓
┃ Name       ┃ ID                 ┃ State   ┃ Active Build     ┃ Created          ┃
┡━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━┩
│ dev        │ env_dev123         │ DEPLOYED│ build_xyz789     │ 2024-01-15 10:30 │
│ staging    │ env_stg456         │ DEPLOYED│ build_xyz789     │ 2024-01-16 14:20 │
│ production │ env_prd789         │ DEPLOYED│ build_abc123     │ 2024-01-20 09:15 │
└────────────┴────────────────────┴─────────┴──────────────────┴──────────────────┘

                     Builds
┏━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━┓
┃ ID                 ┃ Status                   ┃ Created          ┃
┡━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━┩
│ build_abc123       │ COMPLETED                │ 2024-01-20 09:00 │
│ build_xyz789       │ COMPLETED                │ 2024-01-18 15:45 │
│ build_def456       │ COMPLETED                │ 2024-01-15 11:20 │
└────────────────────┴──────────────────────────┴──────────────────┘
```

***

## app delete

Delete a Flash app and all its associated resources.

```bash Command
flash app delete <NAME>
```

### Arguments

**NAME (type: string; required)**

Name of the Flash app to delete.

### Process

1. Shows app details and resources to be deleted.
2. Prompts for confirmation (required).
3. Deletes all environments and their resources.
4. Deletes all builds.
5. Tears down the app's Serverless endpoints. Flash discovers them per Flash environment on Runpod's backend, so teardown works even when no local resource tracking exists (for example, in CI).
6. If every endpoint was removed, deletes the app record.

If any endpoint cannot be removed, the app record is not deleted and the command exits with a non-zero status; see [app delete fails to remove an endpoint](#app-delete-fails-to-remove-an-endpoint).

### Output

Each removed endpoint prints a confirmation line, where `<endpoint-name>` and `<endpoint-id>` are the endpoint's name and ID:

```text
✓ deleted endpoint <endpoint-name>  <endpoint-id>
```

> **Warning**
>
> This operation is irreversible. All environments, builds, endpoints, volumes, and configuration will be permanently deleted.

***

## App hierarchy

See [Apps and environments](https://docs.runpod.io/flash/apps/apps-and-environments#app-hierarchy) for the complete app organization structure.

## Auto-detection

Flash CLI automatically detects the app name from your current directory:

```bash
cd /path/to/APP_NAME
flash deploy          # Deploys to 'APP_NAME' app
flash env list        # Lists 'APP_NAME' environments
```

Override with the `--app` flag:

```bash
flash deploy --app other-project
flash env list --app other-project
```

## Troubleshooting

### app delete fails to remove an endpoint

When any endpoint cannot be removed, `flash app delete` does not delete the app record and exits with a non-zero status (exit code 1). It names each endpoint that survived teardown. When the endpoint still has an ID, the message gives the command to remove it:

```text
endpoint <endpoint-id> not removed; delete it with runpodctl serverless delete <endpoint-id>
```

Remove the surviving endpoint with [`runpodctl serverless delete`](https://docs.runpod.io/runpodctl/reference/runpodctl-serverless#delete-an-endpoint):

```bash
runpodctl serverless delete <endpoint-id>
```

If an endpoint is reported without an ID, it cannot be removed this way; delete it from the Runpod console instead.

Re-running `flash app delete <NAME>` after a partial teardown is safe: endpoints that were already removed count as removed, so the command retries only the survivors.

## Related commands

- [`flash env`](https://docs.runpod.io/flash/cli/env) - Manage environments within an app
- [`flash deploy`](https://docs.runpod.io/flash/cli/deploy) - Deploy to an app's environment
- [`flash init`](https://docs.runpod.io/flash/cli/init) - Create a new project
