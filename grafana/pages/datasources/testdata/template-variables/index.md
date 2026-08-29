> Release-pinned source for Grafana v13.2.0: [docs/sources/datasources/testdata/template-variables/index.md](https://github.com/grafana/grafana/blob/f681b1359f6a0b8ecb9f2c49a88ac72b75bde73b/docs/sources/datasources/testdata/template-variables/index.md)

# TestData template variables

Use template variables with the TestData data source to test dynamic, reusable dashboards. TestData provides a hierarchical metric tree that you can query to populate variable drop-downs with simulated values.

For an introduction to templating and template variables, refer to the [Templating](https://grafana.com/docs/grafana/v13.2/dashboards/variables/) and [Add and manage variables](https://grafana.com/docs/grafana/v13.2/dashboards/variables/add-template-variables/) documentation.

## Supported variable types

| Variable type | Supported |
| ------------- | --------- |
| Query         | Yes       |
| Custom        | Yes       |
| Data source   | Yes       |

## Create a query variable

To create a query variable using TestData:

1. Navigate to the dashboard you want to update and click **Edit**.
2. Click the **Add new element** icon (blue plus sign).
3. Click **Variable**.
4. Select **Query** as the variable type.
5. Enter a **Name** for your variable.
6. Select an option in the **Display** drop-down list to control where on the dashboard the variable is displayed.
7. Click **Open variable editor** to open the **Query Variable** dialog box.
8. Select the **TestData** data source.
9. Enter your query in the **Query** field.

## Metric tree queries

TestData generates a hierarchical metric tree with nodes named using letter combinations. The tree has 6 levels of depth, with each level containing 8 nodes labeled A through H. The query string navigates this tree using dot-separated path segments.

### Query syntax

Use `*` as a wildcard to return all children at a given level:

| Query    | Result                                                                      |
| -------- | --------------------------------------------------------------------------- |
| `*`      | Returns the top-level nodes: `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`.        |
| `A.*`    | Returns children of node A: `AA`, `AB`, `AC`, `AD`, `AE`, `AF`, `AG`, `AH`. |
| `A.AA.*` | Returns children of node AA: `AAA`, `AAB`, `AAC`, etc.                      |
| `A.AB`   | Returns children of the AB node: `ABA`, `ABB`, `ABC`, etc.                  |

Use glob patterns with curly braces to match multiple nodes:

| Query         | Result                                                               |
| ------------- | -------------------------------------------------------------------- |
| `{A,B}.*`     | Returns children of both A and B: `AA`, `AB`, ..., `BA`, `BB`, etc.  |
| `A.{AA,AB}.*` | Returns children of AA and AB: `AAA`, `AAB`, ..., `ABA`, `ABB`, etc. |

Use `*` after a prefix to match nodes that start with the given string:

| Query | Result                                                                   |
| ----- | ------------------------------------------------------------------------ |
| `A*`  | Returns all top-level nodes starting with A (only `A` at the top level). |

### Value queries

If your query string starts with `value`, TestData returns the query string itself as the result. This is useful for creating variables with specific values for testing. For example, a query of `value_production` returns `value_production`.

## Example: Create a region variable

This example walks through creating a query variable that populates a drop-down with simulated region values, then using it in a panel query.

1. Navigate to the dashboard you want to update and click **Edit**.
2. Click the **Add new element** icon (blue plus sign).
3. Click **Variable**.
4. Select **Query** as the variable type.
5. Enter a **Name** for your variable (for example, `host`).
6. Select an option in the **Display** drop-down list to control where on the dashboard the variable is displayed.
7. Click **Open variable editor** to open the **Query Variable** dialog box.
8. Select the **TestData** data source.
9. Enter `*` in the **Query** field. This populates the variable with the top-level nodes (A through H).
10. Name the variable `region`.
11. Click **Close** when you've completed the query setup.
12. (Optional) Configure **Multi-value** to allow selecting multiple values.
13. (Optional) Configure **Include All value** to add an "All" option.
14. (Optional) Turn on the **Allow custom values** switch to allow users to enter custom variable values.
15. Click **Save**.
16. (Optional) Enter a description of the changes you've made.
17. Click **Save**.
18. Click **Exit edit**.

To use the variable in a panel:

1. Add a new panel and select the **TestData** data source.
2. Choose the **Random Walk** scenario.
3. In the **Labels** field, enter `region=$region`.
4. The panel updates when you select a different value from the **region** drop-down.

## Example: Chain variables for cascading drop-downs

You can create dependent variables where one variable's query references another, producing cascading drop-downs.

1. Create a variable named `region` with the query `*`. This returns the top-level nodes (A through H).
2. Create a second variable named `host` with the query `$region.*`. When the user selects `A` as the region, the host drop-down populates with `AA`, `AB`, `AC`, etc.

Changing the region selection automatically refreshes the host drop-down.

## Use variables in queries

TestData interpolates template variables in the following query fields:

- **Labels**
- **Alias**
- **Scenario**
- **String Input**
- **CSV Content**
- **Raw Frame Content**

Use the standard Grafana variable syntax (`$varname` or `${varname}`) in any of these fields to insert variable values.

### Example

With a variable named `env` set to `production`, entering `env=$env` in the **Labels** field produces a series labeled `env=production`.

## Limitations

TestData doesn't support the use of [filters](https://grafana.com/docs/grafana/v13.2/visualizations/dashboards/build-dashboards/filter-group-by/). Filters require the data source to implement tag key and value lookups, which TestData doesn't provide.
