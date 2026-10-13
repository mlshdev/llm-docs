> Pinned source for Grafana v13.2.4: [docs/sources/datasources/mssql/_index.md](https://github.com/grafana/grafana/blob/af4a33e3786594ad72f72d97e6744010330c2977/docs/sources/datasources/mssql/_index.md)

# Microsoft SQL Server data source

Microsoft SQL Server (MSSQL) is one of the most widely used relational databases for business applications, analytics, and operational workloads. The MSSQL data source lets you query your existing SQL Server instance directly from Grafana, with no data migration required.

The data source ships with Grafana out of the box. It's preinstalled in both Grafana OSS and Grafana Enterprise, so there's nothing for you to install. Starting with Grafana 13.2, it's packaged as a standalone plugin that updates independently of Grafana releases. Refer to [Plugin updates](#plugin-updates) for details.

You can connect to Microsoft SQL Server 2012 or newer, Azure SQL Database, and Azure SQL Managed Instance.

## Supported features

| Feature     | Supported |
| ----------- | --------- |
| Metrics     | Yes       |
| Alerting    | Yes       |
| Annotations | Yes       |

## Supported versions

| Version                    | Supported |
| -------------------------- | --------- |
| Microsoft SQL Server 2012+ | Yes       |
| Azure SQL Database         | Yes       |
| Azure SQL Managed Instance | Yes       |

Grafana recommends using the latest available service pack for optimal compatibility.

## Authentication methods

The Microsoft SQL Server data source supports the following authentication methods:

| Method                                       | Best for                                 | Grafana Cloud | Self-managed | Supports alerting |
| -------------------------------------------- | ---------------------------------------- | ------------- | ------------ | ----------------- |
| SQL Server Authentication                    | Any deployment                           | Yes           | Yes          | Yes               |
| Windows Authentication (Integrated Security) | On-premises with Windows SSO             | No            | Yes          | Yes               |
| Windows AD (Kerberos)                        | Enterprise Active Directory environments | No            | Yes          | Yes               |
| Azure Entra ID (App Registration)            | Azure SQL with service principal         | Yes           | Yes          | Yes               |
| Azure Entra ID (Managed Identity)            | Grafana hosted in Azure                  | No            | Yes          | Yes               |
| Azure Entra ID (Current User)                | User-level access control with Azure SQL | Yes           | Yes          | No                |

> **Note**
>
> Azure Entra ID (Current User) authentication doesn't support alerting, reporting, or recorded queries because these features run on the backend without a user session.

For configuration details, refer to [Configure the Microsoft SQL Server data source](https://grafana.com/docs/grafana/v13.2/datasources/mssql/configure/).

## Get started

The following documentation helps you set up and use the Microsoft SQL Server data source:

- [Configure the data source](https://grafana.com/docs/grafana/v13.2/datasources/mssql/configure/)
- [Query editor](https://grafana.com/docs/grafana/v13.2/datasources/mssql/query-editor/)
- [Template variables](https://grafana.com/docs/grafana/v13.2/datasources/mssql/template-variables/)
- [Annotations](https://grafana.com/docs/grafana/v13.2/datasources/mssql/annotations/)
- [Alerting](https://grafana.com/docs/grafana/v13.2/datasources/mssql/alerting/)
- [Troubleshooting](https://grafana.com/docs/grafana/v13.2/datasources/mssql/troubleshooting/)

## Plugin updates

Starting with Grafana 13.2, the Microsoft SQL Server data source is a standalone plugin, preinstalled in both Grafana OSS and Grafana Enterprise. This enables more frequent updates independent of Grafana releases. Grafana automatically checks the plugin catalog and installs the latest version on each server restart.

To adjust this behavior:

- **Opt out of auto-updates:** Set `preinstall_auto_update` to `false` in your [configuration file](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana/).
- **Update manually:** Update at any time from the **Administration > Plugins** page without restarting Grafana.

The standalone plugin requires Grafana 12.3.0 or later. The Microsoft SQL Server data source bundled with Grafana 13.1 and earlier continues to work as before. These versions are unaffected by the change.

Users running Grafana 12.3.x through 13.1.x can install the standalone plugin from the plugin catalog if they want the latest features before upgrading to Grafana 13.2. To use the standalone plugin with Grafana 12.3.x through 13.1.x, add the following to your [configuration file](https://grafana.com/docs/grafana/v13.2/setup-grafana/configure-grafana/):

```ini
[plugin.mssql]
as_external = true

[plugins]
; Install the latest version on startup:
preinstall_sync = mssql
; Or install a specific version:
; preinstall_sync = mssql@<version>
```

## Additional features

After you configure the data source, you can:

- Use [Explore](https://grafana.com/docs/grafana/v13.2/explore/) to query data without building a dashboard
- Create [visualizations](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/) including time series, tables, and gauges
- Add [transformations](https://grafana.com/docs/grafana/v13.2/panels-visualizations/query-transform-data/transform-data/) to manipulate query results
- Optimize performance with [query caching](https://grafana.com/docs/grafana/v13.2/administration/data-source-management/#query-and-resource-caching) (Grafana Enterprise and Cloud)

[//]: # "Shared note: querying a data source with the gcx Grafana CLI."

[//]: # "This shared file is included in these locations:"

[//]: # "/docs/sources/datasources/pyroscope/_index.md"

[//]: # "/docs/sources/datasources/mysql/_index.md"

[//]: #

[//]: # "If you make changes to this file, verify that the meaning and content are not changed in any place where the file is included."

[//]: # "Any links should be fully qualified and not relative: /docs/grafana/ instead of ../grafana/."

## Query with the Grafana CLI

You can query this data source from the command line and from AI coding agents using the Grafana CLI, `gcx`. `gcx` gives you and your agent structured, terminal-based access to your Grafana data sources, which is useful for automation and agent-driven investigations.

`gcx` supports Grafana Cloud and Grafana OSS or Enterprise v12 and later. Before you query, install and authenticate `gcx`. Refer to the [`gcx` CLI documentation](https://grafana.com/docs/grafana/v13.2/as-code/observability-as-code/grafana-cli/gcx/) for installation, configuration, and the full command reference.

For example, to explore and query your Microsoft SQL Server data source, use the `gcx datasources mssql` commands:

```sh
# List tables and views, or filter to a single schema
gcx datasources mssql list-tables -d <DATASOURCE_UID>
gcx datasources mssql list-tables -d <DATASOURCE_UID> --schema dbo

# Show the columns of a table
gcx datasources mssql describe-table dbo.WORLD_DATA -d <DATASOURCE_UID>

# Run a SQL query (server-side macros like $__timeFilter are supported)
gcx datasources mssql query -d <DATASOURCE_UID> 'SELECT * FROM events WHERE $__timeFilter(created_at)' --since 1h
```

Replace *`<DATASOURCE_UID>`* with the UID of your Microsoft SQL Server data source. You can omit the `-d` flag when `datasources.mssql` is configured in your `gcx` context. The `query` command supports Grafana server-side macros such as `$__timeFilter` and `$__timeGroup`, and because T-SQL has no `LIMIT`, results are capped with an injected `TOP (n)` clause, which you can disable with `--limit 0`. The `list-tables` and `describe-table` commands read `INFORMATION_SCHEMA` for the data source's configured database.

## Related data sources

- [PostgreSQL](https://grafana.com/docs/grafana/v13.2/datasources/postgres/)
- [MySQL](https://grafana.com/docs/grafana/v13.2/datasources/mysql/)
