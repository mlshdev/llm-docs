> Release-pinned source for Grafana v13.2.1: [docs/sources/visualizations/panels-visualizations/query-transform-data/share-query/index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/visualizations/panels-visualizations/query-transform-data/share-query/index.md)

# Share query results with another panel

Grafana lets you use the query result from one panel for any other panel in the dashboard. Sharing query results across panels reduces the number of queries made to your data source, which can improve the performance of your dashboard.

The Dashboard data source lets you select a panel in your dashboard that contains the queries ‌you want to share the results for. Instead of sending a separate query for each panel, Grafana sends one query and other panels use the query results to construct visualizations.

This strategy can drastically reduce the number of queries being made when you for example have several panels visualizing the same data.

1. [Create a dashboard](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/create-dashboard/).

2. Create a panel.

3. Change the panel title to "Source panel". You'll use this panel as a source for the other panels.

4. Define the [query](https://grafana.com/docs/grafana/v13.2/panels-visualizations/query-transform-data/#add-a-query) or queries that you want share.

   If you don't have a data source available, use the **Grafana** data source, which returns a random time series that you can use for testing.

5. Add a new panel and select the **Dashboard** data source in the query editor.

6. In the **Use results from panel list**, select the first panel you created.

All queries defined in the source panel are now available to the new panel. Queries defined in the source panel can be shared with multiple panels.

You can click on any of the queries to go to the panel where they are defined.
