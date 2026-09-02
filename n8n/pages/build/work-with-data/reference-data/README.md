> Commit-pinned source for n8n main: [docs/build/work-with-data/reference-data/README.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/build/work-with-data/reference-data/README.md)

# Referencing data <a id="referencing-data"></a>

Referencing data, or data mapping, means accessing information from previous nodes in your workflow. This allows you to use output from earlier steps as input for later nodes, creating dynamic workflows that pass data through multiple operations.

When you reference data, you're not changing it. You're pointing to values that already exist so you can use them in node parameters, expressions, or custom code.

If you want to change the data you're referencing, see [Transforming data](https://docs.n8n.io/build/work-with-data/transform-data/approaches-for-transforming-data).

## How to reference data <a id="how-to-reference-data"></a>

The main way to reference data is using [expressions](https://docs.n8n.io/build/work-with-data/expressions-versus-data-nodes#expressions). You can create expressions by typing them in a parameter's field or dragging and dropping fields from the Input panel in the UI. Expressions will automatically figure out the correct item to use using [item linking](https://docs.n8n.io/build/work-with-data/reference-data/link-data-items).
