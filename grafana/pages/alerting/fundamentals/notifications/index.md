> Release-pinned source for Grafana v13.2.1: [docs/sources/alerting/fundamentals/notifications/_index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/alerting/fundamentals/notifications/_index.md)

# Notifications

Choosing how, when, and where to send your alert notifications is an important part of setting up your alerting system. These decisions have a direct impact on your team’s ability to receive the necessary information to resolve issues quickly and minimize alert noise.

Start defining your [contact points](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/notifications/contact-points/) to specify how to receive your alert notifications. Then, configure your alert rules to send their alerts to either a contact point or use the [Notification Policy Tree](#notification-policies) to flexibly route alerts to contact points.

<br/>

![Configure alert rules to forward firing alerts directly to a contact point or through notification policies](https://grafana.com/media/docs/alerting/alerting-configure-notifications-v2.png)

*Configure alert rules to forward firing alerts directly to a contact point or through notification policies*

## How it works at a glance

- Grafana alerting periodically [evaluates your alert rules](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rule-evaluation/).
- It triggers notifications for alert instances that are **firing** or **resolved**.
- You can configure an alert rule to send notifications to a **contact point** or route them through **notification policies** for greater flexibility.
- To reduce the number of notifications, you can **group related alerts** into a single notification by using label grouping and notification timings.

## Fundamentals

### Contact points

[Contact points](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/notifications/contact-points/) contain the configuration for sending alert notifications, specifying destinations like email, Slack, IRM, webhooks, and their notification messages.

A contact point is a list of integrations, each sending a message to a specific destination.

By default, notification messages include common alert details, such as the number of alerts, alert names, labels, annotations, and other alert information. You can also customize notification messages and use notification templates.

First, create the contact point and test the notifications. Then, configure the alert rule to send its notifications to either a contact point or through Notification Policies.

### Notification policies

[Notification policies](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/notifications/notification-policies/) are the backbone of a comprehensive alerting system. They provide a flexible and effective method to route alerts to distinct contact points, helping reduce alert noise while ensuring no alerts are missed.

The notification policy tree is responsible for:

- Defining nested policies that can inherit or overwrite parent notification settings.
- Routing alerts by matching alert labels to the appropriate notification policy.

![A diagram displaying how the notification policy tree routes alerts](https://grafana.com/media/docs/alerting/notification-routing.png)

Each notification policy handles specific tasks:

- Deciding which contact point receives the alert notification.
- Controlling when to send notifications based on its notification timing options.
- Grouping multiple alerts into a single notification to reduce alert noise.

![A diagram of the notification policy component](https://grafana.com/media/docs/alerting/alerting-notification-policy-diagram-v5.png)

### Group alert notifications

When something fails in our system, our alerting setup can easily trigger hundreds or even thousands of alert instances (notifications). Several alert rules often fail simultaneously. Additionally, each alert rule may generate multiple alert instances.

[Grouping alert notifications](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/notifications/group-alert-notifications/) is commonly necessary to avoid bombarding our alert inbox. Grouping combines similar alert instances in a given period into one single notification.

Notification grouping uses:

- **Labels**: Group alert instances of the same type by using labels.
- **Timing options**: Wait for a specified period before sending the notification, allowing for the grouping of incoming alert instances.

### Templates, silences and mute timings

Grafana Alerting provides advanced notification capabilities that you’ll find useful as you and your team refine your initial alerting system.

For instance, you can customize notifications with shared [templates](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/templates/) that provide actionable alert information and can be reused for multiple notifications.

Additionally, you can use [silences](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/create-silence/) and [mute timings](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/mute-timings/) to pause or suppress notifications without interrupting alert evaluation.

## Architecture

Grafana Alerting is built on the Prometheus model, which separates two main components for scalability and performance:

- **An alert generator** that evaluates alert rules and sends firing and resolved alerts to the alert receiver.
- **An alert receiver** (also known as Alertmanager) that receives the alerts and is responsible for sending their notifications.

![A diagram with the alert generator and alert manager architecture](https://grafana.com/media/docs/alerting/alerting-alertmanager-architecture.png)

Grafana includes a custom Alertmanager that extends the Prometheus Alertmanager to manage and deliver alert notifications. You can also [configure Grafana Alerting to work with other Alertmanagers](https://grafana.com/docs/grafana/v13.2/alerting/set-up/configure-alertmanager/).
