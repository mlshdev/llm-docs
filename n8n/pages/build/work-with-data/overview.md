> Commit-pinned source for n8n main: [docs/build/work-with-data/overview.md](https://github.com/n8n-io/n8n-docs/blob/50a2c8dc6704c114ca2b241eac1e72867ed718fe/docs/build/work-with-data/overview.md)

# Overview <a id="overview"></a>

In n8n, data flows through your workflow from node to node. Each node receives data, processes it, and passes the results to the next node. Understanding how data moves and transforms in your workflows is essential for building effective workflows.

## How data works in n8n <a id="how-data-works-in-n8n"></a>

**Data flows through nodes**: When you connect nodes, data automatically passes from one to the next. Each node processes the incoming data and outputs results based on its configuration.

**View data at every stage**: You can inspect data at any point in your workflow:

- **Node details view**: Double-click any node to see its input and output data. Choose between **Schema**, **Table** and **JSON** views. Schema view shows a simplified structure from the first item only, Table and JSON display the full dataset.
- **Execution logs**: Review past workflow runs to see the data that passed through each node.

**Reference previous data**: Use [data mapping](https://docs.n8n.io/build/work-with-data/reference-data) to reference data from earlier nodes in your workflow. You can:

- Select values from previous nodes using the UI
- Write [expressions](https://docs.n8n.io/build/work-with-data/expressions-versus-data-nodes) to dynamically access and combine data
- Reference specific nodes by name to get their output

**Transform data**: n8n provides multiple ways to modify data:

- Use dedicated transformation nodes (Aggregate, Split Out, Sort, and more)
- Write [expressions](https://docs.n8n.io/build/work-with-data/transform-data/expressions-for-data-transformation) directly in node parameters
- Use the [Code node](https://docs.n8n.io/build/work-with-data/expressions-versus-data-nodes#code-node) for custom JavaScript or Python logic
- Apply the [AI Transform node](https://docs.n8n.io/build/work-with-data/expressions-versus-data-nodes#ai-transform-node) for AI-assisted transformations

**Understand the data structure**: n8n uses a [consistent data structure](https://docs.n8n.io/build/work-with-data/understand-n8ns-data-structure) across all nodes, making it predictable how data flows and transforms throughout your workflows.

## In this section <a id="in-this-section"></a>

- [How n8n structures data](https://docs.n8n.io/build/work-with-data/understand-n8ns-data-structure)
- [Transforming data](https://docs.n8n.io/build/work-with-data/transform-data/approaches-for-transforming-data)
- [Processing data using code](https://docs.n8n.io/build/work-with-data/expressions-versus-data-nodes#code-node)
- [Pinning, mocking, and editing data](https://docs.n8n.io/build/work-with-data/pin-and-mock-data) during workflow development
- [Referencing data](https://docs.n8n.io/build/work-with-data/reference-data) and [item linking](https://docs.n8n.io/build/work-with-data/reference-data/link-data-items): how data items link to each other
