> Release-pinned source for Grafana v13.2.1: [docs/sources/alerting/configure-notifications/mute-timings.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/alerting/configure-notifications/mute-timings.md)

# Configure mute timings and active time intervals

Mute timings and active time intervals let you determine how your alert notifications are handled during designated periods of time. After you create a time interval, you can apply it as either a mute timing or active time interval for your notification policies.

A mute timing is a recurring interval that stops notifications for one or multiple notification policies during a specified period. It suppresses notifications but does not interrupt alert evaluation.

Use mute timings to temporarily pause notifications for a specific recurring period, such as a regular maintenance window or weekends.

Active time intervals provide the opposite functionality, where alerts handled by a notification policy are suppressed unless the notification happens at a time that matches the time interval. Use active time intervals for periods where you want to reduce alert noise. Mute timings take precedence over active time intervals when they overlap.

> **Note**
>
> Mute timings and active time intervals are assigned to a [specific Alertmanager](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/#alertmanager-architecture) and only suppress notifications for alerts managed by that Alertmanager.

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

## Add time intervals

1. In the left-side menu, click **Alerts & IRM**, and then **Alerting**.
2. Click **Notification configuration**, then select the **Time intervals** tab.
3. From the **Alertmanager** dropdown, select an external Alertmanager. By default, the **Grafana Alertmanager** is selected.
4. Click **+ New time interval**.
5. Fill out the form to create a [time interval](#time-intervals) to match against for your mute timing or active time interval.
6. Save your changes.

## Assign a time interval to a notification policy

1. In the left-side menu, click **Alerts & IRM**, and then **Alerting**.
2. Click **Notification configuration**, then select the **Notification policies** tab.
3. Find the notification policy you would like to add the time intervals to and click **...** -> **Edit**.
4. From either the **Mute timings** or **Active time intervals** dropdowns, choose the time intervals you would like to add to the policy.
5. Save your changes.

## Time intervals

A time interval is a specific duration during which alerts are suppressed. The duration typically consists of a specific time range and the days of the week, month, or year.

A mute timing or active time interval can contain multiple time intervals.

Supported time interval options are:

- Time range: The time inclusive of the start and exclusive of the end time (in UTC if no location has been selected, otherwise local time).
- Location: Depending on the location you select, the time range is displayed in local time.
- Days of the week: The day or range of days of the week. Example: `monday:thursday`.
- Days of the month: The date 1-31 of a month. Negative values can also be used to represent days that begin at the end of the month. For example: `-1` for the last day of the month.
- Months: The months of the year in either numerical or the full calendar month. For example: `1, may:august`.
- Years: The year or years for the interval. For example: `2021:2024`.

All fields are lists; to match the field, at least one list element must be satisfied. Fields also support ranges using `:` (e.g., `monday:thursday`).

If a field is left blank, any moment of time matches the field. For an instant of time to match a complete time interval, all fields must match.

If you want to specify an exact duration, specify all the options.

**Example**

If you wanted to create a time interval for the first Monday of the month, for March, June, September, and December, between the hours of 12:00 and 24:00 UTC your time interval specification would be:

- Time range:
  - Start time: `12:00`
  - End time: `24:00`
- Days of the week: `monday`
- Months: `3, 6, 9, 12`
- Days of the month: `1:7`
