> Release-pinned source for Grafana v13.2.0: [docs/sources/datasources/google-cloud-monitoring/_index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/datasources/google-cloud-monitoring/_index.md)

# Google Cloud Monitoring data source

Google Cloud Monitoring (formerly Stackdriver) is Google Cloud Platform's native monitoring and observability service that collects metrics, events, and metadata from GCP resources, hosted uptime probes, and application instrumentation. The Google Cloud Monitoring data source in Grafana allows you to query and visualize this data alongside metrics from other systems, creating unified dashboards for comprehensive infrastructure and application monitoring.

Grafana includes built-in support for Google Cloud Monitoring, so you don't need to install a plugin.

## Get started

The following documents will help you get started with the Google Cloud Monitoring data source:

- [Configure the data source](https://grafana.com/docs/grafana/v13.2/datasources/google-cloud-monitoring/configure/) - Set up authentication and connect to Google Cloud
- [Query editor](https://grafana.com/docs/grafana/v13.2/datasources/google-cloud-monitoring/query-editor/) - Create and edit Metric and SLO queries
- [Template variables](https://grafana.com/docs/grafana/v13.2/datasources/google-cloud-monitoring/template-variables/) - Create dynamic dashboards with Google Cloud Monitoring variables
- [Annotations](https://grafana.com/docs/grafana/v13.2/datasources/google-cloud-monitoring/annotations/) - Overlay Google Cloud Monitoring events on graphs
- [Alerting](https://grafana.com/docs/grafana/v13.2/datasources/google-cloud-monitoring/alerting/) - Create alert rules based on GCP metrics and SLOs
- [Google authentication](https://grafana.com/docs/grafana/v13.2/datasources/google-cloud-monitoring/google-authentication/) - Configure authentication methods for GCP access
- [Troubleshooting](https://grafana.com/docs/grafana/v13.2/datasources/google-cloud-monitoring/troubleshooting/) - Solve common configuration and query errors

## Supported query types

The Google Cloud Monitoring data source supports the following query types:

| Query type                          | Description                                                                                                |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Metrics**                         | Query time series data from GCP resources using the Monitoring Query Language (MQL) or the visual builder. |
| **Service Level Objectives (SLOs)** | Query SLO data defined in Google Cloud Monitoring to track service reliability and error budgets.          |

## Additional features

After you configure the Google Cloud Monitoring data source, you can:

- Create a wide variety of [visualizations](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/) using GCP metrics.
- Configure and use [template variables](https://grafana.com/docs/grafana/v13.2/dashboards/variables/) for dynamic dashboards.
- Add [transformations](https://grafana.com/docs/grafana/v13.2/panels-visualizations/query-transform-data/transform-data/) to manipulate query results.
- Add [annotations](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/annotate-visualizations/) to overlay events on your graphs.
- Set up [alerting](https://grafana.com/docs/grafana/v13.2/alerting/) based on GCP metrics.
- Use [Explore](https://grafana.com/docs/grafana/v13.2/explore/) to investigate your Google Cloud data without building a dashboard.

## Pre-configured dashboards

The Google Cloud Monitoring data source includes pre-configured dashboards for popular GCP services. These curated dashboards are based on similar dashboards in the GCP dashboard samples repository.

![](https://grafana.com/static/img/docs/google-cloud-monitoring/curated-dashboards-7-4.png)

*Curated dashboards for Google Cloud Monitoring*

To import a pre-configured dashboard:

1. Go to **Connections** > **Data sources**.
2. Select your Google Cloud Monitoring data source.
3. Click the **Dashboards** tab.
4. Click **Import** next to the dashboard you want to use.

The dashboards include a [template variable](https://grafana.com/docs/grafana/v13.2/datasources/google-cloud-monitoring/template-variables/) populated with the projects accessible by the configured [service account](https://grafana.com/docs/grafana/v13.2/datasources/google-cloud-monitoring/google-authentication/) each time you load the dashboard. After Grafana loads the dashboard, you can select a project from the dropdown list.

To customize an imported dashboard, save it under a different name. Otherwise, Grafana upgrades can overwrite your customizations with the new version.

## Related resources

- [Google Cloud Monitoring documentation](https://cloud.google.com/monitoring/docs)
- [Monitoring Query Language (MQL) reference](https://cloud.google.com/monitoring/mql/reference)
- [Google Cloud metrics list](https://cloud.google.com/monitoring/api/metrics_gcp)
- [Grafana community forum](https://community.grafana.com/)
