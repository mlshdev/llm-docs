> Release-pinned source for Grafana v13.2.1: [docs/sources/datasources/azure-monitor/annotations/index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/datasources/azure-monitor/annotations/index.md)

# Azure Monitor annotations

[Annotations](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/annotate-visualizations/) overlay rich event information on top of graphs. You can use Azure Monitor Log Analytics queries to create annotations that mark important events, deployments, alerts, or other significant occurrences on your dashboards.

## Before you begin

- Ensure you have configured the Azure Monitor data source.
- You need access to a Log Analytics workspace containing the data you want to use for annotations.
- Annotations use Log Analytics (KQL) queries only. Metrics, Traces, and Azure Resource Graph queries are not supported for annotations.

## Create an annotation query

To add an Azure Monitor annotation to a dashboard:

1. Navigate to the dashboard you want to update and click **Edit**.
2. Click the **Add new element** icon (blue plus sign).
3. Click **Annotation query**.
4. Enter a name for the annotation query.
5. If you don't want to use the annotation query right away, clear the **Enabled** checkbox.
6. Select a color for the annotation event markers.
7. Select an option in the **Show annotation controls in** drop-down list to control where on the dashboard the annotation is displayed.
8. Select an option in the **Show in** drop-down list to control the panels in which the annotation is displayed.
9. Click **Open query editor** to open the **Annotation Query** dialog box.
10. Select your **Azure Monitor** data source from the **Data source** drop-down list.
11. Choose the **Logs** service.
12. Select a **Resource** (Log Analytics workspace or Application Insights resource).
13. Write a KQL query that returns the annotation data.
14. Configure the annotation query and field mappings.
15. (Optional) Click **Test annotation query** to ensure that the query is working properly.
16. Click **Close** when you've completed the query setup.
17. Click **Save**.
18. (Optional) Enter a description of the changes you've made.
19. Click **Save**.
20. Click **Exit edit**.

## Query requirements

Your KQL query should return columns that Grafana can use to create annotations:

| Column             | Required    | Description                                                                                      |
| ------------------ | ----------- | ------------------------------------------------------------------------------------------------ |
| `TimeGenerated`    | Yes         | The timestamp for the annotation. Grafana uses this to position the annotation on the time axis. |
| `Text`             | Recommended | The annotation text displayed when you hover over or click the annotation.                       |
| Additional columns | Optional    | Any other columns returned become annotation tags.                                               |

> **Note**
>
> Always include a time filter in your query to limit results to the dashboard's time range. Use the `$__timeFilter()` macro.

## Annotation query examples

The following examples demonstrate common annotation use cases.

### Azure Activity Log events

Display Azure Activity Log events such as resource modifications, deployments, and administrative actions:

```kusto
AzureActivity
| where $__timeFilter(TimeGenerated)
| where Level == "Error" or Level == "Warning" or CategoryValue == "Administrative"
| project TimeGenerated, Text=OperationNameValue, Level, ResourceGroup, Caller
| order by TimeGenerated desc
| take 100
```

### Deployment events

Show deployment-related activity:

```kusto
AzureActivity
| where $__timeFilter(TimeGenerated)
| where OperationNameValue contains "deployments"
| project TimeGenerated, Text=strcat("Deployment: ", OperationNameValue), Status=ActivityStatusValue, ResourceGroup
| order by TimeGenerated desc
```

### Application Insights exceptions

Mark application exceptions as annotations:

```kusto
AppExceptions
| where $__timeFilter(TimeGenerated)
| project TimeGenerated, Text=strcat(ProblemId, ": ", OuterMessage), SeverityLevel, AppRoleName
| order by TimeGenerated desc
| take 50
```

### Custom events from Application Insights

Display custom events logged by your application:

```kusto
AppEvents
| where $__timeFilter(TimeGenerated)
| where Name == "DeploymentStarted" or Name == "DeploymentCompleted"
| project TimeGenerated, Text=Name, AppRoleName
| order by TimeGenerated desc
```

### Security alerts

Show security-related alerts:

```kusto
SecurityAlert
| where $__timeFilter(TimeGenerated)
| project TimeGenerated, Text=AlertName, Severity=AlertSeverity, Description
| order by TimeGenerated desc
| take 50
```

### Resource health events

Display resource health status changes:

```kusto
AzureActivity
| where $__timeFilter(TimeGenerated)
| where CategoryValue == "ResourceHealth"
| project TimeGenerated, Text=OperationNameValue, Status=ActivityStatusValue, ResourceId
| order by TimeGenerated desc
```

### VM start and stop events

Mark virtual machine state changes:

```kusto
AzureActivity
| where $__timeFilter(TimeGenerated)
| where OperationNameValue has_any ("start", "deallocate", "restart")
| where ResourceProviderValue == "MICROSOFT.COMPUTE"
| project TimeGenerated, Text=OperationNameValue, VM=Resource, Status=ActivityStatusValue
| order by TimeGenerated desc
```

### Autoscale events

Show autoscale operations:

```kusto
AzureActivity
| where $__timeFilter(TimeGenerated)
| where OperationNameValue contains "autoscale"
| project TimeGenerated, Text=strcat("Autoscale: ", OperationNameValue), Status=ActivityStatusValue, ResourceGroup
| order by TimeGenerated desc
```

## Customize annotation appearance

After creating an annotation query, you can customize its appearance:

| Setting       | Description                                                                                              |
| ------------- | -------------------------------------------------------------------------------------------------------- |
| **Color**     | Choose a color for the annotation markers. Use different colors to distinguish between annotation types. |
| **Show in**   | Select which panels display the annotations.                                                             |
| **Filter by** | Add filters to limit when annotations appear.                                                            |

## Best practices

Follow these recommendations when creating annotations:

1. **Limit results**: Always use `take` or `limit` to restrict the number of annotations. Too many annotations can clutter your dashboard and impact performance.

2. **Use time filters**: Include `$__timeFilter()` to ensure queries only return data within the dashboard's time range.

3. **Create meaningful text**: Use `strcat()` or `project` to create descriptive annotation text that provides context at a glance.

4. **Add relevant tags**: Include columns like `ResourceGroup`, `Severity`, or `Status` that become clickable tags for filtering.

5. **Use descriptive names**: Name your annotations clearly (for example, "Production Deployments", "Critical Alerts") so dashboard users understand what they represent.

## Troubleshoot annotations

If annotations aren't appearing as expected, try the following solutions.

### Annotations don't appear

- Verify the query returns data in the selected time range.
- Check that the query includes a `TimeGenerated` column.
- Test the query in the Azure Portal Log Analytics query editor.
- Ensure the annotation is enabled (toggle is on).

### Too many annotations

- Add more specific filters to your query.
- Use `take` to limit results.
- Narrow the time range.

### Annotations appear at wrong times

- Verify the `TimeGenerated` column contains the correct timestamp.
- Check your dashboard's timezone settings.
