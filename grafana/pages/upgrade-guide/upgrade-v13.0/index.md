> Release-pinned source for Grafana v13.2.0: [docs/sources/upgrade-guide/upgrade-v13.0/index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/upgrade-guide/upgrade-v13.0/index.md)

# Upgrade to Grafana v13.0

We recommend that you upgrade Grafana often to stay current with the latest fixes and enhancements.
Because Grafana upgrades are backward compatible, the upgrade process is straightforward, and dashboards and graphs will not change.

In addition to common tasks you should complete for all versions of Grafana, there might be additional upgrade tasks to complete for a version.

> **Note**
>
> There might be breaking changes in some releases. We outline all these changes in the [What's New](https://grafana.com/docs/grafana/v13.2/whatsnew/) document.

For versions of Grafana prior to v9.2, we published additional information in the [Release Notes](https://grafana.com/docs/grafana/v13.2/release-notes/).

When available, we list all changes with links to pull requests or issues in the [Changelog](https://github.com/grafana/grafana/blob/main/CHANGELOG.md).

> **Note**
>
> When possible, we recommend that you test the Grafana upgrade process in a test or development environment.

# Back up Grafana

This topic explains how to back up a local Grafana deployment, including configuration, plugin data, and the Grafana database.

## Back up the Grafana configuration file

Copy Grafana configuration files that you might have modified in your Grafana deployment to a backup directory.

The Grafana configuration files are located in the following directories:

- Default configuration: `$WORKING_DIR/defaults.ini` (Don't change this file)
- Custom configuration: `$WORKING_DIR/custom.ini`

For more information on where to find configuration files, refer to [Configuration file location](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana/#configuration-file-location).

> **Note**
>
> If you installed Grafana using the `deb` or `rpm` packages, then your configuration file is located at
> `/etc/grafana/grafana.ini`. This path is specified in the Grafana `init.d` script using `--config` file parameter.

## Back up plugin data

Installing plugins in Grafana creates a folder for each plugin with its associated files and data. Copy all files and folders recursively from this location to your backup repository.

The Grafana plugin files are located in the following directories:

- Default location for plugins in a binary or source installation: `$WORKING_DIR/data/plugins`
- Default location for plugins in a `deb` or `rpm` package: `/var/lib/grafana/plugins`. This path is specified in the Grafana init.d script using `--config` file parameter.

## Back up the Grafana database

We recommend that you back up your Grafana database so that you can roll back to a previous version, if required.

### SQLite

The default Grafana database is SQLite, which stores its data in a single file on disk. To back up this file, copy it to your backup repository.

> **Note**
>
> To ensure data integrity, shut down your Grafana service before backing up the SQLite database.

The SQLite database file is located in one of the following directories:

- Default location for SQLite data in a binary or source installation: `$WORKING_DIR/data/grafana.db`
- Default location for SQLite data in a `deb` or `rpm` package: `/var/lib/grafana/grafana.db`. This path is specified in the Grafana
  init.d script using `--config` file parameter.

### MySQL

To back up or restore a MySQL Grafana database, run the following commands:

```bash
backup:
> mysqldump -u root -p[root_password] [grafana] > grafana_backup.sql

restore:
> mysql -u root -p grafana < grafana_backup.sql
```

### Postgres

To back up or restore a Postgres Grafana database, run the following commands:

```bash
backup:
> pg_dump grafana > grafana_backup

restore:
> psql grafana < grafana_backup
```

## Upgrade Grafana

The following sections provide instructions for how to upgrade Grafana based on your installation method. For more information on where to find configuration files, refer to [Configuration file location](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana/#configuration-file-location).

### Debian

To upgrade Grafana installed from a Debian package (`.deb`), complete the following steps:

1. In your current installation of Grafana, save your custom configuration changes to a file named `<grafana_install_dir>/grafana.ini`.

   This enables you to upgrade Grafana without the risk of losing your configuration changes.

2. [Download](https://grafana.com/grafana/download?platform=linux) the latest version of Grafana.

3. Run the following `dpkg -i` command.

   ```bash
   wget <debian package url>
   sudo apt-get install -y adduser
   sudo dpkg -i grafana_<version>_amd64.deb
   ```

### APT repository

To upgrade Grafana installed from the Grafana Labs APT repository, complete the following steps:

1. In your current installation of Grafana, save your custom configuration changes to a file named `<grafana_install_dir>/grafana.ini`.

   This enables you to upgrade Grafana without the risk of losing your configuration changes.

2. Run the following commands:

   ```bash
   sudo apt-get update
   sudo apt-get upgrade
   ```

Grafana automatically updates when you run `apt-get upgrade`.

### Binary .tar file

To upgrade Grafana installed from the binary `.tar.gz` package, complete the following steps:

1. In your current installation of Grafana, save your custom configuration changes to the custom configuration file, `custom.ini` or `grafana.ini`.

   This enables you to upgrade Grafana without the risk of losing your configuration changes.

2. [Download](https://grafana.com/grafana/download) the binary `.tar.gz` package.

3. Extract the downloaded package and overwrite the existing files.

### RPM or YUM

To upgrade Grafana installed using RPM or YUM complete the following steps:

1. In your current installation of Grafana, save your custom configuration changes to a file named `<grafana_install_dir>/grafana.ini`.

   This enables you to upgrade Grafana without the risk of losing your configuration changes.

2. Perform one of the following steps based on your installation.
   - If you [downloaded an RPM package](https://grafana.com/grafana/download) to install Grafana, then complete the steps documented in [Install Grafana on Red Hat, RHEL, or Fedora](https://grafana.com/docs/grafana/v13.2/setup-grafana/installation/redhat-rhel-fedora/) or [Install Grafana on SUSE or openSUSE](https://grafana.com/docs/grafana/v13.2//setup-grafana/installation/suse-opensuse/) to upgrade Grafana.

   - If you used the Grafana YUM repository, run the following command:

     ```bash
     sudo yum update grafana
     ```

   - If you installed Grafana on openSUSE or SUSE, run the following command:

     ```bash
     sudo zypper update
     ```

### Docker

To upgrade Grafana running in a Docker container, complete the following steps:

1. Use Grafana [environment variables](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana/#override-configuration-with-environment-variables) to save your custom configurations; this is the recommended method. Alternatively, you can view your configuration files manually by accessing the deployed container.

   This enables you to upgrade Grafana without the risk of losing your configuration changes.

2. Run a commands similar to the following commands.

   > **Note**
   >
   > This is an example. The parameters you enter depend on how you configured your Grafana container.

   ```bash
   docker pull grafana/grafana
   docker stop my-grafana-container
   docker rm my-grafana-container
   docker run -d --name=my-grafana-container --restart=always -v /var/lib/grafana:/var/lib/grafana grafana/grafana
   ```

### Windows

To upgrade Grafana installed on Windows, complete the following steps:

1. In your current installation of Grafana, save your custom configuration changes to a file named `<grafana_install_dir>/conf/custom.ini`.

   This enables you to upgrade Grafana without the risk of losing your configuration changes.

2. [Download](https://grafana.com/grafana/download) the Windows binary package.

3. Extract the contents of the package to the location in which you installed Grafana.

   You can overwrite existing files and folders, when prompted.

### Mac

To upgrade Grafana installed on Mac, complete the following steps:

1. In your current installation of Grafana, save your custom configuration changes to the custom configuration file, `custom.ini`.

   This enables you to upgrade Grafana without the risk of losing your configuration changes.

2. [Download](https://grafana.com/grafana/download) the Mac binary package.

3. Extract the contents of the package to the location in which you installed Grafana.

   You can overwrite existing files and folders, when prompted.

## Update Grafana plugins

After you upgrade Grafana, we recommend that you update all plugins because a new version of Grafana
can make older plugins stop working properly.

Run the following command to update plugins:

```bash
grafana cli plugins update-all
```

## Technical notes

> **Warning**
>
> **Git Sync early adopters:** A migration bug in Grafana v13.0.0 might cause dashboards and folders to be lost or reverted when upgrading from Grafana v12.x.x with Git Sync enabled. Upgrading from v13.0.0 to v13.0.1 does **not** recover lost data, and if you already upgraded, you must restore your database first, then upgrade to v13.0.1.
>
> The bug only affects self-managed instances with Git Sync feature flags (`provisioning`, `kubernetesClientDashboardsFolders`, and `kubernetesDashboards`) enabled on Grafana v12.x.x.
>
> Grafana v13.0.0 has been removed from distribution and the fix has shipped in Grafana v13.0.1.
>
> If you're affected, use the following recovery paths:
>
> - **If your instance used mixed local and Git Sync content:** restore from the database backup you took before upgrading, then upgrade to Grafana v13.0.1.
> - **If your instance used full-instance Git Sync:** upgrade to Grafana v13.0.1 and resync from your Git repository.
> - **If unsure:** restore from your database backup before upgrading to v13.0.1.

### React 19 related updates

As part of [the migration to React 19 in Grafana 13](https://grafana.com/blog/react-19-is-coming-to-grafana-what-plugin-developers-need-to-know/#next-steps-and-how-to-learn-more), make the following updates to ensure that your plugins are working properly and you don't experience any disruptions during the Grafana 13 upgrade.

Follow this sequence for best results:

#### Upgrade your Grafana to latest patch version for the version you are running

To ensure that the changes required for the upgrade to React 19 are in place in your Grafana version, update to the latest minor version available for your Grafana instance. You can check the available versions on the [downloads page](https://grafana.com/grafana/download).

#### Update all of your plugins

Update all of your installed plugins and check if they are still working properly. By using the latest version of a plugin you facilitate support to React 19.

#### Upgrade to Grafana 13

Finally you can continue your upgrade to Grafana 13.

### Legacy `/api` endpoints are now deprecated

Grafana is migrating existing APIs to the new `/apis` model, a Kubernetes-style API layer which follows a standardized API structure alongside consistent API versioning. Refer to the [New API structure in Grafana](https://grafana.com/docs/grafana/v13.2/developer-resources/api-reference/http-api/apis) documentation for more details.

**Legacy APIs are not being disabled for the moment**. Removal of legacy APIs is planned for a future major release, and any breaking changes will be announced well in advance to avoid disruptions.

For more information and migration guidance, refer to [Migrate to the new APIs](https://grafana.com/docs/grafana/v13.2/developer-resources/api-reference/http-api/apis-migration).

### Deprecated data source APIs disabled

Data source APIs that reference data sources by numeric `id` have been deprecated since Grafana 9.
In Grafana 13, they're disabled by default.

#### You are affected if

You use data source API endpoints that reference data sources by numeric `id` rather than `uid`.

#### Migration

Update your API calls to reference data sources by `uid` instead of numeric `id`.
To temporarily re-enable the deprecated APIs, enable the `datasourceLegacyIdApi` feature flag.
Both the deprecated APIs and the feature toggle will be removed in a future release.

### Image Renderer plugin support removed

In Grafana 13, support for the Image Renderer plugin is removed.

#### You are affected if

You run the Image Renderer as a Grafana plugin.
After upgrading, the plugin no longer works for rendering screenshots or scheduled reports.

#### Migration

Deploy the image renderer as a separate service alongside Grafana.
For setup instructions, refer to [Set up image rendering](https://grafana.com/docs/grafana/v13.2/setup-grafana/image-rendering/#set-up-image-rendering).

### Image Renderer default authentication changed to JWTs

The Image Renderer previously authenticated with Grafana using opaque tokens stored in the database when generating screenshots and PDFs. Grafana v13.0 enables the `renderAuthJWT` feature toggle by default, which switches authentication to stateless JSON Web Tokens (JWTs) that don't depend on the database.

#### Action required

After upgrading to Grafana v13.0, if you use the Image Renderer, you must set a `[rendering]renderer_token` in your Grafana configuration file to a value that isn't empty or the default value (`-`), and configure the Image Renderer with the same token value. Restart your Grafana instance for the changes to take effect.

For more information, refer to the [Image Renderer security configuration documentation](https://grafana.com/docs/grafana/v13.2/setup-grafana/image-rendering/#security).

#### Reverting to the previous behavior

After upgrading to Grafana v13.0, to revert to opaque token authentication, disable the feature toggle in your Grafana configuration file:

```ini
[feature_toggles]
renderAuthJWT = false
```

Restart your Grafana instance for the changes to take effect.

### Unified storage for folders and dashboards

Grafana v13.0 automatically migrates folders and dashboards from the legacy SQL database to unified storage on startup.
The migration runs once and is tracked in the `unifiedstorage_migration_log` table.

After the migration completes, the following legacy tables are deprecated:

- `dashboard`
- `dashboard_acl`
- `dashboard_provisioning`
- `dashboard_version`
- `dashboard_tag`
- `library_element_connection`
- `folder`

These tables will be removed in a future release.

If you downgrade to an earlier Grafana version after the migration, the older version reads the stale legacy tables and doesn't reflect changes made in unified storage.
To roll back, restore from the database backup you took before upgrading.

If you downgrade and then upgrade again without restoring a backup, any folders or dashboards created or modified during the downgrade aren't migrated automatically.
If a backup isn't available, contact Grafana support for assistance.

#### SQLite deployments

If you use SQLite, the migration might fail with `database is locked` or `database table is locked` errors due to lock contention.
Grafana automatically retries using the Parquet buffer, but if errors persist, increase `migration_cache_size_kb` or enable `migration_parquet_buffer` in the `[unified_storage]` section of your configuration file:

| Setting                    | Description                                                                                              | Default            |
| -------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------ |
| `migration_cache_size_kb`  | SQLite page cache size during migration.                                                                 | `1000000` (\~1 GB) |
| `migration_parquet_buffer` | Stage data through a temporary Parquet file to separate read and write phases, avoiding lock contention. | `false`            |

### Removal of `grafana-cli` and `grafana-server` commands

The `grafana-cli` and `grafana-server` commands, deprecated since Grafana v10.0, are removed in Grafana v13.0.
Update any scripts, systemd units, Docker entrypoints, CI pipelines, or other automation to use `grafana cli` and `grafana server` instead.

### Legacy Alertmanager configuration API endpoints changed

Several legacy Alertmanager configuration API endpoints are removed or restricted in Grafana v13.0:

- `DELETE /api/alertmanager/grafana/config/api/v1/alerts` is removed.
- `POST /api/alertmanager/grafana/config/api/v1/receivers/test` is removed.
- `GET /api/alertmanager/grafana/config/api/v1/alerts` is restricted to admin users.
- `GET /api/alertmanager/grafana/config/history` is restricted to admin users.
- `POST /api/alertmanager/grafana/config/history/{id}/_activate` is restricted to admin users.

#### You are affected if

You call any of these endpoints in automation scripts, Terraform providers, or custom tooling.

#### Migration

Migrate to the Kubernetes-style resource APIs under `notifications.alerting.grafana.app/v1beta1`:

| Resource              | API path                                                                                       |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| Receivers             | `/apis/notifications.alerting.grafana.app/v1beta1/namespaces/{namespace}/receivers`            |
| Notification policies | `/apis/notifications.alerting.grafana.app/v1beta1/namespaces/{namespace}/routingtrees`         |
| Templates             | `/apis/notifications.alerting.grafana.app/v1beta1/namespaces/{namespace}/templategroups`       |
| Mute timings          | `/apis/notifications.alerting.grafana.app/v1beta1/namespaces/{namespace}/timeintervals`        |
| Inhibition rules      | `/apis/notifications.alerting.grafana.app/v1beta1/namespaces/{namespace}/inhibitionrules`      |
| Receiver testing      | `/apis/notifications.alerting.grafana.app/v1beta1/namespaces/{namespace}/receivers/{uid}/test` |

### Alertmanager status endpoint requires a new permission

#### You are affected if

You use the `GET /api/alertmanager/grafana/api/v2/status` endpoint and rely on the `alert.notifications:read` permission to access it.

#### Description

The `GET /api/alertmanager/grafana/api/v2/status` endpoint previously required the legacy `alert.notifications:read` permission. It now requires a dedicated `alert.notifications.system-status:read` permission. This new permission is included in the `fixed:alerting.notifications:writer` role, which is granted to Admin users by default.

#### Migration

If you have custom roles that need access to this endpoint, add the `alert.notifications.system-status:read` action to those roles. Admin users are unaffected as they receive this permission automatically through the built-in alerting notifications writer role.

### RBAC enforcement changes for custom roles

Grafana v13.0 tightens RBAC enforcement for custom roles, Terraform-managed roles, and role provisioning. Roles that contain deprecated permissions may fail during create, update, delete, or assignment operations. We recommend reviewing and updating affected roles proactively.

#### You are affected if

You manage custom RBAC roles through Terraform, the API, or provisioning, and those roles contain any of the following:

- Data source UID-scoped permissions (`datasources:uid:<uid>`) on a global role
- `fixed:annotations.dashboard:writer` or `fixed:annotations.dashboard:reader`
- `annotations:type:dashboard`
- `annotations:*`

#### Migration

**Data source permissions on global roles:** If a Terraform-managed `grafana_role` combines `global = true` with `datasources:uid:<uid>`, recreate the role as a non-global role with a new UID. Grafana can't change the scope of an existing role in place. Set `datasource_type` on data source permission resources when possible.

**Dashboard annotation fixed roles:** Remove `fixed:annotations.dashboard:writer` and `fixed:annotations.dashboard:reader` from your configurations. Use dashboard or folder permissions (View, Edit, Admin) to control dashboard annotation access instead. Use `annotations:type:organization` for organization-level annotations.

**`annotations:*` wildcard scope:** Replace with specific scopes: `annotations:type:organization` for organization annotations, and dashboard or folder permissions for dashboard annotations. Don't recreate `annotations:*` in Terraform after it has been removed.

If a role is stuck because Grafana refuses to update or delete it, the role may contain a deprecated permission that must be removed before Terraform or API updates can succeed. Contact Grafana support for assistance.

For detailed examples and troubleshooting, refer to [RBAC behavior changes with Grafana 13](https://grafana.com/docs/grafana/v13.2/whatsnew/whats-new-in-v13-0/#rbac-behavior-changes-with-grafana-13).
