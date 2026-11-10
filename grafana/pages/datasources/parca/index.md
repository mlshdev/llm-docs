> Pinned source for Grafana v13.3.1: [docs/sources/datasources/parca/_index.md](https://github.com/grafana/grafana/blob/5db6ba887630c7fa12e5bfd063f2fa854025468c/docs/sources/datasources/parca/_index.md)

# Parca data source

> **Warning**
>
> This plugin is deprecated and will only receive critical security updates. Support will end on January 2, 2027.

Parca is a continuous profiling database for analysis of CPU and memory usage, down to the line number and throughout time. You can use the Parca data source to query your profiles in [Explore](https://grafana.com/docs/grafana/v13.3/explore/) and to build profiling dashboards.

The Parca data source is developed and released from the standalone [grafana/grafana-parca-datasource](https://github.com/grafana/grafana-parca-datasource) repository. Grafana doesn't bundle it, so you build it from source and install it manually before you can use it.

> **Note**
>
> The Parca data source isn't published to the Grafana plugin catalog and isn't available in Grafana Cloud. You can't install it with Grafana CLI, the **Plugins** page, or the `plugins.preinstall` configuration option.

Refer to the [Parca documentation](https://www.parca.dev/docs) to learn about continuous profiling and how to instrument your applications.

To use Parca profiling data in Grafana, you should:

1. [Set up Parca](https://www.parca.dev/docs/quickstart) to scrape profiles from your applications.
2. [Build and install the Parca data source](https://grafana.com/docs/grafana/v13.3/datasources/parca/configure/#install-the-data-source) on your Grafana instance.
3. [Configure the Parca data source](https://grafana.com/docs/grafana/v13.3/datasources/parca/configure/) in Grafana.
4. [Query your profiling data](https://grafana.com/docs/grafana/v13.3/datasources/parca/query-editor/) using the query editor in Explore.

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

- [Configure the Parca data source](https://grafana.com/docs/grafana/v13.3/datasources/parca/configure/)
- [Parca query editor](https://grafana.com/docs/grafana/v13.3/datasources/parca/query-editor/)
- [Template variables](https://grafana.com/docs/grafana/v13.3/datasources/parca/template-variables/)
- [Troubleshoot Parca data source issues](https://grafana.com/docs/grafana/v13.3/datasources/parca/troubleshooting/)

## Explore profiling data

[Explore](https://grafana.com/docs/grafana/v13.3/explore/) is the primary way to interact with Parca data in Grafana. Use Explore to query profiles and metrics without building a dashboard, and to select the **Both** query type to view flame graphs and time-series data side by side.

## Integrate profiles into dashboards

Using the Parca data source, you can embed profiling data in your dashboards alongside other signals like logs and metrics. For example, you can place a [flame graph panel](https://grafana.com/docs/grafana/v13.3/panels-visualizations/visualizations/flame-graph/) showing CPU profiles next to a metrics panel tracking request latency to correlate performance bottlenecks with application behavior.

## Updates

Because you install the Parca data source manually, Grafana can't update it for you. To update, pull the latest changes from [grafana/grafana-parca-datasource](https://github.com/grafana/grafana-parca-datasource), rebuild, and replace the contents of your plugin directory. Refer to [Install the data source](https://grafana.com/docs/grafana/v13.3/datasources/parca/configure/#install-the-data-source) for the build and deployment steps.

The Parca data source only receives critical security updates until January 2, 2027. After that date it receives no further updates.

## Related resources

- [Parca data source repository](https://github.com/grafana/grafana-parca-datasource)
- [Official Parca documentation](https://www.parca.dev/docs)
- [Grafana community forum](https://community.grafana.com/)
