> Release-pinned source for Grafana v13.2.1: [docs/sources/alerting/fundamentals/notifications/contact-points.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/alerting/fundamentals/notifications/contact-points.md)

# Contact points

Contact points contain the configuration for sending alert notifications. You can assign a contact point either in the alert rule or notification policy options.

A contact point includes one or more contact point integrations for sending alert notifications, such as:

- Alertmanager
- Amazon SNS
- Cisco Webex Teams
- DingDing
- Discord
- Email
- Google Chat
- Grafana IRM
- Jira
- Kafka REST Proxy
- Line
- Microsoft Teams
- MQTT
- Opsgenie
- PagerDuty
- Pushover
- Sensu Go
- Slack
- Telegram
- Threema Gateway
- VictorOps
- Webhook
- WeCom

For example, a contact point could contain a PagerDuty integration; an email and Slack integration; or a PagerDuty integration, a Slack integration, and two email integrations. You can also configure a contact point with no integrations; in which case no notifications are sent.

Each contact point integration can also define the notification message to be sent, which can use the predefined message, a custom message, or notification templates.

For a complete list of supported integrations and more details about contact points, refer to [Configure contact points](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/manage-contact-points).
