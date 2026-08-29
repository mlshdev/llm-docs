> Release-pinned source for Grafana v13.2.0: [docs/sources/setup-grafana/installation/mac/index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/setup-grafana/installation/mac/index.md)

# Install Grafana on macOS

This page explains how to install Grafana on macOS.

The following video demonstrates how to install Grafana on macOS as outlined in this document:

[Watch the video on YouTube](https://www.youtube.com/watch?v=1zdm8SxOLYQ)

## Install Grafana on macOS using Homebrew

To install Grafana on macOS using Homebrew, complete the following steps:

1. On the [Homebrew](http://brew.sh/) homepage, search for Grafana.

   The last stable and released version is listed.

2. Open a terminal and run the following commands:

   ```
   brew update
   brew install grafana
   ```

   The brew page downloads and untars the files into:

   - `/usr/local/Cellar/grafana/[version]` (Intel Silicon)
   - `/opt/homebrew/Cellar/grafana/[version]` (Apple Silicon)

3. To start Grafana, run the following command:

   ```bash
   brew services start grafana
   ```

### Using the Grafana CLI with Homebrew

To use the Grafana CLI with Homebrew, you need to append the home path, the config file path and - based on the command - some other configurations to the `cli` command:

For `admin` commands, you need to append the `--configOverrides cfg:default.paths.data=/opt/homebrew/var/lib/grafana` configuration. Example:

```bash
/opt/homebrew/opt/grafana/bin/grafana cli --config /opt/homebrew/etc/grafana/grafana.ini --homepath /opt/homebrew/opt/grafana/share/grafana --configOverrides cfg:default.paths.data=/opt/homebrew/var/lib/grafana admin reset-admin-password <new password>
```

For `plugins` commands, you need to append the `--pluginsDir /opt/homebrew/var/lib/grafana/plugins` configuration. Example:

```bash
/opt/homebrew/opt/grafana/bin/grafana cli --config /opt/homebrew/etc/grafana/grafana.ini --homepath /opt/homebrew/opt/grafana/share/grafana --pluginsDir "/opt/homebrew/var/lib/grafana/plugins" plugins install <plugin-id>
```

## Install standalone macOS binaries

To install Grafana on macOS using the standalone binaries, complete the following steps:

1. Navigate to the [Grafana download page](https://grafana.com/grafana/download).
2. Select the Grafana version you want to install.
   - The most recent Grafana version is selected by default.
   - The **Version** field displays only tagged releases. If you want to install a nightly build, click **Nightly Builds** and then select a version.
3. Select an **Edition**.
   - **Enterprise:** This is the recommended version. It is functionally identical to the open source version, but includes features you can unlock with a license, if you so choose.
   - **Open Source:** This version is functionally identical to the Enterprise version, but you will need to download the Enterprise version if you want Enterprise features.
4. Click **Mac**.
5. Copy and paste the code from the [download page](https://grafana.com/grafana/download) into your command line and run.
6. Untar the `gz` file and copy the files to the location of your preference.
7. To start Grafana service, go to the directory and run the command:

   ```bash
   ./bin/grafana server
   ```

Alternatively, watch the Grafana for Beginners video below:

[Watch the video on YouTube](https://www.youtube.com/watch?v=T51Qa7eE3W8)

## Next steps

- [Start the Grafana server](https://grafana.com/docs/grafana/v13.2/setup-grafana/start-restart-grafana/)
