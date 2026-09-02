> Release-pinned source for Grafana v13.2.1: [docs/sources/visualizations/dashboards/search-dashboards/index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/visualizations/dashboards/search-dashboards/index.md)

# Search dashboards and folders

You can search for dashboards and dashboard folders by name.

When you search for dashboards, you can also do it by panel title. Whether you search by name or panel title, the system returns all dashboards available within the Grafana instance, even if you do not have permission to view the contents of the dashboard.

## Search by name

Begin typing any part of the dashboard or folder name in the search bar. The search returns results for any partial string match in real-time, as you type.

The search is:

- Real-time
- *Not* case sensitive
- Functional across stored *and* file based dashboards and folders.

> **Note**
>
> You can use your keyboard arrow keys to navigate the results and press `Enter` to open the selected dashboard or folder.

The following images show:

Searching by dashboard name from the **Dashboards** page.

![](https://grafana.com/media/docs/grafana/dashboards/search-for-dashboard.png)

Searching by folder name from the **Dashboards** page.

![](https://grafana.com/media/docs/grafana/dashboards/search-folder.png)

Searching by dashboard name inside a folder.

![](https://grafana.com/media/docs/grafana/dashboards/search-in-folder.png)

> **Note**
>
> When you search within a folder, its subfolders are not part of the results returned. You need to be on the **Dashboards** page (or the root level) to search for subfolders by name.

## Search dashboards using panel title

You can search for a dashboard by the title of a panel that appears in a dashboard.
If a panel's title matches your search query, the dashboard appears in the search results.

This feature is available by default in Grafana Cloud and in Grafana OSS v9.1 and higher, you access this feature by enabling the `panelTitleSearch` feature toggle.
For more information about enabling panel title search, refer to [Enable the panelTitleSearch feature toggle.](#enable-the-paneltitlesearch-feature-toggle)

The following image shows the search results when you search using panel title.

![](https://grafana.com/static/img/docs/v91/dashboard-features/search-by-panel-title.png)

### Enable the panelTitleSearch feature toggle

Complete the following steps to enable the `panelTitleSearch` feature toggle.

**Before you begin:**

- If you are running Grafana Enterprise with RBAC, enable [service accounts](https://grafana.com/docs/grafana/v13.2/administration/service-accounts/).

**To enable the panelTitleSearch feature toggle:**

1. Open the Grafana [configuration file](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana/#configuration-file-location).

2. Locate the [feature\_toggles](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana/#feature_toggles) section.

3. Add the following parameter to the `feature_toggles` section:

   ```
   [feature_toggles]
   # enable features, separated by spaces
   enable = panelTitleSearch
   ```

4. Save your changes and restart the Grafana server.

## Filter dashboard search results by tag(s)

Tags are a great way to organize your dashboards, especially as the number of dashboards grow. You can add and manage tags in dashboard `Settings`.

When you select multiple tags, Grafana shows dashboards that include all selected tags.

To filter dashboard search result by a tag, complete one of the following steps:

- To filter dashboard search results by tag, click a tag that appears in the right column of the search results.

  You can continue filtering by clicking additional tags.

- To see a list of all available tags, click the **Filter by tags** dropdown menu and select a tag.

  All tags will be shown, and when you select a tag, the dashboard search will be instantly filtered.

> **Note**
>
> When using only a keyboard, press the `tab` key and navigate to the **Filter by tag** drop-down menu, press the down arrow key `▼` to activate the menu and locate a tag, and press `Enter` to select the tag.
