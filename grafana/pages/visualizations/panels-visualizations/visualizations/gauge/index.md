> Release-pinned source for Grafana v13.2.0: [docs/sources/visualizations/panels-visualizations/visualizations/gauge/index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/visualizations/panels-visualizations/visualizations/gauge/index.md)

# Gauge

Gauges are single-value visualizations that allow you to quickly visualize where a value falls within a defined or calculated min and max range. With repeat options, you can display multiple gauges, each corresponding to a different series, column, or row.

![A gauge visualization](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-gauge-visualization-v13.0.png)

You can use gauges if you need to track:

- Service level objectives (SLOs)
- How full a piece of equipment is
- How fast a vehicle is moving within a set of limits
- Network latency
- Equipment state with set point and alarm thresholds
- CPU consumption (0-100%)
- RAM availability

## Configure a gauge visualization

The following video provides beginner steps for creating gauge panels. You'll learn the data requirements and caveats, special customizations, and much more:

[Watch the video on YouTube](https://www.youtube.com/watch?v=S3qJ1cuWHkI)

[Grafana Gauge Visualization in Grafana Play](https://play.grafana.org/d/KIhkVD6Gk/)

## Supported data formats

To create a gauge visualization you need a dataset containing at least one numeric field. These values are identified by the field name. Additional text fields aren't required but can be used for identification and labeling.

### Example - One row, multiple values

The gauge visualization can support multiple fields in a dataset.

| value1 | value2 | value3 |
| ------ | ------ | ------ |
| 5      | 3      | 10     |

![Gauge visualization with multiple numeric values in a single row](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-gauge-1-row-many-vals-v13.0.png)

When there are multiple values in the dataset, the visualization displays multiple gauges and automatically defines the minimum and maximum. In this case, those are 3 and 10. Because the minimum and maximum values are defined, each gauge is shaded in to show that value in relation to the minimum and maximum.

### Example - Multiple rows and values

The gauge visualization can display datasets with multiple rows of data or even multiple datasets.

| Identifier | value1 | value2 | value3 |
| ---------- | ------ | ------ | ------ |
| A          | 5      | 3      | 10     |
| B          | 6      | 9      | 15     |
| C          | 1      | 4      | 8      |

![Gauge visualization with multiple rows and columns of numeric values showing the last row](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-gauge-multi-rows-values-v13.0.png)

By default, the visualization [calculates](#value-options) a single value per column or series and displays only the last row of data. However, it derives the minimum and maximum from the full dataset, even if those values aren't visible.

In this example, that means only the last row of data, row C, is displayed in the gauges and the minimum and maximum values are 1 and 15. The value 1 is displayed because it's in the last row, while 15 is not.

If you want to show one gauge per table cell, under **Value options**, change the **Show** setting from **Calculate** to **All values**. Each gauge label is a concatenation of the text column with each value's column name.

![Gauge visualization with multiple rows and columns of numeric values showing all the values](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-multi-rows-values-show-all-v13.0.png)

### Example - Control min and max

You can control the minimum and maximum values by defining them directly in your dataset.
This is an alternative to setting it manually in the field options.

| value | max | min |
| ----- | --- | --- |
| 5     | 10  | 2   |

![Gauge visualization with numeric values defining max and minimum](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-gauge-defined-min-max-v13.0.png)

In this example, to hide the min and max fields, select the "value" field in **Value options > Fields**.

![Gauge visualization with numeric values defining max and minimum but hidden](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-gauge-hidden-min-max-v13.0.png)

Even when minimum and maximum values aren't displayed, the visualization still pulls the range from them.

## Configuration options

The following section describes the configuration options available in the panel editor pane for this visualization. These options are, as much as possible, ordered as they appear in Grafana.

### Panel options

In the **Panel options** section of the panel editor pane, set basic options like panel title and description, as well as panel links. To learn more, refer to [Configure panel options](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-panel-options/).

### Value options

Use the following options to refine how your visualization displays the value:

| Option      | Description                                                                                                                                                                                                                                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Show        | Set how Grafana displays your data. Choose from:<ul><li>**Calculate** - Show a calculated value based on all rows.</li><li>**All values** - Show a separate value for every row. If you select this option, then you can also limit the number of rows to display.</li></ul>                                           |
| Calculation | If you chose **Calculate** as your **Show** option, select a reducer function that Grafana will use to reduce many fields to a single value. For a list of available calculations, refer to [Calculation types](https://grafana.com/docs/grafana/v13.2/panels-visualizations/query-transform-data/calculation-types/). |
| Limit       | If you chose **All values** as your **Show** option, enter the maximum number of rows to display. The default is 25 and the maximum is 5,000.                                                                                                                                                                          |
| Fields      | Select the fields display in the panel.                                                                                                                                                                                                                                                                                |

### Gauge options

Adjust how the gauge is displayed.

| Option                            | Description                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Style                             | Choose a gauge shape:<ul><li>**Circle** - Fills clockwise around a circle, starting from the 12 o'clock position.</li><li>**Arc** - Fills from left to right around an arc.</li></ul>                                                                                                                                                                                                                                    |
| Orientation                       | Choose a stacking direction:<ul><li>**Auto** - Gauges display in rows and columns.</li><li>**Horizontal** - Gauges display top to bottom.</li><li>**Vertical** - Gauges display left to right.</li></ul>                                                                                                                                                                                                                 |
| Gauge size                        | Choose a gauge size mode:<ul><li>**Auto** - Grafana determines the best gauge size.</li><li>**Manual** - Manually configure the gauge size.</li></ul>This option only applies when **Orientation** is set to **Horizontal** or **Vertical**.                                                                                                                                                                             |
| Min width                         | Set the minimum width of vertically oriented gauges. If you set a minimum width, the x-axis scroll bar is automatically displayed when there's a large amount of data. This option only applies when **Gauge orientation** is **Vertical** and **Gauge size** is set to **Manual**.                                                                                                                                      |
| Min height                        | Set the minimum height of horizontally oriented gauges. If you set a minimum height, the y-axis scroll bar is automatically displayed when there's a large amount of data. This option only applies when **Gauge orientation** is **Horizontal** and **Gauge size** is set to **Manual**.                                                                                                                                |
| Bar width factor                  | Set a factor between 0.1 and 1 to control the width of the gauge bar relative to the total gauge area.                                                                                                                                                                                                                                                                                                                   |
| Segments                          | Enter a value between 1 and 100 to break the gauge into equal segments. Segments are always fully filled, even if the gauge's current value falls within a segment.                                                                                                                                                                                                                                                      |
| Bar style                         | Choose the shape of the gauge bar. Choose from **Flat** or **Rounded**. Only applies if **Segments** is set to `1`. Note: All segmented gauges are flat.                                                                                                                                                                                                                                                                 |
| Segment spacing                   | Enter a value between 0 and 1 to set the factor that controls the size of the gap between each segment. This option is only applies when the **Segments** value is more than `1`.                                                                                                                                                                                                                                        |
| Text mode                         | Choose what text to render in the gauge:<ul><li>**Auto** - Grafana determines the text to show.</li><li>**Value and name** - Renders both the value and series name.</li><li>**Value** - Renders only the value.</li><li>**Name** - Renders only the series name.</li><li>**None** - Renders the gauge with no labels.</li></ul>                                                                                         |
| [Neutral value](#neutral-value)   | Set the starting value from which every gauge will be filled.                                                                                                                                                                                                                                                                                                                                                            |
| [Show sparkline](#show-sparkline) | Toggle on the switch to render a sparkline containing the series data for the gauge. This option is on by default.                                                                                                                                                                                                                                                                                                       |
| Show thresholds                   | Control whether a threshold band is shown outside the inner gauge value band.                                                                                                                                                                                                                                                                                                                                            |
| Show labels                       | Control whether threshold and neutral labels are shown outside of the gauge.                                                                                                                                                                                                                                                                                                                                             |
| Endpoint marker                   | Choose how to mark the current value endpoint. Choose from **Point**, **Glow**, or **None**. **Glow** is available only in dark mode. This option only applies when the **Bar style** is **Rounded**.                                                                                                                                                                                                                    |
| Effects                           | Other styling choices you can apply to your gauge include: <ul><li>**Gradient** - Color transitions are represented with gradients for color schemes where the gauge color differs by value. This effect is on by default.</li><li>**Bar glow** - Adds a glowing shadow outside the gauge bar.</li><li>**Center glow** - The color representing the current gauge value is visible in the center of the gauge.</li></ul> |

#### Neutral value

By default, the starting value of a gauge is the minimum value, not zero.
You can change the starting value from which every gauge will be filled when you don't want it to be the minimum value.
This option is especially useful in cases where the range of data values includes negative numbers.
If you leave this empty, Grafana uses the configured minimum value.

For example, you want to display the storage of several batteries and the power range is from -2.5 kW (discharging) to 2.5 kW.
When the minimum value is used as the starting point for the gauges, the visualization looks like this:

![Gauge using min as neutral](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-gauge-neutral-min-v13.0.png)

If you enter a neutral value of `0`, the visualization looks like this and is easier to reason about:

![Gauge with zero as neutral](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-gauge-neutral-0-v13.0.png)

#### Show sparkline

If you want to visualize the list of values as a time series along with the calculated gauge value, toggle on the **Show sparkline** switch.
Each gauge displays the sparkline inside the circle or arc:

![Gauge with a sparkline](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-gauge-w-sparkline-v12.4.png)

#### Show thresholds {#show-threshold-markers}

Control whether a threshold band is shown outside the inner gauge value band.

![Gauge viz with multiple rows and columns of numeric values showing all the values and thresholds defined for 0-6-11](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-gauge-w-thresholds-v13.0.png)

### Text size options {#text-size}

Adjust the sizes of the gauge text.

- **Title** - Enter a numeric value for the gauge title size.
- **Value** - Enter a numeric value for the gauge value size.

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
