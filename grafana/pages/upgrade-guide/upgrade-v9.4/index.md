> Release-pinned source for Grafana v13.2.1: [docs/sources/upgrade-guide/upgrade-v9.4/index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/upgrade-guide/upgrade-v9.4/index.md)

# Upgrade to Grafana v9.4

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

The upgrade to Grafana v9.4 includes changes to the Grafana database for Grafana alerting that are not backward compatible. As a result, when you upgrade to Grafana v9.4, do not downgrade your Grafana instance to an earlier version. Doing so might cause issues with managing your Grafana alerts.
