> Release-pinned source for Grafana v13.2.0: [docs/sources/datasources/tempo/_index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/datasources/tempo/_index.md)

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
