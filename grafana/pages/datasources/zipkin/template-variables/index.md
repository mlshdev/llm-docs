> Release-pinned source for Grafana v13.2.1: [docs/sources/datasources/zipkin/template-variables/index.md](https://github.com/grafana/grafana/blob/56cd3e9288d8255fecebe5d05b48d191f50674b5/docs/sources/datasources/zipkin/template-variables/index.md)

# Zipkin template variables

Use template variables to create dynamic, reusable dashboards. Instead of hard-coding trace IDs, you can use variables to let dashboard viewers select or input trace IDs at view time, making it easier to share dashboards across teams.

For an introduction to Grafana template variables, refer to [Variables](https://grafana.com/docs/grafana/v13.2/dashboards/variables/).

## Supported variable types

| Variable type | Description                                       | Supported |
| ------------- | ------------------------------------------------- | --------- |
| Custom        | Define a fixed list of trace IDs or other values. | Yes       |
| Text box      | Let users type a trace ID at dashboard view time. | Yes       |
| Data source   | Let users switch between Zipkin instances.        | Yes       |
| Query         | Populate options from a data source query.        | No        |

The Zipkin data source doesn't support query-based variables, but you can use custom or text box variables to parameterize trace ID queries.

## Create a text box variable

A text box variable lets dashboard viewers enter a trace ID directly. This is the most common variable type for Zipkin.

To create a text box variable:

1. Navigate to the dashboard you want to update and click **Edit**.
2. Click the **Add new element** icon (blue plus sign).
3. Click **Variable**.
4. Select **Textbox** as the variable type.
5. Set the **Name** to `traceId`.
6. Select an option in the **Display** drop-down list to control where on the dashboard the variable is displayed.
7. (Optional) Set a default **Value** with a known trace ID for initial display.
8. Click **Save**.
9. (Optional) Enter a description of the changes you've made.
10. Click **Save**.
11. Click **Exit edit**.

The dashboard displays a text input where viewers can paste a trace ID.

## Create a custom variable

A custom variable provides a predefined list of values. This is useful when you want to give viewers a set of known trace IDs to choose from.

To create a custom variable:

1. Navigate to the dashboard you want to update and click **Edit**.

2. Click the **Add new element** icon (blue plus sign).

3. Click **Variable**.

4. Select **Custom** as the variable type.

5. Set the **Name** to `traceId`.

6. Select an option in the **Display** drop-down list to control where on the dashboard the variable is displayed.

7. Click **Open variable editor** to open the **Custom options** dialog box.

8. Enter trace IDs in the **Values separated by comma** field:

   ```
   efe9cb8857f68c8f,463ac35c9f6413ad48485a3953bb6124
   ```

9. Click **Apply**.

10. Click **Save**.

11. (Optional) Enter a description of the changes you've made.

12. Click **Save**.

13. Click **Exit edit**.

The dashboard displays a drop-down where viewers can select from the predefined trace IDs.

## Create a data source variable

A data source variable lets viewers switch between multiple Zipkin instances. This is useful when you have separate Zipkin deployments for different environments.

To create a data source variable:

1. Navigate to the dashboard you want to update and click **Edit**.
2. Click the **Add new element** icon (blue plus sign).
3. Click **Variable**.
4. Select **Data source** as the variable type.
5. Set the **Name** to `zipkinDs`.
6. Select an option in the **Display** drop-down list to control where on the dashboard the variable is displayed.
7. Select **Zipkin** as the **Type**.
8. Click **Save**.
9. (Optional) Enter a description of the changes you've made.
10. Click **Save**.
11. Click **Exit edit**.

Then, in your panel's query editor, select `${zipkinDs}` as the data source instead of a specific Zipkin instance.

## Use variables in queries

You can use template variables in the **Trace ID** field of the query editor. Grafana replaces the variable with its current value when the query runs.

For example, if you create a text box variable named `traceId`, enter `${traceId}` in the trace ID field. When the viewer enters a new trace ID, the query automatically runs with the new value.

For more information about variable syntax, refer to [Variable syntax](https://grafana.com/docs/grafana/v13.2/dashboards/variables/variable-syntax/).

## Troubleshoot template variable issues

If template variables aren't working as expected, refer to [Troubleshoot Zipkin data source issues](https://grafana.com/docs/grafana/v13.2/datasources/zipkin/troubleshooting/).
