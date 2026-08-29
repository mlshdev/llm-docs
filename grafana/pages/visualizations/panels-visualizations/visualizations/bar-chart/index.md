> Release-pinned source for Grafana v13.2.0: [docs/sources/visualizations/panels-visualizations/visualizations/bar-chart/index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/visualizations/panels-visualizations/visualizations/bar-chart/index.md)

# Bar chart

A bar chart is a visual representation that uses rectangular bars, where the length of each bar represents each value.
You can use the bar chart visualization when you want to compare values over different categories or time periods. The visualization can display the bars horizontally or vertically, and can be customized to group or stack bars for more complex data analysis.

![Bar chart visualizations](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-bar-charts-v11.3.png)

You can use the bar chart visualization if you need to show:

- Population distribution by age or location
- CPU usage per application
- Sales per division
- Server cost distribution

## Configure a bar chart

The following video shows you how to create and configure a bar chart visualization:

[Watch the video on YouTube](https://www.youtube.com/watch?v=qyKE9-71KkE)

[Grafana Bar Charts and Pie Charts in Grafana Play](https://play.grafana.org/d/ktMs4D6Mk/)

## Supported data formats

To create a bar chart visualization, you need a dataset containing one string or time field (or column) and at least one numeric field, though preferably more than one to make best use of the visualization.

The text or time field is used to label the bars or values in each row of data and the numeric fields are represented by proportionally sized bars.

### Example 1

| Group | Value1 | Value2 | Value3 |
| ----- | ------ | ------ | ------ |
| uno   | 5      | 3      | 2      |

![Bar chart single row example](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-grafana-11.1-barchart-example1.png "Bar chart single row example")

If you have more than one text or time field, by default, the visualization uses the first one, but you can change this in the x-axis option as described in the [Bar chart options](#bar-chart-options) section.

### Example 2

If your dataset contains multiple rows, the visualization displays multiple bar chart groups where each group contains multiple bars representing all the numeric values for a row.

| Group | Value1 | Value2 | Value3 |
| ----- | ------ | ------ | ------ |
| uno   | 5      | 3      | 2      |
| dos   | 10     | 6      | 4      |
| tres  | 20     | 8      | 2      |

![Bar chart multiple row example](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-grafana-11.1-barchart-example2.png "Bar chart multiple row example")

While the first field can be time-based and you can use a bar chart to plot time-series data, for large amounts of time-series data, we recommend that you use the [time series visualization](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/time-series/) and configure it to be displayed as bars.

We recommend that you only use one dataset in a bar chart because using multiple datasets can result in unexpected behavior.

## Apply filters from the bar chart

In bar charts, you can apply filters directly from the visualization.
Filters are available when the x-axis field is filterable and the data source supports dashboard drilldown filters, such as Prometheus or Loki.

To display the filter button, hover your cursor over the bar that has the value for which you want to filter and click the bar:

![The filter button in a bar chart tooltip](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-adhoc-filter-icon-bar-v12.2.png)

For more information about applying filters this way, refer to [Cross-filtering](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/build-dashboards/filter-group-by/#dashboard-drilldown-with-filters).

## Transform override property

Use the **Graph styles > Transform** [override property](#field-overrides) to transform series values without affecting the values shown in the tooltip, context menu, or legend. Choose from the following transform options:

- **Constant** - Show the first value as a constant line.
- **Negative Y transform** - Flip the results to negative values on the y-axis.

## Configuration options

The following section describes the configuration options available in the panel editor pane for this visualization. These options are, as much as possible, ordered as they appear in Grafana.

### Panel options

In the **Panel options** section of the panel editor pane, set basic options like panel title and description, as well as panel links. To learn more, refer to [Configure panel options](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-panel-options/).

### Bar chart options

Use these options to refine your visualization.

| Option                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| X Axis                          | Specify which field is used for the x-axis.                                                                                                                                                                                                                                                                                                                                                                                          |
| Orientation                     | Choose from: <ul><li>**Auto** - Grafana decides the bar orientation based on the panel dimensions.</li><li>**Horizontal** - Will make the X axis the category axis.</li><li>**Vertical** - Will make the Y axis the category axis.</li></ul>                                                                                                                                                                                         |
| Rotate x-axis tick labels       | When the graph is vertically oriented, this setting rotates the labels under the bars. This setting is useful when bar chart labels are long and overlap.                                                                                                                                                                                                                                                                            |
| X-axis tick label max length    | Sets the maximum length of bar chart labels. Labels longer than the maximum length are truncated, and appended with `...`. This option is available when **Rotate x-axis tick labels** isn't `0`.                                                                                                                                                                                                                                    |
| X-axis labels minimum spacing   | Sets the minimum spacing between x-axis labels. Depending on your choice, you can select the **RTL** checkbox to require space from the right side. Choose from: <ul><li>**None** - All tick marks are shown.</li><li>**Small** - 100 pixels of space is required between labels.</li><li>**Medium** - 200 pixels of space is required between labels.</li><li>**Large** - 300 pixels of space is required between labels.</li></ul> |
| Show values                     | This controls whether values are shown. Values are shown on top or to the left of bars. Choose from: <ul><li>**Auto** Values will be shown if there is space.</li><li>**Always** Always show values.</li><li>**Never** Never show values.</li></ul>                                                                                                                                                                                  |
| Stacking                        | Controls bar chart stacking. Choose from: <ul><li>**Off**: Bars will not be stacked.</li><li>**Normal**: Bars will be stacked on each other.</li><li>**100%**: Bars will be stacked on each other, and the height of each bar is the percentage of the total height of the stack.</li></ul>                                                                                                                                          |
| Group width                     | Controls the width of groups. 1 = Max width, 0 = Min width. This option is hidden when stacking is enabled or when the chart has only one numeric field.                                                                                                                                                                                                                                                                             |
| Bar width                       | Controls the width of bars. 1 = Max width, 0 = Min width.                                                                                                                                                                                                                                                                                                                                                                            |
| Bar radius                      | Controls the radius of the bars. Choose from: <ul><li>0 = Minimum radius</li><li>0.5 = Maximum radius</li></ul>                                                                                                                                                                                                                                                                                                                      |
| Highlight full area on hover    | Controls if the entire surrounding area of the bar is highlighted when you hover over the bar. This option is available only when **Stacking** is **Off**.                                                                                                                                                                                                                                                                           |
| Color by field                  | Use the color value for a sibling field to color each bar value.                                                                                                                                                                                                                                                                                                                                                                     |
| Line width                      | Controls line width of the bars. This is a field option and can be set in field defaults or overrides.                                                                                                                                                                                                                                                                                                                               |
| Fill opacity                    | Controls the fill opacity of bars. This is a field option and can be set in field defaults or overrides.                                                                                                                                                                                                                                                                                                                             |
| [Gradient mode](#gradient-mode) | Set the mode of the gradient fill. Fill gradient is based on the line color. To change the color, use the standard color scheme field option. Gradient appearance is influenced by the **Fill opacity** setting. This is a field option and can be set in field defaults or overrides.                                                                                                                                               |

#### Gradient mode

Set the mode of the gradient fill. Fill gradient is based on the line color. To change the color, use the standard color scheme field option. Gradient appearance is influenced by the **Fill opacity** setting. Choose from:

- **None** - No gradient fill. This is the default setting.
- **Opacity** - Transparency of the gradient is calculated based on the values on the y-axis. Opacity of the fill is increasing with the values on the Y-axis.
- **Hue** - Gradient color is generated based on the hue of the line color.
- **Scheme** - The bar receives a gradient color defined by the **Standard options > Color scheme** selection.
  - **From thresholds** - If the **Color scheme** selection is **From thresholds (by value)**, then each bar is the color of the defined threshold.

![Color scheme From thresholds](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-colors-by-thresholds-v11.3.png)

```
_Color scheme: From thresholds_
```

- **Gradient color schemes** - The following image shows a bar chart with the **Green-Yellow-Red (by value)** color scheme option selected.

![Color scheme Green-Yellow-Red](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-colors-by-value-v11.3.png)

```
_Color scheme: Green-Yellow-Red_
```

### Tooltip options

Tooltip options control the information overlay that appears when you hover over data points in the visualization.

| Option                                  | Description                                                                                                                                                                            |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Tooltip mode](#tooltip-mode)           | When you hover your cursor over the visualization, Grafana can display tooltips. Choose how tooltips behave.                                                                           |
| [Values sort order](#values-sort-order) | This option controls the order in which values are listed in a tooltip.                                                                                                                |
| Hide zeros                              | When you set the **Tooltip mode** to **All**, the **Hide zeros** option is displayed. This option controls whether or not series with `0` values are shown in the list in the tooltip. |
| Max width                               | Set the maximum width of the tooltip box.                                                                                                                                              |
| Max height                              | Set the maximum height of the tooltip box. The default is 600 pixels.                                                                                                                  |

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

### Legend options

Legend options control the series names and statistics that appear under or to the right of the graph. For more information about the legend, refer to [Configure a legend](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-legend/).

| Option     | Description                                                                                                                                                                                                                                                                                                                                        |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Visibility | Toggle the switch to turn the legend on or off.                                                                                                                                                                                                                                                                                                    |
| Mode       | Use these settings to define how the legend appears in your visualization. **List** displays the legend as a list. This is a default display mode of the legend. **Table** displays the legend as a table.                                                                                                                                         |
| Placement  | Choose where to display the legend. **Bottom** places the legend below the graph. **Right** places the legend to the right of the graph.                                                                                                                                                                                                           |
| Width      | Control how wide the legend is when placed on the right side of the visualization. The value may be a basic pixel width or a more complex [CSS width property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/width) such as `max(200px, 20%)`. This option is only displayed if you set the legend placement to **Right**. |
| Limit      | Limit how many series items are shown by default. The rest become expandable using a **Show all** link.                                                                                                                                                                                                                                            |
| Values     | Choose which of the [standard calculations](https://grafana.com/docs/grafana/v13.2/panels-visualizations/query-transform-data/calculation-types/) to show in the legend. You can have more than one.                                                                                                                                               |
| Overflow   | Control how overflow for long series names is handled. **Ellipsis** truncates the series names with "..." at the end. **Wrap** word-wraps the series names to multiple lines. This option is only displayed if you set the legend placement to **Right** and mode is **Table**.                                                                    |

### Text size

Enter a **Value** to change the size of the text on your bar chart.

### Axis

Use the following field settings to refine how your axes display.

For guidance on configuring more than one y-axis, refer to [Multiple y-axes](#multiple-y-axes).

Some field options will not affect the visualization until you click outside of the field option box you are editing or press Enter.

| Option                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Placement                                       | Select the placement of the Y-axis. Choose from: <ul><li>**Auto** - Grafana automatically assigns Y-axis to the series. When there are two or more series with different units, then Grafana assigns the left axis to the first unit and right to the following units.</li><li>**Left** - Display all Y-axes on the left side.</li><li>**Right** - Display all Y-axes on the right side.</li><li>**Hidden** - Hide all axes. To selectively hide axes, [add a field override](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-overrides/#add-a-field-override) that targets specific fields.</li></ul> |
| Label                                           | Set a Y-axis text label. If you have more than one Y-axis, then you can assign different labels with an override.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Width                                           | Set a fixed width of the axis. By default, Grafana dynamically calculates the width of an axis.<br></br>By setting the width of the axis, data whose axes types are different can share the same display proportions. This makes it easier to compare more than one graph’s worth of data because the axes are not shifted or stretched within visual proximity of each other.                                                                                                                                                                                                                                                |
| Show grid lines                                 | Set whether grid lines are displayed in the chart. Choose from: <ul><li>**Auto** - Grafana automatically determines whether grid lines are displayed.</li><li>**On** - Grid lines are always displayed.</li><li>**Off** - Grid lines are never displayed</li></ul>                                                                                                                                                                                                                                                                                                                                                            |
| Color                                           | Choose whether the axis color is the **Text** or **Series** color.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Show border                                     | Toggle the switch to hide or display the border.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Scale                                           | Set how the y-axis is split. Choose from: <ul><li>**Linear**</li><li>**Logarithmic** - Choose between log base 2 or log base 10.</li><li>**Symlog** - Uses a symmetrical logarithmic scale. Choose between log base 2 or log base 10, allowing for negative values.</li></ul>                                                                                                                                                                                                                                                                                                                                                 |
| Centered zero                                   | Set the y-axis so it's centered on zero.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [Soft min and soft max](#soft-min-and-soft-max) | Set a **Soft min** or **soft max** option for better control of Y-axis limits. By default, Grafana sets the range for the Y-axis automatically based on the dataset.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

#### Soft min and soft max

Set a **Soft min** or **soft max** option for better control of Y-axis limits. By default, Grafana sets the range for the Y-axis automatically based on the dataset.

**Soft min** and **soft max** settings can prevent blips from turning into mountains when the data is mostly flat, and hard min or max derived from standard min and max field options can prevent intermittent spikes from flattening useful detail by clipping the spikes past a defined point.

You can set standard min/max options to define hard limits of the Y-axis. For more information, refer to [Standard options definitions](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-standard-options/#max).

# Multiple y-axes

In some cases, you might want to display multiple y-axes. For example, if you have a dataset showing both temperature and humidity over time, you might want to show two y-axes with different units for the two series.

You can configure multiple y-axes and control where they're displayed in the visualization by adding field overrides. [This example of a dataset that includes temperature and humidity](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-overrides/#example-2-format-temperature-and-humidity) describes how you can configure that. Repeat the steps for every y-axis you wish to display.

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

| Option          | Description                                                                          |
| --------------- | ------------------------------------------------------------------------------------ |
| Value           | Set the value for each threshold.                                                    |
| Thresholds mode | Choose from **Absolute** and **Percentage**.                                         |
| Show thresholds | Choose from a variety of display options including not displaying thresholds at all. |

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
