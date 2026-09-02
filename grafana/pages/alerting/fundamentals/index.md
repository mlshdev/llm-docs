> Release-pinned source for Grafana v13.2.1: [docs/sources/alerting/fundamentals/_index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/alerting/fundamentals/_index.md)

# Introduction to Grafana Alerting

Grafana Alerting lets you define alert rules across multiple data sources and manage notifications with flexible routing.

Built on the Prometheus alerting model, it integrates with the Grafana stack to provide a scalable and effective alerting setup across a wide range of environments.

> **Tip**
>
> For a hands-on introduction, refer to [Getting started with Grafana Alerting tutorials](https://grafana.com/docs/grafana/v13.2/alerting/best-practices/tutorials/).

## How it works at a glance

![How Grafana Alerting works](https://grafana.com/media/docs/alerting/alerting-configure-notifications-v2.png)

1. Grafana Alerting periodically evaluates alert rules by executing their data source queries and checking their conditions.
2. Each alert rule can produce multiple alert instances—one per time series or dimension.
3. If a condition is breached, an alert instance fires.
4. Firing (and resolved) alert instances are sent for notifications, either directly to a contact point or through notification policies for more flexibility.

## Fundamentals

The following concepts are key to your understanding of how Grafana Alerting works.

### Alert rules

An [alert rule](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rules/) consists of one or more queries and expressions that select the data you want to measure. It also contains a condition, which is the threshold that an alert rule must meet or exceed to fire.

In the alert rule, choose the contact point or notification policies to determine how to receive the alert notifications.

### Alert rule evaluation

[Alert rules are frequently evaluated](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rules/rule-evaluation/) and the state of their alert instances is updated accordingly. Only alert instances that are in a firing or resolved state are sent in notifications.

### Alert instances

Each alert rule can produce multiple alert instances (also known as alerts) - one alert instance for each time series or dimension. This allows you to observe multiple resources in a single expression.

```promql
sum by(cpu) (
  rate(node_cpu_seconds_total{mode!="idle"}[1m])
)
```

A rule using the PromQL expression above creates as many alert instances as the amount of CPUs after the first evaluation, enabling a single rule to report the status of each CPU.

![Multiple alert instances from a single alert rule](https://grafana.com/static/img/docs/alerting/unified/multi-dimensional-alert.png)

*For a demo, see the [multi-dimensional alerts example](https://grafana.com/docs/grafana/v13.2/alerting/best-practices/multi-dimensional-alerts/).*

### Contact points

[Contact points](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/notifications/contact-points/) determine the notification message and where notifications are sent. For example, you might have a contact point that sends notifications to an email address, to Slack, to an incident management system (IRM) such as Grafana IRM or PagerDuty, or to a webhook.

### Notification messages

By default, notification messages include alert details, such as the number of alerts, their status, and annotations to help responders address alert issues. Notification messages can also be customized.

In the alert rule, you can choose a contact point to receive the alert notifications or use notification policies instead.

### Notification policies

[Notification policies](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/notifications/notification-policies/) are an advanced option for handling alert notifications by distinct scopes, such as by team or service—ideal for managing large alerting systems.

Notification policies routes alerts to contact points via label matching. They are defined in a tree structure, where the root of the notification policy tree is the **Default notification policy**, which ensures all alert instances are handled.

![A diagram displaying how the notification policy tree routes alerts](https://grafana.com/media/docs/alerting/notification-routing.png)

*Routing firing alert instances through notification policies*

<br/>

Each notification policy decides where to send the alert (contact point) and when to send the notification (timing options).

### Notification grouping

To reduce alert noise, Grafana Alerting [groups related firing alerts into a single notification](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/notifications/group-alert-notifications/) by default. You can customize this behavior in the alert rule or notification policy settings.

### Silences and mute timings

[Silences](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/create-silence/) and [mute timings](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/mute-timings/) allow you to pause notifications without interrupting alert rule evaluation. Use a silence to pause notifications on a one-time basis, such as during a maintenance window; and use mute timings to pause notifications at regular intervals, such as evenings and weekends.
