> Release-pinned source for Grafana v13.2.1: [docs/sources/visualizations/panels-visualizations/visualizations/flame-graph/index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/visualizations/panels-visualizations/visualizations/flame-graph/index.md)

# Flame graph

Flame graphs let you visualize [profiling](https://grafana.com/docs/pyroscope/latest/introduction/what-is-profiling/) data. Using this visualization, a [profile](https://grafana.com/docs/pyroscope/latest/view-and-analyze-profile-data/profiling-types/) can be represented as a [flame graph](#flame-graph-mode), [top table](#top-table-mode), or both.

For example, if you want to understand which parts of a program consume the most resources, such as CPU time, memory, or I/O operations, you can use a flame graph to visualize and analyze where potential performance issues are:

![A flame graph visualization for a system profile with both flame graph and top table mode.](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-flamegraph-dark-v12.0.png)

You can use a flame graph visualization if you need to:

- Identify any performance hotspots to find where code optimizations may be needed.
- Diagnose the root cause of any performance degradation.
- Analyze the behavior of complex systems, including distributed systems or microservices architectures.

To learn more about how Grafana Pyroscope visualizes flame graphs, refer to [Flame graphs: Visualizing performance data](https://grafana.com/docs/pyroscope/latest/view-and-analyze-profile-data/flamegraphs/).

## Configure a flame graph visualization

Once you’ve created a [dashboard](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/create-dashboard/), the following video shows you how to configure a flame graph visualization:

[Watch the video on YouTube](https://www.youtube.com/watch?v=VEvK0JkPlOY)

[Flame Graphs in Grafana Play](https://play.grafana.org/d/cdl34qv4zzg8wa/)

## Supported data formats

To render a flame graph, you must format the data frame data using a *nested set model*.

A nested set model ensures each item of a flame graph is encoded by its nesting level as an integer value, its metadata, and by its order in the data frame. This means that the order of items is significant and needs to be correct. The ordering is a depth-first traversal of the items in the flame graph which recreates the graph without needing variable-length values in the data frame like in a children's array.

Required fields:

| Field name | Type           | Description                                                                                                                 |
| ---------- | -------------- | --------------------------------------------------------------------------------------------------------------------------- |
| level      | number         | The nesting level of the item, which represents how many items are between this item and the top item of the flame graph.   |
| value      | number         | The absolute or cumulative value of the item. This translates to the width of the item in the graph.                        |
| label      | string or enum | Label to be shown for the particular item.                                                                                  |
| self       | number         | Self value, which is usually the cumulative value of the item minus the sum of cumulative values of its immediate children. |

Diff profiles can also include optional `valueRight` and `selfRight` fields. When present, the tooltip and top table show baseline, comparison, and diff values.

### Example

The following table is an example of the type of data you need for a flame graph visualization and how it should be formatted:

| level | value    | self   | label                                     |
| ----- | -------- | ------ | ----------------------------------------- |
| 0     | 16.5 Bil | 16.5 K | total                                     |
| 1     | 4.10 Bil | 4.10 k | test/pkg/agent.(\*Target).start.func1     |
| 2     | 4.10 Bil | 4.10 K | test/pkg/agent.(\*Target).start.func1     |
| 3     | 3.67 Bil | 3.67 K | test/pkg/distributor.(\*Distributor).Push |
| 4     | 1.13 Bil | 1.13 K | compress/gzip.(\*Writer).Write            |
| 5     | 1.06 Bil | 1.06 K | compress/flat.(\*compressor).write        |

## Flame graph mode

A flame graph takes advantage of the hierarchical nature of profiling data. It condenses data into a format that allows you to easily see which code paths are consuming the most system resources, such as CPU time, allocated objects, or space when measuring memory. Each block in the flame graph represents a function call in a stack and its width represents its value.

Grayed-out sections are a set of functions that represent a relatively small value and they are collapsed together into one section for performance reasons.

![A flame graph visualization for a system profile with flame graph mode.](https://grafana.com/static/img/docs/flame-graph-panel/flame-graph-mode-dark.png)

You can hover over a specific function to view a tooltip that shows you additional data about that function, like the function's value, percentage of total value, and the number of samples with that function.

![A flame graph visualization with a hover tooltip.](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-flamegraph-tooltip-v11.6.png)

### Menu actions

You can click a function to show a drop-down menu with additional actions:

- [Focus block](#focus-block)
- [Copy function name](#copy-function-name)
- [Sandwich view](#sandwich-view)
- [Grouping](#grouping)

![A flame graph visualization with drop-down actions.](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-flamegraph-menu-v12.0.png)

#### Focus block

When you click **Focus block**, the block, or function, is set to 100% of the flame graph's width and all its child functions are shown with their widths updated relative to the width of the parent function. This makes it easier to drill down into smaller parts of the flame graph.

![A flame graph visualization with focus block action selected.](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-flamegraph-focus-v11.6.png)

#### Copy function name

When you click **Copy function name**, the full name of the function that the block represents is copied.

#### Sandwich view

The sandwich view allows you to show the context of the clicked function. It shows all the function's callers on the top and all the callees at the bottom. This shows the aggregated context of the function so if the function exists in multiple places in the flame graph, all the contexts are shown and aggregated in the sandwich view.

![A flame graph visualization with sandwich view selected.](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-flamegraph-sandwich-v11.6.png)

#### Grouping

Under the **Grouping** section of the menu, the following options let you expand and collapse groups of functions:

- **Expand group** - Expands the grouped function you've clicked. Displayed if you click a function that's been automatically grouped in the flame graph.
- **Expand all groups** - Expands all grouped functions in the flame graph. Always displayed when you click the graph.
- **Collapse group** - Collapses the expanded function you've clicked. Displayed if you click a function in the flame graph that's been manually expanded.
- **Collapse all groups** - Collapses all expanded functions in the flame graph. Displayed if there are any expanded functions when you click the graph.

### Status bar

The status bar shows metadata about the flame graph and currently applied modifications, like what part of the graph is in focus or what function is shown in sandwich view. Click the **X** in the status bar pill to remove that modification.

![A flame graph visualization's status bar.](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-flamegraph-status-v11.6.png)

## Top table mode

The top table shows the functions from the profile in table format. The table has three columns: **Symbol**, **Self**, and **Total**. The table is sorted by self time by default, but can be reordered by total time or symbol name by clicking the column headers. Each row represents aggregated values for the given function if the function appears in multiple places in the profile.

![Table view](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-flamegraph-toptable-v12.0.png)

There are also action buttons on the left-most side of each row. The first button searches for the function name while second button shows the sandwich view of the function.

## Toolbar

The following table lists the features of the toolbar:

| Option                                      | Description                                                                                                                                                                                   |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Search](#search)                           | Use the search field to find functions with a particular name. All the functions in the flame graph that match the search will remain colored while the rest of the functions appear in gray. |
| Reset                                       | Reset the flame graph back to its original state from a focus block or sandwich view. The reset icon is only displayed when the flame graph is in one of those two states.                    |
| [Change color scheme](#change-color-scheme) | Switch between **By value** and **By package name** to visually tie functions from the same package together.                                                                                 |
| Grouping                                    | Expand or collapse all groups to show all instances of a function or show the function grouped.                                                                                               |
| Text align                                  | Align text either to the left or to the right to show more important parts of the function name when it does not fit into the block.                                                          |
| Visualization picker                        | Choose to show only the flame graph, only table, or both at the same time.                                                                                                                    |

### Search

You can use the search field to find functions with a particular name. All the functions in the flame graph that match the search will remain colored while the rest of the functions are grayed-out.

![Searching for a function name in a flame graph visualization.](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-flamegraph-search-v12.0.png)

### Change color scheme

You can switch between **By value** and **By package name** to visually tie functions from the same package together.

![Different color scheme](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-flamegraph-color-v11.6.png)

## Configuration options

The following section describes the configuration options available in the panel editor pane for this visualization. These options are, as much as possible, ordered as they appear in Grafana.

### Panel options

In the **Panel options** section of the panel editor pane, set basic options like panel title and description, as well as panel links. To learn more, refer to [Configure panel options](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-panel-options/).

### Standard options

**Standard options** in the panel editor pane let you change how field data is displayed in your visualizations.
When you set a standard option, the change is applied to all fields or series.
For more granular control over the display of fields, refer to [Configure field overrides](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-overrides/).

You can customize the following standard options:

| Option   | Description                                                                                                                                                                                                                                                                       |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unit     | This option lets you choose which unit a field should use. For more information on unit options as well as creating custom units, refer to the [unit configuration documentation](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-standard-options/#unit). |
| Decimals | Specify the number of decimals Grafana includes in the rendered value.                                                                                                                                                                                                            |

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

## Frequently asked questions

**What can I learn from a flame graph?**

A flame graph helps you understand how your application spends time or consumes resources during execution.
By visualizing the call hierarchy and the relative cost of each function, you can identify which parts of your application contribute most to overall resource usage and explore how functions relate to one another.

**How do I read a flame graph?**

A flame graph represents a hierarchy of function calls collected during profiling.
Each block represents a function, and its position in the graph shows where it appears in the call stack.
The width of a block indicates how much time or resources were spent in that function, making wider blocks a good starting point for identifying performance hotspots.
You can click a function to inspect its call hierarchy, use Sandwich view to examine its callers and callees, or switch to the Top table to see aggregated profiling data in a tabular format.

**How does a flame graph help identify performance bottlenecks?**

A flame graph makes performance bottlenecks easier to spot by showing the relative cost of each function in the call stack.
Wider blocks represent functions that consume more time or resources, allowing you to quickly identify hotspots and then drill into their callers and callees to understand where optimization efforts will have the greatest impact.
