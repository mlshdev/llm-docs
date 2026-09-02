> Release-pinned source for Grafana v13.2.1: [docs/sources/datasources/influxdb/_index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/datasources/influxdb/_index.md)

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

- [Configure the InfluxDB data source](https://grafana.com/docs/grafana/v13.2/datasources/influxdb/configure/)
- [InfluxDB query editor](https://grafana.com/docs/grafana/v13.2/datasources/influxdb/query-editor/)
- [InfluxDB template variables](https://grafana.com/docs/grafana/v13.2/datasources/influxdb/template-variables/)
- [InfluxDB annotations](https://grafana.com/docs/grafana/v13.2/datasources/influxdb/annotations/)
- [InfluxDB alerting](https://grafana.com/docs/grafana/v13.2/datasources/influxdb/alerting/)
- [Troubleshoot InfluxDB data source issues](https://grafana.com/docs/grafana/v13.2/datasources/influxdb/troubleshooting/)

## Additional features

After configuring the data source, you can:

- Use [Explore](https://grafana.com/docs/grafana/v13.2/explore/) to query data without building a dashboard.
- Add [transformations](https://grafana.com/docs/grafana/v13.2/panels-visualizations/query-transform-data/transform-data/) to manipulate query results.
- Configure [template variables](https://grafana.com/docs/grafana/v13.2/dashboards/variables/) for dynamic dashboards.
- [Build dashboards](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/) to visualize your InfluxDB data.
- Set up [alerting](https://grafana.com/docs/grafana/v13.2/alerting/) rules based on your InfluxDB query results.

## Plugin updates

Starting with Grafana v13.2, the InfluxDB data source is a standalone plugin, preinstalled in both Grafana OSS and Enterprise. This enables more frequent updates independent of Grafana releases. Grafana automatically checks the plugin catalog and installs the latest version on each server restart.

To adjust this behavior:

- **Opt out of auto-updates:** Set `preinstall_auto_update` to `false` in your [configuration file](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana/).
- **Update manually:** Update at any time from the **Administration > Plugins** page without restarting Grafana.

The standalone plugin requires Grafana 12.3.0 or later. The InfluxDB data source bundled with Grafana 13.1 and earlier continues to work as before. Those versions are unaffected by this change.

> **Caution**
>
> Grafana recommends running plugin version 13.1.0 or later. Earlier versions could write API tokens to Grafana server logs in plain text at default log levels. If you've run an earlier version, treat your server logs as sensitive and rotate any tokens that may have been exposed.

Users running Grafana 12.3.x through 13.1.x can install the standalone plugin from the plugin catalog if they want the latest features before upgrading to Grafana 13.2. To use the standalone plugin with these versions, add the following to your [configuration file](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana/):

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

## Related resources

- [Official InfluxDB documentation](https://docs.influxdata.com/)
- [Grafana community forum](https://community.grafana.com/)
