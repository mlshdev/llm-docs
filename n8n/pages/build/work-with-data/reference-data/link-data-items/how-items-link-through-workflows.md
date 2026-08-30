> Commit-pinned source for n8n main: [docs/build/work-with-data/reference-data/link-data-items/how-items-link-through-workflows.md](https://github.com/n8n-io/n8n-docs/blob/0ece31e57a42e63cf2a2c7f9a33b42888e09a5b3/docs/build/work-with-data/reference-data/link-data-items/how-items-link-through-workflows.md)

# How items link through workflows <a id="how-items-link-through-workflows"></a>

Each output item created by a node includes metadata that links them to the input item (or items) that the node used to generate them. This creates a chain of items that you can work back along to access previous items. This can be complicated to understand, especially if the node splits or merges data. You need to understand item linking when building your own programmatic nodes, or in some scenarios using the Code node.

This document provides a conceptual overview of this feature. For usage details, refer to:

- [Item linking for node creators](https://docs.n8n.io/build/work-with-data/reference-data/link-data-items/item-linking-for-node-creators), for details on how to handle item linking when building a node.
- [Preserving linking in the Code node](https://docs.n8n.io/build/work-with-data/reference-data/link-data-items/preserving-linking-in-the-code-node), to learn how to handle item linking in the Code node.
- [Item linking errors](https://docs.n8n.io/build/work-with-data/reference-data/link-data-items/item-linking-errors), to understand the errors you may encounter in the editor UI.

## n8n's automatic item linking <a id="n8ns-automatic-item-linking"></a>

If a node doesn't control how to link input items to output items, n8n tries to guess how to link the items automatically:

- Single input, single output: the output links to the input.
- Single input, multiple outputs: all outputs link to that input.
- Multiple inputs and outputs:
  - If you keep the input items, but change the order (or remove some but keep others), n8n can automatically add the correct linked item information.
  - If the number of inputs and outputs is equal, n8n links the items in order. This means that output-1 links to input-1, output-2 to input-2, and so on.
  - If the number isn't equal, or you create completely new items, n8n can't automatically link items.

If n8n can't link items automatically, and the node doesn't handle the item linking, n8n displays an error. Refer to [Item linking errors](https://docs.n8n.io/build/work-with-data/reference-data/link-data-items/item-linking-errors) for more information.

## Item linking example <a id="item-linking-example"></a>

![A diagram showing the threads linking multiple items back through a workflow](https://raw.githubusercontent.com/n8n-io/n8n-docs/0ece31e57a42e63cf2a2c7f9a33b42888e09a5b3/docs/build/.gitbook/assets/item-linking-multiple-lines.png)

In this example, it's possible for n8n to link an item in one node back several steps, despite the item order changing. This means the node that sorts movies alphabetically can access information about the linked item in the node that gets famous movie actors.

The methods for accessing linked items are different depending on whether you're using the UI, expressions, or the code node. Explore the following resources:

- [Mapping in the UI](https://docs.n8n.io/build/work-with-data/reference-data/use-the-ui-mapper)
- [Preserving linking in the Code node](https://docs.n8n.io/build/work-with-data/reference-data/link-data-items/preserving-linking-in-the-code-node)
- [Item linking errors](https://docs.n8n.io/build/work-with-data/reference-data/link-data-items/item-linking-errors)
