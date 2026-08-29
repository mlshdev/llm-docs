> Release-pinned source for Grafana v13.2.0: [docs/sources/visualizations/dashboards/build-dashboards/create-dashboard/dashboard-controls.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/visualizations/dashboards/build-dashboards/create-dashboard/dashboard-controls.md)

# Dashboard controls

In the **Dashboard controls** section of the sidebar, you can add variables, annotation queries, dashboard links, and controls to filter and group data, without leaving the dashboard.

![Dashboard controls in the Dashboard options sidebar view](https://grafana.com/media/docs/grafana/dashboards/screenshot-dashboard-controls-v13.1.png)

## Add filters and group by controls

> **Note**
>
> The **Filter and Group by** feature renames the **Ad hoc filters** variable and extends it by adding grouping for Prometheus and Loki data sources.
> However, in the dashboard schema, it's still referred to as `"kind": "AdhocVariable"` under the `variables` schema property.

# Filter and group by controls

> **Note**
>
> The **Filter and Group by** feature renames the **Ad hoc filters** variable and extends it by adding grouping for Prometheus and Loki data sources.
> However, in the dashboard schema, it's still referred to as `"kind": "AdhocVariable"` under the `variables` schema property.

The **Filter and Group by** option is one of the most complex and flexible dashboard controls available.
Instead of creating a variable for each dimension by which you want to filter, it automatically queries your data source for available dimensions and lets users add or remove filters and group by dimensions on the dashboard dynamically.
This allows you to quickly apply filters dashboard-wide.

The group by function allows you to then group data by keys, letting you split it up.
This function is typically used with aggregation queries, such as `sum(your_metric_here)`, to split aggregated results by the selected dimensions.
Then, you can use filters within panels to filter data in or out, drilling down further into the data.

The filter and group by feature lets you add label/value filter pairs that are automatically added to all queries that use the specified data source.
Unlike variables, you don't use these filters in queries.
Instead, you use them to write filters for existing queries.

The following data sources support filters.
Data sources with an asterisk also support the group by function:

- Prometheus\*
- Loki\*
- InfluxDB
- Elasticsearch
- OpenSearch.
- Special Dashboard data source - Use this special data source to [apply filters to data from unsupported data sources](#filter-any-data-using-the-dashboard-data-source).

## Add filters and group by controls

To add filters and group by controls, follow these steps:

1. Navigate to the dashboard you want to update.

2. Click **Edit**.

3. Click the **Add new element** icon (blue plus sign).

4. Click **Filter and Group by**.

5. Enter a **Name** for the filter.

6. (Optional) In the **Label** field, enter the display name for the filter drop-down list.

   If you don't enter a display name, then the drop-down list label is the filter name.

7. (Optional) In the **Description** field, enter a description of the filter. The description appears as an info icon tooltip next to the filter name on the dashboard.

   Descriptions support links. You can use Markdown-style links (`[link text](https://example.com)`) or paste bare URLs (`https://example.com`). Only `http` and `https` URLs are rendered as clickable links—other protocols are displayed as plain text.

8. Choose a **Display** option:
   - **Above dashboard**: The filter drop-down list displays above the dashboard with the filter **Name** or **Label** value. This is the default.
   - **Above dashboard, label hidden**: The filter drop-down list displays above the dashboard, but without showing the name of the filter.
   - **Controls menu**: The filter is displayed in the dashboard controls menu instead of above the dashboard. The dashboard controls menu appears as a button in the dashboard toolbar.
   - **Hidden**: No filter drop-down list is displayed on the dashboard.

9. Under the **Filter options** section of the page, set the following options:

   | Option                    | Description                                                                                                                                                                                                                                                                                                                          |
   | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
   | Data source               | Select a target data source in the drop-down list. You can also click **Open advanced data source picker** to see more options, including adding a data source (Admins only). For more information about data sources, refer to [Add a data source](https://grafana.com/docs/grafana-cloud/connect-externally-hosted/data-sources/). |
   | Default filters           | Set a default key/value pair. Optional. In the dashboard filter control, the default value is indicated with an information icon.                                                                                                                                                                                                    |
   | Enable group by           | This option only appears if you selected a Prometheus or Loki data source. Toggle the switch on to enable data grouping.                                                                                                                                                                                                             |
   | Default group by          | Set a default key for the dashboard. Optional. In the dashboard filter control, the default value is indicated with an information icon.                                                                                                                                                                                             |
   | Use static key dimensions | To provide the filter dimensions as comma-separated values (CSV), toggle the switch on, and then enter the values in the space provided. Optional.                                                                                                                                                                                   |
   | Allow custom values       | Toggle the switch on to allow dashboard users to add custom values to the filter and group by lists. Optional.                                                                                                                                                                                                                       |

10. Click **Save**.

11. Enter an optional description of your dashboard changes, and then click **Save**.

12. Click **Exit edit**.

Now you can filter and group data on the dashboard.

You can remove and reset default filters and group by dimensions, and see your recent ones:

![Dashboard with the filters and group by selections](https://grafana.com/media/docs/grafana/dashboards/screenshot-reset-default-v13.0.png)

**Reset default filters and group by selections**

![Dashboard with the filters and group by selections](https://grafana.com/media/docs/grafana/screenshot-filters-group-recent-v13.0.png)

**Recent filters and group by dimensions**

To see all active filters and group by dimensions across the dashboard all at once, click the **Filters overview** icon (filter) in the toolbar to open an overview.
The overview lets you search for specific keys, and adjust them, without scrolling through the dashboard controls:

![Dashboard with the filters and group by dimensions](https://grafana.com/media/docs/grafana/screenshot-filters-overview-v12.0.png)

Add an operator and value for a key to add it as a filter or select the **Group by** checkbox to set a group by dimension.
You can use a key for both a filter and a group by.

## Cross-filtering {#dashboard-drilldown-with-filters}

In some visualizations, you can apply filters directly from the visualization.
Click on a series in the panel and then click **Filter on this value** or **Filter out this value**.
This filters by the labels found on that series:

![Panel with tooltip open showing options to filter on a value or filter it out](https://grafana.com/media/docs/grafana/dashboards/screenshot-panel-filters-v13.0.png)

To enable this functionality, you need to add an override for every field by which you want to filter.
In the override:

- Select a field name.
- Enable the **Filterable** switch.

![Field override making some fields filterable](https://grafana.com/media/docs/grafana/dashboards/screenshot-panel-filter-override-v13.2.png)

You can also do this programmatically by returning the data frame with the appropriate `filterable` property on the desired fields.

Cross-filtering is supported for the following visualizations:

| Visualization  | Requires Group by |
| -------------- | ----------------- |
| Bar chart      | no                |
| Histogram      | yes               |
| State timeline | yes               |
| Status history | yes               |
| Table          | no                |
| Time series    | yes               |

### Apply cross-filtering

To apply cross-filtering, follow these steps:

1. To display the filter icons, hover your cursor over the data point with the value for which you want to filter. In this example, the table cell value is `ConfigMap Updated`, which is in the `alertname` column:

![Table and bar chart with a filter icon displayed on a table cell](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-adhoc-filter-icon-v12.2.png)

In bar chart visualizations, hover and click the bar to display the filter button:

![The filter button in a bar chart tooltip](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-adhoc-filter-icon-bar-v12.2.png)

1. Click the add filter icon.

   The filter pair `alertname = ConfigMap Updated` is added, and all panels using the same data source that include that value are filtered by it:

![Table and bar chart, filtered](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-adhoc-filter-applied-v12.2.png)

If one of the panels in the dashboard using that data source doesn't include that filter value, the panel won't return any data. In this example, the filter pair `_name_ = ALERTS` has been added so the bar chart doesn't return any results:

![Table, filtered and bar chart returning no results](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-adhoc-filter-no-data-v12.2.png)

For some visualizations, if your query doesn't include some type of data grouping, you might need to group the data first.
For more information, refer to [Group from the panel](#group-from-the-panel).

In cases where the data source you're using doesn't support filtering, consider using the special Dashboard data source.
For more information, refer to [Filter any data using the Dashboard data source](#filter-any-data-using-the-dashboard-data-source).

### Group from the panel

When the **Group by** switch is toggled on, you can also set a group by dimension from a panel rather than from the dashboard-level control.
Hover the cursor over any panel using the data source of the filter to show the **Group by** selector:

![Group by control on a panel](https://grafana.com/media/docs/grafana/dashboards/screenshot-panel-groupby-v13.0.png)

The panel-level **Group by** control only includes keys available in the panel's query. This is in contrast with the dashboard-level control that includes all available keys for the dashboard.
Your selection is applied to all the panels in the dashboard with the same data source.

## Filter any data using the Dashboard data source

In cases where a data source doesn't support the use of filters, you can use the Dashboard data source to reference that data, and then filter it in a new panel.
This allows you to bypass the limitations of the data source in the source panel.

![The query section of a panel with the Dashboard data source configured](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-adhoc-filter-dashboard-ds-v12.2.png)

To use filters on data from an unsupported data source, follow these steps:

1. Navigate to the dashboard with the panel with the data you want to filter.

2. Click **Edit** in top-right corner of the dashboard.

3. Click the **Add new element** icon and click or drag a panel onto the dashboard.

4. Click **Configure visualization**.

5. In the **Queries** tab of the edit panel view, enter `Dashboard` in the **Data source** field and select **-- Dashboard --**.

6. In the query configuration section, make the following selections:

   - **Source panel** - Choose the panel with the source data.
   - **Data** - Select **All Data** to use the data of the panel, and not just the annotations. This is the default selection.
   - **Filters** - Toggle on the switch to make the data from the referenced panel filterable.

   > **Note**
   >
   > If you're referencing multiple panels in a dashboard with the Dashboard data source, you can only use one of those source panels at a time for filtering.

7. Configure any other needed options for the panel.

8. Click **Save** in the top-right corner.

9. Enter an optional description of your changes and click **Save**.

10. Click **Back** and then **Exit edit**.

Now you can filter the data from the source panel by way of the Dashboard data source.
Add as many panels as you need.

For more detailed information on the **Filter and Group by** option, refer to the full [Filter and group by controls documentation](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/build-dashboards/filter-group-by/).

## Add variables

To add a variable, follow these steps:

# Add variables

In addition to the built-in global variables that come with Grafana, you can create your own variables.
The following table lists the types of variables you can create:

| Variable type | Description                                                                                                                                                  |
| :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Query         | Query-generated list of values such as metric names, server names, sensor IDs, data centers, and so on. [Add a query variable](#add-a-query-variable).       |
| Custom        | Define the variable options manually using a comma-separated list. [Add a custom variable](#add-a-custom-variable).                                          |
| Text box      | Display a free text input field with an optional default value. [Add a text box variable](#add-a-textbox-variable-add-a-text-box-variable).                  |
| Constant      | Define a hidden constant. [Add a constant variable](#add-a-constant-variable).                                                                               |
| Data source   | Quickly change the data source for an entire dashboard. [Add a data source variable](#add-a-data-source-variable).                                           |
| Interval      | Interval variables represent time spans. [Add an interval variable](#add-an-interval-variable).                                                              |
| Switch        | Display a switch that allows you to toggle between two configurable values for enabled and disabled states. [Add a switch variable](#add-a-switch-variable). |

> **Note**
>
> In Grafana 13.1, **Ad hoc filters** have been renamed **Filter and Group by** and extended by adding grouping for Prometheus and Loki data sources.
> However, in the dashboard schema, they're still referred to as `"kind": "AdhocVariable"`.
>
> For information on the **Filter and Group by** feature, refer to the [documentation](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/build-dashboards/filter-group-by/).

## Enter general options for any variable

To create a variable, follow these steps:

1. Navigate to the dashboard you want to update.
2. Click **Edit**.
3. Click the **Add new element** icon (blue plus sign) and select **Variable**.

You can also click the add **Add variable** icon at the top of the dashboard (plus sign).

1. Choose a variable type from the list.

   You can update the variable type by clicking **Change type** in the sidebar.

2. Enter a **Name** for the variable.

3. (Optional) In the **Label** field, enter the display name for the variable drop-down list.

   If you don't enter a display name, then the drop-down list label is the variable name.

4. (Optional) In the **Description** field, enter a description of the variable. The description appears as an info icon tooltip next to the variable name on the dashboard.

   Descriptions support links. You can use Markdown-style links (`[link text](https://example.com)`) or paste bare URLs (`https://example.com`). Only `http` and `https` URLs are rendered as clickable links—other protocols are displayed as plain text.

5. Choose a **Display** option:
   - **Above dashboard** - The variable drop-down list displays above the dashboard with the variable **Name** or **Label** value. This is the default.
   - **Above dashboard, label hidden** - The variable drop-down list displays above the dashboard, but without showing the name of the variable.
   - **Controls menu** - The variable is displayed in the dashboard controls menu instead of above the dashboard. The dashboard controls menu appears as a button in the dashboard toolbar.
   - **Hidden** - No variable drop-down list is displayed on the dashboard.

6. Click one of the following links to complete the steps for adding your selected variable type:
   - [Query](#add-a-query-variable)
   - [Custom](#add-a-custom-variable)
   - [Textbox](#add-a-textbox-variable-add-a-text-box-variable)
   - [Constant](#add-a-constant-variable)
   - [Data source](#add-a-data-source-variable)
   - [Interval](#add-an-interval-variable)
   - [Switch](#add-a-switch-variable)

### Variable best practices

- Variable drop-down lists are displayed in the order in which they're listed in the **Variables** section of the sidebar, so put the variables that you change often at the top, so they're shown first.
- By default, variables don't have a default value. This means that the topmost value in the drop-down list is always preselected. If you want to pre-populate a variable with an empty value, you can use the following workaround in the variable settings:
  1. Select the **Include All Option** checkbox.
  2. In the **Custom all value** field, enter a value like `.+`.

## Add a query variable

Query variables enable you to write a data source query that can return a list of metric names, tag values, or keys. For example, a query variable might return a list of server names, sensor IDs, or data centers. The variable values change as they dynamically fetch options with a data source query.

Query variables are generally only supported for strings. If your query returns numbers or any other data type, you might need to convert them to strings to use them as variables. For the Azure data source, for example, you can use the [`tostring`](https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/tostringfunction) function for this purpose.

Query expressions can contain references to other variables and in effect create linked variables. Grafana detects this and automatically refreshes a variable when one of its linked variables change.

> **Note**
>
> Query expressions are different for each data source. For more information, refer to the documentation for your [data source](https://grafana.com/docs/grafana/v13.2/datasources/).

1. [Enter general options](#enter-general-options-for-any-variable).

2. Click **Open variable editor**.

3. Set the following options to configure your query in the **Query** tab:

   | Option             | Description                                                                                                                                                                                                                                                                                                                                |
   | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
   | Target data source | Select a data source in the drop-down list. You can also click **Open advanced data source picker** to see more options, including adding a data source (Admins only). For more information about data sources, refer to [Add a data source](https://grafana.com/docs/grafana/v13.2/datasources/#add-a-data-source).                       |
   | Query type         | If applicable, select an option in the drop-down list and fill in the query fields accordingly. For more information, refer to the [Query type](#query-type) section following these steps.                                                                                                                                                |
   | Regex              | (Optional) Type a regular expression in the field to filter or capture specific parts of the names returned by your data source query. To see examples, refer to [Filter variables with a regular expression](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/variables/advanced-variables/#filter-variables-with-regex). |
   | Apply regex to     | Select **Variable value** or **Display text** to choose where the regular expression pattern is applied. The default is **Variable value**.                                                                                                                                                                                                |
   | Sort               | Select the sort order for values to be displayed in the drop-down list. The default option, **Disabled**, means that the order of options returned by your data source query is used.                                                                                                                                                      |

4. In the **Static options** tab, set the following options:
   - Select an option in the **Static options sort** drop-down list to control where in the list of variable values the static options appear.
   - Under **value**, click **+ Add new option** or **Paste from clipboard** to add static options.

5. Click **Preview** in the top of the dialog box to test the variable.

   Grafana displays a list of the current variable values.

6. In the **Preview of values** section, Review them to ensure they match what you expect.

7. Click **Apply** to close the query variable editor dialog box.

8. In the **Refresh** drop-down list, select an option to control when the variable should update:
   - **On dashboard load** - Queries the data source every time the dashboard loads. This slows down dashboard loading, because the variable query needs to be completed before dashboard can be initialized.
   - **On time range change** - Queries the data source every time the dashboard loads and when the dashboard time range changes. Use this option if your variable options query contains a time range filter or is dependent on the dashboard time range.

9. (Optional) Set Selection options if needed:
   - **Multi-value** - Enables multiple values to be selected at the same time.
   - **Include All value** - Enables an option to include all variables.
   - **Allow custom values** - Enables users to add custom values to the list. Only applies to CSV custom values.

10. Click **Save** in the top-right corner.

11. Enter an optional description of your changes and click **Save**.

12. Click **Exit edit**.

### Query type

The query section of the editor varies according to your data source.
Some data sources have custom query editors.

Each data source defines how the variable values are extracted.
The typical implementation uses every string value returned from the data source response as a variable value.
Make sure to double-check the documentation for the data source.

Some data sources let you provide custom "display names" for the values.
For instance, the PostgreSQL, MySQL, and Microsoft SQL Server plugins handle this by looking for fields named `__text` and `__value` in the result.
Other data sources may look for `text` and `value` or use a different approach.
Always remember to double-check the documentation for the data source.

If you need more room in a single input field query editor, then hover your cursor over the lines in the lower right corner of the field and drag downward to expand.

## Add a custom variable

Use a *custom* variable for a value that doesn't change, such as a number or a string.

For example, if you have server names or region names that never change, then you might want to create them as custom variables rather than query variables. Because they don't change, you might use them in [chained variables](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/variables/advanced-variables/#chained-variables) rather than other query variables. That would reduce the number of queries Grafana must send when chained variables are updated.

1. [Enter general options](#enter-general-options-for-any-variable).

2. Click **Open variable editor**.

3. Configure one of the following options:
   - **CSV** - Enter a flat list of values for the variable in a comma-separated list. You can include numbers, strings, or key/value pairs separated by a space and a colon. For example, `key1 : value1,key2 : value2`.
   - **JSON** - Provide a JSON array of objects where each object can have any number of properties that can be referenced. For more information refer, to [Configure multi-property variables](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/variables/advanced-variables/#multi-property-variables).

4. Click **Preview** to test the variable.

5. In the **Preview of values** section, Grafana displays a list of the current variable values. If you've entered a JSON array, the preview is a table that includes all the value properties. Review them to ensure they match what you expect.

6. Click **Apply** to close the query editor dialog box.

7. (Optional) Set Selection options if needed:
   - **Multi-value** - Enables multiple values to be selected at the same time.
   - **Include All value** - Enables an option to include all variables.
   - **Allow custom values** - Enables users to add custom values to the list. Only applies to CSV custom values.

8. Click **Save** in the top-right corner.

9. Enter an optional description of your changes and click **Save**.

10. Click **Exit edit**.

## Add a textbox variable {#add-a-text-box-variable}

*Textbox* variables display a free text input field with an optional default value. This is the most flexible variable, because you can enter any value. Use this type of variable if you have metrics with high cardinality or if you want to update multiple panels in a dashboard at the same time.

For more information about cardinality, refer to [What are cardinality spikes and why do they matter?](https://grafana.com/blog/2022/02/15/what-are-cardinality-spikes-and-why-do-they-matter/)

1. [Enter general options](#enter-general-options-for-any-variable).

2. (Optional) Under **Textbox options**, enter the default value for the variable in the **Value** field.

   If you do not enter anything in this field, then Grafana displays an empty text box for users to type text into.

3. Click **Save** in the top-right corner.

4. Enter an optional description of your changes and click **Save**.

5. Click **Exit edit**.

## Add a constant variable

*Constant* variables enable you to define a hidden constant. This is useful for metric path prefixes for dashboards you want to share. When you export a dashboard, constant variables are converted to import options.

Constant variables are *not* flexible. Each constant variable only holds one value, and it cannot be updated unless you update the variable settings.

Constant variables are useful when you have complex values that you need to include in queries but don't want to retype in every query. For example, if you had a server path called `i-0b6a61efe2ab843gg`, then you could replace it with a variable called `$path_gg`.

1. [Enter general options](#enter-general-options-for-any-variable).

2. Under **Constant options**, enter the variable value in the **Value** field.

   You can enter letters, numbers, and symbols. You can even use wildcards if you use [raw format](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/variables/variable-syntax/#raw).

3. Click **Save** in the top-right corner.

4. Enter an optional description of your changes and click **Save**.

5. Click **Exit edit**.

## Add a data source variable

*Data source* variables enable you to quickly change the data source for an entire dashboard. They're useful if you have multiple instances of a data source, perhaps in different environments.

1. [Enter general options](#enter-general-options-for-any-variable).

2. Configure the following **Data source options**:
   - **Type** - Select the target data source for the variable.
   - **Name filter** - (Optional) Enter a regular expression filter for which data source instances to choose from in the variable value drop-down list. Leave this field empty to display all instances.

3. (Optional) Set Selection options if needed:
   - **Multi-value** - Enables multiple values to be selected at the same time.
   - **Include All value** - Enables an option to include all variables.
   - **Allow custom values** - Enables users to add custom values to the list. Only applies to CSV custom values.

4. Click **Save** in the top-right corner.

5. Enter an optional description of your changes and click **Save**.

6. Click **Exit edit**.

## Add an interval variable

Use an *interval* variable to represents time spans such as `1m`,`1h`, `1d`. You can think of them as a dashboard-wide "group by time" command. Interval variables change how the data is grouped in the visualization. You can also use the Auto Option to return a set number of data points per time span.

You can use an interval variable as a parameter to group by time (for InfluxDB), date histogram interval (for Elasticsearch), or as a summarize function parameter (for Graphite).

1. [Enter general options](#enter-general-options-for-any-variable).

2. Configure the following **Interval options**:

   | Option       | Description                                                                                                                                                                                                                                                                                                                                                             |
   | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | Values       | Enter the time range intervals that you want to appear in the variable drop-down list. The following time units are supported: `s (seconds)`, `m (minutes)`, `h (hours)`, `d (days)`, `w (weeks)`, `M (months)`, and `y (years)`. You can also accept or edit the default values: `1m,10m,30m,1h,6h,12h,1d,7d,14d,30d`.                                                 |
   | Auto option  | (Optional) Select on the checkbox if you want to add the `auto` option to the list. This option allows you to specify how many times the current time range should be divided to calculate the current `auto` time span.                                                                                                                                                |
   | Step count   | Select the number of times the current time range is divided to calculate the value, similar to the **Max data points** query option. For example, if the current visible time range is 30 minutes, then the `auto` interval groups the data into 30 one-minute increments. The default value is 30 steps. Only displayed when you select the **Auto option** checkbox. |
   | Min interval | The minimum threshold below which the step count intervals doesn't divide the time. To continue the 30 minute example, if the minimum interval is set to 2m, then Grafana would group the data into 15 two-minute increments. Only displayed when you select the **Auto option** checkbox.                                                                              |

3. Click **Save** in the top-right corner.

4. Enter an optional description of your changes and click **Save**.

5. Click **Exit edit**.

### Interval variable examples

The following example shows a template variable `myinterval` in a Graphite function:

```
summarize($myinterval, sum, false)
```

The following example shows a more complex Graphite example, from the [Graphite Template Nested Requests panel](https://play.grafana.org/d/000000056/graphite-templated-nested?editPanel=2\&orgId=1):

```
groupByNode(summarize(movingAverage(apps.$app.$server.counters.requests.count, 5), '$interval', 'sum', false), 2, 'sum')
```

## Add a switch variable

*Switch* variables display a switch with two configurable values representing enabled and disabled states. This variable type is useful when you need to:

- Toggle between different query conditions
- Enable or disable specific filters
- Switch between different visualization modes
- Control boolean parameters in your data sources

1. [Enter general options](#enter-general-options-for-any-variable).

2. Configure the following **Switch options**:

   | Option          | Description                                                                                                                                                                                                                                                                                                                              |
   | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | Value pair type | Select one of the following predefined options:<ul><li>**True / False** - Uses boolean values `true` and `false`.</li><li>**1 / 0** - Uses numeric values `1` and `0`.</li><li>**Yes / No** - Uses string values `yes` and `no`.</li><li>**Custom** - Allows you to define custom values for both enabled and disabled states.</li></ul> |
   | Enabled value   | If you selected **Custom**, configure the custom values. Enter the value that represents the enabled state (for example, "on").                                                                                                                                                                                                          |
   | Disabled value  | If you selected **Custom**, enter the value that represents the disabled state (for example, "off").                                                                                                                                                                                                                                     |

3. Click **Save** in the top-right corner.

4. Enter an optional description of your changes and click **Save**.

5. Click **Exit edit**.

### Switch variable examples

The following example shows a switch variable `$debug_mode` used in a Prometheus query to conditionally include debug labels:

```
up{job="my-service"} and ($debug_mode == "true" or on() vector(0))
```

The following example shows a switch variable `$show_errors` used to filter log entries:

```
{job="application"} |= ($show_errors == "1" ? "ERROR" : "")
```

You can also use switch variables in panel titles and other dashboard elements:

```
{{#if debug_mode}}Debug Mode: {{/if}}Application Metrics
```

## Variable selection options {#configure-variable-selection-options}

**Selection Options** are a feature you can use to manage variable option selections for query and custom variables. All selection options are optional, and they're off by default.

### Multi-value variables

Interpolating a variable with multiple values selected is tricky as it's not straight forward how to format the multiple values into a string that's valid in the given context where the variable is used. Grafana tries to solve this by allowing each data source plugin to inform the templating interpolation engine what format to use for multiple values.

> **Note**
>
> The **Custom all value** option on the variable must be blank for Grafana to format all values into a single string. If it's left blank, then Grafana concatenates (adds together) all the values in the query. Something like `value1,value2,value3`. If a custom `all` value is used, then instead the value is something like `*` or `all`.

#### Multi-value variables with a Graphite data source

Graphite uses glob expressions. A variable with multiple values would, in this case, be interpolated as `{host1,host2,host3}` if the current variable value was *host1*, *host2*, and *host3*.

#### Multi-value variables with a Prometheus or InfluxDB data source

InfluxDB and Prometheus use regular expressions, so the same variable would be interpolated as `(host1|host2|host3)`. Every value would also be regular expression escaped. If not, a value with a regular expression control character would break the regular expression.

#### Multi-value variables with an Elastic data source

Elasticsearch uses Lucene query syntax, so the same variable would be formatted as `("host1" OR "host2" OR "host3")`. In this case, every value must be escaped so that the value only contains Lucene control words and quotation marks.

#### Variable indexing

If you have a multi-value variable that's formatted as an array, you can use array positions to reference the values rather than the actual values.
You can use this functionality in dashboard panels to filter data, and when you do so, the array is maintained.

To reference variable values this way, use the following syntax:

```text
${query0.0}
```

The preceding syntax references the first, or `0`, position in the array.

In the following example, there's an array of three values, `1t`, `2t`, and `3t`, and rather than referencing those values, the panel query references the second value in the array using the syntax `${query0.1}`:

![Panel query using variable indexing to reference a value](https://grafana.com/media/docs/grafana/dashboards/screenshot-indexed-variables-v12.1.png)

#### Troubleshoot multi-value variables

Automatic escaping and formatting can cause problems and it can be tricky to grasp the logic behind it. Especially for InfluxDB and Prometheus where the use of regular expression syntax requires that the variable is used in regular expression operator context.

If you don't want Grafana to do this automatic regular expression escaping and formatting, then you must do one of the following:

- Turn off the **Multi-value** or **Include All option** options.
- Use the [raw variable format](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/variables/variable-syntax/#raw).

### Include All option

Grafana adds an **All** option to the variable drop-down list. If a user selects this option, then all variable options are selected.

If you enable this option but also set a variable's **Display** option to **Hidden**, the variable defaults to selecting only the first value—not **All**—unless you explicitly select **All** while the variable is visible and then save the dashboard.
To set **All** as the default for a hidden variable, complete the following steps:

1. Temporarily set **Display** to **Above dashboard**.
2. On the dashboard, select the **All** option from the variable drop-down list.
3. Save the dashboard to persist the selection.
4. Return to **Dashboard options** > **Variables**, select the variable, and set **Display** back to **Hidden**.
5. Save the dashboard again.

### Custom all value

This option is only visible if the **Include All option** is selected.

Enter regular expressions, globs, or Lucene syntax in the **Custom all value** field to define the value of the `All` option.

By default the `All` value includes all options in combined expression. This can become very long and can have performance problems. Sometimes it can be better to specify a custom all value, like a wildcard regular expression.

In order to have custom regular expression, globs, or Lucene syntax in the **Custom all value** option, it's never escaped so you have to think about what's a valid value for your data source.

1. Complete the variable configuration. For more detailed configuration information, click the one of the following links to complete the steps for adding your selected variable type:

- [Query](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/variables/add-template-variables/#add-a-query-variable)
- [Custom](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/variables/add-template-variables/#add-a-custom-variable)
- [Textbox](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/variables/add-template-variables/#add-a-text-box-variable)
- [Constant](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/variables/add-template-variables/#add-a-constant-variable)
- [Data source](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/variables/add-template-variables/#add-a-data-source-variable)
- [Interval](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/variables/add-template-variables/#add-an-interval-variable)
- [Switch](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/variables/add-template-variables/#add-a-switch-variable)

1. Click **Save**.
2. (Optional) Enter a description of the changes you've made.
3. Click **Save**.
4. Click **Exit edit**.

For more detailed information on variables, refer to the full [Variables documentation](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/variables/add-template-variables/).

## Add annotation queries

To add an annotation query, follow these steps:

# Annotate visualizations

Annotations provide a way to mark points on a visualization with rich events. They are visualized as vertical lines and icons on all graph panels. When you hover over an annotation, you can get event description and event tags. The text field can include links to other systems with more detail.

![Annotated visualization with annotation context menu open](https://grafana.com/static/img/docs/v46/annotations.png)

You can annotate visualizations in three ways:

- Directly in the panel, using the [built-in annotations query](#built-in-query)
- Using the HTTP API
- Configuring annotation queries

In the first two cases, you're creating new annotations, while in the last you're querying existing annotations from data sources. The built-in annotation query also supports this.

This page explains the first and third options; for information about using the HTTP API, refer to [Annotations API](https://grafana.com/docs/grafana/v13.2/developers/http_api/annotations/).

Annotations are supported for the following visualization types:

- Time series
- State timeline
- Candlestick

## Create annotations in panels

Grafana comes with the ability to add annotation events directly from a panel using the [built-in annotation query](#built-in-query) that exists on all dashboards. Annotations that you create this way are stored in Grafana.

To add annotations directly in the panel:

- The dashboard must already be saved.
- The built-in query must be enabled. Learn more in [Built-in query](#built-in-query).

Watch the following video for a quick tutorial on creating annotations:

[Watch the video on YouTube](https://www.youtube.com/watch?v=N5iOlyYyK6Q)

### Add an annotation

To add an annotation, complete the following steps:

1. If you've just saved a dashboard, refresh the page.
2. Click a data point in a panel to open the tooltip.
3. In the tooltip, click **Add annotation**.
   ![Add annotation context menu](https://grafana.com/static/img/docs/time-series-panel/time-series-annotations-context-menu.png)
4. Add an annotation description and tags (optional).
5. Click **Save**.

Alternatively, to add an annotation, press Ctrl/Cmd and click anywhere on the panel, and the **Add annotation** tooltip appears.

### Add a region annotation

1. If you've just saved a dashboard, refresh the page.
2. Press Ctrl/Cmd and click and drag on the panel to open the **Add annotation** dialog box.
   ![Add annotation dialog box](https://grafana.com/static/img/docs/time-series-panel/time-series-annotations-add-region-annotation.gif)
3. Add an annotation description and tags (optional).
4. Click **Save**

### Edit an annotation

1. Hover over the annotation indicator at the bottom of the panel to open the tooltip.
2. Click the pencil icon to open the annotation dialog box.
3. Modify the description and tags.
4. Click **Save**.

### Delete an annotation

1. Hover over the annotation indicator at the bottom of the panel to open the tooltip.
2. Click the trash icon to open the annotation dialog box.

## Annotation queries

You can add new queries to fetch annotations using any data source, including the built-in data annotation data source. Annotation queries return events that can be visualized as event markers in graphs across the dashboard.

Check out the video below for a quick tutorial.

[Watch the video on YouTube](https://www.youtube.com/watch?v=2istdJpPj2Y)

### Add annotation queries

To add an annotation query to a dashboard, follow these steps:

1. Navigate to the dashboard you want to update.

2. Click **Edit**.

3. Click the **Add new element** icon (blue plus sign).

4. Click **Annotation query**.

5. Enter a name for the annotation query.

   This name is given to the toggle that allows you to enable/disable showing annotation events from this query.

6. If you don't want to use the annotation query right away, clear the **Enabled** checkbox.

7. Select a color for the annotation event markers.

8. Select one of the following options in the **Show annotation controls in** drop-down list to control where the annotation is displayed:
   - **Above dashboard** - The annotation toggle is displayed above the dashboard. This is the default.
   - **Controls menu** - The annotation toggle is displayed in the dashboard controls menu instead of above the dashboard. The dashboard controls menu appears as a button in the dashboard toolbar.
   - **Hidden** - The annotation toggle isn't displayed on the dashboard.

9. Select one of the following options in the **Show in** drop-down list to control the panels in which the annotation is displayed:
   - **All panels** - The annotations are displayed on all panels that support annotations.
   - **Selected panels** - The annotations are displayed on all the panels you select.
   - **All panels except** - The annotations are displayed on all panels except the ones you select.

![](https://grafana.com/media/docs/grafana/dashboards/screenshot-annotation-filtering-10-v2.png)

*Annotation filtering*

1. To add a query, do one of the following:

   - Click **Open query editor** to open the **Annotation Query** dialog box, select an option in the **Data source** drop-down list, and write or construct a query. The annotation query options are different for each data source. For information about annotations in a specific data source, refer to the specific [data source](https://grafana.com/docs/grafana/v13.2/datasources/) topic. Proceed to the next step.
   - Click **Use saved query** to open the **Saved queries** drawer. Choose a [saved query](https://grafana.com/docs/grafana/v13.2/visualizations/panels-visualizations/query-transform-data/#saved-queries) to reuse, click **Select query**, and proceed to step 13.

   > **Note**
   >
   > [Saved queries](https://grafana.com/docs/grafana/v13.2/visualizations/panels-visualizations/query-transform-data/#saved-queries) is only available on Grafana Enterprise and Grafana Cloud.

2. (Optional) Click **Test annotation query** to ensure that the query is working properly.

3. Click **Close** when you've completed the query setup.

4. Click **Save**.

5. (Optional) Enter a description of the changes you've made.

6. Click **Save**.

7. Click **Exit edit**.

### Saved queries

> **Note**
>
> Saved queries is only available on Grafana Enterprise and Grafana Cloud.

You can reuse queries you and others in your organization have saved in annotations.
This helps users across your organization create annotations without having to create their own queries or know a query language.
It also helps you avoid having several users build the same queries for the same data sources multiple times.

Saved queries are supported in:

- [Dashboards](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/build-dashboards/create-dashboard/#create-a-dashboard)
- [Explore](https://grafana.com/docs/grafana/v13.2/visualizations/explore/query-editor/)
- [Annotations](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/build-dashboards/annotate-visualizations/#add-new-annotation-queries)

Learn more about saved queries:

- [Saved queries dialog box](#saved-queries-dialog-box)
- [Roles, permissions, and RBAC](#roles-permissions-and-rbac)
- [Variables in saved queries](#variables-in-saved-queries)
- [Manage saved queries as code](#manage-saved-queries-as-code)
- [Known limitations](#known-limitations)

#### Saved queries dialog box

The **Saved queries** dialog box gives you access to all the saved queries in your organization:

![List of saved queries](https://grafana.com/media/docs/grafana/dashboards/screenshot-saved-queries-v13.0.png)

To access saved queries, click **Use saved query** in the annotations configuration.

![Access saved queries](https://grafana.com/media/docs/grafana/dashboards/screenshot-annotation-saved-query-v13.2.png)

> **Note**
>
> To review your saved queries, press `Ctrl + K` or `Cmd + K` to open the command palette and search "Saved queries".
> From this view, you can also select a query to open in Explore.

From the **Saved queries** dialog box, you can:

- Search for queries by data source name, query content, title, or description.
- Sort queries alphabetically or by creation date.
- Filter by data source name, author name, and tags. The tag filter uses the `OR` operator, while the others use the `AND` operator. Use the **Remember filters** switch to persist your filter selections across sessions in your local storage.
- Star queries so that they appear in the **Starred queries** filter view.
- Duplicate or delete a saved query.
- Edit a query title, description, or tags.

You can apply all the same search, filter, and sort options in the **Starred queries** filter view.

> **Tip**
>
> When you select a query with a Loki, Mimir, Tempo, or Pyroscope data source, the **Saved queries** dialog box displays a **Drilldown** button.
> Click the button to open the associated Drilldown app, while maintaining the context of the query.
> Learn more about these apps in the [Drilldown documentation](https://grafana.com/docs/grafana/v13.2/visualizations/simplified-exploration/).

#### Roles, permissions, and RBAC

Saved queries support role-based access controls.
By default, saved queries have two RBAC roles:

- **Writer**: Create, update, and delete all saved queries.
- **Reader**: Reuse saved queries.

If you used saved queries prior to the addition of RBAC support in Grafana v12.4, Grafana user roles are mapped as follows:

- Admin > Writer
- Editor > Writer
- Viewer > Reader

#### Variables in saved queries

If a saved query includes variables, you can substitute the variables in the query without modifying it.
This is useful in environments where variable names or available values differ between dashboards.

You can map the original variables to either:

- A variable in your dashboard
- A custom value that you enter

![A saved query with substituted variables](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-saved-query-variable-v13.0.png)

Grafana applies your selections to the query before inserting it into the dashboard.
However, the substitutions only apply to the query when it's reused, and the original saved query remains unchanged.

#### Manage saved queries as code

You can manage saved queries as code with the Grafana Terraform provider, which lets you version-control your query library and keep it consistent across instances.
For more information, refer to [Manage saved queries using Terraform](https://grafana.com/docs/grafana/v13.2/as-code/infrastructure-as-code/terraform/manage-saved-queries/).

#### Known limitations

- No validation is performed when you save a query, so it's possible to save an invalid query. You should confirm the query is working properly before you save it.
- You can save a maximum of 1000 queries.

## Built-in query

After you add an annotation, they are still visible. This is due to the built-in annotation query that exists on all dashboards. This annotation query fetches all annotation events that originate from the current dashboard, which are stored in Grafana, and show them on the panel where they were created. This includes alert state history annotations.

By default, the built-in annotation query uses the `-- Grafana --` special data source, and manual annotations are only supported using this data source. You can use another data source in the built-in annotation query, but you'll only be able to create automated annotations using the query editor for that data source.

To add annotations directly to the dashboard, this query must be enabled.

To confirm if the built-in query is enabled, take the following steps:

1. Click **Edit** in the top-right corner of the dashboard.

2. Click the **Dashboard options** icon in the toolbar.

3. In the sidebar, expand the **Annotations** section.

4. Expand the **Hidden** section of annotations.

5. Select the **Annotations & Alerts (Built-in query)**.

6. Check if the **Enabled** checkbox is selected.

   If you don't want annotations to be fetched and drawn, clear the checkbox.

7. Click **Save**.

8. Enter an optional description of your changes and click **Save**.

9. Click **Exit edit**.

When you copy a dashboard using the **Save As** feature it gets a new dashboard id, so annotations created on the source dashboard is no longer be visible on the copy. You can still show them if you add a new **Annotation Query** and filter by tags. However, this only works if the annotations on the source dashboard had tags to filter by.

Following are some query options specific to the built-in annotation query.

### Filter queries by tag

You can create new queries to fetch annotations from the built-in annotation query using the `-- Grafana --` data source by setting *Filter by* to `Tags`.

Grafana also supports typeahead of existing tags, provide at least one tag.

For example, create an annotation query name `outages` and specify a tag `outage`. This query shows all annotations (from any dashboard or via API) with the `outage` tag. If multiple tags are defined in an annotation query, then Grafana only shows annotations matching all the tags. To modify the behavior, enable `Match any`, and Grafana shows annotations that contain any one of the tags you provided.

> **Warning**
>
> If you enable **Display annotations** on an externally shared dashboard that uses tag-based annotation queries, those queries return matching annotations from *all dashboards* in the organization. This means annotations from dashboards that are not shared externally are visible to anyone with access to the shared dashboard. This is by design. Review which annotations might match your tags before enabling this option on a shared dashboard.

![Annotation query options](https://grafana.com/media/docs/grafana/dashboards/screenshot-annotations-typeahead-support-10.0.png)

You can also use template variables in the tag query. This means if you have a dashboard showing stats for different services and a template variable that dictates which services to show, you can use the same template variable in your annotation query to only show annotations for those services.

![Annotation query options with a template variable query tag](https://grafana.com/media/docs/grafana/dashboards/screenshot-annotation-tag-filter-variable-10.0.png)

### Add time regions

When adding or editing an annotation, you can define a repeating time region by setting **Query type** to **Time regions**. Then, define the **From** and **To** sections with the preferred days of the week and time. You also have the option to change the timezone, which is set to the dashboard's timezone, by default.

![Time regions options set to business hours](https://grafana.com/media/docs/grafana/dashboards/screenshot-annotation-timeregions-10-v2.png)

The above configuration produces the following result in the Time series panel:

![Time series visualization with time regions business hours](https://grafana.com/media/docs/grafana/screenshot-grafana-10-0-timeseries-time-regions.png)

Toggle the **Advanced** switch and use [Cron syntax](https://en.wikipedia.org/wiki/Cron) to set more granular time region controls. The following example sets a time region of 9:00 AM, Monday to Friday:

![Time region query with cron syntax](https://grafana.com/media/docs/grafana/dashboards/screenshot-annotations-cron-option-v11.6.png)

For more detailed information about annotations, refer to the full [Annotations documentation](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/build-dashboards/annotate-visualizations/).

## Add links

For more detailed information on dashboard links, refer to the full [Dashboard links documentation](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/build-dashboards/manage-dashboard-links/).

### Add links to dashboards

To add a link to another dashboard at the top of your current dashboard, follow these steps:

1. Navigate to the dashboard you want to update.
2. Click **Edit**.
3. Click the **Add new element** icon (blue plus sign).
4. Click **Link**.

# Manage dashboard links

You can use links to navigate between commonly-used dashboards or to connect others to your visualizations. Links let you create shortcuts to other dashboards, panels, and even external websites.

Grafana supports dashboard links, panel links, and data links. Dashboard links are displayed at the top of the dashboard. Panel links are accessible by clicking the icon next to the panel title.

## Which link should you use?

Start by figuring out how you're currently navigating between dashboards. If you're often jumping between a set of dashboards and struggling to find the same context in each, links can help optimize your workflow.

The next step is to figure out which link type is right for your workflow. Even though all the link types in Grafana are used to create shortcuts to other dashboards or external websites, they work in different contexts.

- If the link relates to most if not all of the panels in the dashboard, use [dashboard links](#dashboard-links).
- If you want to drill down into specific panels, use [panel links](#panel-links).
- If you want to link to an external site, you can use either a dashboard link or a panel link.
- If you want to drill down into a specific series, or even a single measurement, use [data links](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-data-links/).

## Controlling time range using the URL

To control the time range of a panel or dashboard, you can provide query parameters in the dashboard URL:

- `from` - defines lower limit of the time range, specified in ms epoch
- `to` - defines upper limit of the time range, specified in ms epoch
- `time` and `time.window` - defines a time range from `time-time.window/2` to `time+time.window/2`. Both params should be specified in ms. For example `?time=1500000000000&time.window=10000` will result in 10s time range from 1499999995000 to 1500000005000

## Dashboard links

When you create a dashboard link, you can include the time range and current template variables to directly jump to the same context in another dashboard. This way, you don’t have to worry whether the person you send the link to is looking at the right data. For other types of links, refer to [Data link variables](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-data-links/#data-link-variables).

Dashboard links can also be used as shortcuts to external systems, such as submitting [a GitHub issue with the current dashboard name](https://github.com/grafana/grafana/issues/new?title=Dashboard%3A%20HTTP%20Requests).

To see an example of dashboard links in action, check out:

- [Dashboard links with variables](https://play.grafana.org/d/rUpVRdamz/dashboard-links-with-variables?orgId=1)
- [Prometheus repeat](https://play.grafana.org/d/000000036/prometheus-repeat?orgId=1)

Once you've added a dashboard link, it appears in the upper right corner of your dashboard.

### Add links to dashboards

To add a link to another dashboard at the top of your current dashboard, follow these steps:

1. In the dashboard you want to link, click **Edit**.
2. In the toolbar, click the **Dashboard options** icon.
3. In the sidebar, click **Settings**.
4. Go to the **Links** tab and then click **Add dashboard link**.

The default link type is **Dashboards**.

1. In the **With tags** drop-down list, enter tags to limit the linked dashboards to only the ones with the tags you enter.

   If you don't add any tags, Grafana includes links to all other dashboards.

2. Set link options:
   - **Show as dropdown** – If you are linking to lots of dashboards, then you probably want to select this option and add an optional title to the dropdown. Otherwise, Grafana displays the dashboard links side by side across the top of your dashboard.
   - **Include current time range** – Select this option to include the dashboard time range in the link. When the user clicks the link, the linked dashboard opens with the indicated time range already set. **Example:** <https://play.grafana.org/d/000000010/annotations?orgId=1&from=now-3h&to=now>
   - **Include current template variable values** – Select this option to include template variables currently used as query parameters in the link. When the user clicks the link, any matching templates in the linked dashboard are set to the values from the link. For more information, see [Dashboard URL variables](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/create-dashboard-url-variables/).
   - **Open link in new tab** – Select this option if you want the dashboard link to open in a new tab or window.
   - **Show in controls menu** – Select this option to display the link in the dashboard controls menu instead of at the top of the dashboard. The dashboard controls menu appears as a button in the dashboard toolbar.

3. Click **Save**.

4. (Optional) Enter a description of the changes you've made.

5. Click **Save**.

6. Click **Back** and **Exit edit**.

> **Tip**
>
> To add links without leaving the dashboard, click the **Add new element** icon in the dashboard toolbar, and select **Link**.
> For more information, refer to the [Dashboard controls documentation](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/build-dashboards/create-dashboard/dashboard-controls/).

### Add a URL link to a dashboard

Add a link to a URL at the top of your current dashboard.
You can link to any available URL, including dashboards, panels, or external sites.
You can even control the time range to ensure the user is zoomed in on the right data in Grafana.

To add a URL link to your dashboard, follow these steps:

1. In the dashboard you want to link, click **Edit**.

2. In the toolbar, click the **Dashboard options** icon.

3. In the sidebar, click **Settings**.

4. Go to the **Links** tab and then click **Add dashboard link**.

5. In the **Type** drop-down list, select **Link**.

6. In the **URL** field, enter the URL to which you want to link.

   Depending on the target, you might want to include field values. **Example:** <https://github.com/grafana/grafana/issues/new?title=Dashboard%3A%20HTTP%20Requests>

7. In the **Tooltip** field, enter the tooltip you want the link to display when the user hovers their mouse over it.

8. In the **Icon** drop-down, choose the icon you want displayed with the link.

9. Set link options; by default, these options are enabled for URL links:
   - **Include current time range** – Select this option to include the dashboard time range in the link. When the user clicks the link, the linked dashboard opens with the indicated time range already set. **Example:** <https://play.grafana.org/d/000000010/annotations?orgId=1&from=now-3h&to=now>
   - **Include current template variable values** – Select this option to include template variables currently used as query parameters in the link. When the user clicks the link, any matching templates in the linked dashboard are set to the values from the link.
   - **Open link in new tab** – Select this option if you want the dashboard link to open in a new tab or window.
   - **Show in controls menu** – Select this option to display the link in the dashboard controls menu instead of at the top of the dashboard. The dashboard controls menu appears as a button in the dashboard header.

10. Click **Save** in the top-right corner.

11. Enter an optional description of your changes and click **Save**.

12. Click **Back** and then **Exit edit**.

### Update a dashboard link

To edit, duplicate, or delete dashboard link, follow these steps:

1. In the dashboard you want to link, click **Edit**.

2. In the toolbar, click the **Dashboard options** icon.

3. In the sidebar, click **Settings**.

4. Go to the **Links** tab.

5. Do one of the following:
   - **Edit** - Click the name of the link and update the link settings.
   - **Duplicate** - Click the copy link icon next to the link that you want to duplicate.
   - **Delete** - Click the red **X** next to the link that you want to delete, and then **Delete**.

6. Click **Save** in the top-right corner.

7. Enter an optional description of your changes and click **Save**.

8. Click **Back** and then **Exit edit**.

## Panel links

Each panel can have its own set of links that are shown in the upper left of the panel after the panel title. You can link to any available URL, including dashboards, panels, or external sites. You can even control the time range to ensure the user is zoomed in on the right data in Grafana.

Click the icon next to the panel title to see available panel links.

![List of panel links displayed](https://grafana.com/media/docs/grafana/dashboards/screenshot-panel-links-v11.3.png)

### Add a panel link

1. Hover over any part of the panel to which you want to add the link to display the actions menu on the top right corner.

2. Click the menu and select **Edit**.

   To use a keyboard shortcut to open the panel, hover over the panel and press `e`.

3. Expand the **Panel options** section, scroll down to **Panel links**.

4. Click **Add link**.

5. Enter a **Title**. **Title** is a human-readable label for the link that will be displayed in the UI.

6. Enter the **URL** you want to link to.
   You can even add one of the template variables defined in the dashboard. Press Ctrl+Space or Cmd+Space and click in the **URL** field to see the available variables. By adding template variables to your panel link, the link sends the user to the right context, with the relevant variables already set. You can also use time variables:
   - `from` - Defines the lower limit of the time range, specified in ms epoch.
   - `to` - Defines the upper limit of the time range, specified in ms epoch.
   - `time` and `time.window` - Define a time range from `time-time.window/2` to `time+time.window/2`. Both params should be specified in ms. For example `?time=1500000000000&time.window=10000` will result in 10s time range from 1499999995000 to 1500000005000.

7. If you want the link to open in a new tab, then select **Open in new tab**.

8. Click **Save** to save changes and close the dialog box.

9. Click **Save** in the top-right corner.

10. Enter an optional description of your changes and click **Save**.

11. Click **Back** and then **Exit edit**.

### Update a panel link

1. Hover over any part of the panel to display the actions menu on the top right corner.

2. Click the menu and select **Edit**.

   To use a keyboard shortcut to open the panel, hover over the panel and press `e`.

3. Expand the **Panel options** section, scroll down to Panel links.

4. Find the link that you want to make changes to.

5. Click the Edit (pencil) icon to open the Edit link window.

6. Make any necessary changes.

7. Click **Save** to save changes and close the dialog box.

8. Click **Save** in the top-right corner.

9. Enter an optional description of your changes and click **Save**.

10. Click **Back** and then **Exit edit**.

### Delete a panel link

1. Hover over any part of the panel to display the actions menu on the top right corner.

2. Click the menu and select **Edit**.

   To use a keyboard shortcut to open the panel, hover over the panel and press `e`.

3. Expand the **Panel options** section, scroll down to Panel links.

4. Find the link that you want to delete.

5. Click the **X** icon next to the link you want to delete.

6. Click **Save** in the top-right corner.

7. Enter an optional description of your changes and click **Save**.

8. Click **Back** and then **Exit edit**.

9. Click **Save**.

10. (Optional) Enter a description of the changes you've made.

11. Click **Save**.

12. Click **Exit edit**.

### Add a URL link to a dashboard

Add a link to a URL at the top of your current dashboard.
You can link to any available URL, including dashboards, panels, or external sites.
You can even control the time range to ensure the user is zoomed in on the right data in Grafana.

To add a URL link to your dashboard, follow these steps:

1. Navigate to the dashboard you want to update.
2. Click **Edit**.
3. Click the **Add new element** icon (blue plus sign).
4. Click **Link**.

# Manage dashboard links

You can use links to navigate between commonly-used dashboards or to connect others to your visualizations. Links let you create shortcuts to other dashboards, panels, and even external websites.

Grafana supports dashboard links, panel links, and data links. Dashboard links are displayed at the top of the dashboard. Panel links are accessible by clicking the icon next to the panel title.

## Which link should you use?

Start by figuring out how you're currently navigating between dashboards. If you're often jumping between a set of dashboards and struggling to find the same context in each, links can help optimize your workflow.

The next step is to figure out which link type is right for your workflow. Even though all the link types in Grafana are used to create shortcuts to other dashboards or external websites, they work in different contexts.

- If the link relates to most if not all of the panels in the dashboard, use [dashboard links](#dashboard-links).
- If you want to drill down into specific panels, use [panel links](#panel-links).
- If you want to link to an external site, you can use either a dashboard link or a panel link.
- If you want to drill down into a specific series, or even a single measurement, use [data links](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-data-links/).

## Controlling time range using the URL

To control the time range of a panel or dashboard, you can provide query parameters in the dashboard URL:

- `from` - defines lower limit of the time range, specified in ms epoch
- `to` - defines upper limit of the time range, specified in ms epoch
- `time` and `time.window` - defines a time range from `time-time.window/2` to `time+time.window/2`. Both params should be specified in ms. For example `?time=1500000000000&time.window=10000` will result in 10s time range from 1499999995000 to 1500000005000

## Dashboard links

When you create a dashboard link, you can include the time range and current template variables to directly jump to the same context in another dashboard. This way, you don’t have to worry whether the person you send the link to is looking at the right data. For other types of links, refer to [Data link variables](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-data-links/#data-link-variables).

Dashboard links can also be used as shortcuts to external systems, such as submitting [a GitHub issue with the current dashboard name](https://github.com/grafana/grafana/issues/new?title=Dashboard%3A%20HTTP%20Requests).

To see an example of dashboard links in action, check out:

- [Dashboard links with variables](https://play.grafana.org/d/rUpVRdamz/dashboard-links-with-variables?orgId=1)
- [Prometheus repeat](https://play.grafana.org/d/000000036/prometheus-repeat?orgId=1)

Once you've added a dashboard link, it appears in the upper right corner of your dashboard.

### Add links to dashboards

To add a link to another dashboard at the top of your current dashboard, follow these steps:

1. In the dashboard you want to link, click **Edit**.
2. In the toolbar, click the **Dashboard options** icon.
3. In the sidebar, click **Settings**.
4. Go to the **Links** tab and then click **Add dashboard link**.

The default link type is **Dashboards**.

1. In the **With tags** drop-down list, enter tags to limit the linked dashboards to only the ones with the tags you enter.

   If you don't add any tags, Grafana includes links to all other dashboards.

2. Set link options:
   - **Show as dropdown** – If you are linking to lots of dashboards, then you probably want to select this option and add an optional title to the dropdown. Otherwise, Grafana displays the dashboard links side by side across the top of your dashboard.
   - **Include current time range** – Select this option to include the dashboard time range in the link. When the user clicks the link, the linked dashboard opens with the indicated time range already set. **Example:** <https://play.grafana.org/d/000000010/annotations?orgId=1&from=now-3h&to=now>
   - **Include current template variable values** – Select this option to include template variables currently used as query parameters in the link. When the user clicks the link, any matching templates in the linked dashboard are set to the values from the link. For more information, see [Dashboard URL variables](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/create-dashboard-url-variables/).
   - **Open link in new tab** – Select this option if you want the dashboard link to open in a new tab or window.
   - **Show in controls menu** – Select this option to display the link in the dashboard controls menu instead of at the top of the dashboard. The dashboard controls menu appears as a button in the dashboard toolbar.

3. Click **Save**.

4. (Optional) Enter a description of the changes you've made.

5. Click **Save**.

6. Click **Back** and **Exit edit**.

> **Tip**
>
> To add links without leaving the dashboard, click the **Add new element** icon in the dashboard toolbar, and select **Link**.
> For more information, refer to the [Dashboard controls documentation](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/build-dashboards/create-dashboard/dashboard-controls/).

### Add a URL link to a dashboard

Add a link to a URL at the top of your current dashboard.
You can link to any available URL, including dashboards, panels, or external sites.
You can even control the time range to ensure the user is zoomed in on the right data in Grafana.

To add a URL link to your dashboard, follow these steps:

1. In the dashboard you want to link, click **Edit**.

2. In the toolbar, click the **Dashboard options** icon.

3. In the sidebar, click **Settings**.

4. Go to the **Links** tab and then click **Add dashboard link**.

5. In the **Type** drop-down list, select **Link**.

6. In the **URL** field, enter the URL to which you want to link.

   Depending on the target, you might want to include field values. **Example:** <https://github.com/grafana/grafana/issues/new?title=Dashboard%3A%20HTTP%20Requests>

7. In the **Tooltip** field, enter the tooltip you want the link to display when the user hovers their mouse over it.

8. In the **Icon** drop-down, choose the icon you want displayed with the link.

9. Set link options; by default, these options are enabled for URL links:
   - **Include current time range** – Select this option to include the dashboard time range in the link. When the user clicks the link, the linked dashboard opens with the indicated time range already set. **Example:** <https://play.grafana.org/d/000000010/annotations?orgId=1&from=now-3h&to=now>
   - **Include current template variable values** – Select this option to include template variables currently used as query parameters in the link. When the user clicks the link, any matching templates in the linked dashboard are set to the values from the link.
   - **Open link in new tab** – Select this option if you want the dashboard link to open in a new tab or window.
   - **Show in controls menu** – Select this option to display the link in the dashboard controls menu instead of at the top of the dashboard. The dashboard controls menu appears as a button in the dashboard header.

10. Click **Save** in the top-right corner.

11. Enter an optional description of your changes and click **Save**.

12. Click **Back** and then **Exit edit**.

### Update a dashboard link

To edit, duplicate, or delete dashboard link, follow these steps:

1. In the dashboard you want to link, click **Edit**.

2. In the toolbar, click the **Dashboard options** icon.

3. In the sidebar, click **Settings**.

4. Go to the **Links** tab.

5. Do one of the following:
   - **Edit** - Click the name of the link and update the link settings.
   - **Duplicate** - Click the copy link icon next to the link that you want to duplicate.
   - **Delete** - Click the red **X** next to the link that you want to delete, and then **Delete**.

6. Click **Save** in the top-right corner.

7. Enter an optional description of your changes and click **Save**.

8. Click **Back** and then **Exit edit**.

## Panel links

Each panel can have its own set of links that are shown in the upper left of the panel after the panel title. You can link to any available URL, including dashboards, panels, or external sites. You can even control the time range to ensure the user is zoomed in on the right data in Grafana.

Click the icon next to the panel title to see available panel links.

![List of panel links displayed](https://grafana.com/media/docs/grafana/dashboards/screenshot-panel-links-v11.3.png)

### Add a panel link

1. Hover over any part of the panel to which you want to add the link to display the actions menu on the top right corner.

2. Click the menu and select **Edit**.

   To use a keyboard shortcut to open the panel, hover over the panel and press `e`.

3. Expand the **Panel options** section, scroll down to **Panel links**.

4. Click **Add link**.

5. Enter a **Title**. **Title** is a human-readable label for the link that will be displayed in the UI.

6. Enter the **URL** you want to link to.
   You can even add one of the template variables defined in the dashboard. Press Ctrl+Space or Cmd+Space and click in the **URL** field to see the available variables. By adding template variables to your panel link, the link sends the user to the right context, with the relevant variables already set. You can also use time variables:
   - `from` - Defines the lower limit of the time range, specified in ms epoch.
   - `to` - Defines the upper limit of the time range, specified in ms epoch.
   - `time` and `time.window` - Define a time range from `time-time.window/2` to `time+time.window/2`. Both params should be specified in ms. For example `?time=1500000000000&time.window=10000` will result in 10s time range from 1499999995000 to 1500000005000.

7. If you want the link to open in a new tab, then select **Open in new tab**.

8. Click **Save** to save changes and close the dialog box.

9. Click **Save** in the top-right corner.

10. Enter an optional description of your changes and click **Save**.

11. Click **Back** and then **Exit edit**.

### Update a panel link

1. Hover over any part of the panel to display the actions menu on the top right corner.

2. Click the menu and select **Edit**.

   To use a keyboard shortcut to open the panel, hover over the panel and press `e`.

3. Expand the **Panel options** section, scroll down to Panel links.

4. Find the link that you want to make changes to.

5. Click the Edit (pencil) icon to open the Edit link window.

6. Make any necessary changes.

7. Click **Save** to save changes and close the dialog box.

8. Click **Save** in the top-right corner.

9. Enter an optional description of your changes and click **Save**.

10. Click **Back** and then **Exit edit**.

### Delete a panel link

1. Hover over any part of the panel to display the actions menu on the top right corner.

2. Click the menu and select **Edit**.

   To use a keyboard shortcut to open the panel, hover over the panel and press `e`.

3. Expand the **Panel options** section, scroll down to Panel links.

4. Find the link that you want to delete.

5. Click the **X** icon next to the link you want to delete.

6. Click **Save** in the top-right corner.

7. Enter an optional description of your changes and click **Save**.

8. Click **Back** and then **Exit edit**.

9. Click **Save**.

10. (Optional) Enter a description of the changes you've made.

11. Click **Save**.

12. Click **Exit edit**.

## Manage dashboard controls

After you add dashboard controls, you can manage them from the dashboard options.
In this view, the sidebar includes collapsible sections for filters, variables, annotations, and links, including hidden controls that aren't otherwise visible on the dashboard:

![Dashboard controls in the Dashboard options sidebar view](https://grafana.com/media/docs/grafana/dashboards/screenshot-dashboard-controls-mgmt-v13.1.png)

To manage dashboard controls, follow these steps:

1. Click the **Dashboard options** icon in the sidebar.

2. In the sidebar, expand the appropriate collapsible section.

3. Do one or more of the following:

   - **Edit**: Click **Select** on the control to open it in the sidebar so you can make updates.
   - **Reorder**: Drag and drop controls to reorder them.
   - **Change display**: Drag and drop controls between sub-sections **Above dashboard**, **Controls menu**, and **Hidden** to update the control display option. Note that links can't be hidden.

   > **Tip**
   >
   > To get back to controls management from configuration, click the **Dashboard options** icon.

4. Make any other changes as needed.

5. Click **Save**.

6. (Optional) Enter a description of the changes you've made.

7. Click **Save**.

8. Click **Exit edit**.
