> Pinned source for Grafana v13.3.0: [docs/sources/datasources/pyroscope/_index.md](https://github.com/grafana/grafana/blob/752e3462ff71a43a5c1fb62d00a482fa2dc0ee6a/docs/sources/datasources/pyroscope/_index.md)

# Pyroscope data source

Grafana Pyroscope is a horizontally scalable, highly available, multi-tenant, OSS, continuous profiling aggregation system.
Add a Pyroscope data source to query your profiles in [Explore](https://grafana.com/docs/grafana/v13.3/explore/).

Grafana includes built-in support for Pyroscope, so you don't need to install a plugin. The Pyroscope data source requires Grafana v12.3 or later.

Refer to [Introduction to Pyroscope](https://grafana.com/docs/pyroscope/latest/introduction/) to understand profiling and Pyroscope.

## Supported features

The Pyroscope data source supports the following features.

| Feature     | Supported |
| ----------- | --------- |
| Metrics     | Yes       |
| Logs        | No        |
| Traces      | No        |
| Alerting    | No        |
| Annotations | No        |

The Pyroscope data source returns profiling data visualized as flame graphs and time-series metrics derived from profiles. It also integrates with tracing data through the Trace to profiles feature.

## Get started

The following documents help you get started with the Pyroscope data source:

- [Configure the Pyroscope data source](https://grafana.com/docs/grafana/v13.3/datasources/pyroscope/configure/)
- [Query profile data](https://grafana.com/docs/grafana/v13.3/datasources/pyroscope/query-editor/)
- [Template variables](https://grafana.com/docs/grafana/v13.3/datasources/pyroscope/template-variables/)
- [Troubleshoot the Pyroscope data source](https://grafana.com/docs/grafana/v13.3/datasources/pyroscope/troubleshooting/)

Before you query profiles, [configure your application to send profiles](https://grafana.com/docs/pyroscope/latest/configure-client/) to Pyroscope.

To explore profiling data from a Pyroscope data source, try Grafana Profiles Drilldown on Grafana Play:

[Grafana Profiles Drilldown in Grafana Play](https://play.grafana.org/a/grafana-pyroscope-app/explore)

## Continuous profiling

While code profiling has been a long-standing practice, continuous profiling represents a modern and more advanced approach to performance monitoring.

This technique adds two critical dimensions to traditional profiles:

Time
: Profiling data is collected *continuously*, providing a time-centric view that allows querying performance data from any point in the past.

Metadata
: Profiles are enriched with metadata, adding contextual depth to the performance data.

These dimensions, coupled with the detailed nature of performance profiles, make continuous profiling a uniquely valuable tool.

### Flame graphs

Flame graphs help you visualize resource allocation and performance bottlenecks. For more information about the visualization and its features, refer to the [Flame graph panel](https://grafana.com/docs/grafana/v13.3/panels-visualizations/visualizations/flame-graph/).

## Grafana Cloud-only features

Some Pyroscope features are available only in Grafana Cloud:

- **Explain flame graph:** On views with a flame graph, Grafana Cloud provides an AI-driven analysis that explains the performance bottleneck, its root cause, and a recommended fix. For more information, refer to [Flame graph AI](https://grafana.com/docs/grafana-cloud/monitor-applications/profiles/flamegraph-ai/).
- **GitHub line-level insights:** Through the GitHub integration, Grafana Cloud maps profiling data to your source code and shows line-level performance insights.

## Integrate profiles into dashboards

Using the Pyroscope data source, you can integrate profiles into your dashboards.
For example, you can embed flame graphs using the [flame graph panel](https://grafana.com/docs/grafana/v13.3/panels-visualizations/visualizations/flame-graph/).

This example shows memory profiles alongside panels for logs and metrics, which helps you debug out of memory (OOM) errors together with the associated logs and metrics.

![dashboard](https://grafana.com/static/img/pyroscope/grafana-pyroscope-dashboard-2023-11-30.png)

## Visualize traces and profiles data using Trace to profiles

You can link profile and tracing data using your Pyroscope data source with the Tempo data source.

Combined traces and profiles let you see granular line-level detail when available for a trace span. This allows you to pinpoint the exact function that's causing a bottleneck in your application as well as a specific request.

![trace-profiler-view](https://grafana.com/static/img/pyroscope/pyroscope-trace-profiler-view-2023-11-30.png)

For more information, refer to [Configure Trace to profiles](https://grafana.com/docs/grafana/v13.3/datasources/pyroscope/configure-traces-to-profiles/) and [Link tracing and profiling with span profiles](https://grafana.com/docs/pyroscope/latest/configure-client/trace-span-profiles/).

[Watch the video on YouTube](https://www.youtube.com/watch?v=AG8VzfFMLxo)

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

For example, to run a profiling query against your Pyroscope data source, use `gcx datasources pyroscope query`:

```sh
gcx datasources pyroscope query -d <DATASOURCE_UID> '{service_name="frontend"}' \
  --profile-type process_cpu:cpu:nanoseconds:cpu:nanoseconds --since 1h
```

Replace *`<DATASOURCE_UID>`* with the UID of your Pyroscope data source. The query takes a label selector (`{service_name="frontend"}`), a profile type (`--profile-type`), and a time range (`--since`).

## Related Pyroscope documentation

For more information about Pyroscope beyond the data source, refer to the following Pyroscope product documentation:

- [Introduction to Pyroscope](https://grafana.com/docs/pyroscope/latest/introduction/): Understand continuous profiling and how Pyroscope works.
- [Configure the client to send profiles](https://grafana.com/docs/pyroscope/latest/configure-client/): Instrument your application to send profiling data to Pyroscope.
- [Link traces to profiles with span profiles](https://grafana.com/docs/pyroscope/latest/configure-client/trace-span-profiles/): Correlate trace spans with profiling data.
- [Deploy Pyroscope](https://grafana.com/docs/pyroscope/latest/deploy-kubernetes/): Deploy and run a self-managed Pyroscope backend.
- [Configure the Pyroscope server](https://grafana.com/docs/pyroscope/latest/configure-server/): Reference the available server configuration parameters.
