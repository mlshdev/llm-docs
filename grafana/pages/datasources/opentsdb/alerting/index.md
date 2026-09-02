> Release-pinned source for Grafana v13.2.1: [docs/sources/datasources/opentsdb/alerting/index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/datasources/opentsdb/alerting/index.md)

# OpenTSDB alerting

You can use Grafana Alerting with OpenTSDB to create alerts based on your time series data. This allows you to monitor metrics, detect anomalies, and receive notifications when specific conditions are met.

For general information about Grafana Alerting, refer to [Grafana Alerting](https://grafana.com/docs/grafana/v13.2/alerting/).

## Before you begin

Before creating alerts with OpenTSDB, ensure you have:

- An OpenTSDB data source configured in Grafana. Refer to [Configure the OpenTSDB data source](https://grafana.com/docs/grafana/v13.2/datasources/opentsdb/configure/).
- Appropriate permissions to create alert rules.
- Understanding of the metrics you want to monitor.

## Supported features

OpenTSDB alerting works with standard metric queries that return time series data. The following table summarizes alerting compatibility:

| Query type                    | Alerting support | Notes                                |
| ----------------------------- | ---------------- | ------------------------------------ |
| Metrics with aggregation      | Yes              | Recommended for alerting             |
| Metrics with downsampling     | Yes              | Use appropriate intervals            |
| Metrics with rate calculation | Yes              | Useful for counter metrics           |
| Metrics with filters/tags     | Yes              | Filter to specific hosts or services |

## Create an alert rule

To create an alert rule using OpenTSDB:

1. Navigate to **Alerting** > **Alert rules**.
2. Click **New alert rule**.
3. Enter a name for the alert rule.
4. Select your **OpenTSDB** data source.
5. Build your query:
   - Select the metric to monitor.
   - Choose an appropriate aggregator (for example, `avg`, `sum`, `max`).
   - Add tag filters to target specific resources.
   - Enable downsampling with an interval matching your evaluation frequency.
6. Configure the alert condition (for example, when the value is above a threshold).
7. Set the evaluation interval and pending period.
8. Configure notifications and labels.
9. Click **Save rule**.

For detailed instructions, refer to [Create a Grafana-managed alert rule](https://grafana.com/docs/grafana/v13.2/alerting/alerting-rules/create-grafana-managed-rule/).

## Example alert queries

The following examples show common alerting scenarios with OpenTSDB.

### Alert on high CPU usage

Monitor CPU usage and alert when it exceeds 90%:

| Field                 | Value          |
| --------------------- | -------------- |
| Metric                | `sys.cpu.user` |
| Aggregator            | `avg`          |
| Tags                  | `host=*`       |
| Downsample Interval   | `1m`           |
| Downsample Aggregator | `avg`          |

**Condition:** When average is above `90`

### Alert on low disk space

Monitor available disk space and alert when it drops below a threshold:

| Field                 | Value               |
| --------------------- | ------------------- |
| Metric                | `sys.disk.free`     |
| Aggregator            | `min`               |
| Tags                  | `host=*`, `mount=/` |
| Downsample Interval   | `5m`                |
| Downsample Aggregator | `min`               |

**Condition:** When minimum is below `10737418240` (10 GB in bytes)

### Alert on high network traffic rate

Monitor network bytes received and alert on high traffic:

| Field                 | Value                |
| --------------------- | -------------------- |
| Metric                | `net.bytes.received` |
| Aggregator            | `sum`                |
| Tags                  | `host=webserver01`   |
| Rate                  | enabled              |
| Counter               | enabled              |
| Downsample Interval   | `1m`                 |
| Downsample Aggregator | `avg`                |

**Condition:** When sum is above `104857600` (100 MB/s in bytes)

### Alert on error count spike

Monitor application error counts:

| Field                 | Value                           |
| --------------------- | ------------------------------- |
| Metric                | `app.errors.count`              |
| Aggregator            | `sum`                           |
| Tags                  | `service=api`, `env=production` |
| Downsample Interval   | `5m`                            |
| Downsample Aggregator | `sum`                           |

**Condition:** When sum is above `100`

## Limitations

When using OpenTSDB with Grafana Alerting, be aware of the following limitations.

### Template variables not supported

Alert queries can't contain template variables. Grafana evaluates alert rules on the backend without dashboard context, so variables like `$hostname` or `$environment` aren't resolved.

If your dashboard query uses template variables, create a separate query for alerting with hard-coded values.

### Query complexity

Complex queries with many tags or long time ranges may timeout or fail to evaluate. Simplify queries for alerting by:

- Using specific tag filters instead of wildcards where possible.
- Enabling downsampling with appropriate intervals.
- Reducing the evaluation time range.

### OpenTSDB 2.4 behavior

When using OpenTSDB 2.4 with alerting, Grafana executes queries with the parameter `arrays=true`. This causes OpenTSDB to return data points as an array of arrays instead of a map of key-value pairs. Grafana automatically converts this data to the appropriate format.

## Best practices

Follow these best practices when creating OpenTSDB alerts:

- **Use specific tag filters:** Add tag filters to focus on relevant resources and improve query performance.
- **Match downsample interval to evaluation:** Set the downsample interval to match or be slightly smaller than your alert evaluation interval.
- **Test queries first:** Verify your query returns expected results in [Explore](https://grafana.com/docs/grafana/v13.2/explore/) before creating an alert.
- **Set realistic thresholds:** Base alert thresholds on historical data patterns to avoid false positives.
- **Use meaningful names:** Give alert rules descriptive names that indicate what they monitor.
- **Enable downsampling:** Always enable downsampling for alerting queries to reduce data volume and improve reliability.
- **Consider counter resets:** For counter metrics, enable the Counter option and set appropriate max values to handle resets correctly.

## Next steps

- [Build queries](https://grafana.com/docs/grafana/v13.2/datasources/opentsdb/query-editor/) to explore your metrics before creating alerts.
- [Troubleshoot issues](https://grafana.com/docs/grafana/v13.2/datasources/opentsdb/troubleshooting/) if alerts aren't firing as expected.
