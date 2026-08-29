> Release-pinned source for Grafana v13.2.0: [docs/sources/visualizations/dashboards/build-dashboards/create-dashboard-url-variables/index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/visualizations/dashboards/build-dashboards/create-dashboard-url-variables/index.md)

# Dashboard URL variables

Dashboard URL [variables](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/variables/) allow you to provide more context when you share a dashboard URL.

For example, you could share a basic URL to your dashboard that looks like this:

```
https://${your-domain}/path/to/your/dashboard
```

This allows someone to navigate to the dashboard, but doesn't provide any helpful context that might be available.

Instead, you can add dashboard variables, passed as query parameters in the dashboard URL, to provide a URL like this:

```
https://${your-domain}/path/to/your/dashboard?var-example=value
```

This allows you to provide added context to the dashboard when someone navigates to it.

## Variables as query parameters

Grafana interprets query string parameters prefixed with `var-` as variables in the given dashboard.

For example:

```
https://${your-domain}/path/to/your/dashboard?var-example=value
```

In this URL, the query parameter `var-example=value` represents the dashboard variable `example` with a value of `value`.

### Multiple values for a variable

To pass multiple values, repeat the variable parameter once for each value:

```
https://${your-domain}/path/to/your/dashboard?var-example=value1&var-example=value2
```

Grafana interprets `var-example=value1&var-example=value2` as the dashboard variable `example` with two values: `value1` and `value2`.

### Example

[This dashboard in Grafana Play](https://play.grafana.org/d/000000074/alerting?var-app=backend\&var-server=backend_01\&var-server=backend_03\&var-interval=1h) passes the variable `server` with multiple values, and the variables `app` and `interval` with a single value each.

## Filters and group by dimensions

Filters automatically query your data source for available dimensions and lets users add or remove filters and group by dimensions on the dashboard dynamically.
This allows you to quickly apply filters dashboard-wide to all metric queries that use the specified data source.
The group by function allows you to then group data by keys, letting you split it up.

For more information, refer to [Filter and Group by documentation](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/build-dashboards/filter-group-by).

To pass a filter as a query parameter, use the variable syntax to pass the filter. Then provide the key, operator, and value as a pipe-separated list.

For example:

```
https://${your-domain}/path/to/your/dashboard?var-filter=example_key|=|example_value
```

In this URL, the query parameter `var-filter=key|=|value` applies the configured filter using the `example_key` key, the `=` operator, and the `example_value` value.

> **Note**
>
> When sharing URLs with filters, remember to encode the URL. In the preceding example, replace the pipes (`|`) with `%7C` and the equality operator (`=`) with `%3D`.

### Example

[This dashboard in Grafana Play](https://play.grafana.org/d/p-k6QtkGz/template-redux?var-interval=$__auto\&orgId=1\&from=now-5m\&to=now\&timezone=utc\&var-query=$__all\&var-query2=$__all\&var-query3=$__all\&var-Filters=job%7C%3D%7Cmetrictank%2Ftsdb-gw\&var-textbox=foo\&var-custom=lisa\&var-datasource=grafanacloud-demoinfra-prom) passes the filter variable `Filters` with the filter value `job = metrictank/tsdb-gw`.

## Time range control using the URL

You can control the time range of a dashboard by providing the following query parameters in the dashboard URL:

- `from` - Defines the lower limit of the time range, specified in ms, epoch, or relative time.
- `to` - Defines the upper limit of the time range, specified in ms, epoch, or relative time.
- `time` and `time.window` - Defines a time range from `time-time.window/2` to `time+time.window/2`. Both parameters should be specified in `ms`. For example `?time=1500000000000&time.window=10000` results in a 10-second time range from 1499999995000 to 1500000005000\`.
- `timezone` - Defines the time zone. For example `timezone=Europe/Madrid`.

Since these aren't variables, they don't require the `var-` prefix.

The following example shows a dashboard with the time range of the last five minutes:

```
https://${your-domain}/path/to/your/dashboard?from=now-5m&to=now
```

## Variables in dashboard links

When you create dashboard links the dashboard settings, you can have current dashboard variables included in the link by selecting that option:

![Dashboard link page with variables option selected](https://grafana.com/media/docs/grafana/dashboards/screenshot-dashboard-link-variables-11.1.png)

For steps to add variables to dashboard links, refer to [Manage dashboard links](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/build-dashboards/manage-dashboard-links/).
