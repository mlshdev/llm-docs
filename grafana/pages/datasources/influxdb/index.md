> Release-pinned source for Grafana v13.2.0: [docs/sources/datasources/influxdb/_index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/datasources/influxdb/_index.md)

# InfluxDB data source

[InfluxDB](https://www.influxdata.com/products/) is an open-source time series database (TSDB) developed by [InfluxData](https://www.influxdata.com/). It is optimized for fast, high-availability storage and retrieval of time series data in fields such as operations monitoring, application metrics, IoT sensor data, and real-time analytics.

Grafana includes a built-in InfluxDB data source plugin, enabling you to query and visualize data from InfluxDB without installing additional plugins. Grafana offers multiple configuration options for this data source, including a choice of three query languages (SQL, InfluxQL, and Flux). SQL and InfluxQL provide both visual builder and code editing modes, while Flux provides a code editor only.

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

Always ensure that your plugin version is up-to-date so you have access to all current features and improvements. Navigate to **Plugins and data** > **Plugins** to check for updates. Grafana recommends upgrading to the latest Grafana version, and this applies to plugins as well.

> **Note**
>
> Plugins are automatically updated in Grafana Cloud.

## Related resources

- [Official InfluxDB documentation](https://docs.influxdata.com/)
- [Grafana community forum](https://community.grafana.com/)
