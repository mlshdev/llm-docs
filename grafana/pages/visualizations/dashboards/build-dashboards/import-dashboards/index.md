> Release-pinned source for Grafana v13.2.1: [docs/sources/visualizations/dashboards/build-dashboards/import-dashboards/index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/visualizations/dashboards/build-dashboards/import-dashboards/index.md)

# Import dashboards

You can import preconfigured dashboards into your Grafana instance or Cloud stack using the UI or the [HTTP API](https://grafana.com/docs/grafana/v13.2/developer-resources/api-reference/http-api/).

## Import a dashboard

To import a dashboard, follow these steps:

1. Click **Dashboards** in the primary menu.

2. Click **New** and select **Import dashboard** in the drop-down menu.

3. Perform one of the following steps:
   - Upload a dashboard JSON file.
   - Paste a [Grafana.com dashboard](#discover-dashboards-on-grafanacom) URL or ID into the field provided.
   - Paste dashboard JSON text directly into the text area.

4. (Optional) Change the dashboard name, folder, or UID, and specify metric prefixes, if the dashboard uses any.

5. Select a data source, if required.

6. Click **Import**.

## Discover dashboards on grafana.com

The [Dashboards page](https://grafana.com/grafana/dashboards/) on grafana.com provides you with dashboards for common server applications. Browse our library of official and community-built dashboards and import them to quickly get up and running.

![Preconfigured dashboards on grafana.com](https://grafana.com/media/docs/grafana/dashboards/screenshot-gcom-dashboards.png)

You can also add to this library by exporting one of your own dashboards. For more information, refer to [Share dashboards and panels](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/share-dashboards-panels/).

## More examples

Your Grafana Cloud stack comes with several default dashboards in the **Grafana Cloud** folder in **Dashboards**. If you're running your own installation of Grafana, you can find more example dashboards in the `public/dashboards/` directory.

## Frequently asked questions

**Where can I find dashboards to import?**

Grafana.com provides a library of official and community-created dashboards for common technologies and applications.
You can browse the library, copy a dashboard's URL or ID, and import it directly into your Grafana instance.

**Why do I need to select a data source when importing a dashboard?**

Many imported dashboards contain queries that reference a data source.
During import, Grafana lets you map those references to data sources that exist in your environment so the dashboard can display data correctly.

**Can I import dashboards into both Grafana Cloud and self-managed Grafana?**

Yes.
Dashboard import is supported in both Grafana Cloud and self-managed Grafana.
Regardless of where your Grafana instance is running, you can import dashboards from a JSON file, by pasting dashboard JSON, or by using a dashboard URL or ID from Grafana.com.
