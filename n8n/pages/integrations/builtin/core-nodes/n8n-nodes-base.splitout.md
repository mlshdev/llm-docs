> Commit-pinned source for n8n main: [docs/integrations/builtin/core-nodes/n8n-nodes-base.splitout.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/integrations/builtin/core-nodes/n8n-nodes-base.splitout.md)

# Split Out <a id="split-out"></a>

Use the Split Out node to separate a single data item containing a list into multiple items. For example, a list of customers, and you want to split them so that you have an item for each customer.

## Node parameters <a id="node-parameters"></a>

Configure this node using the following parameters.

### Field to Split Out <a id="field-to-split-out"></a>

Enter the field containing the list you want to separate out into individual items.

If you're working with binary data inputs, use `$binary` in an expression to set the field to split out.

### Include <a id="include"></a>

Select whether and how you want n8n to keep any other fields from the input data with each new individual item.

You can select:

- **No Other Fields**: No other fields will be included.
- **All Other Fields**: All other fields will be included.
- **Selected Other Fields**: Only the selected fields will be included.
  - **Fields to Include**: Enter a comma separated list of the fields you want to include.

## Node options <a id="node-options"></a>

### Disable Dot Notation <a id="disable-dot-notation"></a>

By default, n8n enables dot notation to reference child fields in the format `parent.child`. Use this option to disable dot notation (turned on) or to continue using dot (turned off).

### Destination Field Name <a id="destination-field-name"></a>

Enter the field in the output where the split field contents should go.

### Include Binary <a id="include-binary"></a>

Choose whether to include binary data from the input in the new output (turned on) or not (turned off).

## Templates and examples <a id="templates-and-examples"></a>

[Browse Split Out integration templates](https://n8n.io/integrations/split-out) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Learn more about [data structure and data flow](https://docs.n8n.io/build/work-with-data/overview) in n8n workflows.
