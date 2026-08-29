> Release-pinned source for Grafana v13.2.0: [docs/sources/visualizations/panels-visualizations/visualizations/stat/index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/visualizations/panels-visualizations/visualizations/stat/index.md)

# Stat

> **Note**
>
> This visualization replaces the Singlestat visualization, which was deprecated in Grafana 7.0 and removed in Grafana 8.0.

A stat visualization displays your data in single values of interest—such as the latest or current value of a series—with an optional graph sparkline. A graph sparkline, which is only available in stat visualizations, is a small time-series graph shown in the background of each value in the visualization.

For example, if you're monitoring the utilization of various services, you can use a stat visualization to show their latest usage:

![A stat panel showing latest usage of various services](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-stat-visualization-v11.3.png)

Use a stat visualization when you need to:

- Monitor key metrics at a glance, such as the latest health of your application, number of high priority bugs in your application, or total number of sales.
- Display aggregated data, such as the average response time of your services.
- Highlight values above your normal thresholds to quickly identify if any metrics are outside your expected range.

[Stat Visualizations in Grafana in Grafana Play](https://play.grafana.org/d/Zb3f4veGk/)

## Configure a stat visualization

Once you've [created a dashboard](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/create-dashboard/), the following video shows you how to configure a stat visualization:

[Watch the video on YouTube](https://www.youtube.com/watch?v=yNRnLyVntUw\&t=1048)

Alternatively, refer to this blog post on [how to easily retrieve values from a range in Grafana using a stat visualization](https://grafana.com/blog/2023/10/18/how-to-easily-retrieve-values-from-a-range-in-grafana-using-a-stat-panel/).

## Supported data formats

The stat visualization supports a variety of formats for displaying data. Supported formats include:

- **Single values** - The most common format and can be numerical, strings, or boolean values.
- **Time-series data** - [Calculation types](https://grafana.com/docs/grafana/v13.2/panels-visualizations/query-transform-data/calculation-types/) can be applied to your time-series data to display single values over a specified time range.

### Examples

The following tables are examples of the type of data you need for a stat visualization and how it should be formatted.

#### Single numerical values

| Number of high priority bugs |
| ---------------------------- |
| 80                           |
| 52                           |
| 59                           |
| 40                           |

The data is visualized as follows, with the last value displayed, along with a sparkline and [percentage change](#value-options):

![A stat panel showing the latest number of high priority bugs](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-stat-single-value-v11.3.png)

#### Time-series data

| Time                | Cellar | Living room | Porch | Bedroom | Guest room | Kitchen |
| ------------------- | ------ | ----------- | ----- | ------- | ---------- | ------- |
| 2024-03-20 06:34:40 | 12.3   | 18.3        | 18.8  | 15.9    | 9.29       | 9.61    |
| 2024-03-20 06:41:40 | 16.8   | 17.1        | 21.5  | 14.1    | 10.5       | 17.5    |
| 2024-03-20 06:48:40 | 16.7   | 18.0        | 21.0  | 9.51    | 13.6       | 20.1    |
| 2024-03-20 06:55:40 | 14.3   | 18.7        | 16.5  | 9.11    | 14.8       | 12.5    |
| 2024-03-20 07:02:40 | 12.8   | 15.2        | 21.1  | 15.6    | 7.98       | 13.0    |

The data is visualized as follows, with the mean value displayed for each room, along with the room name, sparkline, and unit of measurement:

![A stat panel showing some statistics for each room in square meters](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-stat-multiple-values-v11.3.png)

By default, a stat displays one of the following:

- Just the value for a single series or field.
- Both the value and name for multiple series or fields.

You can use the [**Text mode**](#text-mode) to control how the text is displayed.

## Configuration options

The following section describes the configuration options available in the panel editor pane for this visualization. These options are, as much as possible, ordered as they appear in Grafana.

### Panel options

In the **Panel options** section of the panel editor pane, set basic options like panel title and description, as well as panel links. To learn more, refer to [Configure panel options](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-panel-options/).

### Value options

Use the following options to refine how your visualization displays its values:

| Option      | Description                                                                                                                                                                                                                                                                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Show        | Display a single value per column or series, or show values for each row. Choose from: <ul><li>**Calculate** - Display a calculated value based on all rows.</li><li>**All values** - Show a separate stat for every row. If you select this option, then you can also limit the number of rows to display.</li>                                   |
| Calculation | This option is displayed when you select **Calculate** as your **Show** option. Select a reducer function that Grafana will use to reduce many fields to a single value. For a list of available calculations, refer to [Calculation types](https://grafana.com/docs/grafana/v13.2/panels-visualizations/query-transform-data/calculation-types/). |
| Limit       | This option is displayed when you select **All values** as your **Show** option. Set the maximum number of rows to display. The default is 25 and the maximum is 5,000.                                                                                                                                                                            |
| Fields      | Select the fields displayed in the visualization.                                                                                                                                                                                                                                                                                                  |

### Stat styles

The stat visualization automatically adjusts the layout depending on available width and height in the dashboard, but you can also use the following options to further style the visualization.

| Option                      | Description                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Orientation                 | Select the stat tile layout. Choose from: <ul><li>**Auto** - Grafana selects the ideal orientation.</li><li>**Horizontal** - Stat tiles are arranged left to right.</li><li>**Vertical** - Stat tiles are arranged top to bottom.</li></ul>                                                                                                                                                                     |
| [Text mode](#text-mode)     | You can use the **Text mode** option to control what text the visualization renders. If the value is not important, only the name and color is, then change the **Text mode** to **Name**. The value will still be used to determine color and is displayed in a tooltip.                                                                                                                                       |
| [Wide layout](#wide-layout) | Set whether wide layout is enabled or not. Wide layout is enabled by default. This option is only applicable when **Text mode** is set to **Value and name**.                                                                                                                                                                                                                                                   |
| Color mode                  | Select a color mode. Choose from: <ul><li>**None** - No color applied to the value.</li><li>**Value** - Applies color to the value and graph area.</li><li>**Background Gradient** - Applies color to the value, graph area, and background, with a slight background gradient.</li><li>**Background Solid** - Applies color to the value, graph area, and background, with a solid background color.</li></ul> |
| Graph mode                  | Select a graph sparkline mode. Choose from: <ul><li>**None** - Hides the graph sparkline and only shows the value.</li><li>**Area** - Shows the graph sparkline in the background of the value. This requires that your query returns a time column.</li></ul> The graph sparkline is automatically hidden if the panel becomes too small.                                                                      |
| Text alignment              | Select an alignment mode. Choose from: <ul><li>**Auto** - If only a single value is shown (no repeat), then the value is centered. If multiple series or rows are shown, then the value is left-aligned.</li><li>**Center** - Stat value is centered.</li></ul>                                                                                                                                                 |
| Show percent change         | Set whether percent change is displayed or not. Disabled by default. This option is applicable when the **Show** setting, under **Value options**, is set to **Calculate**.                                                                                                                                                                                                                                     |
| Percent change color mode   | This option is only displayed when **Show percent change** is enabled. Choose from: <ul><li>**Standard** - Green if the percent change is positive, red if the percent change is negative.</li><li>**Inverted** - Red if the percent change is positive, green if the percent change is negative.</li><li>**Same as Value** - Use the same color as the value.</li></ul>                                        |

#### Text mode

You can use the Text mode option to control what text the visualization renders. If the value is not important, only the name and color is, then change the **Text mode** to **Name**. The value will still be used to determine color and is displayed in a tooltip.

- **Auto** - If the data contains multiple series or fields, show both name and value. Grafana also shows both name and value when the panel has no title or the field has a display name.
- **Value** - Show only value, never name. Name is displayed in the hover tooltip instead.
- **Value and name** - Always show value and name.
- **Name** - Show name instead of value. Value is displayed in the hover tooltip.
- **None** - Show nothing (empty). Name and value are displayed in the hover tooltip.

#### Wide layout

Set whether wide layout is enabled or not. Wide layout is enabled by default.

- **On** - Wide layout is enabled.
- **Off** - Wide layout is disabled.

This option is only applicable when **Text mode** is set to **Value and name**. When wide layout is enabled, the value and name are displayed side-by-side with the value on the right, if the panel is wide enough. When wide layout is disabled, the value is always rendered underneath the name.

### Text size

Adjust the sizes of the stat text.

- **Title** - Enter a numeric value for the stat title size.
- **Value** - Enter a numeric value for the stat value size.
- **Percent change** - Enter a numeric value for the percent change size when **Show percent change** is enabled.

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
To learn more, refer to [Configure data links and actions](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-data-links/).

> **Note**
>
> Actions are not supported for this visualization.

For each data link, set the following options:

- **Title**
- **URL**
- **Open in new tab**

Data links for this visualization don't include the **One click** switch, however, if there's only one data link configured, that data link has single-click functionality.
If multiple data links are configured, then clicking the visualization opens a menu that displays all the data links.

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
