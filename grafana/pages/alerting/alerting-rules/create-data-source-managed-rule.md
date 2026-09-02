> Release-pinned source for Grafana v13.2.1: [docs/sources/alerting/alerting-rules/create-data-source-managed-rule.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/alerting/alerting-rules/create-data-source-managed-rule.md)

> **Caution**
>
> Pre-provisioned Loki and Prometheus data source-managed alerts have been deprecated in Grafana Cloud and can not be created in new stacks.
> New Grafana Cloud stacks will use Grafana-managed alerting (GMA) by default. Datasource-managed alerting (DMA) is not provisioned in new stacks. Existing stacks are not affected.
>
> This applies to the default Loki and Prometheus Grafana Cloud data sources managed by Grafana Labs and Cloud Alertmanager, which will not be available nor will Grafana provision the data source for it. If you add your own Mimir, Loki, or Alertmanager data sources, you can continue to use data source-managed alerts.
>
> Cloud users can import DMA rules into GMA rules with the import tool. See the [import data source-managed alerts to Grafana-managed alerts documentation](https://grafana.com/docs/grafana/latest/alerting/alerting-rules/alerting-migration/) for information on how to do this.

# Configure data source-managed alert rules

Data source-managed alert rules are alert rules that are stored in the data source, such as in Prometheus or Loki, rather than in Grafana.

In Grafana Alerting, you can:

1. Create and edit data source-managed rules for Grafana Mimir and Grafana Loki data sources.
2. View rules from Prometheus data sources when [Manage alerts via Alerting UI](https://grafana.com/docs/grafana/v13.2/datasources/prometheus/configure/) is enabled. However, you cannot create or edit these rules in Grafana.
3. [Import data source-managed rules](https://grafana.com/docs/grafana/v13.2/alerting/alerting-rules/alerting-migration/) from Loki, Mimir, and Prometheus into Grafana-managed rules.

> **Note**
>
> Data source-managed rules are supported for horizontal scalability, but they can introduce more operational complexity than Grafana-managed alert rules.
>
> We recommend using [Grafana-managed alert rules](https://grafana.com/docs/grafana/v13.2/alerting/alerting-rules/create-grafana-managed-rule/) whenever possible, as they provide a richer feature set and better integration with the full Grafana Alerting workflow.

## Comparison with Grafana-managed rules

The table below compares Grafana-managed and data source-managed alert rules.

| <div style="width:200px">Feature</div>                                                                                                                                                                                                                                                                              | <div style="width:200px">Grafana-managed alert rule</div>                                                                         | <div style="width:200px">Data source-managed alert rule                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Supported data sources                                                                                                                                                                                                                                                                                              | All backend data sources enabling the [`alerting` option](https://grafana.com/docs/grafana/v13.2/alerting/set-up/configure-rbac/) | Only supports creating rules for Mimir and Loki data sources                      |
| Mix and match data sources                                                                                                                                                                                                                                                                                          | Yes                                                                                                                               | No                                                                                |
| Add [expressions](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rules/queries-conditions/#advanced-options-expressions) to transform<wbr /> your data and set [alert conditions](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rules/queries-conditions/#alert-condition) | Yes                                                                                                                               | No                                                                                |
| [No data and error states](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rule-evaluation/nodata-and-error-states/)                                                                                                                                                                             | Yes                                                                                                                               | No                                                                                |
| [Stale alert instances](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rule-evaluation/stale-alert-instances/)                                                                                                                                                                                  | Yes                                                                                                                               | No                                                                                |
| [Images in alert notifications](https://grafana.com/docs/grafana/v13.2/alerting/configure-notifications/template-notifications/images-in-notifications/)                                                                                                                                                            | Yes                                                                                                                               | No                                                                                |
| [Role-based access control](https://grafana.com/docs/grafana/v13.2/alerting/set-up/configure-rbac/)                                                                                                                                                                                                                 | Yes                                                                                                                               | No                                                                                |
| [Alert state history](https://grafana.com/docs/grafana/v13.2/alerting/monitor-status/view-alert-state-history/)                                                                                                                                                                                                     | Yes                                                                                                                               | No                                                                                |
| [Alert version history](https://grafana.com/docs/grafana/v13.2/alerting/monitor-status/view-alert-rules/#view-compare-and-restore-alert-rules-versions)                                                                                                                                                             | Yes                                                                                                                               | No                                                                                |
| [Terraform provisioning](https://grafana.com/docs/grafana/v13.2/alerting/set-up/provision-alerting-resources/terraform-provisioning/)                                                                                                                                                                               | Yes                                                                                                                               | No                                                                                |
| [Recording rules](https://grafana.com/docs/grafana/v13.2/alerting/alerting-rules/create-recording-rules/)                                                                                                                                                                                                           | Yes                                                                                                                               | Yes                                                                               |
| Organization                                                                                                                                                                                                                                                                                                        | Organize and manage access with folders                                                                                           | Use namespaces                                                                    |
| Alert rule evaluation                                                                                                                                                                                                                                                                                               | Alert evaluation is done in Grafana                                                                                               | Alert rule evaluation is done in the data source and allow for horizontal scaling |
| Scaling                                                                                                                                                                                                                                                                                                             | Alert rules are stored in the Grafana database.                                                                                   | Alert rules are stored within the data source and allow for horizontal scaling    |

The following diagram shows the architecture of a Mimir setup that uses data source-managed alert rules.

![Data source-managed alerting architecture based on Grafana Mimir](https://grafana.com/media/docs/alerting/mimir-managed-alerting-architecture-v2.png)

## Create data source-managed alert rules

To create or edit data source-managed alert rules, follow these instructions.

### Before you begin

Verify that you have write permission to the Mimir or Loki data source. Otherwise, you cannot create or update data source-managed alert rules.

#### Enable the Ruler API

For more information, refer to the [Mimir Ruler API](https://grafana.com/docs/mimir/latest/references/http-api/#ruler) or [Loki Ruler API](https://grafana.com/docs/loki/latest/api/#ruler).

- **Mimir** - use the `/prometheus` prefix. The Prometheus data source supports both Grafana Mimir and Prometheus, and Grafana expects that both the [Query API](https://grafana.com/docs/mimir/latest/operators-guide/reference-http-api/#querier--query-frontend) and [Ruler API](https://grafana.com/docs/mimir/latest/operators-guide/reference-http-api/#ruler) are under the same URL. You cannot provide a separate URL for the Ruler API.

- **Loki** - The `local` rule storage type, default for the Loki data source, supports only viewing of rules. To edit rules, configure one of the other rule storage types.

#### Permissions

Alert rules for Mimir or Loki instances can be edited or deleted by users with **Editor** or **Admin** roles.

If you do not want to manage alert rules for a particular data source, go to its settings and clear the **Manage alerts via Alerting UI** checkbox.

### Set alert rule name

1. Click **Alerts & IRM** -> **Alert rules** -> **+ New alert rule**.
2. Enter a name to identify your alert rule.

   This name is displayed in the alert rule list. It is also the `alertname` label for every alert instance that is created from this rule.

### Define query and condition

Define a query to get the data you want to measure and a condition that needs to be met before an alert rule fires.

> **Note**
>
> By default, new alert rules are Grafana-managed. To switch to **Data source-managed**, follow these instructions.

1. Select a Prometheus-based data source from the drop-down list.

   You can also click **Open advanced data source picker** to find more options.

2. Enter a PromQL or LogQL query, including the alert condition.

3. In the **Rule type** option, select **Data source-managed**.

4. Click **Preview alerts**.

### Set alert evaluation behavior

Use [alert rule evaluation](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rule-evaluation/) to determine how frequently an alert rule should be evaluated and how quickly it should change its state.

1. Select a namespace or click **+ New namespace**.

2. Select an evaluation group or click **+ New evaluation group**.

   If you are creating a new evaluation group, specify the interval for the group.

   All rules within the same group are evaluated sequentially over the same time interval. You can reorder them from the **Alert rules** page.

3. Enter a pending period.

   The [pending period](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rule-evaluation/#pending-period) is the period in which an alert rule can be in breach of the condition until it fires.

   Once a condition is met, the alert goes into the **Pending** state. If the condition remains active for the duration specified, the alert transitions to the **Firing** state, else it reverts to the **Normal** state.

### Configure labels and notifications

Add [labels](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rules/annotation-label/#labels) to your alert rules to set which [notification policy](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/notifications/notification-policies/) should handle your firing alert instances.

All alert rules and instances, irrespective of their labels, match the default notification policy. If there are no nested policies, or no nested policies match the labels in the alert rule or alert instance, then the default notification policy is the matching policy.

1. Add labels if you want to change the way your notifications are routed.

   Add custom labels by selecting existing key-value pairs from the drop down, or add new labels by entering the new key or value.

### Configure notification message

Use [annotations](https://grafana.com/docs/grafana/v13.2/alerting/fundamentals/alert-rules/annotation-label/#annotations) to add information to alert messages that can help respond to the alert.

Annotations are included by default in notification messages, and can use text or [templates](https://grafana.com/docs/grafana/v13.2/alerting/alerting-rules/templates/) to display dynamic data from queries.

Grafana provides several optional annotations.

1. Optional: Add a summary.

   Short summary of what happened and why.

2. Optional: Add a description.

   Description of what the alert rule does.

3. Optional: Add a Runbook URL.

   Webpage where you keep your runbook for the alert

4. Optional: Add a custom annotation.

   Add any additional information that could help address the alert.

5. Optional: **Link dashboard and panel**.

   [Link the alert rule to a panel](https://grafana.com/docs/grafana/v13.2/alerting/alerting-rules/link-alert-rules-to-panels/) to facilitate alert investigation.

6. Click **Save rule**.

\[//]: <> (

Use annotations to add information to alert messages that can help respond to the alert.

Annotations are included by default in notification messages, and can use text or templates to display dynamic data from queries.

Grafana provides several optional annotations.

1. Optional: Add a summary.

   Short summary of what happened and why.

2. Optional: Add a description.

   Description of what the alert rule does.

3. Optional: Add a Runbook URL.

   Webpage where you keep your runbook for the alert

4. Optional: Add a custom annotation.

   Add any additional information that could help address the alert.

5. Optional: **Link dashboard and panel**.

   Link the alert rule to a panel to facilitate alert investigation.

6. Click **Save rule**.

)
