> Commit-pinned source for n8n main: [docs/integrations/builtin/core-nodes/n8n-nodes-base.summarize.md](https://github.com/n8n-io/n8n-docs/blob/0ece31e57a42e63cf2a2c7f9a33b42888e09a5b3/docs/integrations/builtin/core-nodes/n8n-nodes-base.summarize.md)

# Summarize <a id="summarize"></a>

Use the Summarize node to aggregate items together, in a manner similar to Excel pivot tables.

## Node parameters <a id="node-parameters"></a>

### Fields to Summarize <a id="fields-to-summarize"></a>

Use these fields to define how you want to summarize your input data.

- **Aggregation**: Select the aggregation method to use on a given field. Options include:
  - **Append**: Append
    - If you select this option, decide whether you want to **Include Empty Values** or not.
  - **Average**: Calculate the numeric average of your input data.
  - **Concatenate**: Combine together values in your input data.
    - If you select this option, decide whether you want to **Include Empty Values** or not.
    - **Separator**: Select the separator you want to insert between concatenated values.
  - **Count**: Count the total number of values in your input data.
  - **Count Unique**: Count the number of unique values in your input data.
  - **Max**: Find the highest numeric value in your input data.
  - **Min**: Find the lowest numeric value in your input data.
  - **Sum**: Add together the numeric values in your input data.
- **Field**: Enter the name of the field you want to perform the aggregation on.

### Fields to Split By <a id="fields-to-split-by"></a>

Enter the name of the input fields that you want to split the summary by (similar to a group by statement). This allows you to get separate summaries based on values in other fields.

For example, if our input data contains columns for `Sales Rep` and `Deal Amount` and we're performing a **Sum** on the `Deal Amount` field, we could split by `Sales Rep` to get a **Sum** total for each Sales Rep.

To enter multiple fields to split by, enter a comma-separated list.

## Node options <a id="node-options"></a>

### Continue if Field Not Found <a id="continue-if-field-not-found"></a>

By default, if a **Field to Summarize** isn't in any items, the node throws an error. Use this option to continue and return a single empty item (turned on) instead or keep the default error behavior (turned off).

### Disable Dot Notation <a id="disable-dot-notation"></a>

By default, n8n enables dot notation to reference child fields in the format `parent.child`. Use this option to disable dot notation (turned on) or to continue using dot (turned off).

### Output Format <a id="output-format"></a>

Select the format for your output format. This option is recommended if you're using **Fields to Split By**

- **Each Split in a Separate Item**: Use this option to generate a separate output item for each split out field.
- **All Splits in a Single Item**: Use this option to generate a single item that lists the split out fields.

## Ignore items without valid fields to group by <a id="ignore-items-without-valid-fields-to-group-by"></a>

Set whether to ignore input items that don't contain the **Fields to Split By** (turned on) or not (turned off).

## Templates and examples <a id="templates-and-examples"></a>

[Browse Summarize integration templates](https://n8n.io/integrations/summarize) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Learn more about [data structure and data flow](https://docs.n8n.io/build/work-with-data/overview) in n8n workflows.
