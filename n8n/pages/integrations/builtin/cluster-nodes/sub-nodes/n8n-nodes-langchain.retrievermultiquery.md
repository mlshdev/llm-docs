> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.retrievermultiquery.md](https://github.com/n8n-io/n8n-docs/blob/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.retrievermultiquery.md)

# MultiQuery Retriever node <a id="multiquery-retriever-node"></a>

The MultiQuery Retriever node automates the process of prompt tuning by using an LLM to generate multiple queries from different perspectives for a given user input query.

On this page, you'll find the node parameters for the MultiQuery Retriever node, and links to more resources.

> **Info**
> **Parameter resolution in sub-nodes**
>
> Sub-nodes behave differently to other nodes when processing multiple items using an expression.
>
> Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.
>
> In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Node options <a id="node-options"></a>

- **Query Count**: Enter how many different versions of the query to generate.

## Templates and examples <a id="templates-and-examples"></a>

[Browse MultiQuery Retriever node documentation integration templates](https://n8n.io/integrations/multiquery-retriever) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [LangChain's retriever conceptual documentation](https://js.langchain.com/docs/concepts/retrievers) and [LangChain's multiquery retriever API documentation](https://v03.api.js.langchain.com/classes/langchain.retrievers_multi_query.MultiQueryRetriever.html) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.
