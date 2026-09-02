> Release-pinned source for Grafana v13.2.1: [docs/sources/visualizations/panels-visualizations/visualizations/histogram/index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/visualizations/panels-visualizations/visualizations/histogram/index.md)

# Histogram

Histograms calculate the distribution of values and present them as a bar chart. Each bar represents a bucket; the y-axis and the height of each bar represent the count of values that fall into each bucket, and the x-axis represents the value range.

For example, if you want to understand the distribution of people's heights, you can use a histogram visualization to identify patterns or insights in the data distribution:

![A histogram visualization showing the distribution of people's heights](https://grafana.com/static/img/docs/histogram-panel/histogram-example-v8-0.png)

You can use a histogram visualization if you need to:

- Visualize and analyze data distributions over a specific time range to see how frequently certain values occur.
- Identify any outliers in your data distribution.
- Provide statistical analysis to help with decision-making

## Configure a histogram visualization

After you've created a [dashboard](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/create-dashboard/), the following video shows you how to configure a histogram visualization:

[Watch the video on YouTube](https://www.youtube.com/watch?v=QfJ480j9-KM)

[Histogram Examples in Grafana Play](https://play.grafana.org/d/histogram_tests/)

## Supported data formats

Histograms support time series and any table results with one or more numerical fields.
If a data source returns pre-calculated histogram buckets, Grafana renders the supplied frequencies instead of calculating buckets in the panel.

### Examples

The following tables are examples of the type of data you need for a histogram visualization and how it should be formatted.

#### Time-series table

| Time                | Walking (km) |
| ------------------- | ------------ |
| 2024-03-25 21:13:09 | 37.2         |
| 2024-03-25 21:13:10 | 37.1         |
| 2024-03-25 21:13:10 | 37.0         |
| 2024-03-25 21:13:11 | 37.2         |
| 2024-03-25 21:13:11 | 36.9         |
| 2024-03-25 21:13:12 | 36.7         |
| 2024-03-25 21:13:13 | 36.3         |

The data is converted as follows:

![A histogram visualization showing the random walk distribution.](https://grafana.com/static/img/docs/histogram-panel/histogram-example-time-series.png)

#### Basic numerical table

| Gender | Height (in) | Weight (lbs) |
| ------ | ----------- | ------------ |
| Male   | 73.8        | 242          |
| Male   | 68.8        | 162          |
| Male   | 74.1        | 213          |
| Male   | 71.7        | 220          |
| Male   | 69.9        | 206          |
| Male   | 67.3        | 152          |
| Male   | 68.8        | 184          |

The data is converted as follows:

![A histogram visualization showing the male height and weight distribution](https://grafana.com/static/img/docs/histogram-panel/histogram-example-height-weight.png)

## Configuration options

The following section describes the configuration options available in the panel editor pane for this visualization. These options are, as much as possible, ordered as they appear in Grafana.

### Panel options

In the **Panel options** section of the panel editor pane, set basic options like panel title and description, as well as panel links. To learn more, refer to [Configure panel options](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-panel-options/).

### Histogram options

Use the following options to refine your histogram visualization.
When the query data is already a histogram frame, the bucket options are read-only and Grafana shows frequencies calculated by the query.

| Option                          | Description                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Bucket count                    | Specifies the number of bins used to group your data in the histogram, affecting the granularity of the displayed distribution. Leave this empty for automatic bucket count of 30.                                                                                                                                                                                                   |
| Bucket size                     | The size of the buckets. Leave this empty for automatic bucket sizing (\~10% of the full range).                                                                                                                                                                                                                                                                                     |
| [Bucket offset](#bucket-offset) | If the first bucket should not start at zero. A non-zero offset has the effect of shifting the aggregation window.                                                                                                                                                                                                                                                                   |
| Combine series                  | This will merge all series and fields into a combined histogram.                                                                                                                                                                                                                                                                                                                     |
| Stacking                        | Controls how multiple series are displayed in the histogram. Choose from the following:<ul><li>**Off** - Series are not stacked, but instead shown side by side.</li><li>**Normal** - Series are stacked on top of each other, showing cumulative values.</li><li>**100%** - Series are stacked to fill 100% of the chart, showing the relative proportion of each series.</li></ul> |
| Line width                      | Controls line width of the bars.                                                                                                                                                                                                                                                                                                                                                     |
| Fill opacity                    | Controls the fill opacity bars.                                                                                                                                                                                                                                                                                                                                                      |
| [Gradient mode](#gradient-mode) | Set the mode of the gradient fill. Fill gradient is based on the line color.                                                                                                                                                                                                                                                                                                         |

#### Bucket offset

If the first bucket should not start at zero, a non-zero offset has the effect of shifting the aggregation window.

For example, 5-sized buckets that are 0-5, 5-10, 10-15 with a default 0 offset would become 2-7, 7-12, 12-17 with an offset of 2; offsets of 0, 5, or 10, in this case, would effectively do nothing.

Typically, this option would be used with an explicitly defined bucket size rather than automatic. For this setting to affect, the offset amount should be greater than 0 and less than the bucket size; values outside this range have the same effect as values within this range.

#### Gradient mode

Set the mode of the gradient fill. Fill gradient is based on the line color. To change the color, use the standard [color scheme](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-standard-options/#color-scheme) field option.

Gradient display is influenced by the **Fill opacity** setting.

Choose from the following:

- **None** - No gradient fill. This is the default setting.
- **Opacity** - Transparency of the gradient is calculated based on the values on the Y-axis. The opacity of the fill is increasing with the values on the Y-axis.
- **Hue** - Gradient color is generated based on the hue of the line color.
- **Scheme** - The selected [color palette](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-standard-options/#color-scheme) is applied to the histogram bars.

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

Data links allow you to link to other panels, dashboards, and external resources while maintaining the context of the source panel.
You can create links that include the series name or even the value under the cursor.

> **Note**
>
> Actions are not supported for this visualization.

For each data link, set the following options:

- **Title**
- **URL**
- **Open in new tab**

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
