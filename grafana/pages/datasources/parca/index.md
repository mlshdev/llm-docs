> Release-pinned source for Grafana v13.2.0: [docs/sources/datasources/parca/_index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/datasources/parca/_index.md)

# Parca data source

> **Warning**
>
> This plugin is deprecated and will only receive critical security updates. Support will end on January 2, 2027.

Parca is a continuous profiling database for analysis of CPU and memory usage, down to the line number and throughout time. Grafana ships with built-in support for Parca, so you can add it as a data source and start querying your profiles in [Explore](https://grafana.com/docs/grafana/v13.2/explore/).

Refer to the [Parca documentation](https://www.parca.dev/docs) to learn about continuous profiling and how to instrument your applications.

To use Parca profiling data in Grafana, you should:

1. [Set up Parca](https://www.parca.dev/docs/quickstart) to scrape profiles from your applications.
2. [Configure the Parca data source](https://grafana.com/docs/grafana/v13.2/datasources/parca/configure/) in Grafana.
3. [Query your profiling data](https://grafana.com/docs/grafana/v13.2/datasources/parca/query-editor/) using the query editor in Explore.

## Supported Parca versions

This data source supports Parca v0.19 and later.

## Supported features

| Feature     | Supported |
| ----------- | --------- |
| Profiles    | Yes       |
| Metrics     | Yes       |
| Alerting    | No        |
| Annotations | No        |

## Get started

The following pages help you get started with the Parca data source:

- [Configure the Parca data source](https://grafana.com/docs/grafana/v13.2/datasources/parca/configure/)
- [Parca query editor](https://grafana.com/docs/grafana/v13.2/datasources/parca/query-editor/)
- [Template variables](https://grafana.com/docs/grafana/v13.2/datasources/parca/template-variables/)
- [Troubleshoot Parca data source issues](https://grafana.com/docs/grafana/v13.2/datasources/parca/troubleshooting/)

## Explore profiling data

[Explore](https://grafana.com/docs/grafana/v13.2/explore/) is the primary way to interact with Parca data in Grafana. Use Explore to query profiles and metrics without building a dashboard, and to select the **Both** query type to view flame graphs and time-series data side by side.

## Integrate profiles into dashboards

Using the Parca data source, you can embed profiling data in your dashboards alongside other signals like logs and metrics. For example, you can place a [flame graph panel](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/flame-graph/) showing CPU profiles next to a metrics panel tracking request latency to correlate performance bottlenecks with application behavior.

## Plugin updates

Always ensure that your plugin version is up-to-date so you have access to all current features and improvements. Navigate to **Plugins and data** > **Plugins** to check for updates. Grafana recommends upgrading to the latest Grafana version, and this applies to plugins as well.

> **Note**
>
> Plugins are automatically updated in Grafana Cloud.

## Related resources

- [Official Parca documentation](https://www.parca.dev/docs)
- [Grafana community forum](https://community.grafana.com/)
