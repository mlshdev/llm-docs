> Release-pinned source for Grafana v13.2.0: [docs/sources/visualizations/dashboards/build-dashboards/modify-dashboard-settings/index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/visualizations/dashboards/build-dashboards/modify-dashboard-settings/index.md)

# Modify dashboard settings

The dashboard settings page allows you to:

- Edit general dashboard properties, including time settings
- Add links
- View the dashboard JSON model

To access the dashboard setting page:

1. Click **Edit**.
2. In the toolbar, click the **Dashboard options** icon.
3. In the sidebar, click **Settings**.

## Modify dashboard time settings

Adjust dashboard time settings when you want to change the dashboard timezone, the local browser time, and specify auto-refresh time intervals.

1. On the the **General** tab of the **Settings** page, scroll down to the **Time options** section.

2. Specify time settings as follows.
   - **Time zone:** Specify the local time zone of the service or system that you are monitoring. This can be helpful when monitoring a system or service that operates across several time zones.
     - **Default:** Grafana uses the default selected time zone for the user profile, team, or organization. If no time zone is specified for the user profile, a team the user is a member of, or the organization, then Grafana uses the local browser time.
     - **Browser time:** The time zone configured for the viewing user browser is used. This is usually the same time zone as set on the computer.
     - Standard [ISO 8601 time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), including UTC.
   - **Auto refresh:** Customize the options displayed for relative time and the auto-refresh options Entries are comma separated and accept any valid time unit.
   - **Now delay:** Override the `now` time by entering a time delay. Use this option to accommodate known delays in data aggregation to avoid null values.
   - **Hide time picker:** Select this option if you do not want Grafana to display the time picker.

3. Click **Save**.

4. (Optional) Enter a description of the changes you've made.

5. Click **Save**.

6. Click **Exit edit**.

## Modify graph tooltip behavior

Use this option to control tooltip and hover highlight behavior across graph panels (for example, time series).

1. On the the **General** tab of the **Settings** page, scroll down to the **Panel options** section.

2. Choose from the following options to control the tooltip and hover highlight behavior across graph panels:
   - **Default** - Tooltip and hover highlight behavior isn't shared across panels.
   - **Shared crosshair** - When you hover the cursor over one graph panel in the dashboard, the crosshair is also displayed on all other graph panels in the dashboard.
   - **Shared tooltip** - When you hover the cursor over one graph panel in the dashboard, the crosshair and tooltips are also displayed on all other graph panels in the dashboard.

3. Click **Save**.

4. (Optional) Enter a description of the changes you've made.

5. Click **Save**.

6. Click **Exit edit**.

## Add tags

You can add metadata to your dashboards using tags. Tags also give you the ability to filter the list of dashboards.

Tags can be up to 50 characters long, including spaces.

To add tags to a dashboard, follow these steps:

1. On the the **General** tab of the **Settings** page, scroll down to the **Tags** section.

2. In the field, enter a new or existing tag.

   If you're entering an existing tag, make sure that you spell it the same way or a new tag is created.

3. Click **Add** or press the Enter key.

4. Click **Save**.

5. (Optional) Enter a description of the changes you've made.

6. Click **Save**.

7. Click **Exit edit**.

When you're on the **Dashboards** page, any tags you've entered show up under the **Tags** column.

## Add an annotation query

Annotations setup has been removed from dashboard settings.
You can now add and manage annotation queries in the dashboard sidebar.
For more information, refer to [Add annotation queries](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/build-dashboards/create-dashboard/dashboard-controls/#add-annotation-queries).

## Add a variable

Variables setup has been removed from dashboard settings.
You can now add and manage variables in the dashboard sidebar.
For more information, refer to [Add variables](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/build-dashboards/create-dashboard/dashboard-controls/#add-variables).

## Add a link

Dashboard links enable you to place links to other dashboards and web sites directly below the dashboard header. Links provide for quick navigation to other, related dashboards and content.

1. On the **Settings** page, click the **Links** tab.

2. Click **+ New link**.

3. Enter title for the link.

4. In the **Type** drop-down, select **Dashboards** or **Link**.

5. Set the rest of the link options.

   For more detailed directions on creating links, refer to [Dashboard links](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/manage-dashboard-links/#dashboard-links)

6. Click **Save**.

7. (Optional) Enter a description of the changes you've made.

8. Click **Save**.

9. Click **Exit edit**.

## View dashboard JSON model

A dashboard in Grafana is represented by a JSON object, which stores metadata of its dashboard. Dashboard metadata includes dashboard properties, metadata from panels, template variables, panel queries, and so on.

To view a dashboard JSON model, on the **Settings** page, click the **JSON Model** tab.

For more information about the JSON fields, refer to [JSON fields](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/view-dashboard-json-model/#json-fields).
