> Release-pinned source for Grafana v13.2.0: [docs/sources/datasources/google-cloud-monitoring/template-variables/index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/datasources/google-cloud-monitoring/template-variables/index.md)

# Google Cloud Monitoring template variables

Instead of hard-coding details such as server, application, and sensor names in metric queries, you can use variables.
Grafana lists these variables in dropdown select boxes at the top of the dashboard to help you change the data displayed in your dashboard.
Grafana refers to such variables as template variables.

For an introduction to templating and template variables, refer to the [Templating](https://grafana.com/docs/grafana/v13.2/dashboards/variables/) and [Add and manage variables](https://grafana.com/docs/grafana/v13.2/dashboards/variables/add-template-variables/) documentation.

## Use query variables

Variables of the type *Query* help you query Google Cloud Monitoring for various types of data.
The Google Cloud Monitoring data source provides the following **Query Types**:

| Name                               | List returned                                                         |
| ---------------------------------- | --------------------------------------------------------------------- |
| **Metric Types**                   | Metric type names available for the specified service.                |
| **Labels Keys**                    | Keys for `metric label` and `resource label` in the specified metric. |
| **Labels Values**                  | Values for the label in the specified metric.                         |
| **Resource Types**                 | Resource types for the specified metric.                              |
| **Aggregations**                   | Aggregations (cross-series reducers) for the specified metric.        |
| **Aligners**                       | Aligners (per-series aligners) for the specified metric.              |
| **Alignment periods**              | All alignment periods available in the query editor in Grafana.       |
| **Selectors**                      | Selectors for SLO (Service Level Objectives) queries.                 |
| **SLO Services**                   | Service Monitoring services for SLO queries.                          |
| **Service Level Objectives (SLO)** | SLOs for the specified SLO service.                                   |

## Use variables in queries

Use Grafana's variable syntax to include variables in queries.
For details, refer to the [variable syntax documentation](https://grafana.com/docs/grafana/v13.2/dashboards/variables/variable-syntax/).
