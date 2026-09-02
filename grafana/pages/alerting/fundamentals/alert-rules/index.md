> Release-pinned source for Grafana v13.2.1: [docs/sources/alerting/fundamentals/alert-rules/_index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/alerting/fundamentals/alert-rules/_index.md)

# Alert rules

An alert rule is a set of evaluation criteria for when an alert rule should fire. An alert rule consists of:

1. [Queries](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rules/queries-conditions/#data-source-queries) that select the dataset to evaluate.
2. An [alert condition](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rules/queries-conditions/#alert-condition) (the threshold) that the query must meet or exceed to trigger the alert instance.

![Alert query using the Prometheus query editor and alert condition](https://grafana.com/media/docs/alerting/alerting-query-conditions-default-options.png)

1. An interval that specifies the frequency of [alert rule evaluation](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rules/rule-evaluation/) and a duration indicating how long the condition must be met to trigger the alert instance.
2. Other customizable options, including expressions, labels, annotations, error and no data handling, notification routing, and more.

## About Grafana-managed alert rules

Grafana-managed alert rules can query a wide range of backend data sources, including multiple data sources in a single alert rule. They support expression-based transformations, advanced alert conditions, images in notifications, handling of error and no data states, and [more](https://grafana.com/docs/grafana/v13.2/alerting/alerting-rules/create-data-source-managed-rule/#comparison-with-grafana-managed-rules).

You can find the supported public data sources in the [Grafana Plugins directory](https://grafana.com/grafana/plugins/data-source-plugins/?features=alerting). For step-by-step instructions, see [Configure Grafana-managed alert rules](https://grafana.com/docs/grafana/v13.2/alerting/alerting-rules/create-grafana-managed-rule/).

## Recording rules

Similar to alert rules, recording rules are evaluated periodically. A recording rule pre-computes frequently used or computationally expensive queries, and saves the results as a new time series metric.

The new recording metric can then be used in alert rules and dashboards to optimize their queries. For further details, refer to [Create recording rules](https://grafana.com/docs/grafana/v13.2/alerting/alerting-rules/create-recording-rules/).
