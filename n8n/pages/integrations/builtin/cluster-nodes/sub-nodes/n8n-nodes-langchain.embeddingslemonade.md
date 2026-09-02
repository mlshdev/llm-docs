> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingslemonade.md](https://github.com/n8n-io/n8n-docs/blob/78fea4497784e9c1f3f34b12757ef7a2a6b363af/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingslemonade.md)

# Embeddings Lemonade node <a id="embeddings-lemonade-node"></a>

Use the Embeddings Lemonade node to generate vector embeddings using models hosted and managed by a Lemonade server. This node is useful for workflows that perform semantic search, clustering, similarity matching, or any task that requires numerical vector representations of text.

On this page, you'll find a list of operations the Embeddings Lemonade node supports, and links to more resources.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/lemonade).

> **Info**
> **Parameter resolution in sub-nodes**
>
> Sub-nodes behave differently to other nodes when processing multiple items using an expression.
>
> Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.
>
> In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Node parameters <a id="node-parameters"></a>

Configure the node with the following parameters.

### Model <a id="model"></a>

The model which will generate the embeddings. Models are loaded and managed through the Lemonade server configured for this node. Select the desired model from the list of available options served by your Lemonade instance.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Embeddings Lemonade node documentation integration templates](https://n8n.io/integrations/embeddings-lemonade) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [Lemonade Server's documentation](https://lemonade-server.ai/docs/) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.
