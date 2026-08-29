> Release-pinned source for Grafana v13.2.0: [docs/sources/administration/correlations/use-correlations-in-visualizations/index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/administration/correlations/use-correlations-in-visualizations/index.md)

# Use correlations in visualizations

## Correlations in Logs Panel

1. Setup a correlation.
2. Open Explore.
3. Select a data source that you chose as the source data source of the correlation.
4. Run a query that results in data containing fields required to build variables in the target query.
5. Expand log row details.
6. If the selected row contains all the information required to build the target query a link appears in the “Links” section at the bottom.
7. Additional information about used variables and their values is shown next to each link.

![](https://grafana.com/static/img/docs/correlations/correlations-in-logs-panel-10-0.png)

*Correlation links in Logs panel*

## Correlations in Table

1. Setup a correlation.
2. Open Explore.
3. Select a data source that you chose as the source data source of the correlation.
4. Run a query that results in data containing fields required to build variables in the target query.
5. Links are added to cell rows in the column representing the field with the assigned link ([the results field](https://grafana.com/docs/grafana/v13.2/administration/correlations/correlation-configuration/#source-data-source-and-result-field).
6. Cells containing multiple links accessible with a context menu.

![](https://grafana.com/static/img/docs/correlations/correlations-in-table-10-0.png)

*Correlations links in table*
