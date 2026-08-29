> Release-pinned source for Grafana v13.2.0: [docs/sources/visualizations/panels-visualizations/query-transform-data/troubleshoot-queries/index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/visualizations/panels-visualizations/query-transform-data/troubleshoot-queries/index.md)

# Troubleshoot queries

This page provides information to solve common dashboard problems.

## I get different results when I rearrange my functions

Function order is very important. Just like in math, the order that you place your functions can affect the result.

## Inspect your query request and response

The most common problems are related to the query and response from your data source. Even if it looks
like a bug or visualization issue in Grafana, it is almost always a problem with the data source query or
the data source response. Start by inspecting your panel query and response.

For more information, refer to [Inspect request and response data](https://grafana.com/docs/grafana/v13.2/panels-visualizations/panel-inspector/#inspect-query-request-and-response-data).

## My query is slow

How many data points is your query returning? A query that returns lots of data points will be slow. Try this:

- In **Query options**, limit the **Max data points** returned.
- In **Query options**, increase the **Min interval** time.
- In your query, use a `group by` function.
