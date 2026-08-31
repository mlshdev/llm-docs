> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsazureopenai.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsazureopenai.md)

# Embeddings Azure OpenAI node <a id="embeddings-azure-openai-node"></a>

Use the Embeddings Azure OpenAI node to generate embeddings[^1] for a given text.

On this page, you'll find the node parameters for the Embeddings Azure OpenAI node, and links to more resources.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/azureopenai).

> **Info**
> **Parameter resolution in sub-nodes**
>
> Sub-nodes behave differently to other nodes when processing multiple items using an expression.
>
> Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.
>
> In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Node options <a id="node-options"></a>

- **Model (Deployment) Name**: Select the model (deployment) to use for generating embeddings.
- **Batch Size**: Enter the maximum number of documents to send in each request.
- **Strip New Lines**: Select whether to remove new line characters from input text (turned on) or not (turned off). n8n enables this by default.
- **Timeout**: Enter the maximum amount of time a request can take in seconds. Set to `-1` for no timeout.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Embeddings Azure OpenAI node documentation integration templates](https://n8n.io/integrations/embeddings-azure-openai) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [LangChains's OpenAI embeddings documentation](https://js.langchain.com/docs/integrations/text_embedding/azure_openai/) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

[^1]: Embeddings are numerical representations of data using vectors. They're used by AI to interpret complex data and relationships by mapping values across many dimensions. Vector databases, or vector stores, are databases designed to store and access embeddings.
