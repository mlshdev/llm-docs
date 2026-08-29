> Release-pinned source for Grafana v13.2.0: [docs/sources/visualizations/panels-visualizations/visualizations/status-history/index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/visualizations/panels-visualizations/visualizations/status-history/index.md)

# Status history

A status history visualization displays data in a way that shows periodic states over time. In a status history, each field or series is rendered as a horizontal row, with multiple boxes showing the different statuses. This provides you with a centralized view for the status of a component or service.

For example, if you're monitoring the health status of different services, you can use a status history to visualize the different statuses, such as “True” or "False," over time. Each status is represented by a different color:

![A status history panel showing the health status of different sensors](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-status-history-v11.6.png)

> **Note**
>
> A status history is similar to a [state timeline](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/state-timeline/), but has different [configuration options](#status-history-options). Unlike state timelines, status histories don't merge consecutive values.

Use a status history when you need to:

- Monitor the status of a server, application, or service to know when your infrastructure is experiencing issues over time.
- Identify operational trends over time.
- Spot any recurring issues with the health of your applications.

## Configure a status history

Once you've [created a dashboard](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/create-dashboard/), you can use the following state timeline video as a reference for how to configure a status history:

[Watch the video on YouTube](https://www.youtube.com/watch?v=a9wZHM0mdxo)

[Grafana State Timeline & Status History in Grafana Play](https://play.grafana.org/d/qD-rVv6Mz/6-state-timeline-and-status-history?orgId=1)

## Supported data formats

The status history visualization works best if you have data capturing the various status of entities over time, formatted as a table. The data must include:

- **Timestamps** - Indicate when each status change occurred. This could also be the start time for the status change. You can also add an optional timestamp to indicate the end time for the status change.
- **Entity name/identifier** - Represents the name of the entity you're trying to monitor.
- **Status value** - Represents the state value of the entity you're monitoring. These can be string, numerical, or boolean states.

### Examples

The following tables are examples of the type of data you need for a status history visualization and how it should be formatted.

#### Single time column with null values

| Timestamps         | Backend\_01 | Backend\_02 |
| ------------------ | ----------- | ----------- |
| 2024-02-29 8:00:00 | OK          | WARN        |
| 2024-02-29 8:15:00 | WARN        |             |
| 2024-02-29 8:18:00 |             | WARN        |
| 2024-02-29 8:30:00 | BAD         |             |
| 2024-02-29 8:36:00 |             | OK          |
| 2024-02-29 8:45:00 | OK          |             |

The data is converted as follows, with the null and empty values visualized as gaps in the status history:

![A status history panel with null values showing the status of two servers](https://grafana.com/static/img/docs/status-history-panel/status_history_with_null.png)

#### Two time columns without null values

| Start time         | End time           | Backend\_01 | Backend\_02 |
| ------------------ | ------------------ | ----------- | ----------- |
| 2024-02-29 8:00:00 | 2024-02-29 8:15:00 | OK          | OK          |
| 2024-02-29 8:15:00 | 2024-02-29 8:30:00 | OK          | OK          |
| 2024-02-29 8:30:00 | 2024-02-29 8:45:00 | OK          | OK          |
| 2024-02-29 8:45:00 | 2024-02-29 9:00:00 | BAD         | WARN        |
| 2024-02-29 9:00:00 | 2024-02-29 9:15:00 | OK          | WARN        |

The data is converted as follows:

![A status history panel with two time columns showing the status of two servers](https://grafana.com/static/img/docs/status-history-panel/status_history.png)

## Pan and zoom panel time range

You can pan the panel time range left and right, and zoom it and in and out.
This, in turn, changes the dashboard time range.

**Zoom in** - Click and drag on the panel to zoom in on a particular time range.

**Zoom out** - Double-click anywhere on the panel to zoom out the time range.

When you zoom out, the range doubles with each double-click, adding equal time to each side of the range.
For example, if the original time range is from 9:00 to 9:59, the time range changes as follow with each double-click:

- Next range: 8:30 - 10:29
- Next range: 7:30 - 11:29

**Pan** - Click and drag the x-axis area of the panel to pan the time range.

The time range shifts by the distance you drag.
For example, if the original time range is from 9:00 to 9:59 and you drag 30 minutes to the right, the time range changes to 9:30 to 10:29.

For screen recordings showing these interactions, refer to the [Panel overview documentation](https://grafana.com/docs/grafana/v13.2/visualizations/panels-visualizations/panel-overview/#pan-and-zoom-panel-time-range).

## Configuration options

The following section describes the configuration options available in the panel editor pane for this visualization. These options are, as much as possible, ordered as they appear in Grafana.

### Panel options

In the **Panel options** section of the panel editor pane, set basic options like panel title and description, as well as panel links. To learn more, refer to [Configure panel options](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-panel-options/).

### Status history options

Use these options to refine the visualization.

| Option                        | Description                                                                                                                                                          |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Show values                   | Controls whether values are rendered inside the status cells. Choose from **Auto**, **Always**, and **Never**. **Auto** renders values if there is sufficient space. |
| Row height                    | Controls the height of boxes. `1` creates the largest boxes, and `0` creates the smallest boxes with more gap.                                                       |
| Column width                  | Controls the width of boxes. `1` creates the widest boxes, and `0` creates the narrowest boxes with more gap.                                                        |
| Page size (enable pagination) | The **Page size** option lets you paginate the status history visualization to limit how many series are visible at once. This is useful when you have many series.  |
| Line width                    | Controls line width of status cells. This is a field option and can be set in field defaults or overrides.                                                           |
| Fill opacity                  | Controls the fill opacity of status cells. This is a field option and can be set in field defaults or overrides.                                                     |

### Legend options

When the legend option is enabled it can show either the value mappings or the threshold brackets. To show the value mappings in the legend, it's important that the **Color scheme** as referenced in [Color scheme](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-standard-options/#color-scheme) is set to **Single color** or **Classic palette**. To see the threshold brackets in the legend set the **Color scheme** to **From thresholds**.

For more information about the legend, refer to [Configure a legend](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-legend/).

### Visibility

Toggle the switch to turn the legend on or off.

### Mode

Use these settings to define how the legend appears in your visualization.

- **List -** Displays the legend as a list. This is a default display mode of the legend.
- **Table -** Displays the legend as a table.

### Placement

Choose where to display the legend.

- **Bottom -** Below the graph.
- **Right -** To the right of the graph.

### Width

Control how wide the legend is when placed on the right side of the visualization. The value may be a simple pixel width or a more complex [CSS width property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/width) such as `max(200px, 20%)`. This option is only displayed if you set the legend placement to **Right**.

### Overflow

Control how overflow for long series names is handled. This option is only displayed if you set the legend placement to **Right** and mode is **Table**.

- **Ellipsis -** Truncates the series names with "..." at the end.
- **Wrap -** Word-wraps the series names to multiple lines.

### Tooltip options

Tooltip options control the information overlay that appears when you hover over data points in the visualization.

| Option                                  | Description                                                                                                  |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [Tooltip mode](#tooltip-mode)           | When you hover your cursor over the visualization, Grafana can display tooltips. Choose how tooltips behave. |
| [Values sort order](#values-sort-order) | This option controls the order in which values are listed in a tooltip.                                      |
| Max width                               | Set the maximum width of the tooltip box.                                                                    |
| Max height                              | Set the maximum height of the tooltip box. The default is 600 pixels.                                        |

### Tooltip mode

When you hover your cursor over the visualization, Grafana can display tooltips. Choose how tooltips behave.

- **Single** - The hover tooltip shows only a single series, the one that you are hovering over on the visualization.
- **All** - The hover tooltip shows all series in the visualization. Grafana highlights the series that you are hovering over in bold in the series list in the tooltip.
- **Hidden** - Do not display the tooltip when you interact with the visualization.

Use an override to hide individual series from the tooltip.

### Values sort order

When you set the **Tooltip mode** to **All**, the **Values sort order** option is displayed. This option controls the order in which values are listed in a tooltip. Choose from the following:

- **None** - Grafana automatically sorts the values displayed in a tooltip.
- **Ascending** - Values in the tooltip are listed from smallest to largest.
- **Descending** - Values in the tooltip are listed from largest to smallest.

### Annotation options

| Option                | Description                                                                                                                               |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Multi-row annotations | Breaks each annotation data frame into a separate row in the visualization. Only visible in panels that display more than one annotation. |
| Annotation clustering | Joins adjacent point annotations into a single annotation region.                                                                         |
| Hide lines and areas  | Controls display of annotation indicator lines, and shaded area for region annotations.                                                   |

### Axis options

| Option    | Description                                                                                      |
| --------- | ------------------------------------------------------------------------------------------------ |
| Placement | Control the visibility of series names along the y-axis or time values along the x-axis.         |
| Width     | Set a fixed width for the axis. By default, Grafana dynamically calculates the width of an axis. |

### Standard options

**Standard options** in the panel editor pane let you change how field data is displayed in your visualizations. When you set a standard option, the change is applied to all fields or series. For more granular control over the display of fields, refer to [Configure overrides](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-overrides/).

| Option        | Description                                                                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unit          | Choose which unit a field should use.                                                                                                             |
| Min/Max       | Set the minimum and maximum values used in percentage threshold calculations or leave these field empty for them to be calculated automatically.  |
| Field min/max | Enable **Field min/max** to have Grafana calculate the min or max of each field individually, based on the minimum or maximum value of the field. |
| Decimals      | Specify the number of decimals Grafana includes in the rendered value.                                                                            |
| Display name  | Set the display title of all fields. You can use variables in the field title.                                                                    |
| Color scheme  | Set single or multiple colors for your entire visualization.                                                                                      |
| No value      | Enter what Grafana should display if the field value is empty or null. The default value is a hyphen (-).                                         |

To learn more, refer to [Configure standard options](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-standard-options/).

### Data links and actions

*Data links* allow you to link to other panels, dashboards, and external resources and *actions* let you trigger basic, unauthenticated, API calls.
In both cases, you can carry out these tasks while maintaining the context of the source panel.

For each data link, set the following options:

- **Title**
- **URL**
- **Open in new tab**
- **One click** - Opens the data link with a single click. Only one data link can have **One click** enabled at a time.

For each action, define the following API call settings:

| Option               | Description                                                                                                                                                                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title                | A human-readable label for the action that's displayed in the UI.                                                                                                                                                                           |
| Confirmation message | A descriptive prompt to confirm or cancel the action.                                                                                                                                                                                       |
| Connection           | Specify how the action's HTTP request is sent. Choose from: **Direct from browser** or routed through a configured data source.                                                                                                             |
| Method               | Select from **POST**, **PUT**, or **GET**.                                                                                                                                                                                                  |
| URL                  | The request URL.</p><p>To add a variable, click in the **URL** field and enter `$` or press Ctrl+Space or Cmd+Space to see a list of available variables.                                                                                   |
| Variables            | **Key** and **Name** pairs with a type selection. Click the **+** icon to add as many variables as you need. To add a variable to the request, prefix the key with `$`. You can set the values for the variables when performing an action. |
| Query parameters     | **Key** and **Value** pairs. Click the **+** icon to add as many key/value pairs as you need.                                                                                                                                               |
| Headers              | Comprised of **Key** and **Value** pairs and a **Content-Type**.</p><p>Click the **+** icon to add as many key/value pairs as you need.                                                                                                     |
| Content-Type         | Select from the following: **application/json**, **text/plain**, **application/XML**, and **application/x-www-form-urlencoded**.                                                                                                            |
| Body                 | The body of the request.                                                                                                                                                                                                                    |

To learn more, refer to [Configure data links and actions](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-data-links/).

### Value mappings

Value mapping is a technique you can use to change how data appears in a visualization.

For each value mapping, set the following options:

- **Condition** - Choose what's mapped to the display text and (optionally) color:
  - **Value** - Specific values
  - **Range** - Numerical ranges
  - **Regex** - Regular expressions
  - **Special** - Special values like `Null`, `NaN` (not a number), or boolean values like `true` and `false`
- **Display text**
- **Color** (Optional)
- **Icon** (Canvas only)

To learn more, refer to [Configure value mappings](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-value-mappings/).

### Thresholds

A threshold is a value or limit you set for a metric that’s reflected visually when it’s met or exceeded. Thresholds are one way you can conditionally style and color your visualizations based on query results.

For each threshold, set the following options:

| Option          | Description                                  |
| --------------- | -------------------------------------------- |
| Value           | Set the value for each threshold.            |
| Thresholds mode | Choose from **Absolute** and **Percentage**. |

To learn more, refer to [Configure thresholds](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-thresholds/).

### Field overrides

Overrides allow you to customize visualization settings for specific fields or series. When you add an override rule, it targets a particular set of fields and lets you define multiple options for how that field is displayed.

Choose from the following override options:

| Option                         | Description                                                                                                   |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| Fields with name               | Select a field from the list of all available fields.                                                         |
| Field with name matching regex | Specify fields to override with a regular expression.                                                         |
| Fields with type               | Select fields by type, such as string, numeric, or time.                                                      |
| Fields returned by query       | Select all fields returned by a specific query, such as A, B, or C.                                           |
| Fields with values             | Select all fields returned by your defined reducer condition, such as **Min**, **Max**, **Count**, **Total**. |

To learn more, refer to [Configure field overrides](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-overrides/).
