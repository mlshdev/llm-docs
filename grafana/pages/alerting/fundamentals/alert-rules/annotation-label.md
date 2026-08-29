> Release-pinned source for Grafana v13.2.0: [docs/sources/alerting/fundamentals/alert-rules/annotation-label.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/alerting/fundamentals/alert-rules/annotation-label.md)

# Labels and annotations

Labels and annotations add additional information about an alert using key/value pairs:

- [Labels](#labels) are used to differentiate an alert from all other alerts and decide how to manage them.
- [Annotations](#annotations) provide extra details for alert responders to help them understand and address potential issues.

## Labels

**Labels** are unique identifiers of an [alert instance](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals#alert-instances). You can use them for searching, silencing, and routing notifications.

Examples of labels are `server=server1` or `team=backend`. Each alert rule can have more than one label and the complete set of labels for an alert rule is called its label set. It is this label set that identifies the alert.

For example, an alert instance might have the label set `{alertname="High CPU usage",server="server1"}` while another alert instance might have the label set `{alertname="High CPU usage",server="server2"}`. These are two separate alert instances because although their `alertname` labels are the same, their `server` labels are different.

![Image shows an example of an alert instance and the labels used on the alert instance.](https://grafana.com/static/img/docs/alerting/unified/multi-dimensional-alert.png)

Labels are a fundamental component of alerting:

- The complete set of labels for an alert is what uniquely identifies an alert instance.
- The alerting UI shows labels for every alert instance generated during evaluation of that rule.
- [Notification policies](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/notifications/notification-policies/) and [silences](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/create-silence/) use labels to match alert instances and route them to contact points or stop their notifications.
- Contact points can include information from labels in notification messages.

### Label types

An alert's label set can contain three types of labels:

**User-configured labels**

Labels that you manually configure in the alert rule to identify the generated alert instances and manage the alerts. Common custom labels, depending on the use case, are: `severity`, `priority`, `team`, and `service`.

Additionally, you can use a [template](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/templates/) to customize the label value and generate dynamic values from query data.

**Query labels**

Query labels are labels returned by the data source query.

![](https://grafana.com/media/docs/alerting/query-labels-and-values.png)

*An alert rule query returning labels from the query.*

Query labels can generate multiple alert instances from the same alert rule, helping to distinguish alerts from different data. In this example, the `instance` label generates an alert instance for each server.

**Reserved labels**

Reserved labels are automatically added by Grafana:

- `alertname`: the name of the alert rule.
- `grafana_folder`: the title of the folder containing the alert.

Labels prefixed with `grafana_` are reserved by Grafana for special use. You can disable reserved labels via the [`unified_alerting.reserved_labels`](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana#unified_alertingreserved_labels) option.

> **Note**
>
> Two alert rules cannot produce alert instances with the same labels. If two alert rules have the same labels such as `foo=bar,bar=baz` and `foo=bar,bar=baz` then one of the generated alert instances is discarded.
>
> Ensure the label set for an alert does not have two or more labels with the same name.
>
> - If a configured label has the same name as a data source query label, it replaces the data source label.
> - If a configured label has the same name as a reserved label, it is omitted.

**Label key format**

Grafana has a built-in Alertmanager that supports both Unicode label keys and values. If you are using an external Prometheus Alertmanager, label keys must be compatible with their [data model](https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels).
This means that label keys must only contain *ASCII letters*, *numbers*, and *underscores*.
Label keys must also be matched by the regular expression `[a-zA-Z_][a-zA-Z0-9_]*`.
Any invalid characters are removed or replaced by the Grafana alerting engine before being sent to the external Alertmanager according to the following rules:

- Whitespace is removed.
- ASCII characters are replaced with `_`.
- All other characters are replaced with their lower-case hex representation.
  If this is the first character it's prefixed with `_`.

Example: A label key/value pair `Alert! 🔔="🔥"` will become `Alert_0x1f514="🔥"`.

If multiple label keys are sanitized to the same value, the duplicates have a short hash of the original label appended as a suffix.

## Annotations

Annotations add additional information to alert instances, helping responders identify and address potential issues.

Create clear and self-explanatory annotations so that first responders can investigate without needing deeper knowledge of the alert setup.

Annotations are displayed in Grafana and are included by default in notifications. Grafana provides several optional annotations that you can edit:

- `summary`: A short summary of what the alert has detected and why.
- `description`: A detailed description of what happened and what the alert does.
- `runbook_url`: The runbook page to guide operators managing a potential incident.
- `__dashboardUid__` and `__panelId__`: [Link the alert to a dashboard and panel](https://grafana.com/docs/grafana/v13.2/alerting/alerting-rules/link-alert-rules-to-panels/) to facilitate alert investigation.

For example, you can edit the annotation `summary` to explain why the alert was triggered:

```
CPU usage has exceeded 80% for the last 5 minutes.
```

And edit the `description` annotation to provide more context and how to respond:

```
The web server's CPU has exceeded 80% for more than 5 minutes.

This indicates that the system is under heavy load and may result in an outage.

Consider scaling the server's resources and investigating bottlenecks.
```

Like labels, annotations can use a [template](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/templates/) to include dynamic data from queries.
