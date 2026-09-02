> Release-pinned source for Grafana v13.2.1: [docs/sources/alerting/fundamentals/alert-rule-evaluation/stale-alert-instances.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/alerting/fundamentals/alert-rule-evaluation/stale-alert-instances.md)

# Stale alert instances

An alert instance is considered **stale** if the alert rule query returns data but its dimension (or series) has disappeared for a number of consecutive evaluation intervals (2 by default).

This is different from the [**No Data** state](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rule-evaluation/nodata-and-error-states/#no-data-state), which occurs when the alert rule query runs successfully but returns no dimensions (or series) at all.

A stale alert instance transitions to the **Normal (MissingSeries)** state as **Resolved**, and is then evicted:

| Eval. Interval   | 1  | 2               | 3                                        | 4  |
| :--------------- | :- | :-------------- | :--------------------------------------- | :- |
| Alert instance A | ✔  | ✔               | ✔                                        | ✔  |
| Alert instance B | ✔  | `MissingSeries` | ️`Normal(MissingSeries)` 📩<sup>\*</sup> |    |

> **Note**
>
> Stale alert instances are supported only for Grafana-managed alert rules.

## How Grafana handles stale alert instances

The process for handling stale alert instances is as follows:

1. The alert rule runs and returns data for some label sets.

2. An alert instance that previously existed is now missing.

3. Grafana keeps the previous state of the alert instance for the number of evaluation intervals specified in [Missing series evaluations to resolve](#configure-missing-series-evaluations-to-resolve).

4. If it remains missing after the specified number of evaluation intervals (2 by default), it transitions to the **Normal** state and sets **MissingSeries** in the [`grafana_state_reason` annotation](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rule-evaluation/nodata-and-error-states/#grafana_state_reason-for-troubleshooting).

   Stale alert instances in the **Alerting**, **No Data**, or **Error** states transition to the **Normal** state as **Resolved**, and are routed for notifications like other resolved alerts.

5. The alert instance is removed from the UI.

> **Tip**
>
> For common examples and practical guidance on handling **No Data** and **stale** alert scenarios, see [Handling missing data](https://grafana.com/docs/grafana/v13.2/alerting/best-practices/missing-data/).

## Configure Missing series evaluations to resolve

In [Configure no data and error handling > Missing series evaluations to resolve](https://grafana.com/docs/grafana/v13.2/alerting/alerting-rules/create-grafana-managed-rule/#configure-no-data-and-error-handling), you can set how many consecutive evaluation intervals must pass without data for a given dimension before the alert instance is marked as stale and resolved.

If you don't specify a value, Grafana uses the **default of 2 evaluation intervals**.
