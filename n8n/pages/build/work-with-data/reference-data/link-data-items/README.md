> Commit-pinned source for n8n main: [docs/build/work-with-data/reference-data/link-data-items/README.md](https://github.com/n8n-io/n8n-docs/blob/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/build/work-with-data/reference-data/link-data-items/README.md)

# Linking data items <a id="linking-data-items"></a>

An item is a single piece of data. Nodes receive one or more items, operate on them, and output new items. Each item links back to the items in the previous nodes that generated it.

Usually this just works. You need to understand this behavior in detail if you're:

- Using the Code node for complex behaviors with input and output data.
- Building a programmatic-style node.

This section provides:

- A conceptual overview of [Item linking concepts](https://docs.n8n.io/build/work-with-data/reference-data/link-data-items/how-items-link-through-workflows).
- Information on [Item linking for node creators](https://docs.n8n.io/build/work-with-data/reference-data/link-data-items/item-linking-for-node-creators).
- Support for end users who need to [work with the data path](https://docs.n8n.io/build/work-with-data/reference-data/link-data-items/preserving-linking-in-the-code-node) to retrieve item data from previous nodes and link items when using the Code node.
- Guidance on troubleshooting [errors](https://docs.n8n.io/build/work-with-data/reference-data/link-data-items/item-linking-errors).
