> Release-pinned source for Grafana v13.2.1: [docs/sources/alerting/configure-notifications/manage-contact-points/integrations/webhook-notifier.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/alerting/configure-notifications/manage-contact-points/integrations/webhook-notifier.md)

# Configure webhook notifications

Use the webhook integration in contact points to send alert notifications to your webhook.

The webhook integration is a flexible way to integrate alerts into your system. When a notification is triggered, it sends a JSON request with alert details and additional data to the webhook endpoint.

## Configure webhook for a contact point

To create a contact point with webhook integration, complete the following steps.

1. Navigate to **Alerts & IRM** -> **Alerting** -> **Notification configuration**, then select the **Contact points** tab.
2. Click **+ Add contact point**.
3. Enter a name for the contact point.
4. From the **Integration** list, select **Webhook**.
5. In the **URL** field, copy in your Webhook URL.
6. (Optional) Configure [additional settings](#webhook-settings).
7. Click **Save contact point**.

For more details on contact points, including how to test them and enable notifications, refer to [Configure contact points](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/manage-contact-points/).

## Webhook settings

| Option | Description                                                                                                                                                                    |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| URL    | The Webhook URL. This field is [protected](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/manage-contact-points/) from modification in Grafana Cloud. |

> **Caution**
>
> The URL is not a secured field. It's stored in plain text and isn't masked when the contact point is read back. Include secrets such as tokens or passwords in the URL at your own risk.
>
> To authenticate to your webhook endpoint, use the authorization fields in the [optional settings](#optional-settings) instead, such as Basic Authentication or the Authorization request header. These fields are stored securely and are masked on read.

#### Optional settings

| Option                            | Description                                                                                                                                                                               |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HTTP Method                       | Specifies the HTTP method to use: `POST` or `PUT`.                                                                                                                                        |
| Basic Authentication Username     | Username for HTTP Basic Authentication.                                                                                                                                                   |
| Basic Authentication Password     | Password for HTTP Basic Authentication.                                                                                                                                                   |
| Authentication Header Scheme      | Scheme for the `Authorization` Request Header. Default is `Bearer`.                                                                                                                       |
| Authentication Header Credentials | Credentials for the `Authorization` Request header.                                                                                                                                       |
| Extra Headers                     | Additional HTTP headers to include in the request. You can also override the default `Content-Type: application/json` header to specify a different content type for the request payload. |
| Max Alerts                        | Maximum number of alerts to include in a notification. Any alerts exceeding this limit are ignored. `0` means no limit.                                                                   |
| TLS                               | TLS configuration options, including CA certificate, client certificate, and client key.                                                                                                  |
| HMAC Signature                    | HMAC signature configuration options.                                                                                                                                                     |

> **Note**
>
> You can configure either HTTP Basic Authentication or the Authorization request header, but not both.

#### HMAC signature

You can secure your webhook notifications using HMAC signatures to verify the authenticity and integrity of the requests. When enabled, Grafana signs the webhook payload with a shared secret using HMAC-SHA256.

| Option           | Description                                                                                                                                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Secret           | The shared secret key used to generate the HMAC signature.                                                                                                                                                                     |
| Header           | The HTTP header where the signature will be set. Default is `X-Grafana-Alerting-Signature`.                                                                                                                                    |
| Timestamp Header | Optional header to include a timestamp in the signature calculation. When specified, Grafana will set a Unix timestamp in this header and include it in the HMAC calculation. This provides protection against replay attacks. |

When HMAC signing is configured, Grafana generates a signature using HMAC-SHA256 with your secret key. If a timestamp header is specified, a Unix timestamp is included in the signature calculation. The signature is calculated as:

```
HMAC(timestamp + ":" + body)
```

The timestamp is sent in the specified header. If no timestamp header is specified, the signature is calculated just from the request body. The signature is sent as a hex-encoded string in the specified signature header.

##### Validate a request

To validate incoming webhook requests from Grafana, follow these steps:

1. Extract the signature from the header (default is `X-Grafana-Alerting-Signature`).
2. If you configured a timestamp header, extract the timestamp value and verify it's recent to prevent replay attacks.
3. Calculate the expected signature:
   - Create an HMAC-SHA256 hash using your shared secret
   - If using timestamps, include the timestamp followed by a colon (`:`) before the request body
   - Hash the raw request body
   - Convert the result to a hexadecimal string
4. Compare the calculated signature with the one in the request header.

#### Optional settings using templates

Use the following settings to include custom data within the [JSON payload](#body). Both options support using [notification templates](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/template-notifications/).

| Option                            | Description                                                                                                                                                                                                          |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title                             | Sends the value as a string in the `title` field of the [JSON payload](#body). Supports [notification templates](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/template-notifications/).   |
| Message                           | Sends the value as a string in the `message` field of the [JSON payload](#body). Supports [notification templates](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/template-notifications/). |
| [Custom Payload](#custom-payload) | Optionally override the default payload format with a custom template.                                                                                                                                               |

#### Optional notification settings

| Option                   | Description                                                         |
| ------------------------ | ------------------------------------------------------------------- |
| Disable resolved message | Enable this option to prevent notifications when an alert resolves. |

## Default JSON payload

The following example shows the payload of a webhook notification containing information about two firing alerts:

```json
{
  "receiver": "My Super Webhook",
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
  "truncatedAlerts": 0,
  "title": "[FIRING:2]  (blue)",
  "state": "alerting",
  "message": "**Firing**\n\nLabels:\n - alertname = T2\n - team = blue\n - zone = us-1\nAnnotations:\n - description = This is the alert rule checking the second system\n - runbook_url = https://myrunbook.com\n - summary = This is my summary\nSource: https://play.grafana.org/alerting/1afz29v7z/edit\nSilence: https://play.grafana.org/alerting/silence/new?alertmanager=grafana&matchers=alertname%3DT2%2Cteam%3Dblue%2Czone%3Dus-1\n\nLabels:\n - alertname = T1\n - team = blue\n - zone = eu-1\nAnnotations:\nSource: https://play.grafana.org/alerting/d1rdpdv7k/edit\nSilence: https://play.grafana.org/alerting/silence/new?alertmanager=grafana&matchers=alertname%3DT1%2Cteam%3Dblue%2Czone%3Deu-1\n"
}
```

### Body

The JSON payload of webhook notifications includes the following key-value pairs:

| Key                 | Type                      | Description                                                                      |
| ------------------- | ------------------------- | -------------------------------------------------------------------------------- |
| `receiver`          | string                    | Name of the contact point.                                                       |
| `status`            | string                    | Current status of the alert, `firing` or `resolved`.                             |
| `orgId`             | number                    | ID of the organization related to the payload.                                   |
| `alerts`            | array of [alerts](#alert) | Alerts that are triggering.                                                      |
| `groupLabels`       | object                    | Labels that are used for grouping, map of string keys to string values.          |
| `commonLabels`      | object                    | Labels that all alarms have in common, map of string keys to string values.      |
| `commonAnnotations` | object                    | Annotations that all alarms have in common, map of string keys to string values. |
| `externalURL`       | string                    | External URL to the Grafana instance sending this webhook.                       |
| `version`           | string                    | Version of the payload structure.                                                |
| `groupKey`          | string                    | Key that is used for grouping.                                                   |
| `truncatedAlerts`   | number                    | Number of alerts that were truncated.                                            |
| `state`             | string                    | State of the alert group (either `alerting` or `ok`).                            |

The following key-value pairs are also included in the JSON payload and can be configured in the [webhook settings using notification templates](#optional-settings-using-templates).

| Key       | Type   | Description                                                                                                          |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------- |
| `title`   | string | Custom title. Configurable in [webhook settings using notification templates](#optional-settings-using-templates).   |
| `message` | string | Custom message. Configurable in [webhook settings using notification templates](#optional-settings-using-templates). |

### Alert

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

## Custom Payload

The `Custom Payload` option allows you to completely customize the webhook payload using [templates](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/template-notifications/). This gives you full control over the structure and content of the webhook request.

For detailed information about how to create and manage notification templates, refer to [notification templates](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/template-notifications/).

> **Note**
>
> - When using Custom Payload, the [`Title` and `Message` fields](#optional-notification-settings) are ignored as the entire payload structure is determined by your template.
> - Custom Payload is not yet [generally available](https://grafana.com/docs/release-life-cycle/#general-availability) in Grafana Cloud.

| Option            | Description                                                                                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Payload Template  | [Notification template](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/template-notifications/) that defines the structure of the webhook payload. |
| Payload Variables | Key-value pairs that define additional variables available in the template under `.Vars.<variable_name>`.                                                                   |

Example of a custom payload template that includes variables:

```
{
  "alert_name": "{{ .CommonLabels.alertname }}",
  "status": "{{ .Status }}",
  "environment": "{{ .Vars.environment }}",
  "custom_field": "{{ .Vars.custom_field }}"
}
```

### JSON Template Functions

When creating custom payloads, several template functions are available to help generate valid JSON structures. These include functions for creating dictionaries (`coll.Dict`), arrays (`coll.Slice`, `coll.Append`), and converting between JSON strings and objects (`data.ToJSON`, `data.JSON`).

For detailed information about these and other template functions, refer to [notification template functions](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/template-notifications/reference/#namespaced-functions).

Example using JSON helper functions:

```go
{- /* Generates a pretty-printed JSON payload with alert group info and individual alerts metadata. */ -}}
{{ define "webhook.custom.payload" -}}
  {{ coll.Dict
  "receiver" .Receiver
  "status" .Status
  "alerts" (tmpl.Exec "webhook.custom.simple_alerts" .Alerts | data.JSON)
  "groupLabels" .GroupLabels
  "commonLabels" .CommonLabels
  "commonAnnotations" .CommonAnnotations
  "externalURL" .ExternalURL
  "version" "1"
  "orgId"  (index .Alerts 0).OrgID
  "truncatedAlerts"  .TruncatedAlerts
  "groupKey" .GroupKey
  "state"  (tmpl.Inline "{{ if eq .Status \"resolved\" }}ok{{ else }}alerting{{ end }}" . )
  "allVariables"  .Vars
  "title" (tmpl.Exec "default.title" . )
  "message" (tmpl.Exec "default.message" . )
  | data.ToJSONPretty " "}}
{{- end }}

{{- /* Embed json templates in other json templates. */ -}}
{{ define "webhook.custom.simple_alerts" -}}
  {{- $alerts := coll.Slice -}}
  {{- range . -}}
    {{ $alerts = coll.Append (coll.Dict
    "status" .Status
    "labels" .Labels
    "startsAt" .StartsAt
    "endsAt" .EndsAt
    ) $alerts}}
  {{- end -}}
  {{- $alerts | data.ToJSON -}}
{{- end }}
```
