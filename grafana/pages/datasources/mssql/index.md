> Release-pinned source for Grafana v13.2.0: [docs/sources/datasources/mssql/_index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/datasources/mssql/_index.md)

# Microsoft SQL Server data source

Microsoft SQL Server (MSSQL) is one of the most widely used relational databases for business applications, analytics, and operational workloads. The built-in MSSQL data source lets you query your existing SQL Server instance directly from Grafana, no data migration or additional plugins required.

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

## Additional features

After you configure the data source, you can:

- Use [Explore](https://grafana.com/docs/grafana/v13.2/explore/) to query data without building a dashboard
- Create [visualizations](https://grafana.com/docs/grafana/v13.2/panels-visualizations/visualizations/) including time series, tables, and gauges
- Add [transformations](https://grafana.com/docs/grafana/v13.2/panels-visualizations/query-transform-data/transform-data/) to manipulate query results
- Optimize performance with [query caching](https://grafana.com/docs/grafana/v13.2/administration/data-source-management/#query-and-resource-caching) (Grafana Enterprise and Cloud)

## Related data sources

- [PostgreSQL](https://grafana.com/docs/grafana/v13.2/datasources/postgres/)
- [MySQL](https://grafana.com/docs/grafana/v13.2/datasources/mysql/)
