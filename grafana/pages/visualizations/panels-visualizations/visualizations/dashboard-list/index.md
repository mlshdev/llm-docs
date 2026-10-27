> Pinned source for Grafana v13.3.0: [docs/sources/visualizations/panels-visualizations/visualizations/dashboard-list/index.md](https://github.com/grafana/grafana/blob/752e3462ff71a43a5c1fb62d00a482fa2dc0ee6a/docs/sources/visualizations/panels-visualizations/visualizations/dashboard-list/index.md)

# Dashboard list

Dashboard lists allow you to display dynamic links to other dashboards. You can configure the list to use starred dashboards, recently viewed dashboards, a search query, and dashboard tags.

![A dashboard list visualization](https://grafana.com/media/docs/grafana/panels-visualizations/screenshot-dashboard-list-v11.6.png)

On each dashboard load, this panel queries the dashboard list, always providing the most up-to-date results.

Dashboards that have a description show an info icon next to the dashboard link; hover over the icon to view the description.

You can use a dashboard list visualization to display a list of important dashboards that you want to track.

## Configure a dashboard list visualization

Once you’ve created a [dashboard](https://grafana.com/docs/grafana/v13.3/dashboards/build-dashboards/create-dashboard/), the following video shows you how to configure a dashboard list visualization:

[Watch the video on YouTube](https://www.youtube.com/watch?v=MserjWGWsh8)

[Dashboard List Visualization in Grafana Play](https://play.grafana.org/d/fdlojrg7daebka/)

## Configuration options

The following section describes the configuration options available in the panel editor pane for this visualization. These options are, as much as possible, ordered as they appear in Grafana.

### Panel options

In the **Panel options** section of the panel editor pane, set options like the panel title, description, and show/hide rules.
To learn more, refer to [Configure panel options](https://grafana.com/docs/grafana/v13.3/visualizations/panels-visualizations/configure-panel-options/).

| Option                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title                  | Text entered in this field appears at the top of your panel in the panel editor and in the dashboard. You can use [variables you have defined](https://grafana.com/docs/grafana/v13.3/visualizations/dashboards/variables/) or [built-in variables](https://grafana.com/docs/grafana/v13.3/visualizations/dashboards/variables/built-in-variables).                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Description            | Add a description to a panel to share with users any important information about it, such as its purpose. Text entered in this field appears in a tooltip in the upper-left corner of the panel. Conversely, toggle on the **Use as subtitle** switch to display the description just below the panel title instead. You can use [variables you have defined](https://grafana.com/docs/grafana/v13.3/visualizations/dashboards/variables/) or dashboard-scoped [built-in variables](https://grafana.com/docs/grafana/v13.3/visualizations/dashboards/variables/built-in-variables) (such as `$__from`, `$__to`, `$__dashboard`, `$__org`, and `$__user`). Query-scoped global variables (such as `$__interval` and `$__interval_ms`) are not available in this field. |
| Transparent background | Toggle this switch on and off to control whether or not the panel has the same background color as the dashboard.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Panel links            | Add [links to the panel](https://grafana.com/docs/grafana/v13.3/visualizations/dashboards/build-dashboards/manage-dashboard-links/#panel-links) to create shortcuts to other dashboards, panels, and external websites. Access panel links by clicking the icon next to the panel title.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Repeat options         | Set whether to repeat the panel for each value in the selected variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Show/hide rules        | Set whether to show or hide panels based on various rules.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Dashboard list options

Use the following options to refine your dashboard list visualization.

| Option                                   | Description                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Include current time range               | Propagate the time range of the current dashboard to the dashboard list links. When you click a link, the linked dashboard opens with the indicated time range already set.                                                                                                                                                                              |
| Include current template variable values | Include template variables that are being used as query parameters in the dashboard list link. When you click the link, any matching templates in the linked dashboard are set to the values from the link. Learn more in [Dashboard URL variables](https://grafana.com/docs/grafana/v13.3/dashboards/build-dashboards/create-dashboard-url-variables/). |
| Starred                                  | Display starred dashboards in alphabetical order.                                                                                                                                                                                                                                                                                                        |
| Recently viewed                          | Display recently viewed dashboards in view order, with the most recently viewed dashboards first.                                                                                                                                                                                                                                                        |
| Search                                   | Display dashboards returned by search. Results use the **Query**, **Folder**, and **Tags** filters. An empty **Query** matches all dashboard names. Variable interpolation is supported for **Query** and **Tags**. For example, `$my_var` or `${my_var}`.                                                                                               |
| Show headings                            | Headings for enabled sections are displayed. Sections are:<ul><li>**Starred dashboards**</li><li>**Recently viewed dashboards**</li><li>**Search**</li>                                                                                                                                                                                                  |
| Show folder names                        | Display the name of the folder where the dashboard is located.                                                                                                                                                                                                                                                                                           |
| Max items                                | Set the maximum number of items to list per section. If you enter "10" and enable **Starred** and **Recently viewed** dashboards, the panel displays up to 20 total dashboards, 10 in each section.                                                                                                                                                      |
| [Query](#query)                          | Search by dashboard name. This option is only applied when the **Search** switch is toggled on.                                                                                                                                                                                                                                                          |
| [Folder](#folder)                        | Only dashboards from the selected folder are displayed in the dashboard list. This option is only applied when the **Search** switch is toggled on.                                                                                                                                                                                                      |
| [Tags](#tags)                            | Search by tags. This option is only applied when the **Search** switch is toggled on.                                                                                                                                                                                                                                                                    |

#### Query

Use this field to search by dashboard name. Query terms are case-insensitive and partial values are accepted.
For example, if you have dashboards called "Indoor Temps" and "Outdoor temp", entering the word "temp" returns both results.
This option is only applied when the **Search** switch is toggled on.

#### Folder

Only dashboards from the selected folder are included in search results and displayed in the dashboard list.
To include all dashboards in search results, select the top-level **Dashboards** folder.
This option is only applied when the **Search** switch is toggled on.

#### Tags

Enter tags by which you want to search. Note that tags don't appear as you type, and they're case sensitive.
When you specify multiple tags, dashboards must match all tags.

When multiple tags, query strings, and folders appear, the dashboard list displays dashboards matching *all* conditions.

This option is only applied when the **Search** switch is toggled on.
