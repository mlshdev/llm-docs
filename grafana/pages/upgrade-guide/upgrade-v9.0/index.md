> Release-pinned source for Grafana v13.2.0: [docs/sources/upgrade-guide/upgrade-v9.0/index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/upgrade-guide/upgrade-v9.0/index.md)

# Upgrade to Grafana v9.0

We recommend that you upgrade Grafana often to stay current with the latest fixes and enhancements.
Because Grafana upgrades are backward compatible, the upgrade process is straightforward, and dashboards and graphs will not change.

In addition to common tasks you should complete for all versions of Grafana, there might be additional upgrade tasks to complete for a version.

> **Note**
>
> There might be breaking changes in some releases. We outline these changes in the [What's New ](https://grafana.com/docs/grafana/v13.2/whatsnew/) document for most releases or a separate [Breaking changes](https://grafana.com/docs/grafana/v13.2/breaking-changes/) document for releases with many breaking changes.

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

This section describes technical changes associated with this release of Grafana.

### Role-based access control: changes for general release

Fine-grained access control is now called "Role-based access control (RBAC)". As part of the Grafana 9.0 release, the feature is generally available, and there are several breaking changes:

- Built-in roles are now called basic roles. They now consist of permissions, not roles.
- The Terraform `builtin_role_assignment` resource is deprecated. Please use [grafana\_role](https://registry.terraform.io/providers/grafana/grafana/latest/docs/resources/role) resource instead.
- Grafana provisioning has a new schema. Please refer to [Provisioning RBAC with Grafana](https://grafana.com/docs/grafana/latest/administration/roles-and-permissions/access-control/rbac-grafana-provisioning/) to learn more about provisioning.
- Basic roles no longer support permission inheritance. Previously, when permissions of a Viewer basic role were modified, it was propagated to the Editor and Admin basic roles. With the Grafana 9.0 release, this is not the case anymore.
- Several role-based access control actions have been renamed. All database entries that use legacy action names will be migrated to use the new names, but provisioning files and scripts will have to be updated by the user. This change also means that if Grafana is downgraded from 9.0 to a lower version, some role-based access control permissions will not be resolved correctly.

### Loki: logs data format changed

In the Loki data source, the data format used to represent Loki logs-data has been changed to a more efficient format. (NOTE: this change applies to logs data only, it does not apply to numeric data)
The logs are represented by a single dataframe with a "labels" field added, instead of separate dataframes for every label combination. Displaying logs data in explore, or in a dashboard using the logs panel will continue to work without changes. But, when displaying logs data in other dashboard panels, for example in a table visualization, changes will be visible, and configurations might need to be adjusted. For example, if the "Labels to fields" transformation was used, it has to be replaced with an “Extract fields” transformation, where the “labels” field is chosen as the source.

### Loki: NaN values representation changed in numeric data

In the Loki data source, when grafana receives numeric data from Loki, it may contain NaN (not a number) values. For consistency and performance reasons we changed how we represent such values in Grafana. In previous versions, the behavior was different between alerting queries and other queries (like dashboard queries or explore queries). Alerting queries kept NaN values unchanged, but other queries converted these values to “null”. Starting with grafana 9.0.0, we will always keep these values unchanged. In other words, queries in dashboards and explore will behave the same as alerting queries in this regard.

### Elasticsearch: Support for versions after their end of life was removed

Support for Elasticsearch versions that are after their end of life (based on <https://www.elastic.co/support/eol>) was removed. This means that versions older than Elasticsearch 7.10.0 will not be supported in Grafana 9.0.0.

### Elasticsearch: Support for browser access mode removed

In the Elasticsearch data source, browser access mode was deprecated in grafana 7.4.0 and removed in 9.0.0. If you used this mode, please switch to server access mode on the data source configuration page.

### Prometheus: NaN values representation changed in numeric data

In the Prometheus data source, when grafana receives numeric data from Prometheus, it may contain NaN (not a number) values. For consistency and performance reasons we changed how we represent such values in Grafana. In previous versions, the behavior was different between alerting queries and other queries (like dashboard queries or explore queries). Alerting queries kept NaN values unchanged, but other queries converted these values to “null”. Starting with grafana 9.0.0, we will always keep NaN values unchanged for all queries.

### Transformations: Allow more complex regex expressions in rename by regex

The rename by regex transformation has been improved to allow global patterns of the form `/<stringToReplace>/g`. Depending on the regex match used, this may cause some transformations to behave slightly differently. You can guarantee the same behavior as before by wrapping the match string in forward slashes (`/`), for example, `(.*)` would become `/(.*)/`. ([Github Issue #48179](https://github.com/grafana/grafana/pull/48179))

### Clock Panel

We have updated [clock panel](https://grafana.com/grafana/plugins/grafana-clock-panel/) to version `2.0.0` to make it compatible with Grafana 9. The previous version `1.3.1` will cause the Grafana 9 to [crash](https://github.com/grafana/clock-panel/issues/106) when being used in a dashboard, we encourage you to update the panel before migrating to Grafana 9.

### Polystat Panel

We have updated [polystat panel](https://grafana.com/grafana/plugins/grafana-polystat-panel/) to version `1.2.10` to make it compatible with Grafana 9. The previous versions `1.2.8` and below will render empty in Grafana 9. We encourage you to update the panel before or immediately after migrating to Grafana 9.

### Envelope encryption enabled by default

Since v8.3 a new kind of encryption called "envelope encryption" was added, for those secrets stored in the Grafana
database (data source credentials, alerting notification channel credentials, oauth tokens, etc), behind a feature
toggle named `envelopeEncryption`.

In v9.0, `envelopeEncryption` feature toggle has been replaced in favor of `disableEnvelopeEncryption` and envelope encryption is
the encryption mechanism used by default.

Therefore, any secret created or updated in Grafana v9.0 won't be decryptable by any previous Grafana version unless the
feature toggle `envelopeEncryption` is enabled in the previous version (only available since v8.3).
This needs to be considered in high availability setups, progressive rollouts or in case of need to roll back to a previous Grafana version for any reason.

The recommendation here is to enable `envelopeEncryption` for older versions, or alternatively enable `disableEnvelopeEncryption`
before upgrading to v9.0. However, the latter is probably going to be removed in one of the next releases, so we hugely
encourage to move on with envelope encryption.

Find [here](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-security/configure-database-encryption/) more details and some
possible workarounds in case you end up in an undesired situation.

### A note on Grafana Enterprise licensing

When we release Grafana 9.0 on June 14th, Grafana will no longer enforce viewers and editor-admins differently. That means that regardless of whether your Grafana Enterprise license is tiered or combined, instead of seeing this on the Stats & Licensing page:

![](https://grafana.com/static/img/docs/enterprise/separate-licenses.png)

*Separate license*

You will see this:

![](https://grafana.com/static/img/docs/enterprise/combined-licenses.png)

*Combined license*

It also means that Grafana will count all users the same, regardless of their role, including org roles (Viewer, Editor, Admin) and fine-grained roles (Dashboard Editor, Reports Editor, etc.). You won’t see a separate warning banner or see users locked out if you hit your limit of viewers or editor-admins, only your total combined limit of active users.

For example, if you have a license for 10 active admins and 100 active viewers in your Grafana Enterprise license, then starting in v9.0 you will have a limit of 110 active users, and it doesn’t matter what roles those users have, they will all be counted and enforced the same.

This is a more permissive policy than before.
