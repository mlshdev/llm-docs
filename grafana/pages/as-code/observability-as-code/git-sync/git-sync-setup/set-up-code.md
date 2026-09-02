> Release-pinned source for Grafana v13.2.1: [docs/sources/as-code/observability-as-code/git-sync/git-sync-setup/set-up-code.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/as-code/observability-as-code/git-sync/git-sync-setup/set-up-code.md)

# Set up Git Sync as code

You can also configure Git Sync using `gcx`, the Grafana CLI. Since Git Sync configuration is managed as code using Custom Resource Definitions (CRDs), you can create your required resources in YAML files and push them to Grafana using `gcx`. This approach enables automated, GitOps-style workflows for managing Git Sync configuration instead of using the Grafana UI.

For more information, refer to the following documents:

- [Repository resource](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/key-concepts#git-sync-repository-resource) and [Connection resource](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/key-concepts#git-sync-repository-resource) overview
- [Dashboard CRD Format](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/export-resources/)
- [Grafana CLI documentation](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/grafana-cli/)

## Set up Git Sync as code with the Grafana CLI

To set up Git Sync as code with `gcx`, follow these steps:

1. Understand [Usage and performance limitations](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/usage-limits)
2. [Create the connection and repository CRDs](#create-the-resources-crds)
3. [Push the CRDs to Grafana](#push-the-resources-to-grafana)
4. [Manage repository resources](#manage-repository-resources)
5. [Verify setup](#verify-setup)

## Create the resources CRDs

If you're connecting with any of the [supported Git providers](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/usage-limits#compatible-git-providers) using a Personal Access Token, you need to create a repository resource to define the connection between your repositories and your Grafana instance.

If you're connecting to Git Sync with GitHub App, in addition to the repository resource you need to create a connection resource as well.

### Create the connection resource

If you're connecting Git Sync with GitHub App, create a `connection.yaml` file defining your Git Sync connection configuration:

```yaml
apiVersion: provisioning.grafana.app/v0alpha1
kind: Connection
metadata:
  name: '<GITHUB_CONNECTION_NAME>'
  namespace: default
spec:
  title: '<REPOSITORY_TITLE>'
  type: github
  url: https://github.com
  github:
    appID: '<GITHUB_APP_ID>'
    installationID: '<GITHUB_INSTALL_ID>'
    serverUrl: '<GITHUB_ENTERPRISE_SERVER_URL>' # Only required for GitHub Enterprise
secure:
  privateKey:
    create: '<GITHUB_PRIVATE_KEY>'
```

Replace the placeholders with your values:

- *`<GITHUB_CONNECTION_NAME>`*: The name of your GitHub connection
- *`<REPOSITORY_TITLE>`*: Human-readable name displayed in Grafana UI
- *`<GITHUB_APP_ID>`*: GitHub App unique identifier
- *`<GITHUB_INSTALL_ID>`*: GitHub App installation id
- *`<GITHUB_PRIVATE_KEY>`*: GitHub Private Key

### Create the repository resource

Next, create a `repository.yaml` file defining your Git Sync configuration. Depending on your Git provider and authentication method, add your Personal Access Token information or the connection name.

```yaml
apiVersion: provisioning.grafana.app/v0alpha1
kind: Repository
metadata:
  name: '<REPOSITORY_NAME>'
spec:
  sync:
    enabled: true
    intervalSeconds: 60
    target: folder
  workflows:
    - write
    - branch
  title: '<REPOSITORY_TITLE>'

# Git Sync for GitHub:
spec:
  type: github
  github:
    url: '<GIT_REPO_URL>'
    branch: '<BRANCH>'
    path: grafana/
  # GitHub App connection only:
  connection:
    name: '<GITHUB_CONNECTION_NAME>'
# GitHub Personal Access Token only:
secure:
  token: { create: 'GIT_PAT' }

# Git Sync for GitHub Enterprise:
spec:
  type: githubEnterprise
  githubEnterprise:
    url: '<GIT_REPO_URL>'
    branch: '<BRANCH>'
    path: grafana/
  # GitHub Enterprise App connection only:
  connection:
    name: '<GITHUB_ENTERPRISE_CONNECTION_NAME>'
# GitHub Personal Access Token only:
secure:
  token: { create: 'GIT_PAT' }

# GitLab Personal Access Token only:
spec:
  type: gitlab
  gitlab:
    url: '<GIT_REPO_URL>'
    branch: '<BRANCH>'
secure:
  token: { create: 'GIT_PAT' }

# Bitbucket Personal Access Token only:
spec:
  type: bitbucket
  bitbucket:
    url: '<GIT_REPO_URL>'
    branch: '<BRANCH>'
    tokenUser: tokenuser
secure:
  token: { create: 'GIT_PAT' }

# Pure Git only:
spec:
  type: git
  git:
    url: '<GIT_REPO_URL>'
    branch: '<BRANCH>'
    path: 'grafana/'
    tokenUser: tokenuser
secure:
  token: { create: 'GIT_PAT' }
```

Replace the placeholders with your values:

- *`<REPOSITORY_NAME>`*: Unique identifier for this repository resource
- *`<REPOSITORY_TITLE>`*: Human-readable name displayed in Grafana UI
- *`<GIT_REPO_URL>`*: GitHub repository URL
- *`<BRANCH>`*: Branch to sync
- *`<GITHUB_CONNECTION_NAME>`*: The name of your GitHub connection
- *`<GITHUB_ENTERPRISE_CONNECTION_NAME>`*: The name of your GitHub Enterprise connection
- *`<GIT_PAT>`*: Git provider Personal Access Token

> **Note**
>
> Git Sync supports two sync targets: `target: folder` (the default) creates a folder named after the repository and places synced resources inside it, while `target: folderless` places synced resources at the top level without creating a wrapper folder. Refer to [Sync targets](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/git-sync/key-concepts/#sync-targets) for details.

### Configuration parameters

The following configuration parameters are available:

| Field                                   | Description                                                     |
| --------------------------------------- | --------------------------------------------------------------- |
| `metadata.name`                         | Unique identifier for this repository resource                  |
| `spec.title`                            | Human-readable name displayed in Grafana UI                     |
| `spec.type`                             | Repository type (`github`, `githubEnterprise`)                  |
| `spec.github.url`                       | GitHub repository URL                                           |
| `spec.github.branch`                    | Branch to sync                                                  |
| `spec.github.path`                      | Directory path containing dashboards                            |
| `spec.github.generateDashboardPreviews` | Generate preview images (true/false) (Only available in GitHub) |
| `spec.sync.enabled`                     | Enable synchronization (true/false)                             |
| `spec.sync.intervalSeconds`             | Sync interval in seconds                                        |
| `spec.sync.target`                      | Where to place synced dashboards (`folder` or `folderless`)     |
| `spec.workflows`                        | Enabled workflows: `write` (direct commits), `branch` (PRs)     |
| `secure.token.create`                   | GitHub Personal Access Token                                    |

## Push the resources to Grafana

Before pushing any resources, configure `gcx` with your Grafana instance details. Refer to the [Grafana CLI documentation](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/grafana-cli/) for setup instructions.

Push the repository configuration. If you're using GitHub App to connect Git Sync, push the connection resource configuration file as well.

```sh
gcx resources push --path <DIRECTORY>
```

The `--path` parameter has to point to the directory containing your `repository.yaml` and `connection.yaml` files.

After pushing, Grafana will:

1. Create the required resources (repository and, for GitHub App, connection)
2. Connect to your GitHub repository
3. Pull dashboards from the specified path
4. Begin syncing at the configured interval

## Manage repository resources

### List repositories

To list all repositories:

```sh
gcx resources get repositories
```

### Get repository details

To get details for a specific repository:

```sh
gcx resources get repository/<REPOSITORY_NAME>
gcx resources get repository/<REPOSITORY_NAME> -o json
gcx resources get repository/<REPOSITORY_NAME> -o yaml
```

### Update the repository

To update a repository:

```sh
gcx resources edit repository/<REPOSITORY_NAME>
```

### Delete the repository

To delete a repository:

```sh
gcx resources delete repository/<REPOSITORY_NAME>
```

## Verify setup

Check that Git Sync is working:

```sh
# List repositories
gcx resources get repositories

# Check Grafana UI
# Navigate to: Administration → Provisioning → Git Sync
```
