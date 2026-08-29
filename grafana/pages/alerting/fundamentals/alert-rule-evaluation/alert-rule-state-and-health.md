> Release-pinned source for Grafana v13.2.0: [docs/sources/alerting/fundamentals/alert-rule-evaluation/alert-rule-state-and-health.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/alerting/fundamentals/alert-rule-evaluation/alert-rule-state-and-health.md)

# Alert rule state and health

Each alert rule can generate one or more alert instances—one alert instance for each series or dimension, as shown in the [multi-dimensional alert example](https://grafana.com/docs/grafana/v13.2/alerting/best-practices/multi-dimensional-alerts/).

Each alert instance of the same alert rule represents a different target and can be in a different state; for example, one alert instance may be **Normal** while another is **Alerting**.

![Multi dimensional alert rule. The alert rule state and alert rule health are determined by the state of the alert instances.](https://grafana.com/media/docs/alerting/alert-rule-example-multiple-alert-instances.png)

The alert rule state and alert rule health are determined by the [state of the alert instances](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rule-evaluation/nodata-and-error-states/#alert-instance-states).

## Alert rule states

An alert rule can be in either of the following states:

| State       | Description                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| **Normal**  | None of the alert instances returned by the evaluation engine is in a `Pending` or `Alerting` state. |
| **Pending** | At least one alert instances returned by the evaluation engine is `Pending`.                         |
| **Firing**  | At least one alert instances returned by the evaluation engine is `Alerting`.                        |

## Alert rule health

An alert rule can have one of the following health statuses:

| State                  | Description                                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------------------------- |
| **Ok**                 | No error when evaluating the alert rule.                                                                 |
| **Error**              | An error occurred when evaluating the alert rule.                                                        |
| **No Data**            | The alert rule query returns no data.                                                                    |
| **{status}, KeepLast** | The rule would have received another status but was configured to keep the last state of the alert rule. |
