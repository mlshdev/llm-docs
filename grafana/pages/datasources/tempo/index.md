> Pinned source for Grafana v13.2.4: [docs/sources/datasources/tempo/_index.md](https://github.com/grafana/grafana/blob/af4a33e3786594ad72f72d97e6744010330c2977/docs/sources/datasources/tempo/_index.md)

# Tempo data source

Grafana ships with built-in support for [Grafana Tempo](https://grafana.com/docs/tempo/latest/), a high-volume, minimal-dependency distributed tracing backend from Grafana Labs.
Use the Tempo data source to search and visualize traces, correlate traces with logs, metrics, and profiles, and monitor service dependencies with the Service Graph.

Want to learn more about traces and the other telemetry signals?
Refer to [Understand your data](https://grafana.com/docs/grafana-cloud/telemetry-signals/).

> **Note**
>
> **Grafana Cloud users:** Grafana Cloud includes [Grafana Cloud Traces](https://grafana.com/docs/grafana-cloud/send-data/traces/), a pre-configured tracing data source backed by Tempo. You can use Grafana Cloud Traces to query traces without additional setup. Use the Tempo data source when you need to connect to a self-managed Tempo instance or require custom configuration such as trace correlations.

## Supported features

The Tempo data source supports the following features:

| Feature            | Supported | Notes                                                                  |
| ------------------ | --------- | ---------------------------------------------------------------------- |
| TraceQL queries    | Yes       | Query traces using TraceQL, the query language designed for traces     |
| Search             | Yes       | Find traces by service name, span name, duration, and attributes       |
| Service Graph      | Yes       | Visualize service dependencies and RED metrics                         |
| Trace to logs      | Yes       | Navigate from spans to related logs in Loki and other log data sources |
| Trace to metrics   | Yes       | Link spans to metrics queries in Prometheus                            |
| Trace to profiles  | Yes       | Link spans to profiling data in Grafana Pyroscope                      |
| Trace correlations | Yes       | Embed custom correlation links in trace views                          |
| Streaming          | Yes       | Display TraceQL results as they become available                       |
| JSON trace upload  | Yes       | Upload and visualize trace files without a Tempo instance              |
| Explore            | Yes       | Ad-hoc trace investigation without dashboards                          |
| Alerting           | No        | Use TraceQL metrics in Prometheus for trace-based alerting             |

> **Tip**
>
> **New to tracing?** Learn what telemetry signals are and how they work together in [Understand your data](https://grafana.com/docs/grafana-cloud/telemetry-signals/) (Grafana Cloud), or read the [Introduction to tracing](https://grafana.com/docs/tempo/latest/introduction/) for core concepts like spans, traces, and instrumentation.
>
> **Prefer a queryless experience?** [Grafana Traces Drilldown](https://grafana.com/docs/grafana/v13.2/explore/simplified-exploration/traces/) lets you explore tracing data using RED metrics without writing TraceQL queries.

## Get started

The following pages help you set up and use the Tempo data source:

- [Configure the Tempo data source](https://grafana.com/docs/grafana/v13.2/datasources/tempo/configure-tempo-data-source/): Connect Grafana to Tempo, set up authentication, and configure trace correlations.
- [Query tracing data](https://grafana.com/docs/grafana/v13.2/datasources/tempo/query-editor/): Search for traces, use the TraceQL editor, and upload JSON trace files.
- [Grafana Traces Drilldown](https://grafana.com/docs/grafana/v13.2/explore/simplified-exploration/traces/): Explore tracing data visually using RED metrics, without writing queries.
- [Service Graph and Service Graph view](https://grafana.com/docs/grafana/v13.2/datasources/tempo/service-graph/): Visualize service dependencies and monitor request rate, error rate, and duration. Requires a linked Prometheus data source with service graph metrics.

## Connect traces to other signals

After you've connected Grafana to Tempo, you can configure correlations between traces and other signals:

- [Trace to logs](https://grafana.com/docs/grafana/v13.2/datasources/tempo/configure-tempo-data-source/configure-trace-to-logs/): Navigate from spans to related logs in Loki, including bidirectional linking.
- [Trace to metrics](https://grafana.com/docs/grafana/v13.2/datasources/tempo/configure-tempo-data-source/configure-trace-to-metrics/): Link spans to metrics queries in Prometheus or other metrics data sources.
- [Trace to profiles](https://grafana.com/docs/grafana/v13.2/datasources/tempo/configure-tempo-data-source/configure-trace-to-profiles/): Link spans to profiling data in Grafana Pyroscope with embedded flame graphs.
- [Trace correlations](https://grafana.com/docs/grafana/v13.2/datasources/tempo/configure-tempo-data-source/trace-correlations/): Create custom correlation links to any data source or external URL.

[//]: # "Shared note: querying a data source with the gcx Grafana CLI."

[//]: # "This shared file is included in these locations:"

[//]: # "/docs/sources/datasources/pyroscope/_index.md"

[//]: # "/docs/sources/datasources/mysql/_index.md"

[//]: #

[//]: # "If you make changes to this file, verify that the meaning and content are not changed in any place where the file is included."

[//]: # "Any links should be fully qualified and not relative: /docs/grafana/ instead of ../grafana/."

## Query with the Grafana CLI

You can query this data source from the command line and from AI coding agents using the Grafana CLI, `gcx`. `gcx` gives you and your agent structured, terminal-based access to your Grafana data sources, which is useful for automation and agent-driven investigations.

`gcx` supports Grafana Cloud and Grafana OSS or Enterprise v12 and later. Before you query, install and authenticate `gcx`. Refer to the [`gcx` CLI documentation](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/grafana-cli/gcx/) for installation, configuration, and the full command reference.

For example, to search and query your Tempo data source, use the `gcx datasources tempo` commands:

```sh
# Search for traces with a TraceQL query
gcx datasources tempo query -d <DATASOURCE_UID> '{ span.http.status_code >= 500 }' --since 1h

# Retrieve a single trace by its ID
gcx datasources tempo get -d <DATASOURCE_UID> <TRACE_ID>

# List all trace labels, or the values for a single label
gcx datasources tempo labels -d <DATASOURCE_UID>
gcx datasources tempo labels -d <DATASOURCE_UID> --label service.name

# Run a TraceQL metrics query that returns time series
gcx datasources tempo metrics -d <DATASOURCE_UID> '{ } | rate()' --since 1h
```

Replace *`<DATASOURCE_UID>`* with the UID of your Tempo data source and *`<TRACE_ID>`* with a hex-encoded trace ID. You can omit the `-d` flag when `datasources.tempo` is configured in your `gcx` context. The `query` command searches for traces, `get` retrieves a single trace by ID, and `metrics` returns time series from a TraceQL metrics query.

## Related resources

- [Introduction to tracing](https://grafana.com/docs/tempo/latest/introduction/)

- [Best practices for traces](https://grafana.com/docs/tempo/latest/set-up-for-tracing/instrument-send/best-practices/): Guidance on planning spans, attributes, and trace structure for effective tracing data.

- [TraceQL query examples](https://grafana.com/docs/grafana/v13.2/datasources/tempo/query-editor/traceql-query-examples/)

- [TraceQL query language reference](https://grafana.com/docs/tempo/latest/traceql/)
  If you encounter issues with the Tempo data source, refer to [Troubleshoot Tempo data source issues](https://grafana.com/docs/grafana/v13.2/datasources/tempo/troubleshooting/).

- [Configure the Tempo data source](https://grafana.com/docs/grafana/v13.2/datasources/tempo/configure-tempo-data-source/): Guide for configuring Tempo in Grafana

- [Query tracing data](https://grafana.com/docs/grafana/v13.2/datasources/tempo/query-editor/): Guide for using the Tempo data source's query editor

- [Service Graph and Service Graph view](https://grafana.com/docs/grafana/v13.2/datasources/tempo/service-graph/): Use the Service Graph and Service Graph view to visualize service dependencies and monitor RED metrics

- [Span filters](https://grafana.com/docs/grafana/v13.2/datasources/tempo/span-filters/): Use span filters to filter spans in the timeline viewer

- [Troubleshoot Tempo data source issues](https://grafana.com/docs/grafana/v13.2/datasources/tempo/troubleshooting/): Troubleshoot common problems with the Tempo data source in Grafana
