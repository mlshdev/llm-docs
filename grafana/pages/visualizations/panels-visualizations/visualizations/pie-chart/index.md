> Release-pinned source for Grafana v13.2.0: [docs/sources/visualizations/panels-visualizations/visualizations/pie-chart/index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/visualizations/panels-visualizations/visualizations/pie-chart/index.md)

# Pie chart

A pie chart is a graph that displays data as segments of a circle proportional to the whole, making it look like a sliced pie. Each slice corresponds to a value or measurement.

![Pie chart visualizations](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-pie-chart-v11.4.png)

The pie chart visualization is ideal when you have data that adds up to a total and you want to show the proportion of each value compared to other slices, as well as to the whole of the pie.

You can use a pie chart if you need to compare:

- Browser share distribution in the market
- Incident causes per category
- Network traffic sources
- User demographics

## Configure a pie chart visualization

The following video guides you through the creation steps and common customizations of pie chart visualizations and is great for beginners:

[Watch the video on YouTube](https://www.youtube.com/watch?v=A_lDhM9w4_g)

[Grafana Bar Charts and Pie Charts in Grafana Play](https://play.grafana.org/d/ktMs4D6Mk/)

## Supported data formats

The pie chart is different from other visualizations in that it will only display one pie, regardless of the number of datasets, fields, or records queried in it.

To create a pie chart visualization, you need a dataset containing a set of numeric values either in rows, columns, or both.

### Example - One row

The easiest way to provide data for a pie chart visualization is in a dataset with a single record (or row) containing the fields (or columns) that you want in the pie, as in the following example. The default settings of the pie chart visualization automatically display each column as a slice of the pie.

| Value1 | Value2 | Value3 | Optional |
| ------ | ------ | ------ | -------- |
| 5      | 3      | 2      | Sums10   |

![Pie chart visualization with multiple values in a single row](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-grafana-12.1-pie-example1.png)

### Example - Multiple rows

If you need to use numeric data that's in multiple rows, the default **Show** parameter of the visualization [Value options](#value-options) is set to **Calculate** and use data from the last row.

| Value | Label  |
| ----- | ------ |
| 5     | Value1 |
| 3     | Value2 |
| 2     | Value3 |

![Pie chart visualization with multiple row values showing the last one](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-grafana-12.1-pie-example2.png)

By default, the visualization is configured to [calculate](#value-options) a single value per column or series and to display only the last row of data.

To allow values in multiple rows to be displayed, change the **Show** setting in the [Value options](#value-options) from **Calculate** to **All values**.

![Pie chart visualization with multiple row values showing all values](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-grafana-12.1-pie-example3.png)

### Example - Multiple rows and columns

If your dataset contains multiple rows and columns with numeric data, by default only the last row's values are summed.

| Value1 | Value2 | Value3 | Optional |
| ------ | ------ | ------ | -------- |
| 5      | 3      | 2      | Sums10   |
| 10     | 6      | 4      | Sums20   |
| 20     | 8      | 2      | Sums30   |

![Pie chart visualization with multiple rows and columns showing the last one](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-grafana-12.1-pie-example4.png)

If you want to display all the cells, change the **Show** setting in the [Value options](#value-options) from **Calculate** to **All values**. This also labels the elements by concatenating all the text fields (if you have any) with the column name.

![Pie chart visualization with multiple rows and columns showing the all values](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-grafana-12.1-pie-example5.png)

If you want to display only the values from a given field (or column), once the **Show** setting in the [Value options](#value-options) is set to **All values**, set the **Fields** option to the column you wish to sum in the display. The value labels are also concatenated as indicated before.

![Pie chart visualization with multiple rows and columns showing values from one column](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-grafana-12.1-pie-example6.png)

## Configuration options

The following section describes the configuration options available in the panel editor pane for this visualization. These options are, as much as possible, ordered as they appear in Grafana.

### Panel options

In the **Panel options** section of the panel editor pane, set basic options like panel title and description, as well as panel links. To learn more, refer to [Configure panel options](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-panel-options/).

### Value options

Use the following options to refine the value in your visualization.

| Option      | Description                                                                                                                                                                                                                                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Show        | Set how much information to show. Choose from:<ul><li>**Calculate** - Reduces each value to a single value per series.</li><li>**All values** - Displays every value from a single series.</li></ul>                                                                                                         |
| Calculation | If you chose **Calculate** as your **Show** option, select a calculation to reduce each series. For information about available calculations, refer to [Calculation types](https://grafana.com/docs/grafana/v13.2/panels-visualizations/query-transform-data/calculation-types/).                            |
| Limit       | If you chose **All values** as your **Show** option, enter a value to limit the number of values displayed.                                                                                                                                                                                                  |
| Fields      | Select which field or fields to display in the visualization. Each field name is available on the list, or you can select one of the following options:<ul><li>**Numeric Fields** - All fields with numerical values.</li><li>**All Fields** - All fields that are not removed by transformations.</li></ul> |

### Pie chart options

Use these options to refine how your visualization looks.

#### Pie chart type

Select the pie chart display style. Choose from **Pie** or **Donut**.

![Pie chart types](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-pie-chart-types.png)

#### Slice sorting

By default, the pie chart is sorted so that the slices decrease in size clockwise around the circle.
You can configure the sorting of the slices, and by extension the legend, with the following options:

- **Descending** - The slices decrease in size, clockwise (default).
- **Ascending** - The slices increase in size, clockwise.
- **None** - No sorting is applied. The original order of the data is maintained.

#### Labels

Select labels to display on the pie chart. You can select more than one.

- **Name** - The series or field name.
- **Percent** - The percentage of the whole.
- **Value** - The raw numerical value.

Labels are displayed in white over the body of the chart. You might need to select darker chart colors to make them more visible. Long names or numbers might be clipped.

The following example shows a pie chart with **Name** and **Percent** labels displayed:

![Pie chart labels](https://grafana.com/static/img/docs/pie-chart-panel/pie-chart-labels-7-5.png)

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

Use these settings to define how the legend appears in your visualization. For more information about the legend, refer to [Configure a legend](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-legend/).

| Option        | Description                                                                                                                                                                                                                                          |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Visibility    | Toggle the switch to turn the legend on or off.                                                                                                                                                                                                      |
| Mode          | Use these settings to define how the legend appears in your visualization. Choose from:<ul><li>**List** - Displays the legend as a list. This is a default display mode of the legend.</li><li>**Table** - Displays the legend as a table.</li></ul> |
| Placement     | Select where to display the legend. Choose **Bottom** or **Right**.                                                                                                                                                                                  |
| Width         | Control how wide the legend is when placed on the right side of the visualization. This option is only displayed if you set the legend placement to **Right**.                                                                                       |
| Legend values | Select values to display in the legend. You can select more than one:<ul><li>**Percent** - The percentage of the whole.</li><li>**Value** - The raw numerical value.</li></ul>                                                                       |

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
