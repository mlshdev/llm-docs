> Release-pinned source for Grafana v13.2.1: [docs/sources/visualizations/dashboards/_index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/visualizations/dashboards/_index.md)

# Dashboards

Dashboards allow you to query, transform, visualize, and understand your data no matter where it's stored.

***

## Overview

A Grafana dashboard is a set of one or more [panels](https://grafana.com/docs/grafana/v13.2/panels-visualizations/panel-overview/), organized and arranged into one or more rows or tabs, that provide an at-a-glance view of related information. These panels are created using components that query and transform raw data from a data source into visualizations.

A data source can be an SQL database, Grafana Loki, Grafana Mimir, or an API endpoint. It can even be a basic CSV file. Data source plugins take a query you want answered, retrieve the data from the data source, and reconcile the differences between the data model of the data source and the data model of Grafana dashboards.

Queries allow you to reduce the entirety of your data to a specific dataset, providing a more manageable visualization. Since data sources have their own distinct query languages, Grafana dashboards provide you with a query editor to accommodate these differences.

A panel is the container that displays the visualization and provides you with various controls to manipulate it. Panel options let you customize many aspects of a visualization and the options differ based on which visualization you select. When the data format in a visualization doesn't meet your requirements, you can apply a transformation that manipulates the data returned by a query.

With 150+ data source plugins, you can unify all your data sources into a single dashboard to streamline data monitoring and troubleshooting. With Grafana, you can translate, transform, and visualize data in flexible and versatile dashboards.

## Explore

- [Build dashboards](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/build-dashboards/): Get step-by-step directions for how to create or import your first dashboard and modify dashboard settings. Learn about reusable library panels, dashboard links, annotations, and dashboard JSON.
- [Manage dashboards](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/manage-dashboards/): Learn about dashboard and folder management, as well as generative AI features for dashboards.
- [Variables](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/variables/): Add variables to metric queries and panel titles to create interactive and dynamic dashboards.
- [Reporting](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/create-reports/): Automatically generate and share PDF reports from your Grafana dashboards.
- [Sharing](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/share-dashboards-panels/): Share Grafana dashboards and panels using links, snapshots, embeds, and exports.
- [Shared dashboards](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/share-dashboards-panels/shared-dashboards/): Share your dashboards with anyone without requiring access to your Grafana organization.
