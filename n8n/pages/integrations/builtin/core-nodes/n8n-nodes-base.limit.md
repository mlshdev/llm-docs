> Commit-pinned source for n8n main: [docs/integrations/builtin/core-nodes/n8n-nodes-base.limit.md](https://github.com/n8n-io/n8n-docs/blob/0ece31e57a42e63cf2a2c7f9a33b42888e09a5b3/docs/integrations/builtin/core-nodes/n8n-nodes-base.limit.md)

# Limit <a id="limit"></a>

Use the Limit node to remove items beyond a defined maximum number. You can choose whether n8n takes the items from the beginning or end of the input data.

## Node parameters <a id="node-parameters"></a>

Configure this node using the following parameters.

### Max Items <a id="max-items"></a>

Enter the maximum number of items that n8n should keep. If the input data contains more than this value, n8n removes the items.

### Keep <a id="keep"></a>

If the node has to remove items, select where it keeps the input items from:

- **First Items**: Keeps the **Max Items** number of items from the beginning of the input data.
- **Last Items**: Keeps the **Max Items** number of items from the end of the input data.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Limit integration templates](https://n8n.io/integrations/limit) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Learn more about [data structure and data flow](https://docs.n8n.io/build/work-with-data/overview) in n8n workflows.
