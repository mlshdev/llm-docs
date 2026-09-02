> Release-pinned source for Grafana v13.2.1: [docs/sources/visualizations/panels-visualizations/visualizations/heatmap/index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/visualizations/panels-visualizations/visualizations/heatmap/index.md)

# Heatmap

Heatmaps allow you to view [histograms](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/histogram/) over time. While histograms display the data distribution that falls in a specific value range, heatmaps allow you to identify patterns in the histogram data distribution over time. For more information about heatmaps, refer to [Introduction to histograms and heatmaps](https://grafana.com/docs/grafana/v13.2/fundamentals/intro-histograms/).

For example, if you want to understand the temperature changes for the past few years, you can use a heatmap visualization to identify trends in your data:

![A heatmap visualization showing the random walk distribution over time](https://grafana.com/static/img/docs/heatmap-panel/temperature_heatmap.png)

[Grafana Heatmaps in Grafana Play](https://play.grafana.org/d/heatmap-calculate-log/)

You can use a heatmap visualization if you need to:

- Visualize a large density of your data distribution.
- Condense large amounts of data through various color schemes that are easier to interpret.
- Identify any outliers in your data distribution.
- Provide statistical analysis to see how values or trends change over time.

## Configure a heatmap visualization

Once you’ve created a [dashboard](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/create-dashboard/), the following video shows you how to configure a heatmap visualization:

[Watch the video on YouTube](https://www.youtube.com/watch?v=SGWBzQ54koE)

## Supported data formats

Heatmaps support time series data.

### Example

The table below is a simplified output of random walk distribution over time:

| Time                | Walking (km) |
| ------------------- | ------------ |
| 2023-06-25 21:13:09 | 10           |
| 2023-08-25 21:13:10 | 8            |
| 2023-08-30 21:13:10 | 10           |
| 2023-10-08 21:13:11 | 12           |
| 2023-12-25 21:13:11 | 14           |
| 2024-01-05 21:13:12 | 13           |
| 2024-02-22 21:13:13 | 10           |

The data is converted as follows:

![A heatmap visualization showing the random walk distribution over time](https://grafana.com/static/img/docs/heatmap-panel/heatmap.png)

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

### Heatmap options

The following options control how data in the heatmap is calculated and grouped.

| Options             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Calculate from data | This setting determines if the data is already a calculated heatmap (from the data source/transformer), or one that should be calculated in the panel.                                                                                                                                                                                                                                                                                                                                                                                                 |
| X Bucket            | This setting determines how the x-axis is split into buckets. You can specify a time interval in the **Size** input. For example, a time range of `1h` makes the cells 1-hour wide on the x-axis. You can also set an interval based on **Count**.                                                                                                                                                                                                                                                                                                     |
| Y Bucket            | This setting determines how the y-axis is split into buckets. Choose from **Size** or **Count**.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Y Bucket scale      | When **Calculate from data** is **Yes**. Select one of the following y-axis value scales:<ul><li>**Linear** - Linear scale.</li><li>**Logarithmic** - Choose a **Log base** of **2** or **10**.</li><li>**Symlog** - Symlog scale. Choose a **Log base** of **2** or **10** and enter a value for the **Linear threshold**.</li></ul>                                                                                                                                                                                                                  |
| Y Bucket scale      | When **Calculate from data** is **No**. Set the y-axis scale for pre-bucketed data in the wide, one-field-per-bucket data structure (not available when the response uses the heatmap-cells data frame type). Choose from:<ul><li>**Auto** - Uses the default scale behavior.</li><li>**Linear** - Linear scale.</li><li>**Log** - Logarithmic scale. Choose a **Log base** of **2** or **10**.</li><li>**Symlog** - Symmetrical logarithmic scale. Choose a **Log base** of **2** or **10** and enter a value for the **Linear threshold**.</li></ul> |

### Y-Axis options

The following options define the display of the y-axis.

| Options        | Description                                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Placement      | Set where the y-axis is displayed. Choose from: **Left**, **Right**, or **Hidden**.                                                                                                                                                                           |
| Unit           | Unit configuration.                                                                                                                                                                                                                                           |
| Decimals       | This setting determines decimal configuration.                                                                                                                                                                                                                |
| Min/Max value  | These settings configure the axis range.                                                                                                                                                                                                                      |
| Axis width     | This setting configures the width for the axis.                                                                                                                                                                                                               |
| Axis label     | This setting configures the axis value.                                                                                                                                                                                                                       |
| Tick alignment | Sets the alignment of the tick marks on the visualization. Choose from: **Auto**, **Top (LE)**, **Middle**, and **Bottom (GE)**. This option is only displayed when your **Calculate from data** setting is **No** and **Y Bucket scale** is set to **Auto**. |
| Reverse        | When selected, the axis appears in reverse order.                                                                                                                                                                                                             |

# Multiple y-axes

In some cases, you might want to display multiple y-axes. For example, if you have a dataset showing both temperature and humidity over time, you might want to show two y-axes with different units for the two series.

You can configure multiple y-axes and control where they're displayed in the visualization by adding field overrides. [This example of a dataset that includes temperature and humidity](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-overrides/#example-2-format-temperature-and-humidity) describes how you can configure that. Repeat the steps for every y-axis you wish to display.

### Colors options

The color spectrum controls the mapping between value count (in each bucket) and the color assigned to each bucket. The leftmost color on the spectrum represents the minimum count and the color on the right most side represents the maximum count. Some color schemes are automatically inverted when using the light theme.

You can also change the color mode to Opacity. In this case, the color will not change but the amount of opacity will change with the bucket count

#### Mode

Use the following options to define the heatmap colors.

- **Scheme** - Bucket value represented by cell color.
  - **Scheme** - If the mode is **Scheme**, then select a color scheme.
- **Opacity** - Bucket value represented by cell opacity. Opaque cell means maximum value.
  - **Color** - Cell base color.
  - **Scale** - Scale for mapping bucket values to the opacity.
    - **Exponential** - Power scale. Cell opacity calculated as `value ^ k`, where `k` is a configured **Exponent** value. If exponent is less than `1`, you will get a logarithmic scale. If exponent is greater than `1`, you will get an exponential scale. In case of `1`, scale will be the same as linear.
      - **Exponent** - Value of the exponent, greater than `0`.
    - **Linear** - Linear scale. Bucket value maps linearly to the opacity.

#### Steps

Set a value between `1` and `128`.

#### Reverse

Toggle the switch to reverse the color scheme. This option only applies the **Scheme** color mode.

#### Start/end color scale from value

By default, Grafana calculates cell colors based on minimum and maximum bucket values. With **Start color scale from value** and **End color scale at value**, you can overwrite those values. Consider a bucket value as a z-axis, with the start and end values as z-min and z-max.

- **Start color scale from value** - Minimum value used for cell color calculation. The placeholder **Auto (min)** uses the series minimum value. If the bucket value is less than this value, then it's mapped to the minimum color.
- **End color scale at value** - Maximum value used for cell color calculation. The placeholder **Auto (max)** uses the series maximum value. If the bucket value is greater than this value, then it's mapped to the maximum color.

### Cell display options

Use these settings to control the display of heatmap cells.

| Option                    | Description                                                                      |
| ------------------------- | -------------------------------------------------------------------------------- |
| Value name                | Sets the label for the cell value column when **Calculate from data** is **No**. |
| Unit                      | Unit configuration.                                                              |
| Decimals                  | This setting determines decimal configuration.                                   |
| Cell gap                  | Set how much space there is between cells.                                       |
| Hide cells with values <= | Enter a value.                                                                   |
| Hide cells with values >= | Enter a value.                                                                   |

### Tooltip options

Tooltip options control the information overlay that appears when you hover over data points in the visualization.

| Option                                | Description                                                                                                                                                                     |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Tooltip mode](#tooltip-mode)         | When you hover your cursor over the visualization, Grafana can display tooltips. Choose how tooltips behave.                                                                    |
| Show histogram (Y axis)               | When you set the **Tooltip mode** to **Single**, this option is displayed. This option controls whether or not the tooltip includes a histogram representing the y-axis.        |
| [Show color scale](#show-color-scale) | This option controls whether or not the tooltip includes the color scale that's also represented in the legend.                                                                 |
| Max width                             | Set the maximum width of the tooltip box.                                                                                                                                       |
| Max height                            | Set the maximum height of the tooltip box. This option is shown when **Tooltip mode** is **All**, or when exemplar data is present. If unset, the tooltip isn't scroll-limited. |

#### Tooltip mode

When you hover your cursor over the visualization, Grafana can display tooltips. Choose how tooltips behave.

- **Single -** The hover tooltip shows only a single series, the one that you are hovering over on the visualization.
- **All -** The hover tooltip shows all series in the visualization. Grafana highlights the series that you are hovering over in bold in the series list in the tooltip.
- **Hidden -** Do not display the tooltip when you interact with the visualization.

Use an override to hide individual series from the tooltip.

#### Show color scale

When you set the **Tooltip mode** to **Single**, this option is displayed. This option controls whether or not the tooltip includes the color scale that's also represented in the legend. When the color scale is included in the tooltip, it shows the hovered value on the scale:

![Heatmap with a tooltip displayed showing the hovered value reflected in the color scale](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-heatmap-tooltip-color-scale-v11.0.png)

### Legend options

Legend options control how the color scale legend is displayed on the visualization.
For more information about the legend, refer to [Configure a legend](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-legend/).

| Option      | Description                                                                                                                                                                                                                                                                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Show legend | Toggle the switch to turn the legend on or off.                                                                                                                                                                                                                                                                                                    |
| Placement   | Choose where to display the legend. **Bottom** places the legend below the graph. **Right** places the legend to the right of the graph.                                                                                                                                                                                                           |
| Width       | Control how wide the legend is when placed on the right side of the visualization. The value may be a basic pixel width or a more complex [CSS width property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/width) such as `max(200px, 20%)`. This option is only displayed if you set the legend placement to **Right**. |

### Annotation options

| Option                | Description                                                                                                                               |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Multi-row annotations | Breaks each annotation data frame into a separate row in the visualization. Only visible in panels that display more than one annotation. |
| Annotation clustering | Joins adjacent point annotations into a single annotation region.                                                                         |
| Hide lines and areas  | Controls display of annotation indicator lines, and shaded area for region annotations.                                                   |

### Exemplars

Set the color used to show exemplar data.

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
