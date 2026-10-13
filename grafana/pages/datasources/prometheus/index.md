> Pinned source for Grafana v13.2.4: [docs/sources/datasources/prometheus/_index.md](https://github.com/grafana/grafana/blob/af4a33e3786594ad72f72d97e6744010330c2977/docs/sources/datasources/prometheus/_index.md)

# Prometheus data source

Prometheus is an open source monitoring system and time series database that scrapes and stores metrics used for monitoring and alerting.

The Prometheus data source is preinstalled in Grafana, so you don't need to install it manually. Write queries using [PromQL](https://prometheus.io/docs/prometheus/latest/querying/basics/) in the query editor, or use [Metrics Drilldown](https://grafana.com/docs/grafana/v13.2/explore/simplified-exploration/metrics/) to explore metrics without writing queries. The Prometheus data source also works with other projects that implement the [Prometheus querying API](https://prometheus.io/docs/prometheus/latest/querying/api/), including [Grafana Mimir](https://grafana.com/docs/mimir/latest/) and [Thanos](https://thanos.io/tip/components/query.md/).

## Supported features

| Feature         | Supported |
| --------------- | --------- |
| Metrics         | Yes       |
| Alerting        | Yes       |
| Annotations     | Yes       |
| Recording rules | Yes       |
| Exemplars       | Yes       |

## Get started

The following documents help you set up and use the Prometheus data source:

- [Configure the Prometheus data source](https://grafana.com/docs/grafana/v13.2/datasources/prometheus/configure/)
- [Prometheus query editor](https://grafana.com/docs/grafana/v13.2/datasources/prometheus/query-editor/)
- [Template variables](https://grafana.com/docs/grafana/v13.2/datasources/prometheus/template-variables/)
- [Annotations](https://grafana.com/docs/grafana/v13.2/datasources/prometheus/annotations/)
- [Alerting](https://grafana.com/docs/grafana/v13.2/datasources/prometheus/alerting/)
- [Troubleshooting](https://grafana.com/docs/grafana/v13.2/datasources/prometheus/troubleshooting/)

## Additional features

After you configure the Prometheus data source, you can:

- Use [Metrics Drilldown](https://grafana.com/docs/grafana/v13.2/explore/simplified-exploration/metrics/) to browse and explore your Prometheus metrics without writing PromQL
- Use [Explore](https://grafana.com/docs/grafana/v13.2/explore/) to query data without building a dashboard
- Add [transformations](https://grafana.com/docs/grafana/v13.2/panels-visualizations/query-transform-data/transform-data/) to manipulate query results
- Create [recorded queries](https://grafana.com/docs/grafana/v13.2/administration/recorded-queries/) for pre-aggregated data
- Save and reuse PromQL queries across dashboards, Explore, and annotations with [saved queries](https://grafana.com/docs/grafana/v13.2/visualizations/panels-visualizations/query-transform-data/#saved-queries) (available in Grafana Enterprise and Grafana Cloud)
- Build a wide variety of [visualizations](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/)

## Cloud-managed Prometheus services

> **Note**
>
> In Grafana 13, the core Prometheus data source no longer supports SigV4 (AWS) or Azure AD authentication. These authentication methods have been migrated to dedicated plugins:
>
> - **Amazon Managed Service for Prometheus:** Use the [Amazon Managed Service for Prometheus data source](https://grafana.com/grafana/plugins/grafana-amazonprometheus-datasource/). For migration details, refer to [AWS authentication (deprecated)](https://grafana.com/docs/grafana/v13.2/datasources/prometheus/configure/aws-authentication/).
> - **Azure Monitor Managed Service for Prometheus:** Use the [Azure Monitor Managed Service for Prometheus data source](https://grafana.com/grafana/plugins/grafana-azureprometheus-datasource/). For migration details, refer to [Azure authentication (deprecated)](https://grafana.com/docs/grafana/v13.2/datasources/prometheus/configure/azure-authentication/).
>
> Existing data sources using these methods are automatically migrated on startup.

## Plugin updates

Grafana still ships with the Prometheus data source out of the box. It's preinstalled in both Grafana OSS and Grafana Enterprise, so there's nothing for you to install. Starting with Grafana v13.2, it's packaged as a standalone plugin rather than built into the Grafana codebase, which means you can update the plugin as needed without waiting for a Grafana release. By default, Grafana checks the plugin catalog and installs the latest version on each server restart.

To adjust this behavior:

- **Opt out of auto-updates:** Set `preinstall_auto_update` to `false` in your [configuration file](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana/).
- **Update manually:** Update at any time from the **Administration > Plugins** page without restarting Grafana.

The standalone plugin requires Grafana 12.3.0 or later. The Prometheus data source bundled with Grafana 13.1 and earlier continues to work as before, and those versions aren't affected by this change.

Users running Grafana 12.3.x through 13.1.x can install the standalone plugin from the plugin catalog if they want the latest features before upgrading to Grafana 13.2. To use the standalone plugin with Grafana 12.3.x through 13.1.x, add the following to your [configuration file](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana/):

```ini
[plugin.prometheus]
as_external = true

[plugins]
; Install the latest version on startup:
preinstall_sync = prometheus
; Or install a specific version:
; preinstall_sync = prometheus@<version>
```

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

For example, to query your Prometheus data source, use the `gcx datasources prometheus` commands:

```sh
# Run an instant PromQL query using an explicit data source UID
gcx datasources prometheus query -d <DATASOURCE_UID> 'up{job="grafana"}'

# Run a range query over the last hour
gcx datasources prometheus query -d <DATASOURCE_UID> 'rate(http_requests_total[5m])' --since 1h --step 1m

# List all labels, or the values for a single label
gcx datasources prometheus labels -d <DATASOURCE_UID>
gcx datasources prometheus labels -d <DATASOURCE_UID> --label job

# Get metadata, including the type and help text, for a metric
gcx datasources prometheus metadata -d <DATASOURCE_UID> --metric http_requests_total
```

Replace *`<DATASOURCE_UID>`* with the UID of your Prometheus data source. You can omit the `-d` flag when `datasources.prometheus` is configured in your `gcx` context. The same commands work with Prometheus-compatible data sources that `gcx` maps to this resolver, including Amazon Managed Service for Prometheus and other `grafana-*prometheus-datasource` flavors.

## Related resources

- [What is Prometheus?](https://grafana.com/docs/grafana/v13.2/fundamentals/intro-to-prometheus/)
- [Prometheus data model](https://prometheus.io/docs/concepts/data_model/)
- [Getting started with Prometheus](https://prometheus.io/docs/prometheus/latest/getting_started/)
- [Grafana community forum](https://community.grafana.com/)
