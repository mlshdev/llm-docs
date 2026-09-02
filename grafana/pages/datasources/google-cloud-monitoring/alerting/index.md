> Release-pinned source for Grafana v13.2.1: [docs/sources/datasources/google-cloud-monitoring/alerting/index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/datasources/google-cloud-monitoring/alerting/index.md)

# Google Cloud Monitoring alerting

The Google Cloud Monitoring data source supports [Grafana Alerting](https://grafana.com/docs/grafana/v13.2/alerting/), allowing you to create alert rules based on GCP metrics and Service Level Objectives (SLOs). You can monitor your Google Cloud environment and receive notifications when specific conditions are met.

## Before you begin

Before you create alert rules, ensure the following:

- You have appropriate permissions to create alert rules in Grafana.
- Your Google Cloud Monitoring data source is configured and working correctly. Refer to [Configure the data source](https://grafana.com/docs/grafana/v13.2/datasources/google-cloud-monitoring/configure/).
- You're familiar with [Grafana Alerting concepts](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/).

## Supported query types for alerting

The following query types support alerting:

| Query type                         | Use case                                               | Notes                                              |
| ---------------------------------- | ------------------------------------------------------ | -------------------------------------------------- |
| **Builder**                        | Threshold-based alerts on GCP resource metrics         | Best suited for alerting; returns time-series data |
| **MQL**                            | Complex metric queries using Monitoring Query Language | Use for advanced filtering and aggregations        |
| **Service Level Objectives (SLO)** | Alert on SLO compliance, error budgets, or burn rate   | Monitor service reliability                        |
| **PromQL**                         | Prometheus-style queries on GCP metrics                | Familiar syntax for Prometheus users               |

> **Note**
>
> Alert queries must return numeric data that Grafana can evaluate against a threshold. Queries that return only text or non-numeric data can't be used directly for alerting.

## Authentication requirements

Alerting rules run as background processes without a user context. Both supported authentication methods work with alerting:

| Authentication method       | Supported |
| --------------------------- | --------- |
| Google JWT File             | ✓         |
| GCE Default Service Account | ✓         |

## Create an alert rule

To create an alert rule using Google Cloud Monitoring data:

1. Go to **Alerting** > **Alert rules**.
2. Click **New alert rule**.
3. Enter a name for your alert rule.
4. In the **Define query and alert condition** section:
   - Select your Google Cloud Monitoring data source.
   - Configure your query (for example, a Builder query for CPU usage or an SLO query for error budget).
   - Add a **Reduce** expression if your query returns multiple series.
   - Add a **Threshold** expression to define the alert condition.
5. Configure the **Set evaluation behavior**:
   - Select or create a folder and evaluation group.
   - Set the evaluation interval (how often the alert is checked).
   - Set the pending period (how long the condition must be true before firing).
6. Add labels and annotations to provide context for notifications.
7. Click **Save rule**.

For detailed instructions, refer to [Create a Grafana-managed alert rule](https://grafana.com/docs/grafana/v13.2/alerting/alerting-rules/create-grafana-managed-rule/).

## Example: VM CPU usage alert

This example creates an alert that fires when Compute Engine VM CPU utilization exceeds 80%:

1. Create a new alert rule.
2. Configure the query:
   - **Query type**: Builder
   - **Project**: Select your GCP project
   - **Service**: Compute Engine
   - **Metric**: `instance/cpu/utilization`
   - **Group by function**: mean
3. Add expressions:
   - **Reduce**: Last (to get the most recent data point)
   - **Threshold**: Is above 0.8 (CPU utilization is returned as a decimal)
4. Set evaluation to run every 1 minute with a 5-minute pending period.
5. Save the rule.

## Example: SLO error budget alert

This example alerts when an SLO's error budget remaining drops below 20%:

1. Create a new alert rule.
2. Configure the query:
   - **Query type**: Service Level Objectives (SLO)
   - **Project**: Select your GCP project
   - **Service**: Select your SLO service
   - **SLO**: Select your SLO
   - **Selector**: SLO Error Budget Remaining
3. Add expressions:
   - **Reduce**: Last
   - **Threshold**: Is below 0.2 (20% remaining)
4. Set evaluation to run every 5 minutes.
5. Save the rule.

## Example: Cloud SQL memory alert

This example alerts when Cloud SQL instance memory usage exceeds 90%:

1. Create a new alert rule.
2. Configure the query:
   - **Query type**: Builder
   - **Project**: Select your GCP project
   - **Service**: Cloud SQL
   - **Metric**: `database/memory/utilization`
   - **Filter**: Add a filter for specific database instances if needed
3. Add expressions:
   - **Reduce**: Last
   - **Threshold**: Is above 0.9
4. Set evaluation to run every 1 minute.
5. Save the rule.

## Best practices

Follow these recommendations to create reliable and efficient alerts with Google Cloud Monitoring data.

### Use appropriate query intervals

- Set the alert evaluation interval to be greater than or equal to the minimum data resolution from Google Cloud Monitoring.
- Most GCP metrics have 1-minute granularity at minimum.
- Avoid very short intervals (less than 1 minute) as they may cause evaluation timeouts or miss data points.

### Reduce multiple series

When your query returns multiple time series (for example, CPU usage across multiple VMs), use the **Reduce** expression to aggregate them:

- **Last**: Use the most recent value
- **Mean**: Average across all series
- **Max/Min**: Use the highest or lowest value
- **Sum**: Total across all series

### Use appropriate alignment periods

For alerting queries, ensure the alignment period provides enough data points:

- Use "cloud monitoring auto" or "grafana auto" for most cases.
- For more precise control, set a fixed alignment period that matches your evaluation interval.

### Handle no data conditions

Configure what happens when no data is returned:

1. In the alert rule, find **Configure no data and error handling**.
2. Choose an appropriate action:
   - **No Data**: Keep the alert in its current state
   - **Alerting**: Treat no data as an alert condition
   - **OK**: Treat no data as a healthy state

### Test queries before alerting

Always verify your query returns expected data before creating an alert:

1. Go to **Explore**.
2. Select your Google Cloud Monitoring data source.
3. Run the query you plan to use for alerting.
4. Confirm the data format and values are correct.
5. Verify the query returns numeric data suitable for threshold evaluation.

## Recording rules

The Google Cloud Monitoring data source supports [Grafana-managed recording rules](https://grafana.com/docs/grafana/v13.2/alerting/alerting-rules/create-recording-rules/). Recording rules periodically pre-compute frequently used or computationally expensive queries, saving the results as a new time series metric.

Use recording rules to:

- Reduce query load on Google Cloud Monitoring by pre-computing complex aggregations.
- Create derived metrics from GCP data for use in alerts and dashboards.
- Import Google Cloud Monitoring data into a Prometheus-compatible database.

> **Note**
>
> Grafana-managed recording rules write results to a Prometheus-compatible database (such as Grafana Mimir or the Grafana Cloud managed Prometheus). You must configure a target data source for storing the recorded metrics.

For instructions on creating recording rules, refer to [Create recording rules](https://grafana.com/docs/grafana/v13.2/alerting/alerting-rules/create-recording-rules/).

## Troubleshooting

If your Google Cloud Monitoring alerts aren't working as expected, use the following sections to diagnose and resolve common issues.

### Alerts not firing

- Check that the query returns numeric data in Explore.
- Ensure the evaluation interval allows enough time for data to be available.
- Verify the threshold is set correctly (remember that many GCP metrics return decimals, not percentages).
- Review the alert rule's health and any error messages in the Alerting UI.

### Authentication errors in alert evaluation

If you see authentication errors when alerts evaluate:

- Verify the service account has the **Monitoring Viewer** role.
- If using a JWT key file, ensure it hasn't been deleted or revoked.
- Check that the required APIs (Monitoring API, Cloud Resource Manager API) are enabled.

### Query timeout errors

- Increase the alignment period to reduce the number of data points.
- Reduce the time range in the query.
- Simplify complex MQL queries.
- Add filters to narrow the result set.

For additional troubleshooting help, refer to [Troubleshoot Google Cloud Monitoring](https://grafana.com/docs/grafana/v13.2/datasources/google-cloud-monitoring/troubleshooting/).

## Additional resources

- [Grafana Alerting documentation](https://grafana.com/docs/grafana/v13.2/alerting/)
- [Create alert rules](https://grafana.com/docs/grafana/v13.2/alerting/alerting-rules/create-grafana-managed-rule/)
- [Create recording rules](https://grafana.com/docs/grafana/v13.2/alerting/alerting-rules/create-recording-rules/)
- [Google Cloud Monitoring query editor](https://grafana.com/docs/grafana/v13.2/datasources/google-cloud-monitoring/query-editor/)
