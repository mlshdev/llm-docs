> Release-pinned source for Grafana v13.2.0: [docs/sources/alerting/configure-notifications/manage-contact-points/integrations/configure-mqtt.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/alerting/configure-notifications/manage-contact-points/integrations/configure-mqtt.md)

# Configure MQTT notifications

Use the MQTT integration in contact points to send alert notifications to your MQTT broker.

## Configure MQTT for a contact point

To create a contact point with MQTT integration, complete the following steps.

1. Navigate to **Alerts & IRM** -> **Alerting** -> **Notification configuration**, then select the **Contact points** tab.
2. Click **+ Add contact point**.
3. Enter a name for the contact point.
4. From the **Integration** list, select **MQTT**.
5. Enter your broker URL in the **Broker URL** field. Supports `tcp`, `ssl`, `mqtt`, `mqtts`, `ws`, `wss` schemes. For example: `tcp://127.0.0.1:1883`.
6. Enter the MQTT topic name in the **Topic** field.
7. (Optional) Configure [additional settings](#optional-settings).
8. Click **Save contact point**.

For more details on contact points, including how to test them and enable notifications, refer to [Configure contact points](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/manage-contact-points/).

### Required Settings

| Option     | Description                                                                                                                                                                               |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Broker URL | The URL of the MQTT broker. This field is [protected](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/manage-contact-points/) from modification in Grafana Cloud. |
| Topic      | The topic to which the message will be sent.                                                                                                                                              |

### Optional Settings

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Message format           | If set to `json` (default), the notification message uses the [default JSON payload](#default-json-payload). <br/> If set to `text`, the notification message is fully customizable.                                                                                                                                                                                                        |
| Message                  | Depends on the **Message format** option. <br/> In `json` format, defines only the `message` field of the [default JSON payload](#default-json-payload). <br/> In `text` format, defines the [entire custom payload](#custom-payload). <br/> This field supports [notification templates](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/template-notifications/). |
| Client ID                | The client ID to use when connecting to the MQTT broker. If blank, a random client ID is used.                                                                                                                                                                                                                                                                                              |
| Username                 | The username to use when connecting to the MQTT broker.                                                                                                                                                                                                                                                                                                                                     |
| Password                 | The password to use when connecting to the MQTT broker.                                                                                                                                                                                                                                                                                                                                     |
| QoS                      | The quality of service to use when sending the message. Options are `At most once`, `At least once`, and `Exactly once`.                                                                                                                                                                                                                                                                    |
| Retain                   | If set to true, the message will be retained by the broker.                                                                                                                                                                                                                                                                                                                                 |
| TLS                      | TLS configuration options, including CA certificate, client certificate, and client key, and disable certificate verification.                                                                                                                                                                                                                                                              |
| Disable resolved message | Enable this option to prevent notifications when an alert resolves.                                                                                                                                                                                                                                                                                                                         |

## Default JSON payload

If the **Message format** option is `json` (the default), the payload is like this example.

```json
{
  "receiver": "My MQTT integration",
  "status": "firing",
  "orgId": 1,
  "alerts": [
    {
      "status": "firing",
      "labels": {
        "alertname": "High memory usage",
        "team": "blue",
        "zone": "us-1"
      },
      "annotations": {
        "description": "The system has high memory usage",
        "runbook_url": "https://myrunbook.com/runbook/1234",
        "summary": "This alert was triggered for zone us-1"
      },
      "startsAt": "2021-10-12T09:51:03.157076+02:00",
      "endsAt": "0001-01-01T00:00:00Z",
      "generatorURL": "https://play.grafana.org/alerting/1afz29v7z/edit",
      "fingerprint": "c6eadffa33fcdf37",
      "silenceURL": "https://play.grafana.org/alerting/silence/new?alertmanager=grafana&matchers=alertname%3DT2%2Cteam%3Dblue%2Czone%3Dus-1",
      "dashboardURL": "",
      "panelURL": "",
      "values": {
        "B": 44.23943737541908,
        "C": 1
      }
    },
    {
      "status": "firing",
      "labels": {
        "alertname": "High CPU usage",
        "team": "blue",
        "zone": "eu-1"
      },
      "annotations": {
        "description": "The system has high CPU usage",
        "runbook_url": "https://myrunbook.com/runbook/1234",
        "summary": "This alert was triggered for zone eu-1"
      },
      "startsAt": "2021-10-12T09:56:03.157076+02:00",
      "endsAt": "0001-01-01T00:00:00Z",
      "generatorURL": "https://play.grafana.org/alerting/d1rdpdv7k/edit",
      "fingerprint": "bc97ff14869b13e3",
      "silenceURL": "https://play.grafana.org/alerting/silence/new?alertmanager=grafana&matchers=alertname%3DT1%2Cteam%3Dblue%2Czone%3Deu-1",
      "dashboardURL": "",
      "panelURL": "",
      "values": {
        "B": 44.23943737541908,
        "C": 1
      }
    }
  ],
  "groupLabels": {},
  "commonLabels": {
    "team": "blue"
  },
  "commonAnnotations": {},
  "externalURL": "https://play.grafana.org/",
  "version": "1",
  "groupKey": "{}:{}",
  "message": "**Firing**\n\nLabels:\n - alertname = T2\n - team = blue\n - zone = us-1\nAnnotations:\n - description = This is the alert rule checking the second system\n - runbook_url = https://myrunbook.com\n - summary = This is my summary\nSource: https://play.grafana.org/alerting/1afz29v7z/edit\nSilence: https://play.grafana.org/alerting/silence/new?alertmanager=grafana&matchers=alertname%3DT2%2Cteam%3Dblue%2Czone%3Dus-1\n\nLabels:\n - alertname = T1\n - team = blue\n - zone = eu-1\nAnnotations:\nSource: https://play.grafana.org/alerting/d1rdpdv7k/edit\nSilence: https://play.grafana.org/alerting/silence/new?alertmanager=grafana&matchers=alertname%3DT1%2Cteam%3Dblue%2Czone%3Deu-1\n"
}
```

### Body

If the **Message format** option is `json` (the default), the payload contains the following fields.

| Key                 | Type                             | Description                                                                                                                                                                                                                                      |
| ------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `receiver`          | string                           | Name of the contact point                                                                                                                                                                                                                        |
| `status`            | string                           | Current status of the alert, `firing` or `resolved`                                                                                                                                                                                              |
| `orgId`             | number                           | ID of the organization related to the payload                                                                                                                                                                                                    |
| `alerts`            | array of [alerts](#alert-object) | Alerts that are triggering                                                                                                                                                                                                                       |
| `groupLabels`       | object                           | Labels that are used for grouping, map of string keys to string values                                                                                                                                                                           |
| `commonLabels`      | object                           | Labels that all alarms have in common, map of string keys to string values                                                                                                                                                                       |
| `commonAnnotations` | object                           | Annotations that all alarms have in common, map of string keys to string values                                                                                                                                                                  |
| `externalURL`       | string                           | External URL to the Grafana instance sending this webhook                                                                                                                                                                                        |
| `version`           | string                           | Version of the payload                                                                                                                                                                                                                           |
| `groupKey`          | string                           | Key that is used for grouping                                                                                                                                                                                                                    |
| `message`           | string                           | Custom message configured in **Message** (**Optional Settings**). <br/> Supports [notification templates](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/template-notifications/); the output is formatted as a string. |

> **Note**
>
> When using the `json` **Message format**, only the **message** field of the JSON payload is customizable, and its output is formatted as a string.
>
> To customize the full payload in text or JSON format, use the `text` format and define a [custom payload](#custom-payload).

### Alert object

The Alert object represents an alert included in the notification group, as provided by the [`alerts` field](#body).

| Key            | Type   | Description                                                                         |
| -------------- | ------ | ----------------------------------------------------------------------------------- |
| `status`       | string | Current status of the alert, `firing` or `resolved`.                                |
| `labels`       | object | Labels that are part of this alert, map of string keys to string values.            |
| `annotations`  | object | Annotations that are part of this alert, map of string keys to string values.       |
| `startsAt`     | string | Start time of the alert.                                                            |
| `endsAt`       | string | End time of the alert, default value when not resolved is `0001-01-01T00:00:00Z`.   |
| `values`       | object | Values that triggered the current status.                                           |
| `generatorURL` | string | URL of the alert rule in the Grafana UI.                                            |
| `fingerprint`  | string | The labels fingerprint, alarms with the same labels will have the same fingerprint. |
| `silenceURL`   | string | URL to silence the alert rule in the Grafana UI.                                    |
| `dashboardURL` | string | A link to the Grafana Dashboard if the alert has a Dashboard UID annotation.        |
| `panelURL`     | string | A link to the panel if the alert has a Panel ID annotation.                         |
| `imageURL`     | string | URL of a screenshot of a panel assigned to the rule that created this notification. |

## Custom payload

When you set the **Message format** option to `text`, you can customize the entire payload of the MQTT message.

In this mode, the **Message** option defines the entire payload. It supports [notification templates](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/template-notifications/) and can generate notification messages in plain text, JSON, or any custom format.

For examples of templates that produce plain text or JSON messages, refer to [notification template examples](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/template-notifications/examples/).
