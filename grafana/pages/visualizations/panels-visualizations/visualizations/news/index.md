> Pinned source for Grafana v13.2.4: [docs/sources/visualizations/panels-visualizations/visualizations/news/index.md](https://github.com/grafana/grafana/blob/af4a33e3786594ad72f72d97e6744010330c2977/docs/sources/visualizations/panels-visualizations/visualizations/news/index.md)

# News

The news visualization displays an RSS feed. By default, it displays articles from the Grafana Labs blog, but you can change this by entering a different RSS feed URL.

![A news visualization showing the latest Grafana news feed](https://grafana.com/static/img/docs/news/news-visualization.png)

> **Note**
>
> In version 8.5, we discontinued the "Use Proxy" option for Grafana news visualizations. As a result, RSS feeds that are not configured for request by Grafana's frontend (with the appropriate [CORS headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)) may not load.

You can use the news visualization to provide regular news and updates to your users.

[News Panel in Grafana Play](https://play.grafana.org/d/cdodkwspaaa68b/)

## Refresh the news feed

The news visualization doesn't have its own refresh interval.
It requests the feed when the dashboard first loads and each time the dashboard refreshes.

To update the articles, do one of the following:

- **Refresh the dashboard manually:** Click the **Refresh dashboard** icon.
- **Set an auto-refresh interval:** Click the drop-down next to the **Refresh dashboard** icon and select an interval. For more information on setting these intervals, refer to [Refresh dashboard](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/use-dashboards/#refresh-dashboard).

The refresh interval applies to the whole dashboard, so pick one that suits your other visualizations as well as your feed.

## Configure a news visualization

After you've created a [dashboard](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/build-dashboards/create-dashboard/), enter the URL of an RSS in the **URL** field in the **News** section. This visualization type doesn't accept any other queries, and you shouldn't expect to be able to filter or query the RSS feed data in any way using this visualization.

If you're having trouble loading an RSS feed, you can try re-hosting the feed on a different server or using a CORS proxy. A CORS proxy is a tool that allows you to bypass CORS restrictions by making requests to the RSS feed on your behalf. You can find more information about using CORS proxies online.

If you're unable to display an RSS feed using the news visualization, you can try using the community RSS/Atom data source plugin [RSS/Atom data source](https://grafana.com/grafana/plugins/volkovlabs-rss-datasource/) in combination with the Dynamic text community panel [Dynamic text](https://grafana.com/grafana/plugins/marcusolsson-dynamictext-panel/). This allows you to display the RSS feed in a different way.

## Supported data formats

The news visualization supports RSS and Atom feeds.

## Configuration options

The following section describes the configuration options available in the panel editor pane for this visualization. These options are, as much as possible, ordered as they appear in Grafana.

### Panel options

In the **Panel options** section of the panel editor pane, set options like the panel title, description, and show/hide rules.
To learn more, refer to [Configure panel options](https://grafana.com/docs/grafana/v13.2/visualizations/panels-visualizations/configure-panel-options/).

| Option                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title                  | Text entered in this field appears at the top of your panel in the panel editor and in the dashboard. You can use [variables you have defined](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/variables/) or [global variables](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/variables/add-template-variables/#global-variables).                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Description            | Add a description to a panel to share with users any important information about it, such as its purpose. Text entered in this field appears in a tooltip in the upper-left corner of the panel. Conversely, toggle on the **Use as subtitle** switch to display the description just below the panel title instead. You can use [variables you have defined](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/variables/) or dashboard-scoped [global variables](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/variables/add-template-variables/#global-variables) (such as `$__from`, `$__to`, `$__dashboard`, `$__org`, and `$__user`). Query-scoped global variables (such as `$__interval` and `$__interval_ms`) are not available in this field. |
| Transparent background | Toggle this switch on and off to control whether or not the panel has the same background color as the dashboard.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Panel links            | Add [links to the panel](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/build-dashboards/manage-dashboard-links/#panel-links) to create shortcuts to other dashboards, panels, and external websites. Access panel links by clicking the icon next to the panel title.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Repeat options         | Set whether to repeat the panel for each value in the selected variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Show/hide rules        | Set whether to show or hide panels based on various rules.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### News options

Use the following options to refine your news visualization:

- **URL** - The URL of the RSS or Atom feed. If you leave the field empty, the Grafana Labs blog is used.
- **Show image** - Controls if the news social image displays beside the text content.
