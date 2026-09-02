> Release-pinned source for Grafana v13.2.1: [docs/sources/visualizations/panels-visualizations/visualizations/news/index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/visualizations/panels-visualizations/visualizations/news/index.md)

# News

The news visualization displays an RSS feed. By default, it displays articles from the Grafana Labs blog, but you can change this by entering a different RSS feed URL.

![A news visualization showing the latest Grafana news feed](https://grafana.com/static/img/docs/news/news-visualization.png)

> **Note**
>
> In version 8.5, we discontinued the "Use Proxy" option for Grafana news visualizations. As a result, RSS feeds that are not configured for request by Grafana's frontend (with the appropriate [CORS headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)) may not load.

You can use the news visualization to provide regular news and updates to your users.

[News Panel in Grafana Play](https://play.grafana.org/d/cdodkwspaaa68b/)

## Configure a news visualization

After you’ve created a [dashboard](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/create-dashboard/), enter the URL of an RSS in the **URL** field in the **News** section. This visualization type doesn't accept any other queries, and you shouldn't expect to be able to filter or query the RSS feed data in any way using this visualization.

If you're having trouble loading an RSS feed, you can try rehosting the feed on a different server or using a CORS proxy. A CORS proxy is a tool that allows you to bypass CORS restrictions by making requests to the RSS feed on your behalf. You can find more information about using CORS proxies online.

If you're unable to display an RSS feed using the news visualization, you can try using the community RSS/Atom data source plugin [RSS/Atom data source](https://grafana.com/grafana/plugins/volkovlabs-rss-datasource/) in combination with the Dynamic text community panel [Dynamic text](https://grafana.com/grafana/plugins/marcusolsson-dynamictext-panel/). This will allow you to display the RSS feed in a different way.

## Supported data formats

The news visualization supports RSS and Atom feeds.

## Configuration options

The following section describes the configuration options available in the panel editor pane for this visualization. These options are, as much as possible, ordered as they appear in Grafana.

### Panel options

In the **Panel options** section of the panel editor pane, set basic options like panel title and description, as well as panel links. To learn more, refer to [Configure panel options](https://grafana.com/docs/grafana/v13.2/panels-visualizations/configure-panel-options/).

### News options

Use the following options to refine your news visualization:

- **URL** - The URL of the RSS or Atom feed. If you leave the field empty, the Grafana Labs blog is used.
- **Show image** - Controls if the news social image is displayed beside the text content.
