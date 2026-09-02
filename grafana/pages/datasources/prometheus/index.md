> Release-pinned source for Grafana v13.2.1: [docs/sources/datasources/prometheus/_index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/datasources/prometheus/_index.md)

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

## Related resources

- [What is Prometheus?](https://grafana.com/docs/grafana/v13.2/fundamentals/intro-to-prometheus/)
- [Prometheus data model](https://prometheus.io/docs/concepts/data_model/)
- [Getting started with Prometheus](https://prometheus.io/docs/prometheus/latest/getting_started/)
- [Grafana community forum](https://community.grafana.com/)
