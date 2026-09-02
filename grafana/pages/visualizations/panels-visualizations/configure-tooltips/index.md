> Release-pinned source for Grafana v13.2.1: [docs/sources/visualizations/panels-visualizations/configure-tooltips/index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/visualizations/panels-visualizations/configure-tooltips/index.md)

# Configure tooltips

When you hover your cursor over a visualization, Grafana can display tooltips that contain more information about a data point, like the exact time of a result. You can customize tooltips to control how many series they include and the order of those values. You can also copy the content from tooltips to use elsewhere. Learn more about configuring tooltips in [Tooltip options](#tooltip-options).

## Supported visualizations

You can configure tooltips for the following visualizations:

- [Bar chart](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/bar-chart/)
- [Candlestick](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/candlestick/)
- [Heatmap](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/heatmap/)
- [Pie chart](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/pie-chart/)
- [State timeline](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/state-timeline/)
- [Status history](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/status-history/)
- [Time series](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/time-series/)
- [Trend](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/trend/)
- [XY chart](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/xy-chart/)

Some visualizations, for example [candlestick](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/candlestick/) and [flame graph](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/flame-graph/), have tooltips, but they aren't configurable. These visualizations don't have a **Tooltip** section in the panel editor pane. [Geomaps](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/geomap/#tooltip) provide you the option to have tooltips triggered upon click or hover under the **Map controls** options in the panel editor pane.

## Tooltip options

You can find the following options under the **Tooltip** section in the panel edit pane.

> **Note**
>
> Not all of the options listed apply to all visualizations with tooltips.

### Tooltip mode

Choose how tooltips behave with the following options:

- **Single** - The tooltip only the single series that you're hovering over in the visualization.
- **All** - The tooltip shows all series in the visualization. Grafana highlights the series that you are hovering over in bold in the series list in the tooltip.
- **Hidden** - Tooltips aren't displayed when you interact with the visualization.

You can use a [field override](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-overrides/) to hide individual series from the tooltip.

### Values sort order

When you set the **Tooltip mode** to **All**, the **Values sort order** option is displayed. This option controls the order in which values are listed in a tooltip. Choose from the following:

- **None** - Grafana automatically sorts the values displayed in a tooltip.
- **Ascending** - Values in the tooltip are listed from smallest to largest.
- **Descending** - Values in the tooltip are listed from largest to smallest.

### Hide zeros

When you set the **Tooltip mode** to **All**, the **Hide zeros** option is displayed. This option controls whether or not series with `0` values are shown in the list in the tooltip.

### Hover proximity

Set the hover proximity (in pixels) to control how close the cursor must be to a data point to trigger the tooltip to display.

![Adding a hover proximity limit for tooltips](https://grafana.com/media/docs/grafana/gif-grafana-10-4-hover-proximity.gif)

### Max width

Set the maximum width of the tooltip box.

### Max height

Set the maximum height of the tooltip box. The default is 600 pixels.

### Show histogram (Y axis)

For the heatmap visualization only, when you set the **Tooltip mode** to **Single**, the **Show histogram (Y axis)** option is displayed. This option controls whether or not the tooltip includes a histogram representing the y-axis.

### Show color scale

For the heatmap visualization only, when you set the **Tooltip mode** to **Single**, the **Show color scale** option is displayed. This option controls whether or not the tooltip includes the color scale that's also represented in the legend. When the color scale is included in the tooltip, it shows the hovered value on the scale:

![Heatmap with a tooltip displayed showing the hovered value reflected in the color scale](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-heatmap-tooltip-color-scale-v11.0.png)
