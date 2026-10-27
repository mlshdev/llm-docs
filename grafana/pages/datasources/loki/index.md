> Pinned source for Grafana v13.3.0: [docs/sources/datasources/loki/_index.md](https://github.com/grafana/grafana/blob/752e3462ff71a43a5c1fb62d00a482fa2dc0ee6a/docs/sources/datasources/loki/_index.md)

# Loki data source

Grafana Loki is a horizontally scalable, highly available, multi-tenant log aggregation system by Grafana Labs. Unlike other logging systems, Loki indexes only metadata about your logs in the form of labels, the same label model used by Prometheus. Loki compresses and stores the log content itself in chunks in object stores such as Amazon S3 or Google Cloud Storage, or on a local filesystem. The Loki data source in Grafana lets you query and visualize those logs, and correlate them with metrics, traces, and other data in unified dashboards.

Grafana includes built-in support for Loki, so you don't need to install a plugin.

## Supported features

| Feature     | Supported                                                  |
| ----------- | ---------------------------------------------------------- |
| Logs        | Yes                                                        |
| Metrics     | Yes. Use LogQL metric queries to derive metrics from logs. |
| Traces      | No                                                         |
| Alerting    | Yes                                                        |
| Annotations | Yes                                                        |

## Get started

The following documents help you get started with the Loki data source:

- [Configure the Loki data source](https://grafana.com/docs/grafana/v13.3/datasources/loki/configure/)
- [Loki query editor](https://grafana.com/docs/grafana/v13.3/datasources/loki/query-editor/)
- [Template variables](https://grafana.com/docs/grafana/v13.3/datasources/loki/template-variables/)
- [Loki annotations](https://grafana.com/docs/grafana/v13.3/datasources/loki/annotations/)
- [Loki alerting](https://grafana.com/docs/grafana/v13.3/datasources/loki/alerting/)
- [Troubleshoot Loki issues](https://grafana.com/docs/grafana/v13.3/datasources/loki/troubleshooting/)

To learn more about Loki itself, refer to the following Loki documentation:

- [Get started with Loki](https://grafana.com/docs/loki/latest/get-started/)
- [Install Loki](https://grafana.com/docs/loki/latest/setup/install/)
- [Loki best practices](https://grafana.com/docs/loki/latest/best-practices/)
- [LogQL query language](https://grafana.com/docs/loki/latest/query/)

## Additional features

After configuring the Loki data source, you can:

- Use [Explore](https://grafana.com/docs/grafana/v13.3/explore/) to query and live tail logs without building a dashboard.
- Use [Grafana Logs Drilldown](https://grafana.com/docs/grafana/v13.3/explore/simplified-exploration/logs/) to explore your Loki logs without writing LogQL queries.
- Create a wide variety of [visualizations](https://grafana.com/docs/grafana/v13.3/panels-visualizations/visualizations/).
- Add [transformations](https://grafana.com/docs/grafana/v13.3/panels-visualizations/query-transform-data/transform-data/) to manipulate query results.
- Set up [alerting](https://grafana.com/docs/grafana/v13.3/alerting/) on your logs.
- Add [annotations](https://grafana.com/docs/grafana/v13.3/dashboards/build-dashboards/annotate-visualizations/) to overlay log events on your graphs.
- Optimize performance with [query caching](https://grafana.com/docs/grafana/v13.3/administration/data-source-management/#query-and-resource-caching).

To see the Loki data source in action, explore this demo dashboard on Grafana Play:

[Loki NGINX Service Mesh - JSON version in Grafana Play](https://play.grafana.org/d/T512JVH7z/)

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

For example, to query your Loki data source, use the `gcx datasources loki` commands:

```sh
# Run a LogQL query that returns log lines
gcx datasources loki query -d <DATASOURCE_UID> '{job="varlogs"} |= "error"' --since 1h

# Run a metric LogQL query that returns time series
gcx datasources loki metrics -d <DATASOURCE_UID> 'rate({job="varlogs"}[5m])' --since 1h

# List all labels, or the values for a single label
gcx datasources loki labels -d <DATASOURCE_UID>
gcx datasources loki labels -d <DATASOURCE_UID> --label job

# List log streams matching a selector
gcx datasources loki series -d <DATASOURCE_UID> --match '{job="varlogs"}'
```

Replace *`<DATASOURCE_UID>`* with the UID of your Loki data source. You can omit the `-d` flag when `datasources.loki` is configured in your `gcx` context. The `query` command returns log lines, `metrics` returns time series from a metric LogQL query, and `series` requires at least one `--match` stream selector.

## Related resources

- [Loki documentation](https://grafana.com/docs/loki/latest/)
- [LogQL query language](https://grafana.com/docs/loki/latest/query/)
- [Grafana community forum](https://community.grafana.com/)
