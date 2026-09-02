> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.retrievercontextualcompression.md](https://github.com/n8n-io/n8n-docs/blob/1db58de3a8d474a1ba99f5a612beac694402d963/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.retrievercontextualcompression.md)

# Contextual Compression Retriever node <a id="contextual-compression-retriever-node"></a>

The Contextual Compression Retriever node improves the answers returned from vector store[^1] document similarity searches by taking into account the context from the query.

> **Info**
> **Parameter resolution in sub-nodes**
>
> Sub-nodes behave differently to other nodes when processing multiple items using an expression.
>
> Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.
>
> In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Contextual Compression Retriever node documentation integration templates](https://n8n.io/integrations/contextual-compression-retriever) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [LangChain's contextual compression retriever documentation](https://js.langchain.com/docs/how_to/contextual_compression/) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

[^1]: A vector store, or vector database, stores mathematical representations of information. Use with embeddings and retrievers to create a database that your AI can access when answering questions.
