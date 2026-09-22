> Pinned source for Runpod main: [flash/apps/apps-and-environments.mdx](https://github.com/runpod/docs/blob/4962c60abcb8d9bf359d92ccc07644abd5d8e610/flash/apps/apps-and-environments.mdx)
> Canonical documentation: https://docs.runpod.io/flash/apps/apps-and-environments

# Apps and environments

Understanding Flash's two-level deployment structure for organizing projects and managing deployments.

Flash uses a two-level organizational structure for deployments: **apps** and **environments**. Understanding this structure helps you organize projects, manage multiple deployment stages, and isolate resources effectively.

## Flash apps

A **Flash app** is a namespace on Runpod's backend that groups all resources for a single project. The app itself is just metadata—actual cloud resources (endpoints, volumes) are created when you deploy to an environment.

An app consists of:

- **App registry entry**: Metadata in Runpod's system (namespace, project identifier).
- **Environments**: Different deployment stages (dev, staging, production).
- **Builds**: Versioned tarball artifacts containing your code and dependencies.
- **Serverless endpoints**: Running infrastructure created per environment.

Apps are created automatically when you first run `flash deploy`, or explicitly with `flash app create <name>`.

### App hierarchy

- `Flash App (my-project)`
  - `Environments`
    - `dev`
      - `Endpoints`
        - `lb_worker`
        - `gpu_worker`
        - `cpu_worker`
      - `Volumes`
        - `model-cache`
    - `staging`
      - `Endpoints`
        - `lb_worker`
        - `gpu_worker`
        - `cpu_worker`
      - `Volumes`
        - `model-cache`
    - `production`
      - `Endpoints`
        - `lb_worker`
        - `gpu_worker`
        - `cpu_worker`
      - `Volumes`
        - `model-cache`
  - `Builds`
    - `build_v1`
    - `build_v2`
    - `build_v3`

## Environments

An **environment** is an isolated deployment stage within a Flash app (e.g., `dev`, `staging`, `production`). Each environment has its own endpoints, build version, volumes, and deployment state. Environments are completely independent—deploying to `dev` has no effect on `production`.

An environment contains:

- **Deployed endpoints**: Serverless workers for your `@Endpoint` functions.
- **Build version**: The specific code version running in this environment.
- **Volumes**: Persistent storage attached to workers.
- **State**: Current deployment status (deploying, deployed, failed).

Environments are created automatically when you deploy with `--env <name>` or explicitly with `flash env create <name>`.

### Environment states

Environments can be in several states:

| State       | Description                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------- |
| `deploying` | Deployment in progress (building artifacts, provisioning endpoints)                          |
| `deployed`  | Successfully deployed and running                                                            |
| `failed`    | Deployment failed (check logs in the [Runpod console](https://console.runpod.io/serverless)) |
| `updating`  | Configuration update in progress                                                             |

## Builds and deployments

When you run `flash deploy`, Flash creates and uploads a build artifact, then provisions endpoints:

### Build process

1. **Create tarball**: Flash packages your code into `.flash/artifact.tar.gz` containing:
   - Worker Python files (`lb_worker.py`, `gpu_worker.py`, `cpu_worker.py`).
   - Pre-installed dependencies (bundled during build).
   - Deployment manifest (`flash_manifest.json`).
   - Auto-generated handler code.

2. **Upload artifact**: The tarball is uploaded to Runpod's storage and associated with your app as a versioned "build".

3. **Provision endpoints**: For each resource configuration, Flash creates a Serverless endpoint that:
   - Runs on pre-built Flash Docker images (`runpod/flash:latest` or `runpod/flash-cpu:latest`).
   - Extracts your tarball and executes your code.
   - Scales automatically based on load.

4. **Activate environment**: The environment is linked to the build and endpoints.

> **Tip**
>
> You're **not** building custom Docker images. Flash uses pre-built images that extract your tarball and run your code. This is why deployments are fast (no image build step) and limited to 1.5 GB (code and dependencies only).

## Common environment patterns

### Single environment (simple projects)

For small projects or solo development, use a single environment:

```bash
flash deploy --env production

# If using uv:
uv run flash deploy --env production
```

All deployments go to `production`. Simple, but no testing isolation.

### Multiple environments (team projects)

For team projects, use separate environments for development, testing, and production:

```bash
flash deploy --env dev        # Development and testing
flash deploy --env staging    # QA and pre-production validation
flash deploy --env production # Live user-facing deployment

# If using uv:
uv run flash deploy --env dev
uv run flash deploy --env staging
uv run flash deploy --env production
```

Each environment is completely isolated. Deploy to `dev` for testing, `staging` for QA approval, then `production` for users.

## Managing apps and environments

Use the CLI to manage your apps and environments:

```bash
# Apps
flash app list              # List all apps
flash app get <name>        # View app details
flash app delete <name>     # Delete app and all environments

# Environments
flash env list              # List environments in current app
flash env get <name>        # View environment details
flash env delete <name>     # Delete specific environment

# If using uv:
uv run flash app list
uv run flash env list
```

> **Warning**
>
> Deleting an app or environment is irreversible. All endpoints and configuration are permanently removed.
