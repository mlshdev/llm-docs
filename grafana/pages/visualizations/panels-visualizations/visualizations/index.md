> Release-pinned source for Grafana v13.2.0: [docs/sources/visualizations/panels-visualizations/visualizations/_index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/visualizations/panels-visualizations/visualizations/_index.md)

# Visualizations

Grafana offers a variety of visualizations to support different use cases. This section of the documentation highlights the built-in visualizations, their options and typical usage.

[Watch the video on YouTube](https://www.youtube.com/watch?v=JwF6FgeotaU)

> **Note**
>
> If you are unsure which visualization to pick, Grafana can provide visualization suggestions based on the panel query. When you select a visualization, Grafana will show a preview with that visualization applied.

- Graphs & charts
  - [Time series](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/time-series/) is the default and main graph visualization. Alerts are supported in this panel.
  - [State timeline](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/state-timeline/) for state changes over time.
  - [Status history](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/status-history/) for periodic state over time.
  - [Bar chart](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/bar-chart/) shows any categorical data.
  - [Histogram](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/histogram/) calculates and shows value distribution in a bar chart.
  - [Heatmap](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/heatmap/) visualizes data in two dimensions, used typically for the magnitude of a phenomenon.
  - [Pie chart](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/pie-chart/) is typically used where proportionality is important.
  - [Candlestick](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/candlestick/) is typically for financial data where the focus is price/data movement.
  - [Gauge](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/gauge/) is the traditional rounded visual showing how far a single metric is from a threshold.
  - [Trend](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/trend/) for datasets that have a sequential, numeric x that is not time.
  - [XY chart](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/xy-chart/) provides a way to visualize arbitrary x and y values in a graph.
- Stats & numbers
  - [Stat](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/stat/) for big stats and optional sparkline.
  - [Bar gauge](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/bar-gauge/) is a horizontal or vertical bar gauge.
- Misc
  - [Table](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/table/) is the main and only table visualization.
  - [Logs](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/logs/) is the main visualization for logs.
  - [Node graph](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/node-graph/) for directed graphs or networks.
  - [Traces](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/traces/) is the main visualization for traces.
  - [Flame graph](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/flame-graph/) is the main visualization for profiling.
  - [Canvas](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/canvas/) allows you to explicitly place elements within static and dynamic layouts.
  - [Geomap](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/geomap/) helps you visualize geospatial data.
- Widgets
  - [Dashboard list](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/dashboard-list/) can list dashboards.
  - [Alert list](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/alert-list/) can list alerts.
  - [Annotations list](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/annotations/) can list available annotations.
  - [Text](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/text/) can show markdown and html.
  - [News](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/news/) can show RSS feeds.

The following video shows you how to create gauge, time series line graph, stats, logs, and node graph visualizations:

[Watch the video on YouTube](https://www.youtube.com/watch?v=yNRnLyVntUw)

## Get more

You can add more visualization types by installing [panel plugins](https://grafana.com/grafana/plugins/?type=panel).

## Examples

Below you can find some good examples for how all the visualizations in Grafana can be configured. You can also explore [play.grafana.org](https://play.grafana.org) which has a large set of demo dashboards that showcase all the different visualizations.

### Graphs

For time based line, area and bar charts we recommend the default [time series](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/time-series/) visualization. [This public demo dashboard](https://play.grafana.org/d/000000016/1-time-series-graphs?orgId=1) contains many different examples for how this visualization can be configured and styled.

![](https://grafana.com/static/img/docs/time-series-panel/time_series_small_example.png)

*Time series*

For categorical data use a [bar chart](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/bar-chart/).

![](https://grafana.com/static/img/docs/bar-chart-panel/barchart_small_example.png)

*Bar chart*

### Big numbers & stats

A [stat](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/stat/) shows one large stat value with an optional graph sparkline. You can control the background or value color using thresholds or color scales.

![](https://grafana.com/static/img/docs/v66/stat_panel_dark3.png)

*Stat*

### Gauge

If you want to present a value as it relates to a min and max value you have two options. First a standard radial [gauge](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/gauge/) shown below.

![A gauge visualization](https://grafana.com/static/img/docs/v66/gauge_panel_cover.png)

Secondly Grafana also has a horizontal or vertical [bar gauge](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/bar-gauge/) with three different distinct display modes.

![A bar gauge visualization](https://grafana.com/static/img/docs/v66/bar_gauge_lcd.png)

### Table

To show data in a table layout, use a [table](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/table/).

![](https://grafana.com/static/img/docs/tables/table_visualization.png)

*Table visualization*

### Pie chart

To display reduced series, or values in a series, from one or more queries, as they relate to each other, use a [pie chart](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/pie-chart/).

![](https://grafana.com/static/img/docs/pie-chart-panel/pie-chart-example.png)

*Pie chart*

### Heatmaps

To show value distribution over, time use a [heatmap](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/heatmap/).

![](https://grafana.com/static/img/docs/v43/heatmap_panel_cover.jpg)

*Heatmap*

### State timeline

A state timeline shows discrete state changes over time. When used with time series, the thresholds are used to turn the numerical values into discrete state regions.

![](https://grafana.com/static/img/docs/v8/state_timeline_strings.png)

*State timeline with string states*
