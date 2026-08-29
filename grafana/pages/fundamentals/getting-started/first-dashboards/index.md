> Release-pinned source for Grafana v13.2.0: [docs/sources/fundamentals/getting-started/first-dashboards/_index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/fundamentals/getting-started/first-dashboards/_index.md)

# Build your first dashboard

This topic helps you get started with Grafana and build your first dashboard using the built-in `Grafana` data source. To learn more about Grafana, refer to [Introduction to Grafana](https://grafana.com/docs/grafana/v13.2/introduction/).

> **Note**
>
> Grafana also offers a [free account with Grafana Cloud](https://grafana.com/signup/cloud/connect-account?pg=gsdocs) to help getting started even easier and faster. You can install Grafana to self-host or get a free Grafana Cloud account.

#### Install Grafana

Grafana can be installed on many different operating systems. For a list of the minimum hardware and software requirements, as well as instructions on installing Grafana, refer to [Install Grafana](https://grafana.com/docs/grafana/v13.2/setup-grafana/installation/).

#### Sign in to Grafana

To sign in to Grafana for the first time:

1. Open your web browser and go to <http://localhost:3000/>.

   The default HTTP port that Grafana listens to is `3000` unless you have configured a different port.

2. On the sign-in page, enter `admin` for both the username and password.

3. Click **Sign in**.

   If successful, you'll see a prompt to change the password.

4. Click **OK** on the prompt and change your password.

> **Note**
>
> We strongly recommend that you change the default administrator password.

#### Create a dashboard

If you've already set up a data source that you know how to query, refer to [Create a dashboard](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/create-dashboard/) instead.

To create your first dashboard using the built-in `-- Grafana --` data source:

1. Click **Dashboards** in the main menu.
2. On the **Dashboards** page, click **New** and select **New dashboard** from the drop-down menu.
3. Click the **Add new element** icon.
4. Click or drag a panel onto the dashboard.

![New dashboard](https://grafana.com/media/docs/grafana/dashboards/screenshot-empty-dashboard-v13.0.png)

1. On the panel, click **Configure visualization**.

   The **Edit panel** view opens with the default data source for your instance preselected.

2. In the **Queries** tab, click the **Data source** drop-down list, enter `-- Grafana --`, and select that data source.

   This configures your [query](https://grafana.com/docs/grafana/v13.2/panels-visualizations/query-transform-data/#add-a-query) and generates the Random Walk dashboard.

3. In the panel edit pane, select the **Time series** visualization.

4. Click **Refresh** to query the data source.

5. When you've finished editing your panel, click **Save**.

   Alternatively, click **Back** if you want to see your changes applied to the dashboard first. Then click **Save** when you're ready.

6. Add a descriptive title for the dashboard, or have Grafana create one using [generative AI features](https://grafana.com/docs/grafana/v13.2/dashboards/manage-dashboards#set-up-generative-ai-features-for-dashboards), and then click **Save**.

7. Click **Back** and then **Exit edit**.

Congratulations, you have created your first dashboard and it's displaying results.

#### Next steps

Continue to experiment with what you have built, try the [explore workflow](https://grafana.com/docs/grafana/v13.2/explore/) or another visualization feature. Refer to [Data sources](https://grafana.com/docs/grafana/v13.2/datasources/) for a list of supported data sources and instructions on how to [add a data source](https://grafana.com/docs/grafana/v13.2/datasources/#add-a-data-source). The following topics will be of interest to you:

- [Panels and visualizations](https://grafana.com/docs/grafana/v13.2/panels-visualizations/)
- [Dashboards](https://grafana.com/docs/grafana/v13.2/dashboards/)
- [Keyboard shortcuts](https://grafana.com/docs/grafana/v13.2/dashboards/use-dashboards/#keyboard-shortcuts)
- [Plugins](https://grafana.com/grafana/plugins?orderBy=weight\&direction=asc)

##### Admins

The following topics are of interest to Grafana server admin users:

- [Grafana configuration](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana/)
- [Authentication](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-authentication/)
- [User permissions and roles](https://grafana.com/docs/grafana/v13.2/administration/roles-and-permissions/)
- [Provisioning](https://grafana.com/docs/grafana/v13.2/administration/provisioning/)
- [Grafana CLI](https://grafana.com/docs/grafana/v13.2/cli/)

## Frequently asked questions

**What do I need before I create a Grafana dashboard?**

Before creating a dashboard, you'll need access to a Grafana instance and, in most cases, a data source that contains the data you want to visualize.
If you're following this getting started guide, you can use the built-in Grafana data source to learn the dashboard creation workflow before connecting your own data.

**Do I need to configure a data source before creating a dashboard?**

Not necessarily.
If you're following this getting started guide, you can use the built-in Grafana data source to create your first dashboard without connecting an external data source.
For production dashboards, you'll typically connect a supported data source such as Prometheus, Loki, MySQL, or another supported integration.

**Can I edit my dashboard after I save it?**

Yes.
Dashboards are designed to be updated over time.
After saving a dashboard, you can reopen it in edit mode to add or remove panels, change queries, switch visualization types, update panel settings, or rename the dashboard whenever needed.
