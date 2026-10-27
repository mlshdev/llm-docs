> Pinned source for Grafana v13.3.0: [docs/sources/datasources/google-cloud-monitoring/_index.md](https://github.com/grafana/grafana/blob/752e3462ff71a43a5c1fb62d00a482fa2dc0ee6a/docs/sources/datasources/google-cloud-monitoring/_index.md)

# Google Cloud Monitoring data source

Google Cloud Monitoring is Google Cloud Platform's native monitoring and observability service that collects metrics, events, and metadata from GCP resources, hosted uptime probes, and application instrumentation. The Google Cloud Monitoring data source in Grafana allows you to query and visualize this data alongside metrics from other systems, creating unified dashboards for comprehensive infrastructure and application monitoring.

Grafana ships with the Google Cloud Monitoring data source preinstalled in both Grafana OSS and Grafana Enterprise, so there's nothing for you to install. It's packaged as a standalone plugin that updates independently of Grafana releases. For details, refer to [Plugin updates](#plugin-updates).

## Get started

The following documents help you get started with the Google Cloud Monitoring data source:

- [Configure the data source](https://grafana.com/docs/grafana/v13.3/datasources/google-cloud-monitoring/configure/) - Set up authentication and connect to Google Cloud
- [Query editor](https://grafana.com/docs/grafana/v13.3/datasources/google-cloud-monitoring/query-editor/) - Create and edit Metrics, SLO, and PromQL queries
- [Template variables](https://grafana.com/docs/grafana/v13.3/datasources/google-cloud-monitoring/template-variables/) - Create dynamic dashboards with Google Cloud Monitoring variables
- [Annotations](https://grafana.com/docs/grafana/v13.3/datasources/google-cloud-monitoring/annotations/) - Overlay Google Cloud Monitoring events on graphs
- [Alerting](https://grafana.com/docs/grafana/v13.3/datasources/google-cloud-monitoring/alerting/) - Create alert rules based on GCP metrics and SLOs
- [Google authentication](https://grafana.com/docs/grafana/v13.3/datasources/google-cloud-monitoring/google-authentication/) - Configure authentication methods for GCP access
- [Troubleshooting](https://grafana.com/docs/grafana/v13.3/datasources/google-cloud-monitoring/troubleshooting/) - Solve common configuration and query errors

## Supported query types

The Google Cloud Monitoring data source supports the following query types:

| Query type                          | Description                                                                                                |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Metrics**                         | Query time series data from GCP resources using the visual builder or the Monitoring Query Language (MQL). |
| **Service Level Objectives (SLOs)** | Query SLO data defined in Google Cloud Monitoring to track service reliability and error budgets.          |
| **PromQL**                          | Query Google Cloud Monitoring metrics using Prometheus Query Language (PromQL) syntax.                     |

## Additional features

After you configure the Google Cloud Monitoring data source, you can:

- Create a wide variety of [visualizations](https://grafana.com/docs/grafana/v13.3/panels-visualizations/visualizations/) using GCP metrics.
- Configure and use [template variables](https://grafana.com/docs/grafana/v13.3/dashboards/variables/) for dynamic dashboards.
- Add [transformations](https://grafana.com/docs/grafana/v13.3/panels-visualizations/query-transform-data/transform-data/) to manipulate query results.
- Add [annotations](https://grafana.com/docs/grafana/v13.3/dashboards/build-dashboards/annotate-visualizations/) to overlay events on your graphs.
- Set up [alerting](https://grafana.com/docs/grafana/v13.3/alerting/) based on GCP metrics.
- Use [Explore](https://grafana.com/docs/grafana/v13.3/explore/) to investigate your Google Cloud data without building a dashboard.

## Import dashboards for GCP services

The Google Cloud Monitoring plugin no longer bundles pre-configured dashboards. Earlier versions shipped curated dashboards for popular GCP services that you imported from the data source's **Dashboards** tab. As of plugin version 12.6.1, these dashboards are no longer included, so the **Dashboards** tab doesn't list them.

To build equivalent dashboards, do one of the following:

- Browse the [Grafana dashboards catalog](https://grafana.com/grafana/dashboards/?dataSource=stackdriver) for community and Grafana-authored dashboards that use the Google Cloud Monitoring data source.
- Reference the [Google Cloud dashboard samples](https://github.com/GoogleCloudPlatform/monitoring-dashboard-samples) and recreate the panels using the [query editor](https://grafana.com/docs/grafana/v13.3/datasources/google-cloud-monitoring/query-editor/).

When you build dashboards for multiple GCP projects, add a [template variable](https://grafana.com/docs/grafana/v13.3/datasources/google-cloud-monitoring/template-variables/) populated with the projects accessible by the configured [service account](https://grafana.com/docs/grafana/v13.3/datasources/google-cloud-monitoring/google-authentication/) so you can switch projects from a drop-down.

## Plugin updates

Starting with Grafana v13.2, the Google Cloud Monitoring data source is a standalone plugin, preinstalled in both Grafana OSS and Grafana Enterprise. This enables more frequent updates independent of Grafana releases. Grafana automatically checks the plugin catalog and installs the latest version on each server restart.

To adjust this behavior:

- **Opt out of auto-updates:** Set `preinstall_auto_update` to `false` in your [configuration file](https://grafana.com/docs/grafana/v13.3/setup-grafana/configure-grafana/).
- **Update manually:** Update at any time from the **Administration > Plugins** page without restarting Grafana.

The standalone plugin requires Grafana 12.3.0 or later. The Google Cloud Monitoring data source bundled with Grafana 12.2 and earlier continues to work as before. These versions are unaffected by the change.

Users running Grafana 12.3.x through 13.1.x can install the standalone plugin from the plugin catalog if they want the latest features before upgrading to Grafana 13.2. To use the standalone plugin with these versions, add the following to your [configuration file](https://grafana.com/docs/grafana/v13.3/setup-grafana/configure-grafana/):

```ini
[plugin.stackdriver]
as_external = true

[plugins]
; Install the latest version on startup:
preinstall_sync = stackdriver
; Or install a specific version:
; preinstall_sync = stackdriver@<version>
```

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

For example, to explore and query your Google Cloud Monitoring data source, use the `gcx datasources cloudmonitoring` commands:

```sh
# List the projects and metrics available to the data source
gcx datasources cloudmonitoring list-projects -d <DATASOURCE_UID>
gcx datasources cloudmonitoring list-metrics -d <DATASOURCE_UID> --project my-project --service compute.googleapis.com

# Run a structured metrics query
gcx datasources cloudmonitoring query -d <DATASOURCE_UID> --project my-project \
  --metric compute.googleapis.com/instance/cpu/utilization --since 1h

# Split the result into one series per instance with a cross-series reducer
gcx datasources cloudmonitoring query -d <DATASOURCE_UID> --project my-project \
  --metric compute.googleapis.com/instance/cpu/utilization \
  --reducer REDUCE_MEAN --group-by resource.label.instance_name --since 1h
```

Replace *`<DATASOURCE_UID>`* with the UID of your Google Cloud Monitoring data source. You can omit the `-d` flag when `datasources.cloudmonitoring` is configured in your `gcx` context. Queries are structured rather than expression-based, so `--project` and `--metric` are required. The `--group-by` flag requires a `--reducer` other than `REDUCE_NONE`, and `--filter` matches are exact and case-sensitive, with no regular expression or wildcard support. The `list-projects` and `list-metrics` commands help you discover valid values.

## Related resources

- [Google Cloud Monitoring documentation](https://cloud.google.com/monitoring/docs)
- [Monitoring Query Language (MQL) reference](https://cloud.google.com/monitoring/mql/reference)
- [Google Cloud metrics list](https://cloud.google.com/monitoring/api/metrics_gcp)
- [Grafana community forum](https://community.grafana.com/)
