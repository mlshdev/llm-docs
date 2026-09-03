> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatmistralcloud.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatmistralcloud.md)

# Mistral Cloud Chat Model node <a id="mistral-cloud-chat-model-node"></a>

Use the Mistral Cloud Chat Model node to combine Mistral Cloud's chat models with conversational agents[^1].

On this page, you'll find the node parameters for the Mistral Cloud Chat Model node, and links to more resources.

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

- **Model**: Select the model to use to generate the completion. n8n dynamically loads models from Mistral Cloud and you'll only see the models available to your account.

## Node options <a id="node-options"></a>

- **Maximum Number of Tokens**: Enter the maximum number of tokens used, which sets the completion length.
- **Sampling Temperature**: Use this option to control the randomness of the sampling process. A higher temperature creates more diverse sampling, but increases the risk of hallucinations.
- **Timeout**: Enter the maximum request time in milliseconds.
- **Max Retries**: Enter the maximum number of times to retry a request.
- **Top P**: Use this option to set the probability the completion should use. Use a lower value to ignore less probable options.
- **Enable Safe Mode**: Enable safe mode by injecting a safety prompt at the beginning of the completion. This helps prevent the model from generating offensive content.
- **Random Seed**: Enter a seed to use for random sampling. If set, different calls will generate deterministic results.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Mistral Cloud Chat Model node documentation integration templates](https://n8n.io/integrations/mistral-cloud-chat-model) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [LangChains's Mistral documentation](https://js.langchain.com/docs/integrations/chat/mistral) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

[^1]: AI agents are artificial intelligence systems capable of responding to requests, making decisions, and performing real-world tasks for users. They use large language models (LLMs) to interpret user input and make decisions about how to best process requests using the information and resources they have available.
