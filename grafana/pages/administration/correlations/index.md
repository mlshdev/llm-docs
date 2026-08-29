> Release-pinned source for Grafana v13.2.0: [docs/sources/administration/correlations/_index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/administration/correlations/_index.md)

# Correlations

You can create interactive links for Explore visualizations by setting up Correlations. These links can either run queries or generate external URLs related to presented data.

A correlation defines how data in one [data source](https://grafana.com/docs/grafana/v13.2/datasources/) is used to query data in another data source or to generate an external URL.
Some examples:

- an application name returned in a logs data source can be used to query metrics related to that application in a metrics data source, or
- a user name returned by an SQL data source can be used to query logs related to that particular user in a logs data source
- a customer ID in a logs data source can link to a different platform that has a profile on that customer.

[Explore](https://grafana.com/docs/grafana/v13.2/explore/) takes user-defined correlations to display links inside the visualizations.
If a correlation links to a query, you can click on that link to run the related query and see results in [Explore Split View](https://grafana.com/docs/grafana/v13.2/explore/#split-and-compare).
If a correlation links to an external URL, you can click on the link to open the URL in a new tab in your browser.

Explore visualizations that currently support showing links based on correlations:

- [Logs Panel](https://grafana.com/docs/grafana/v13.2/administration/correlations/use-correlations-in-visualizations/#correlations-in-logs-panel)
- [Table](https://grafana.com/docs/grafana/v13.2/administration/correlations/use-correlations-in-visualizations/#correlations-in-table)

You can configure correlations using [provisioning](https://grafana.com/docs/grafana/v13.2/administration/provisioning/), the **Administration > Plugins and data > Correlations** page in Grafana or directly in [Explore](https://grafana.com/docs/grafana/v13.2/explore/correlations-editor-in-explore/).

## Example of how links work in Explore once set up

![Demonstration of following a correlation link in Grafana Explore](https://grafana.com/static/img/docs/correlations/correlations-in-explore-10-0.gif)

*Correlations links in Explore*

See also:

- [Correlation](https://grafana.com/docs/grafana/v13.2/administration/correlations/correlation-configuration/)
- [Permissions](https://grafana.com/docs/grafana/v13.2/administration/correlations/correlation-permissions/)
- [Add permissions to create new correlations](https://grafana.com/docs/grafana/v13.2/administration/correlations/add-permissions-to-create-new-correlations/)
- [Create a new correlation](https://grafana.com/docs/grafana/v13.2/administration/correlations/create-a-new-correlation/)
- [Use variables and transformations in a correlation](https://grafana.com/docs/grafana/v13.2/administration/correlations/use-variables-and-transformations/)
- [Use correlations in visualizations](https://grafana.com/docs/grafana/v13.2/administration/correlations/use-correlations-in-visualizations/)
