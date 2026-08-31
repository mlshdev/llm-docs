> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.retrieverworkflow.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.retrieverworkflow.md)

# Workflow Retriever node <a id="workflow-retriever-node"></a>

Use the Workflow Retriever node to retrieve data from an n8n workflow for use in a Retrieval QA Chain or another Retriever node.

On this page, you'll find the node parameters for the Workflow Retriever node, and links to more resources.

> **Info**
> **Parameter resolution in sub-nodes**
>
> Sub-nodes behave differently to other nodes when processing multiple items using an expression.
>
> Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.
>
> In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Node parameters <a id="node-parameters"></a>

### Source <a id="source"></a>

Tell n8n which workflow to call. You can choose either:

- **Database** and enter a workflow ID.
- **Parameter** and copy in a complete [workflow JSON](https://docs.n8n.io/build/manage-workflows/export-and-import).

### Workflow values <a id="workflow-values"></a>

Set values to pass to the workflow you're calling.

These values appear in the output data of the trigger node in the workflow you call. You can access these values in expressions in the workflow. For example, if you have:

- **Workflow Values** with a **Name** of `myCustomValue`
- A workflow with an Execute Sub-workflow Trigger node as its trigger

The expression to access the value of `myCustomValue` is `{{ $('Execute Sub-workflow Trigger').item.json.myCustomValue }}`.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Workflow Retriever node documentation integration templates](https://n8n.io/integrations/workflow-retriever) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [LangChain's general retriever documentation](https://js.langchain.com/docs/concepts/retrievers/) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.
