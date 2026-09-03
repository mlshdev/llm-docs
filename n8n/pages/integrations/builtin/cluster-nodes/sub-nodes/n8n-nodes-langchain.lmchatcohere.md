> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatcohere.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatcohere.md)

# Cohere Chat Model node <a id="cohere-chat-model-node"></a>

Use the Cohere Chat Model node to access Cohere's large language models for conversational AI and text generation tasks.

On this page, you'll find the node parameters for the Cohere Chat Model node, and links to more resources.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/cohere).

> **Info**
> **Parameter resolution in sub-nodes**
>
> Sub-nodes behave differently to other nodes when processing multiple items using an expression.
>
> Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.
>
> In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Node parameters <a id="node-parameters"></a>

- **Model**: Select the model which will generate the completion. n8n dynamically loads available models from the Cohere API. Learn more in the [Cohere model documentation](https://docs.cohere.com/v2/docs/models#command).

## Node options <a id="node-options"></a>

- **Sampling Temperature**: Use this option to control the randomness of the sampling process. A higher temperature creates more diverse sampling, but increases the risk of hallucinations.
- **Max Retries**: Enter the maximum number of times to retry a request.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Cohere Chat Model node documentation integration templates](https://n8n.io/integrations/cohere-chat-model) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [Cohere's API documentation](https://docs.cohere.com/v2/reference/about) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.
