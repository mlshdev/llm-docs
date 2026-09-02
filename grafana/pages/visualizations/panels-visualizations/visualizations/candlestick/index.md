> Release-pinned source for Grafana v13.2.1: [docs/sources/visualizations/panels-visualizations/visualizations/candlestick/index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/visualizations/panels-visualizations/visualizations/candlestick/index.md)

# Candlestick

The candlestick visualization allows you to visualize data that includes a number of consistent dimensions focused on price movements, such as stock prices. The candlestick visualization includes an [Open-High-Low-Close (OHLC) mode](#open-high-low-close-volume-open-high-low-close), as well as support for additional dimensions based on time series data.

Candlestick visualizations build upon the foundation of the [time series visualization](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/time-series/) and include many common configuration settings.

You can use a candlestick if you want to visualize, at a glance, how a price moved over time, whether it went up, down, or stayed the same, and how much it fluctuated:

![A candlestick visualization](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-candlestick-v11.6.png)

Each candlestick is represented as a rectangle, referred to as the *candlestick body*. The candlestick body displays the opening and closing prices during a time period. Green candlesticks represent when the price appreciated while the red candlesticks represent when the price depreciated. The lines sticking out the candlestick body are referred to as *wicks* or *shadows*, which represent the highest and lowest prices during the time period.

Use a candlestick when you need to:

- Monitor and identify trends in price movements of specific assets such as stocks, currencies, or commodities.
- Analyze any volatility in the stock market.
- Provide data analysis to help with trading decisions.

## Configure a candlestick

Once you’ve created a [dashboard](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/create-dashboard/), the following video shows you how to configure a candlestick visualization:

[Watch the video on YouTube](https://www.youtube.com/watch?v=IOFKBgbf3aM)

[Candlestick in Grafana Play](https://play.grafana.org/d/candlestick/candlestick)

## Supported data formats

The candlestick visualization works best with price movement data for an asset. The data must include:

- **Timestamps** - The time at which each price movement occurred.
- **Opening price** - The price of the asset at the beginning of the time period.
- **Closing price** - The price of the asset at the end of the time period.
- **Highest price** - The highest price the asset reached during the time period.
- **Lowest price** - The lowest price the asset reached during the time period.

### Example

| Timestamps          | Open  | High  | Low   | Close |
| ------------------- | ----- | ----- | ----- | ----- |
| 2024-03-13 10:05:00 | 0.200 | 0.205 | 0.201 | 0.203 |
| 2024-03-14 10:10:10 | 0.204 | 0.205 | 0.201 | 0.200 |
| 2024-03-15 10:15:10 | 0.204 | 0.205 | 0.201 | 0.200 |
| 2024-03-16 10:20:11 | 0.203 | 0.203 | 0.202 | 0.203 |
| 2024-03-17 10:25:11 | 0.203 | 0.203 | 0.202 | 0.203 |
| 2024-03-18 10:30:12 | 0.202 | 0.202 | 0.201 | 0.201 |

The data is converted as follows:

![A candlestick visualization showing the price movements of specific asset.](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-candles-volume-v11.6.png)

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

### Candlestick options

The following options let you control which data is displayed in the visualization and how it appears:

| Option                                                                            | Description                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mode                                                                              | Controls which dimensions are used for the visualization. Choose from:<ul><li>**Candles** - Uses the open, high, low, and close dimensions.</li><li>**Volume** - Uses only the volume dimension.</li><li>**Both** - The default behavior, which displays both candles and volume values.</li></ul>                                                   |
| Candle style                                                                      | Controls the appearance of the candles. Choose from:<ul><li>**Candles** - The default display style, which creates candle-style markers between the open and close dimensions.</li><li>**OHLC Bars** - Displays values for the four core dimensions, open, high, low, and close.</li></ul> This option is hidden when **Mode** is **Volume**.        |
| [Color strategy](#color-strategy)                                                 | Controls how colors are applied to dimensions. Choose from:<ul><li>**Since Open** - This mode uses the **Up color** if the intra-period price movement is positive.</li><li>**Since Prior Close** - The color of the candle is based on the inter-period price movement or change in value.</li></ul>                                                |
| Up color/Down color                                                               | These options control which colors are used when the price movement is up or down. Note that the **Color strategy** selection determines if intra-period or inter-period price movement is used to select the candle or OHLC bar color.                                                                                                              |
| [Open, High, Low, Close, Volume](#open-high-low-close-volume-open-high-low-close) | The candlestick visualization attempts to map fields from your data to these dimensions, as appropriate dimension.                                                                                                                                                                                                                                   |
| [Additional fields](#additional-fields)                                           | The **Include** and **Ignore** options allow the candlestick visualization to display other included data such as simple moving averages, Bollinger bands and more, using the same styles and configurations available in the [time series](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/time-series/) visualization. |

#### Color strategy

The **Color strategy** option controls how colors are applied to dimensions. Choose from:

- **Since Open** - The default behavior. This mode uses the **Up color** if the intra-period price movement is positive. In other words, if the value on close is greater or equal to the value on open, the **Up color** is used.
- **Since Prior Close** - An alternative display method where the color of the candle is based on the inter-period price movement or change in value. In other words, if the value on open is greater than the previous value on close, the **Up color** is used. If the value on open is lower than the previous value on close, the **Down color** is used.

  This option also triggers the *hollow candlestick* visualization mode. Hollow candlesticks indicate that the intra-period movement is positive (value is higher on close than on open), while filled candlesticks indicate the intra-period change is negative (value is lower on close than on open). To learn more, refer to the [explanation of the differences](https://thetradingbible.com/how-to-read-hollow-candlesticks).

#### Open, High, Low, Close, Volume {#open-high-low-close}

The candlestick visualization attempts to map fields from your data to the appropriate dimension:

- **Open** - Starting value of the given period.
- **High** - Highest value of the given period.
- **Low** - Lowest value of the given period.
- **Close** - Final (end) value of the given period.
- **Volume** - Sample count in the given period (for example, number of trades).

In **Volume** mode, the **High** and **Low** field pickers are hidden. In **Candles** mode, the **Volume** field picker is hidden. **Both** mode shows all pickers.

> **Note**
>
> The candlestick visualization legend doesn't display these values.

If your data can't be mapped to these dimensions for some reason (for example, because the column names aren't the same), you can map them manually using the **Open**, **High**, **Low**, and **Close** fields under the **Candlestick** options in the panel editor:

![Open, High, Low, and Close fields in the panel editor](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-olhc-options-v11.6.png)

#### Additional fields

The candlestick visualization is based on the time series visualization, and it can visualize additional data dimensions beyond open, high, low, close, and volume.
The **Include** and **Ignore** options allow it to visualize other included data such as simple moving averages, Bollinger bands and more, using the same styles and configurations available in the [time series](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/time-series/) visualization.

### Tooltip options

Tooltip options control the information overlay that appears when you hover over data points in the visualization.

| Option                                  | Description                                                                                                                    |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [Tooltip mode](#tooltip-mode)           | When you hover your cursor over the visualization, Grafana can display tooltips. Choose how tooltips behave.                   |
| [Values sort order](#values-sort-order) | This option controls the order in which values are listed in a tooltip.                                                        |
| [Hover proximity](#hover-proximity)     | Set the hover proximity (in pixels) to control how close the cursor must be to a data point to trigger the tooltip to display. |
| Max width                               | Set the maximum width of the tooltip box.                                                                                      |
| Max height                              | Set the maximum height of the tooltip box. The default is 600 pixels.                                                          |

#### Tooltip mode

When you hover your cursor over the visualization, Grafana can display tooltips. Choose how tooltips behave.

- **Single -** The hover tooltip shows only a single series, the one that you are hovering over on the visualization.
- **All -** The hover tooltip shows all series in the visualization. Grafana highlights the series that you are hovering over in bold in the series list in the tooltip.
- **Hidden -** Do not display the tooltip when you interact with the visualization.

Use an override to hide individual series from the tooltip.

#### Values sort order

When you set the **Tooltip mode** to **All**, the **Values sort order** option is displayed. This option controls the order in which values are listed in a tooltip. Choose from the following:

- **None** - Grafana automatically sorts the values displayed in a tooltip.
- **Ascending** - Values in the tooltip are listed from smallest to largest.
- **Descending** - Values in the tooltip are listed from largest to smallest.

#### Hover proximity

Set the hover proximity (in pixels) to control how close the cursor must be to a data point to trigger the tooltip to display.
The following screen recording shows this option in a time series visualization:

![Adding a hover proximity limit for tooltips](https://grafana.com/media/docs/grafana/gif-grafana-10-4-hover-proximity.gif)

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

### Annotation options

| Option                | Description                                                                                                                               |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Multi-row annotations | Breaks each annotation data frame into a separate row in the visualization. Only visible in panels that display more than one annotation. |
| Annotation clustering | Joins adjacent point annotations into a single annotation region.                                                                         |
| Hide lines and areas  | Controls display of annotation indicator lines, and shaded area for region annotations.                                                   |

### Graph styles options

The options under the **Graph styles** section let you control the general appearance of [additional fields](#additional-fields) in the visualization, excluding [color](#standard-options).

| Option                                      | Description                                                                                                                                                                                                                           |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Style](#style)                             | Choose whether to display your time-series data as **Lines**, **Bars**, or **Points**.                                                                                                                                                |
| [Line interpolation](#line-interpolation)   | Choose how the graph interpolates the series line.                                                                                                                                                                                    |
| Line width                                  | Set the thickness of the series lines or the outline for bars using the **Line width** slider.                                                                                                                                        |
| Fill opacity                                | Set the series area fill color using the **Fill opacity** slider.                                                                                                                                                                     |
| [Gradient mode](#gradient-mode)             | Choose a gradient mode to control the gradient fill, which is based on the series color.                                                                                                                                              |
| [Line style](#line-style)                   | Choose a solid, dashed, or dotted line style.                                                                                                                                                                                         |
| [Connect null values](#connect-null-values) | Choose how null values, which are gaps in the data, appear on the graph.                                                                                                                                                              |
| [Disconnect values](#disconnect-values)     | Choose whether to set a threshold above which values in the data should be disconnected.                                                                                                                                              |
| [Show points](#show-points)                 | Set whether to show data points to lines or bars.                                                                                                                                                                                     |
| Point size                                  | Set the size of the points, from 1 to 40 pixels in diameter.                                                                                                                                                                          |
| [Stack series](#stack-series)               | Set whether Grafana displays series on top of each other.                                                                                                                                                                             |
| [Bar alignment](#bar-alignment)             | Set the position of the bar relative to a data point.                                                                                                                                                                                 |
| Bar width factor                            | Set the width of the bar relative to minimum space between data points. A factor of 0.5 means that the bars take up half of the available space between data points. A factor of 1.0 means that the bars take up all available space. |

#### Style

Choose whether to display your time-series data as **Lines**, **Bars**, or **Points**.
You can use overrides to combine multiple styles in the same graph. Choose from the following:

![Graph styles](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-candle-style-v12.0.png)

#### Line interpolation

Choose how the graph interpolates the series line:

- **Linear** - Points are joined by straight lines.
- **Smooth** - Points are joined by curved lines that smooths transitions between points.
- **Step before** - The line is displayed as steps between points. Points are rendered at the end of the step.
- **Step after** - The line is displayed as steps between points. Points are rendered at the beginning of the step.

![Line interpolation styles](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-candle-interpolation-v12.0.png)

#### Gradient mode

Choose a gradient mode to control the gradient fill, which is based on the series color. To change the color, use the standard color scheme field option. For more information, refer to [Color scheme](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-standard-options/#color-scheme).

- **None** - No gradient fill. This is the default setting.
- **Opacity** - An opacity gradient where the opacity of the fill increases as y-axis values increase.
- **Hue** - A subtle gradient that's based on the hue of the series color.
- **Scheme** - A color gradient defined by your [Color scheme](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-standard-options/#color-scheme). This setting is used for the fill area and line. For more information about scheme, refer to [Scheme gradient mode](#scheme-gradient-mode).

Gradient appearance is influenced by the **Fill opacity** setting. The following image shows the **Fill opacity** set to 50.

![Gradient modes](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-candle-gradient-v12.0.png)

##### Scheme gradient mode

In **Scheme** gradient mode, the line or bar receives a gradient color defined from the selected **Color scheme** option in the visualization's **Standard** options.

The following image shows a line chart with the **Green-Yellow-Red (by value)** color scheme option selected:

![Gradient color scheme](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-candle-scheme-grad-1-v12.0.png)

If the **Color scheme** is set to **From thresholds (by value)** and **Gradient mode** is set to **Scheme**, then the line or bar color changes as it crosses the defined thresholds:

![Gradient color scheme with thresholds](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-candle-scheme-grad-2-v12.0.png)

#### Line style

Choose a solid, dashed, or dotted line style:

- **Solid** - Display a solid line. This is the default setting.
- **Dash** - Display a dashed line. When you choose this option, a list appears for you to select the length and gap (length, gap) for the line dashes. Dash spacing is 10, 10 by default.
- **Dots** - Display dotted lines. When you choose this option, a list appears for you to select the gap (length = 0, gap) for the dot spacing. Dot spacing is 0, 10 by default.

![Line styles](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-candle-line-style-v12.0.png)

### Connect null values

Choose how null values, which are gaps in the data, appear on the graph. Null values can be connected to form a continuous line or set to a threshold above which gaps in the data are no longer connected.

- **Never** - Time series data points with gaps in the data are never connected.
- **Always** - Time series data points with gaps in the data are always connected.
- **Threshold** - Specify a threshold above which gaps in the data are no longer connected. This can be useful when the connected gaps in the data are of a known size and/or within a known range, and gaps outside this range should no longer be connected.

### Disconnect values

Choose whether to set a threshold above which values in the data should be disconnected.

- **Never** - Time series data points in the data are never disconnected.
- **Threshold** - Specify a threshold above which values in the data are disconnected. This can be useful when desired values in the data are of a known size and/or within a known range, and values outside this range should no longer be connected.

To change the color, use the standard [color scheme](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-standard-options/#color-scheme) field option.

#### Show points

Set whether to show data points as lines or bars. Choose from the following:

- **Auto** - Grafana determines a point's visibility based on the density of the data. If the density is low, then points appear.
- **Always** - Show the points regardless of how dense the dataset is.
- **Never** - Don't show points.

#### Stack series

Set whether Grafana stacks or displays series on top of each other. Be cautious when using stacking because it can create misleading graphs. To read more about why stacking might not be the best approach, refer to [The issue with stacking](https://www.data-to-viz.com/caveat/stacking.html). Choose from the following:

- **Off** - Turns off series stacking. When **Off**, all series share the same space in the visualization.
- **Normal** - Stacks series on top of each other.
- **100%** - Stack by percentage where all series add up to 100%.

##### Stack series in groups

The stacking group option is only available as an override. For more information about creating an override, refer to [Configure field overrides](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-overrides/).

1. Edit the panel and click **Overrides**.
2. Create a field override for the **Stack series** option.
3. In stacking mode, click **Normal**.
4. Name the stacking group in which you want the series to appear.

   The stacking group name option is only available when you create an override.

#### Bar alignment

Set the position of the bar relative to a data point. In the examples below, **Show points** is set to **Always** which makes it easier to see the difference this setting makes. The points don't change, but the bars change in relationship to the points. Choose from the following:

- **Before** ![Bar alignment before icon](https://grafana.com/static/img/docs/time-series-panel/bar-alignment-before.png)
  The bar is drawn before the point. The point is placed on the trailing corner of the bar.
- **Center** ![Bar alignment center icon](https://grafana.com/static/img/docs/time-series-panel/bar-alignment-center.png)
  The bar is drawn around the point. The point is placed in the center of the bar. This is the default.
- **After** ![Bar alignment after icon](https://grafana.com/static/img/docs/time-series-panel/bar-alignment-after.png)
  The bar is drawn after the point. The point is placed on the leading corner of the bar.

### Axis options

Options under the **Axis** section control how the x- and y-axes are rendered. Some options don't take effect until you click outside of the field option box you're editing. You can also press `Enter`.

| Option                             | Description                                                                                                                                    |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| [Placement](#placement)            | Select the placement of the y-axis.  Choose from: **Auto**, **Left**, **Right**, and **Hidden**.                                               |
| Label                              | Set a y-axis text label. If you have more than one y-axis, then you can assign different labels using an override.                             |
| Width                              | Set a fixed width for the axis. By default, Grafana dynamically calculates the width of an axis.                                               |
| Show grid lines                    | Set the axis grid line visibility. Choose from: **Auto**, **On**, and **Off**.                                                                 |
| Color                              | Set the color of the axis. Choose from:<ul><li>**Text** - Uses panel text color.</li><li>**Series** - Uses the colors of the series.</li></ul> |
| Show border                        | Set the axis border visibility.                                                                                                                |
| [Scale](#scale)                    | Set the y-axis values scale. Choose from: **Linear**, **Logarithmic**, and **Symlog**.                                                         |
| Centered zero                      | Set the y-axis so it's centered on zero. Applies to the **Linear** or **Symlog** scale options.                                                |
| [Soft min](#soft-min-and-soft-max) | Set a soft min to better control the y-axis limits.                                                                                            |
| [Soft max](#soft-min-and-soft-max) | Set a soft max to better control the y-axis limits.                                                                                            |

#### Placement

Select the placement of the y-axis. Choose from the following:

- **Auto** - Automatically assigns the y-axis to the series. When there are two or more series with different units, Grafana assigns the left axis to the first unit and the right axis to the units that follow.
- **Left** - Display all y-axes on the left side.
- **Right** - Display all y-axes on the right side.
- **Hidden** - Hide all axes. To selectively hide axes, [Add a field override](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-overrides/#add-a-field-override) that targets specific fields.

#### Scale

Set the y-axis values scale. Choose from:

- **Linear** - Divides the scale into equal parts.
- **Logarithmic** - Use a logarithmic scale. If you select this option, in the **Log base** list, choose a binary (base 2) or common (base 10) logarithmic scale.
- **Symlog** - Use a symmetrical logarithmic scale. If you select this option, choose also:
  - **Log base** - Select a binary (base 2) or common (base 10) logarithmic scale.
  - **Linear threshold** - Set the threshold at which the scale changes from linear to logarithmic.

#### Soft min and soft max

Set a **Soft min** or **soft max** option for better control of y-axis limits. By default, Grafana sets the range for the y-axis automatically based on the dataset.

**Soft min** and **soft max** settings can prevent small variations in the data from being magnified when it's mostly flat. In contrast, hard min and max values help prevent obscuring useful detail in the data by clipping intermittent spikes past a specific point.

To define hard limits of the y-axis, set standard min/max options. For more information, refer to [Configure standard options](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-standard-options/#max).
The following examples shows how this option works in a time series visualization:

![Label example](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-soft-min-max-v12.0.png)

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
