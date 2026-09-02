> Release-pinned source for Grafana v13.2.1: [docs/sources/alerting/configure-notifications/_index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/alerting/configure-notifications/_index.md)

# Configure notifications

Configuring how, when, and where to send alert notifications is an essential part of your alerting system.

By default, Grafana Alerting provides default notification messages with relevant alert information, so you don't need to configure messages initially. In the alert rule, you need to configure how to forward alerts:

1. Directly to a contact point.
2. To a contact point via notification policies (more flexible).

![In the alert rule, you can configure alert forwarding directly to a contact point or through notification policies](https://grafana.com/media/docs/alerting/alerting-configure-notifications-v2.png)

Notification setup is essential for an effective alerting system to scale across multiple teams and services. For a quick overview about the various components involved in handling notifications, refer to the [introduction about notifications](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/notifications/).

The topics in this section include step-by-step instructions for:

- [Configuring contact points](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/manage-contact-points/) to specify where to receive alert notifications.
- [Configuring notification policies](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/create-notification-policy/) to determine how alerts are routed to contact points.
- [Templating notifications](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/template-notifications/) to customize notification messages.
- [Configuring silences](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/create-silence/) or [mute timings](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/mute-timings/) to stop notifications.
- [Configuring inhibition rules](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/inhibition-rules/) to suppress notifications for dependent alerts when a root-cause alert is already firing.

After you configure notifications, you can refer to [View notification history](https://grafana.com/docs/grafana/v13.2/alerting/monitor-status/view-notification-history/) to confirm delivery and troubleshoot failed notifications.

## Alertmanager architecture

Grafana Alerting is based on the Prometheus Alerting model, whose architecture decouples rule evaluation from notification handling.

- The alert rule evaluator, either Grafana or the data source, evaluates alert rules and triggers alerts.
- The alert notification manager, known as the **Alertmanager**, receives alerts and manages their notifications.

![A diagram with the alert generator and alert manager architecture](https://grafana.com/media/docs/alerting/alerting-alertmanager-architecture.png)

In Grafana, you can use different types of alert rules and configure multiple Alertmanagers.

By default, Grafana uses its built-in Alertmanager, and Grafana Cloud instances include an additional Alertmanager.

![A screenshot choosing an Alertmanager in the notification policies UI](https://grafana.com/media/docs/alerting/alerting-choose-alertmanager.png)

When having multiple Alertmanagers, note that each Alertmanager manages its own independent notification resources, such as contact points, templates, policies, silences, mute timings, active time intervals, and active notifications.

These notification resources cannot be shared across different Alertmanagers.

Use the **Choose Alertmanager** dropdown to select the Alertmanager you want to configure.
