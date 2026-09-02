> Release-pinned source for Grafana v13.2.1: [docs/sources/alerting/configure-notifications/create-silence.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/alerting/configure-notifications/create-silence.md)

# Configure silences

Silences stop notifications from being created for a specified time window but do not interrupt alert evaluation. Use them to temporarily prevent alert notifications, such as during incident response or a maintenance window.

> **Note**
>
> Silences are assigned to a [specific Alertmanager](https://grafana.com/docs/grafana/v13.2/alerting/set-up/configure-alertmanager/) and only suppress notifications for alerts managed by that Alertmanager.
>
> In Grafana Cloud, the standalone Alertmanager UI is deprecated and no longer available. Manage silences here in the Grafana Alerting UI instead. For details, refer to [Configure Alertmanagers](https://grafana.com/docs/grafana/v13.2/alerting/set-up/configure-alertmanager/).

## Mute timings and active time intervals vs silences

[Mute timings and active time intervals](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/mute-timings/) and [silences](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/create-silence/) are distinct methods to suppress notifications. They do not prevent alert rules from being evaluated or stop alert instances from appearing in the user interface; they only prevent notifications from being created.

The following table highlights the key differences between mute timings and silences.

|            | Mute timing                                                 | Silence                                                          |
| ---------- | ----------------------------------------------------------- | ---------------------------------------------------------------- |
| **Setup**  | Created and then added to notification policies             | Matches alerts using labels to determine whether to silence them |
| **Period** | Uses time interval definitions that can repeat periodically | Has a fixed start and end time                                   |

\[//]: <> (

The function of [Mute timing and active timing](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/mute-timings/) differs from [silences](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/create-silence/), as they are two are distinct methods to suppress notifications. They do not prevent alert rules from being evaluated or stop alert instances from appearing in the user interface; they only prevent notifications from being created.

The following table highlights the key differences of mute timing and active timing compared with silences.

|            | Mute timing and active timing                               | Silence                                                          |
| ---------- | ----------------------------------------------------------- | ---------------------------------------------------------------- |
| **Setup**  | Created and then added to notification policies             | Matches alerts using labels to determine whether to silence them |
| **Period** | Uses time interval definitions that can repeat periodically | Has a fixed start and end time                                   |

**When to use mute timings**

Use mute timing for predictable, recurring time periods when you don't want to receive notifications:

- Regular maintenance windows (for example, every Sunday from 2:00 AM to 4:00 AM)
- Non-business hours (for example, nights and weekends)
- Scheduled deployments or known change windows
- Regular testing periods

**When to use silences**

Use silences for one-time or as-needed suppression of notifications:

- Active incident response (suppress notifications while investigating)
- Immediate suppression of a specific alert or group of alerts
- One-time maintenance or deployment events
- Temporarily suppress alerts for specific services or components

)

## Add silences

To add a silence, complete the following steps.

1. In the left-side menu, click **Alerts & IRM** and then **Alerting**.
2. Click **Silences**.
3. From the **Alertmanager** dropdown, select an external Alertmanager to create and manage silences for the external data source. Otherwise, keep the default option of Grafana.
4. Click **Create silence** to open the Create silence page.
5. In **Silence start and end**, select the start and end date to indicate when the silence should go into effect and expire.
6. Optionally, in **Duration**, specify how long the silence is enforced. This automatically updates the end time in the **Silence start and end** field.
7. In the **Label** and **Value** fields, enter one or more *Matching Labels* to determine which alerts the silence applies to.

   **How label matching works**

   Use [labels](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rules/annotation-label/) and label matchers to link alert rules to [notification policies](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/notifications/notification-policies/) and [silences](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/create-silence/). This allows for a flexible way to manage your alert instances, specify which policy should handle them, and which alerts to silence.

   A label matchers consists of 3 distinct parts, the **label**, the **value** and the **operator**.

   - The **Label** field is the name of the label to match. It must exactly match the label name.

   - The **Value** field matches against the corresponding value for the specified **Label** name. How it matches depends on the **Operator** value.

   - The **Operator** field is the operator to match against the label value. The available operators are:

     | Operator | Description                                        |
     | -------- | -------------------------------------------------- |
     | `=`      | Select labels that are exactly equal to the value. |
     | `!=`     | Select labels that are not equal to the value.     |
     | `=~`     | Select labels that regex-match the value.          |
     | `!~`     | Select labels that do not regex-match the value.   |

   > **Note**
   >
   > If you are using multiple label matchers, they are combined using the AND logical operator. This means that all matchers must match in order to link a rule to a policy.

   **Label matching example**

   If you define the following set of labels for your alert:

   `{ foo=bar, baz=qux, id=12 }`

   then:

   - A label matcher defined as `foo=bar` matches this alert rule.
   - A label matcher defined as `foo!=bar` does *not* match this alert rule.
   - A label matcher defined as `id=~[0-9]+` matches this alert rule.
   - A label matcher defined as `baz!~[0-9]+` matches this alert rule.
   - Two label matchers defined as `foo=bar` and `id=~[0-9]+` match this alert rule.

   **Exclude labels**

   You can also write label matchers to exclude labels.

   Here is an example that shows how to exclude the label `Team`. You can choose between any of the values below to exclude labels.

   | Label  | Operator | Value |
   | ------ | -------- | ----- |
   | `team` | `=`      | `""`  |
   | `team` | `!~`     | `.+`  |
   | `team` | `=~`     | `^$`  |

\[//]: <> (

**How label matching works**

Use labels and label matchers to link alert rules to notification policies and silences. This allows for a flexible way to manage your alert instances, specify which policy should handle them, and which alerts to silence.

A label matchers consists of 3 distinct parts, the **label**, the **value** and the **operator**.

- The **Label** field is the name of the label to match. It must exactly match the label name.

- The **Value** field matches against the corresponding value for the specified **Label** name. How it matches depends on the **Operator** value.

- The **Operator** field is the operator to match against the label value. The available operators are:

  | Operator | Description                                        |
  | -------- | -------------------------------------------------- |
  | `=`      | Select labels that are exactly equal to the value. |
  | `!=`     | Select labels that are not equal to the value.     |
  | `=~`     | Select labels that regex-match the value.          |
  | `!~`     | Select labels that do not regex-match the value.   |

> **Note**
>
> If you are using multiple label matchers, they are combined using the AND logical operator. This means that all matchers must match in order to link a rule to a policy.

**Label matching example**

If you define the following set of labels for your alert:

`{ foo=bar, baz=qux, id=12 }`

then:

- A label matcher defined as `foo=bar` matches this alert rule.
- A label matcher defined as `foo!=bar` does *not* match this alert rule.
- A label matcher defined as `id=~[0-9]+` matches this alert rule.
- A label matcher defined as `baz!~[0-9]+` matches this alert rule.
- Two label matchers defined as `foo=bar` and `id=~[0-9]+` match this alert rule.

**Exclude labels**

You can also write label matchers to exclude labels.

Here is an example that shows how to exclude the label `Team`. You can choose between any of the values below to exclude labels.

| Label  | Operator | Value |
| ------ | -------- | ----- |
| `team` | `=`      | `""`  |
| `team` | `!~`     | `.+`  |
| `team` | `=~`     | `^$`  |

)

Any matching alerts (in the firing state only) display under **Affected alert instances**.

1. In **Comment**, add details about the silence.
2. Click **Submit**.

## Edit silences

To edit a silence, complete the following steps.

1. In the left-side menu, click **Alerts & IRM** and then **Alerting**.
2. Click **Silences** to view the list of existing silences.
3. Find the silence you want to edit, then click **Edit** (pen icon).
4. Make the desired changes, then click **Submit** to save your changes.

## Remove silences

To remove a silence, complete the following steps.

1. In the left-side menu, click **Alerts & IRM** and then **Alerting**.
2. Click **Silences** to view the list of existing silences.
3. Select the silence you want to end, then click **Unsilence**.

> **Note**
>
> Clicking **Unsilence** ends the silence immediately, which is the only way to end a silence before its configured end time. Silences cannot be permanently deleted manually.

## Silence duration and retention

**Duration limits**

There is no maximum duration for a silence. You can create a silence for any length of time. However, administrators can configure the following limits:

- `alertmanager_max_silences_count`: Maximum number of active and pending silences per tenant (default: 0, no limit), expired silences are also counted.
- `alertmanager_max_silence_size_bytes`: Maximum size of a silence in bytes (default: 0, no limit).

**Expired silence retention**

Expired silences are automatically deleted after 5 days. This retention period is not configurable. The cleanup process runs automatically every 15 minutes to remove expired silences that are older than the retention period.

## Rule-specific silences

Rule-specific silences are silences that apply only to a specific alert rule. They're created when you silence an alert rule directly using the **Silence notifications** action in the UI.

As opposed to general silences, rule-specific silence access is tied directly to the alert rule they act on. They can be created manually by including the specific label matcher: `__alert_rule_uid__=<alert rule UID>`.

## URL link to a silence form

Default notification messages often include a link to silence alerts.

In custom notification templates, you can use [`.Alert.SilenceURL`](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/template-notifications/reference/#alert) to redirect users to the UI where they can silence the given alert.

If [`.Alert.SilenceURL`](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/template-notifications/reference/#alert) doesn’t fit your specific use case, you can also create a custom silence link for your custom templates.

**Create a custom silence link**

When linking to a silence form, provide the default matching labels and comment via `matcher` and `comment` query parameters. The `matcher` parameter should be in the following format `[label][operator][value]` where the `operator` parameter can be one of the following: `=` (equals, not regular expression), `!=` (not equals, not regular expression), `=~` (equals, regular expression), `!~` (not equals, regular expression).
The URL can contain many query parameters with the key `matcher`.
For example, to link to silence form with matching labels `severity=critical` & `cluster!~europe-.*` and comment `Silence critical EU alerts`, create a URL `https://mygrafana/alerting/silence/new?matcher=severity%3Dcritical&matcher=cluster!~europe-*&comment=Silence%20critical%20EU%20alert`.

To link to a new silence page for an external Alertmanager, add a `alertmanager` query parameter with the Alertmanager data source name.

## Inhibition rules

Inhibition rules suppress notifications for target alerts when a related source alert is already firing. For more information, refer to [Configure inhibition rules](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/inhibition-rules/).
