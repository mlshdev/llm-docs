> Release-pinned source for Grafana v13.2.0: [docs/sources/introduction/_index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/introduction/_index.md)

# About Grafana

[Grafana open source software](https://grafana.com/oss/) enables you to query, visualize, alert on, and explore your metrics, logs, and traces wherever they are stored. Grafana OSS provides you with tools to turn your time-series database (TSDB) data into insightful graphs and visualizations. The Grafana OSS plugin framework also enables you to connect other data sources like NoSQL/SQL databases, ticketing tools like Jira or ServiceNow, and CI/CD tooling like GitLab.

After you've [installed Grafana](https://grafana.com/docs/grafana/v13.2/setup-grafana/installation/) and set up your first dashboard using instructions in [Getting started with Grafana](https://grafana.com/docs/grafana/v13.2/getting-started/build-first-dashboard/), you will have many options to choose from depending on your requirements. For example, if you want to view weather data and statistics about your smart home, then you can create a [playlist](https://grafana.com/docs/grafana/v13.2/dashboards/create-manage-playlists/). If you are the administrator for an enterprise and are managing Grafana for multiple teams, then you can set up [provisioning](https://grafana.com/docs/grafana/v13.2/administration/provisioning/) and [authentication](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-authentication/).

The following sections provide an overview of Grafana features and links to product documentation to help you learn more. For more guidance and ideas, check out our [Grafana Community forums](https://community.grafana.com/).

## Explore metrics, logs, and traces

Explore your data through ad-hoc queries and dynamic drilldown. Split view and compare different time ranges, queries and data sources side by side. Refer to [Explore](https://grafana.com/docs/grafana/v13.2/explore/) for more information.

## Alerts

If you're using Grafana Alerting, then you can have alerts sent through a number of different alert notifiers, including PagerDuty, SMS, email, VictorOps, OpsGenie, or Slack.

Alert hooks allow you to create different notifiers with a bit of code if you prefer some other channels of communication. Visually define [alert rules](https://grafana.com/docs/grafana/v13.2/alerting/alerting-rules/) for your most important metrics.

## Annotations

Annotate graphs with rich events from different data sources. Hover over events to see the full event metadata and tags.

This feature, which shows up as a graph marker in Grafana, is useful for correlating data in case something goes wrong. You can create the annotations manually—just control-click on a graph and input some text—or you can fetch data from any data source. Refer to [Annotations](https://grafana.com/docs/grafana/v13.2/dashboards/build-dashboards/annotate-visualizations/) for more information.

## Import dashboards and plugins

Discover hundreds of [dashboards](https://grafana.com/grafana/dashboards) and [plugins](https://grafana.com/grafana/plugins) in the official library. Thanks to the passion and momentum of community members, new ones are added every week.

## Dashboard variables

[Template variables](https://grafana.com/docs/grafana/v13.2/dashboards/variables/) allow you to create dashboards that can be reused for lots of different use cases. Values aren't hard-coded with these templates, so for instance, if you have a production server and a test server, you can use the same dashboard for both.

Templating allows you to drill down into your data, say, from all data to North America data, down to Texas data, and beyond. You can also share these dashboards across teams within your organization—or if you create a great dashboard template for a popular data source, you can contribute it to the whole community to customize and use.

## Configure Grafana

If you're a Grafana administrator, then you'll want to thoroughly familiarize yourself with [Grafana configuration options](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana/) and the [Grafana CLI](https://grafana.com/docs/grafana/v13.2/cli/).

Configuration covers both config files and environment variables. You can set up default ports, logging levels, email IP addresses, security, and more.

## Provisioning

While it's easy to click, drag, and drop to create a single dashboard, power users in need of many dashboards will want to automate the setup with a script. You can script anything in Grafana.

For example, if you're spinning up a new Kubernetes cluster, you can also spin up a Grafana automatically with a script that would have the right server, IP address, and data sources preset and locked in so users cannot change them. It's also a way of getting control over a lot of dashboards. Refer to [Provisioning](https://grafana.com/docs/grafana/v13.2/administration/provisioning/) for more information.

## Authentication

Grafana supports different authentication methods, such as LDAP and OAuth, and allows you to map users to organizations. Refer to the [User authentication overview](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-access/configure-authentication/) for more information.

In Grafana Enterprise, you can also map users to teams: If your company has its own authentication system, Grafana allows you to map the teams in your internal systems to teams in Grafana. That way, you can automatically give people access to the dashboards designated for their teams. Refer to [Grafana Enterprise](https://grafana.com/docs/grafana/v13.2/introduction/grafana-enterprise/) for more information.

## Permissions

When organizations have one Grafana and multiple teams, they often want the ability to both keep things separate and share dashboards. You can create a team of users and then set permissions on [folders and dashboards](https://grafana.com/docs/grafana/v13.2/administration/user-management/manage-dashboard-permissions/), and down to the [data source level](https://grafana.com/docs/grafana/v13.2/administration/data-source-management/#data-source-permissions) if you're using [Grafana Enterprise](https://grafana.com/docs/grafana/v13.2/introduction/grafana-enterprise/).

## Other Grafana Labs OSS Projects

In addition to Grafana, Grafana Labs also provides the following open source projects:

**Grafana Loki:** Grafana Loki is an open source, set of components that can be composed into a fully featured logging stack. For more information, refer to [Grafana Loki documentation](https://grafana.com/docs/loki/latest/).

**Grafana Tempo:** Grafana Tempo is an open source, easy-to-use and high-volume distributed tracing backend. For more information, refer to [Grafana Tempo documentation](https://grafana.com/docs/tempo/latest/?pg=oss-tempo\&plcmt=hero-txt/).

**Grafana Mimir:** Grafana Mimir is an open source software project that provides a scalable long-term storage for Prometheus. For more information about Grafana Mimir, refer to [Grafana Mimir documentation](https://grafana.com/docs/mimir/latest/).

**Grafana Pyroscope:** Grafana Pyroscope is an open source software project for aggregating continuous profiling data. Continuous profiling is an observability signal that allows you to understand your workload's resources (CPU, memory, for example) usage down to the line number. For more information about Grafana Pyroscope, refer to [Grafana Pyroscope documentation](https://grafana.com/docs/pyroscope/latest/).

**Grafana Faro:** Grafana Faro is an open source JavaScript agent that embeds in web applications to collect real user monitoring (RUM) data: performance metrics, logs, exceptions, events, and traces. For more information about using Grafana Faro, refer to [Grafana Faro documentation](https://grafana.com/docs/grafana-cloud/monitor-applications/frontend-observability/faro-web-sdk/).

**Grafana Beyla:** Grafana Beyla is an eBPF-based application auto-instrumentation tool for application observability. eBPF is used to automatically inspect application executables and the OS networking layer as well as capture basic trace spans related to web transactions and Rate-Errors-Duration (RED) metrics for Linux HTTP/S and gRPC services. All data capture occurs without any modifications to application code or configuration. For more information about Grafana Beyla, refer to [Grafana Beyla documentation](https://grafana.com/docs/beyla/latest/).

**Grafana Alloy:** Grafana Alloy is a flexible, high performance, vendor-neutral distribution of the [OpenTelemetry](https://opentelemetry.io/) (OTel) Collector.
It's fully compatible with the most popular open source observability standards such as OpenTelemetry (OTel) and Prometheus.
For more information about Grafana Alloy, refer to the [Grafana Alloy documentation](https://grafana.com/docs/alloy/latest/).

**Grafana k6:** Grafana k6 is an open-source load testing tool that makes performance testing easy and productive for engineering teams. For more information about Grafana k6, refer to [Grafana k6 documentation](https://grafana.com/docs/k6/latest/).

**Grafana OnCall:** Grafana OnCall is an open source incident response management tool built to help teams improve their collaboration and resolve incidents faster. For more information about Grafana OnCall, refer to [Grafana OnCall documentation](https://grafana.com/docs/oncall/latest/).

## Get in touch and contribute

Use the right place to ask questions, report problems, and propose changes.

- **GitHub issues and pull requests**: Use for reproducible bugs in core Grafana and maintained plugins, small and actionable feature requests, and code or docs changes via pull requests. Avoid general “how do I” questions. For security issues, follow the [security policy](https://github.com/grafana/grafana/security/policy).
- **Grafana community forums**: Use for questions, troubleshooting, best practices, plugin development Q\&A, and early idea discussion. Forums create a searchable public knowledge base that helps others with the same problems and questions. Start here if you are unsure: [Grafana community forums](https://community.grafana.com/).
- **Grafana Community Slack**: Use for quick, time-sensitive chats and networking. Do not rely on Slack for long troubleshooting or decisions. Share outcomes back to a forum topic or GitHub issue/PR to keep a public record: [Grafana Community Slack](https://slack.grafana.com).

> **Note**
>
> **Not sure where to start?** Open a new topic in the forum! Maintainers and community members will redirect you if a GitHub issue or pull request is more appropriate.

For more information, refer to [Contribute to Grafana](https://grafana.com/docs/grafana/v13.2/developer-resources/contribute).

## Frequently asked questions

**What is Grafana and what is it used for?**

Grafana is open source software for querying, visualizing, and alerting on your metrics, logs, and traces, wherever they're stored.
It's used for infrastructure and application monitoring, observability, and operational dashboards.
Grafana turns time-series data into graphs, with a plugin framework that connects to many data sources so you can bring metrics, logs, and traces into one place.

**Is Grafana open source and free to use?**

Yes, Grafana is open source and free to use.
You can download Grafana OSS and self-host it at no cost.
Grafana Labs also offers two commercial editions built on the same core: Grafana Enterprise, a self-managed edition that adds enterprise features, plugins, and support; and Grafana Cloud, a fully managed service that includes a free tier.
You can start with Grafana OSS and move to Enterprise or Cloud as your needs grow.

**What's the difference between Grafana OSS, Grafana Enterprise, and Grafana Cloud?**

Grafana OSS, Grafana Enterprise, and Grafana Cloud share the same Grafana core but differ in how they're hosted and what they include.
Grafana OSS is the free, self-managed open source edition that you run and maintain yourself.
Grafana Enterprise is also self-managed, but adds commercial features such as enterprise data source plugins, reporting, enhanced access control, and official support.
Grafana Cloud is a fully managed platform hosted by Grafana Labs that bundles Grafana with metrics, logs, and traces backends and includes a free tier, so you don't have to run the stack yourself.
