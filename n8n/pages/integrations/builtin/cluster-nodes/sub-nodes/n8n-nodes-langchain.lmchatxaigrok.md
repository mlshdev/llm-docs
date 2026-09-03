> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatxaigrok.md](https://github.com/n8n-io/n8n-docs/blob/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatxaigrok.md)

# xAI Grok Chat Model node <a id="xai-grok-chat-model-node"></a>

Use the xAI Grok Chat Model node to access xAI Grok's large language models for conversational AI and text generation tasks.

On this page, you'll find the node parameters for the xAI Grok Chat Model node, and links to more resources.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/xai).

> **Info**
> **Parameter resolution in sub-nodes**
>
> Sub-nodes behave differently to other nodes when processing multiple items using an expression.
>
> Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.
>
> In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Node parameters <a id="node-parameters"></a>

- **Model**: Select the model which will generate the completion. n8n dynamically loads available models from the xAI Grok API. Learn more in the [xAI Grok model documentation](https://docs.x.ai/docs/models).

## Node options <a id="node-options"></a>

- **Frequency Penalty**: Use this option to control the chances of the model repeating itself. Higher values reduce the chance of the model repeating itself.
- **Maximum Number of Tokens**: Enter the maximum number of tokens used, which sets the completion length. Most models have a context length of 2048 tokens with the newest models supporting up to 32,768 tokens.
- **Response Format**: Choose **Text** or **JSON**. **JSON** ensures the model returns valid JSON.
- **Presence Penalty**: Use this option to control the chances of the model talking about new topics. Higher values increase the chance of the model talking about new topics.
- **Sampling Temperature**: Use this option to control the randomness of the sampling process. A higher temperature creates more diverse sampling, but increases the risk of hallucinations.
- **Timeout**: Enter the maximum request time in milliseconds.
- **Max Retries**: Enter the maximum number of times to retry a request.
- **Top P**: Use this option to set the probability the completion should use. Use a lower value to ignore less probable options.

## Templates and examples <a id="templates-and-examples"></a>

[Browse xAI Grok Chat Model node documentation integration templates](https://n8n.io/integrations/xai-grok-chat-model) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [xAI Grok's API documentation](https://docs.x.ai/docs/api-reference) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.
