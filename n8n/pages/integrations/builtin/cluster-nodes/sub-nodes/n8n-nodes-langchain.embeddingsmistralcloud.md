> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsmistralcloud.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsmistralcloud.md)

# Embeddings Mistral Cloud node <a id="embeddings-mistral-cloud-node"></a>

Use the Embeddings Mistral Cloud node to generate embeddings[^1] for a given text.

On this page, you'll find the node parameters for the Embeddings Mistral Cloud node, and links to more resources.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/mistral).

> **Info**
> **Parameter resolution in sub-nodes**
>
> Sub-nodes behave differently to other nodes when processing multiple items using an expression.
>
> Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.
>
> In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Node parameters <a id="node-parameters"></a>

- **Model**: Select the model to use to generate the embedding.

Learn more about available models in [Mistral's models documentation](https://docs.mistral.ai/platform/pricing/).

## Node options <a id="node-options"></a>

- **Batch Size**: Enter the maximum number of documents to send in each request.
- **Strip New Lines**: Select whether to remove new line characters from input text (turned on) or not (turned off). n8n enables this by default.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Embeddings Mistral Cloud node documentation integration templates](https://n8n.io/integrations/embeddings-mistral-cloud) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [Langchain's Mistral embeddings documentation](https://js.langchain.com/docs/integrations/text_embedding/mistralai) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

[^1]: Embeddings are numerical representations of data using vectors. They're used by AI to interpret complex data and relationships by mapping values across many dimensions. Vector databases, or vector stores, are databases designed to store and access embeddings.
