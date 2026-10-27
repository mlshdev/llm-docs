> Pinned source for Grafana v13.3.0: [docs/sources/datasources/influxdb/_index.md](https://github.com/grafana/grafana/blob/752e3462ff71a43a5c1fb62d00a482fa2dc0ee6a/docs/sources/datasources/influxdb/_index.md)

# InfluxDB data source

[InfluxDB](https://www.influxdata.com/products/) is an open-source time series database (TSDB) developed by [InfluxData](https://www.influxdata.com/). It is optimized for fast, high-availability storage and retrieval of time series data in fields such as operations monitoring, application metrics, IoT sensor data, and real-time analytics.

Grafana ships with the InfluxDB data source out of the box. The data source is preinstalled in both Grafana OSS and Grafana Enterprise, so there's nothing for you to install. It's packaged as a standalone plugin that Grafana can update independently of Grafana releases. For details, refer to [Plugin updates](#plugin-updates).

Grafana offers multiple configuration options for this data source, including a choice of three query languages (SQL, InfluxQL, and Flux). SQL and InfluxQL provide both visual builder and code editing modes, while Flux provides a code editor only.

## Supported versions

This data source supports the following InfluxDB products:

- InfluxDB OSS 1.x, 2.x, and 3.x
- InfluxDB Enterprise 1.x and 3.x
- InfluxDB Cloud Serverless
- InfluxDB Cloud Dedicated
- InfluxDB Cloud (TSM)

## Supported features

| Feature     | Supported |
| ----------- | --------- |
| Metrics     | Yes       |
| Logs        | Yes       |
| Traces      | No        |
| Alerting    | Yes       |
| Annotations | Yes       |

## Get started

The following documents help you set up and use the InfluxDB data source:

- [Configure the InfluxDB data source](https://grafana.com/docs/grafana/v13.3/datasources/influxdb/configure/)
- [InfluxDB query editor](https://grafana.com/docs/grafana/v13.3/datasources/influxdb/query-editor/)
- [InfluxDB template variables](https://grafana.com/docs/grafana/v13.3/datasources/influxdb/template-variables/)
- [InfluxDB annotations](https://grafana.com/docs/grafana/v13.3/datasources/influxdb/annotations/)
- [InfluxDB alerting](https://grafana.com/docs/grafana/v13.3/datasources/influxdb/alerting/)
- [Troubleshoot InfluxDB data source issues](https://grafana.com/docs/grafana/v13.3/datasources/influxdb/troubleshooting/)

## Additional features

After configuring the data source, you can:

- Use [Explore](https://grafana.com/docs/grafana/v13.3/explore/) to query data without building a dashboard.
- Add [transformations](https://grafana.com/docs/grafana/v13.3/panels-visualizations/query-transform-data/transform-data/) to manipulate query results.
- Configure [template variables](https://grafana.com/docs/grafana/v13.3/dashboards/variables/) for dynamic dashboards.
- [Build dashboards](https://grafana.com/docs/grafana/v13.3/dashboards/build-dashboards/) to visualize your InfluxDB data.
- Set up [alerting](https://grafana.com/docs/grafana/v13.3/alerting/) rules based on your InfluxDB query results.

To see the InfluxDB data source in action, explore this demo dashboard on Grafana Play:

[InfluxDB 3.0: Hourly Electric Grid Monitor for US in Grafana Play](https://play.grafana.org/d/f9a5b2d1-0227-4341-93fd-113fedba6481/)

## Plugin updates

Starting with Grafana v13.2, the InfluxDB data source is a standalone plugin, preinstalled in both Grafana OSS and Enterprise. This enables more frequent updates independent of Grafana releases. Grafana automatically checks the plugin catalog and installs the latest version on each server restart.

To adjust this behavior:

- **Opt out of auto-updates:** Set `preinstall_auto_update` to `false` in your [configuration file](https://grafana.com/docs/grafana/v13.3/setup-grafana/configure-grafana/).
- **Update manually:** Update at any time from the **Administration > Plugins** page without restarting Grafana.

The standalone plugin requires Grafana 12.3.0 or later. The InfluxDB data source bundled with Grafana 13.1 and earlier continues to work as before. Those versions are unaffected by this change.

> **Caution**
>
> Grafana recommends running plugin version 13.1.0 or later. Earlier versions could write API tokens to Grafana server logs in plain text at default log levels. If you've run an earlier version, treat your server logs as sensitive and rotate any tokens that may have been exposed.

Users running Grafana 12.3.x through 13.1.x can install the standalone plugin from the plugin catalog if they want the latest features before upgrading to Grafana 13.2. To use the standalone plugin with these versions, add the following to your [configuration file](https://grafana.com/docs/grafana/v13.3/setup-grafana/configure-grafana/):

```ini
[plugin.influxdb]
as_external = true

[plugins]
; Install the latest version on startup:
preinstall_sync = influxdb
; Or install a specific version:
; preinstall_sync = influxdb@<version>
```

On self-managed Grafana, you control the plugin version. To roll back after a problematic update, pin a known-good version with `preinstall_sync = influxdb@<version>` and restart Grafana, or install a specific version from the **Administration > Plugins** page.

> **Note**
>
> In Grafana Cloud, plugin updates are managed automatically. You can't pin the plugin to a specific version or roll back to a previous one yourself. If a plugin update causes problems with your dashboards or queries, contact Grafana Support.

[//]: # "Shared note: querying a data source with the gcx Grafana CLI."

[//]: # "This shared file is included in these locations:"

[//]: # "/docs/sources/datasources/aws-cloudwatch/_index.md"

[//]: # "/docs/sources/datasources/azure-monitor/_index.md"

[//]: # "/docs/sources/datasources/elasticsearch/_index.md"

[//]: # "/docs/sources/datasources/google-cloud-monitoring/_index.md"

[//]: # "/docs/sources/datasources/influxdb/_index.md"

[//]: # "/docs/sources/datasources/loki/_index.md"

[//]: # "/docs/sources/datasources/mssql/_index.md"

[//]: # "/docs/sources/datasources/mysql/_index.md"

[//]: # "/docs/sources/datasources/postgres/_index.md"

[//]: # "/docs/sources/datasources/prometheus/_index.md"

[//]: # "/docs/sources/datasources/pyroscope/_index.md"

[//]: # "/docs/sources/datasources/tempo/_index.md"

[//]: #

[//]: # "If you make changes to this file, verify that the meaning and content are not changed in any place where the file is included."

[//]: # "Any links should be fully qualified and not relative: /docs/grafana/ instead of ../grafana/."

## Query with the Grafana CLI

You can query this data source from the command line and from AI coding agents using the Grafana CLI, `gcx`. `gcx` gives you and your agent structured, terminal-based access to your Grafana data sources, which is useful for automation and agent-driven investigations.

`gcx` supports Grafana Cloud and Grafana OSS or Enterprise v12 and later. Before you query, install and authenticate `gcx`. Refer to the [`gcx` CLI documentation](https://grafana.com/docs/grafana/v13.3/as-code/observability-as-code/grafana-cli/gcx/) for installation, configuration, and the full command reference.

For example, to query your InfluxDB data source, use the `gcx datasources influxdb` commands:

```sh
# Run a query (InfluxQL, Flux, or SQL, auto-detected from the data source)
gcx datasources influxdb query -d <DATASOURCE_UID> 'SELECT mean("value") FROM "cpu" WHERE time > now() - 1h'

# List measurements (add --bucket to use Flux mode)
gcx datasources influxdb list-measurements -d <DATASOURCE_UID>

# List field keys and tag keys, optionally filtered by measurement
gcx datasources influxdb list-field-keys -d <DATASOURCE_UID> --measurement cpu
gcx datasources influxdb list-tag-keys -d <DATASOURCE_UID> --measurement cpu

# List the values for a tag key
gcx datasources influxdb list-tag-values -d <DATASOURCE_UID> --key host
```

Replace *`<DATASOURCE_UID>`* with the UID of your InfluxDB data source. You can omit the `-d` flag when `datasources.influxdb` is configured in your `gcx` context. The `list-field-keys`, `list-tag-keys`, and `list-tag-values` commands work in InfluxQL mode only.

## Related resources

- [Official InfluxDB documentation](https://docs.influxdata.com/)
- [Grafana community forum](https://community.grafana.com/)
