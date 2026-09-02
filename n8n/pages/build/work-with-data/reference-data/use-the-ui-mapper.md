> Commit-pinned source for n8n main: [docs/build/work-with-data/reference-data/use-the-ui-mapper.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/build/work-with-data/reference-data/use-the-ui-mapper.md)

# Referencing data in the UI <a id="referencing-data-in-the-ui"></a>

Data mapping means referencing data from previous nodes. It doesn't include changing (transforming) data, just referencing it.

When you need data from a particular node in your workflow, you can [reference nodes by name](https://docs.n8n.io/build/work-with-data/reference-data/reference-previous-nodes). This is useful when your workflow has multiple branches or when you need to access data from several steps back.

You can map data in the following ways:

- Using the expressions editor.
- By dragging and dropping data from the **INPUT** pane into node parameters. This generates the expression for you.

![Dragging a field from the INPUT pane into a node parameter to generate an expression](https://raw.githubusercontent.com/n8n-io/n8n-docs/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/build/.gitbook/assets/expressionEditor.gif)

For information on errors with mapping and linking items, refer to [Item linking errors](https://docs.n8n.io/build/work-with-data/reference-data/link-data-items/item-linking-errors).

See [Common ways of referencing](https://docs.n8n.io/build/work-with-data/reference-data/reference-previous-nodes#common-ways-of-referencing).
