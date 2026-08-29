> Release-pinned source for Grafana v13.2.0: [docs/sources/datasources/prometheus/_index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/datasources/prometheus/_index.md)

# Prometheus data source

Prometheus is an open source monitoring system and time series database that scrapes and stores metrics used for monitoring and alerting.

Grafana includes built-in support for Prometheus, so you don't need to install a plugin. Write queries using [PromQL](https://prometheus.io/docs/prometheus/latest/querying/basics/) in the query editor, or use [Metrics Drilldown](https://grafana.com/docs/grafana/v13.2/explore/simplified-exploration/metrics/) to explore metrics without writing queries. The Prometheus data source also works with other projects that implement the [Prometheus querying API](https://prometheus.io/docs/prometheus/latest/querying/api/), including [Grafana Mimir](https://grafana.com/docs/mimir/latest/) and [Thanos](https://thanos.io/tip/components/query.md/).

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
- Build a wide variety of [visualizations](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/)

## Cloud-managed Prometheus services

> **Note**
>
> In Grafana 13, the core Prometheus data source no longer supports SigV4 (AWS) or Azure AD authentication. These authentication methods have been migrated to dedicated plugins:
>
> - **Amazon Managed Service for Prometheus** — Use the [Amazon Managed Service for Prometheus data source](https://grafana.com/grafana/plugins/grafana-amazonprometheus-datasource/). For migration details, refer to [AWS authentication (deprecated)](https://grafana.com/docs/grafana/v13.2/datasources/prometheus/configure/aws-authentication/).
> - **Azure Monitor Managed Service for Prometheus** — Use the [Azure Monitor Managed Service for Prometheus data source](https://grafana.com/grafana/plugins/grafana-azureprometheus-datasource/). For migration details, refer to [Azure authentication (deprecated)](https://grafana.com/docs/grafana/v13.2/datasources/prometheus/configure/azure-authentication/).
>
> Existing data sources using these methods are automatically migrated on startup.

## Related resources

- [What is Prometheus?](https://grafana.com/docs/grafana/v13.2/fundamentals/intro-to-prometheus/)
- [Prometheus data model](https://prometheus.io/docs/concepts/data_model/)
- [Getting started with Prometheus](https://prometheus.io/docs/prometheus/latest/getting_started/)
- [Grafana community forum](https://community.grafana.com/)
