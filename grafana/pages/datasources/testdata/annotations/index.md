> Pinned source for Grafana v13.3.0: [docs/sources/datasources/testdata/annotations/index.md](https://github.com/grafana/grafana/blob/752e3462ff71a43a5c1fb62d00a482fa2dc0ee6a/docs/sources/datasources/testdata/annotations/index.md)

# TestData annotations

The TestData data source can generate simulated [annotation](https://grafana.com/docs/grafana/v13.3/dashboards/build-dashboards/annotate-visualizations/) events. Use it to test how dashboards and panels render annotation markers and overlays without connecting to an external source. The generated events are created in the browser and aren't persisted.

## Before you begin

- [Configure the TestData data source](https://grafana.com/docs/grafana/v13.3/datasources/testdata/configure/).
- Familiarize yourself with [annotations](https://grafana.com/docs/grafana/v13.3/dashboards/build-dashboards/annotate-visualizations/) in Grafana.

## Add an annotation query

To add a dashboard annotation query that uses TestData:

1. Navigate to the dashboard you want to update and click **Edit**.
2. Click **Settings**.
3. Select the **Annotations** tab.
4. Click **Add annotation query**.
5. Enter a name for the annotation.
6. From the **Data source** drop-down, select **TestData**. The drop-down only lists data sources that support annotations.
7. Set the **Count** field to the number of events you want to generate. Default: `10`.
8. Click **Save dashboard**.

TestData distributes the generated events evenly across the current dashboard time range. Each event includes sample text with a link and the tags `text` and `server`.

## Use the Annotations scenario in a panel

You can also generate annotation data as a panel query using the **Annotations** scenario. This scenario returns data on the annotations data topic, so Grafana renders the events as markers overlaid on the panel rather than plotting them as a series.

Because the Annotations scenario doesn't return a visible series on its own, add a second query that returns data to give the markers something to overlay:

1. Add or edit a panel and select the **TestData** data source.
2. On the first query, choose a scenario that returns a series, such as **Random Walk**, from the **Scenario** drop-down.
3. Add a second query, then choose the **Annotations** scenario from its **Scenario** drop-down.
4. Set the **Count** field on the Annotations query to the number of events you want to generate. Default: `10`.
5. Click **Run queries**.

Grafana plots the series from the first query and overlays the annotation markers on top. If you run the Annotations scenario by itself, the query returns annotation events but the panel doesn't display a visible series.

For a reference of all TestData scenarios, refer to the [TestData query editor](https://grafana.com/docs/grafana/v13.3/datasources/testdata/query-editor/).

## Example: Overlay annotations on a time series panel

This example creates a time series panel with simulated data, then adds a TestData annotation query so you can verify how the panel renders annotation markers.

1. Navigate to the dashboard you want to update and click **Edit**.
2. Click the **Add** icon and select **Visualization**.
3. Select the **TestData** data source.
4. Choose the **Random Walk** scenario from the **Scenario** drop-down.
5. Click **Run queries** to render the time series.
6. Click **Back to dashboard**, then click **Settings**.
7. Select the **Annotations** tab.
8. Click **Add annotation query**.
9. Enter a name for the annotation, for example `Test events`.
10. From the **Data source** drop-down, select **TestData**.
11. Set the **Count** field to `5`.
12. Click **Save dashboard**.

Grafana draws five vertical annotation markers evenly across the time range on the time series panel. Hover over a marker to see the sample text and tags. Adjust the **Count** field to change how many markers appear.

> **Tip**
>
> To test how a panel handles crowded overlays, increase the **Count** field to a high value, such as `100`. This produces many closely spaced markers, which is useful for checking marker rendering and tooltip behavior at high density.

## Limitations

- **Events are synthetic.** TestData generates fixed sample text and tags. You can't customize the event content.
- **Events aren't persisted.** The data source builds events in the browser each time the query runs. TestData doesn't store annotations or query an external source.
- **Not evaluated by the alerting engine.** The Annotations scenario runs in the browser, so it can't be used with [Grafana Alerting](https://grafana.com/docs/grafana/v13.3/datasources/testdata/alerting/) or in any context that requires server-side evaluation.
