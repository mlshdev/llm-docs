> Release-pinned source for Grafana v13.2.1: [docs/sources/datasources/elasticsearch/alerting/index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/datasources/elasticsearch/alerting/index.md)

# Elasticsearch alerting

You can use Grafana Alerting with Elasticsearch to create alerts based on your Elasticsearch data. This allows you to monitor metrics, detect anomalies, and receive notifications when specific conditions are met.

For general information about Grafana Alerting, refer to [Grafana Alerting](https://grafana.com/docs/grafana/v13.2/alerting/).

## Before you begin

Before creating alerts with Elasticsearch, ensure you have:

- An Elasticsearch data source configured in Grafana
- Appropriate permissions to create alert rules
- Understanding of the metrics you want to monitor

## Supported query types

Elasticsearch alerting works best with **metrics queries** that return time series data. To create a valid alert query:

- Use a **Date histogram** as the last bucket aggregation (under **Group by**)
- Select appropriate metric aggregations (Count, Average, Sum, Min, Max, etc.)

Queries that return time series data allow Grafana to evaluate values over time and trigger alerts when thresholds are crossed.

### Query types and alerting compatibility

| Query type                     | Alerting support | Notes                                                       |
| ------------------------------ | ---------------- | ----------------------------------------------------------- |
| Metrics with Date histogram    | Supported        | Recommended for alerting                                    |
| Metrics without Date histogram | Limited          | May not evaluate correctly over time                        |
| Logs                           | Not supported    | Use metrics queries instead                                 |
| Raw data                       | Not supported    | Use metrics queries instead                                 |
| Raw document (deprecated)      | Not supported    | Deprecated since Grafana v10.1. Use metrics queries instead |

## Create an alert rule

To create an alert rule using Elasticsearch:

1. Navigate to **Alerting** > **Alert rules**.
2. Click **New alert rule**.
3. Enter a name for the alert rule.
4. Select your **Elasticsearch** data source.
5. Build your query using the query editor:
   - Add metric aggregations (for example, Average, Count, Sum)
   - Add a Date histogram under **Group by**
   - Optionally add filters using Lucene query syntax
6. Configure the alert condition (for example, when the average is above a threshold).
7. Set the evaluation interval and pending period.
8. Configure notifications and labels.
9. Click **Save rule**.

For detailed instructions, refer to [Create a Grafana-managed alert rule](https://grafana.com/docs/grafana/v13.2/alerting/alerting-rules/create-grafana-managed-rule/).

## Example alert queries

The following examples show common alerting scenarios with Elasticsearch.

### Alert on high error count

Monitor the number of error-level log entries:

1. **Query:** `level:error`
2. **Metric:** Count
3. **Group by:** Date histogram (interval: 1m)
4. **Condition:** When count is above 100

### Alert on average response time

Monitor API response times:

1. **Query:** `type:api_request`
2. **Metric:** Average on field `response_time`
3. **Group by:** Date histogram (interval: 5m)
4. **Condition:** When average is above 500 (milliseconds)

### Alert on unique user count drop

Detect drops in active users:

1. **Query:** `*` (all documents)
2. **Metric:** Unique count on field `user_id`
3. **Group by:** Date histogram (interval: 1h)
4. **Condition:** When unique count is below 100

## Limitations

When using Elasticsearch with Grafana Alerting, be aware of the following limitations:

### Template variables not supported

Alert queries cannot contain template variables. Grafana evaluates alert rules on the backend without dashboard context, so variables like `$hostname` or `$environment` won't be resolved.

If your dashboard query uses template variables, create a separate query for alerting with hard coded values.

### Logs queries not supported

Queries using the **Logs** metric type cannot be used for alerting. Convert your query to use metric aggregations with a Date histogram instead.

### Query complexity

Complex queries with many nested aggregations may timeout or fail to evaluate. Simplify queries for alerting by:

- Reducing the number of bucket aggregations
- Using appropriate time intervals
- Adding filters to limit the data scanned

## Best practices

Follow these best practices when creating Elasticsearch alerts:

- **Use specific filters:** Add Lucene query filters to focus on relevant data and improve query performance.
- **Choose appropriate intervals:** Match the Date histogram interval to your evaluation frequency.
- **Test queries first:** Verify your query returns expected results in Explore before creating an alert.
- **Set realistic thresholds:** Base alert thresholds on historical data patterns.
- **Use meaningful names:** Give alert rules descriptive names that indicate what they monitor.
