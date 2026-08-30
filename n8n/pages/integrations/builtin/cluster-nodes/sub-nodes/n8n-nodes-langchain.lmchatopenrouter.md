> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatopenrouter.md](https://github.com/n8n-io/n8n-docs/blob/0ece31e57a42e63cf2a2c7f9a33b42888e09a5b3/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatopenrouter.md)

# OpenRouter Chat Model node <a id="openrouter-chat-model-node"></a>

Use the OpenRouter Chat Model node to use OpenRouter's chat models with conversational agents.

On this page, you'll find the node parameters for the OpenRouter Chat Model node and links to more resources.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/openrouter).

> **Info**
> **Parameter resolution in sub-nodes**
>
> Sub-nodes behave differently to other nodes when processing multiple items using an expression.
>
> Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.
>
> In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Node parameters <a id="node-parameters"></a>

### Model <a id="model"></a>

Select the model to use to generate the completion.

n8n dynamically loads models from OpenRouter and you'll only see the models available to your account.

## Node options <a id="node-options"></a>

Use these options to further refine the node's behavior.

### Frequency Penalty <a id="frequency-penalty"></a>

Use this option to control the chances of the model repeating itself. Higher values reduce the chance of the model repeating itself.

### Maximum Number of Tokens <a id="maximum-number-of-tokens"></a>

Enter the maximum number of tokens used, which sets the completion length.

### Response Format <a id="response-format"></a>

Choose **Text** or **JSON**. **JSON** ensures the model returns valid JSON.

### Presence Penalty <a id="presence-penalty"></a>

Use this option to control the chances of the model talking about new topics. Higher values increase the chance of the model talking about new topics.

### Sampling Temperature <a id="sampling-temperature"></a>

Use this option to control the randomness of the sampling process. A higher temperature creates more diverse sampling, but increases the risk of hallucinations.

### Timeout <a id="timeout"></a>

Enter the maximum request time in milliseconds.

### Max Retries <a id="max-retries"></a>

Enter the maximum number of times to retry a request.

### Top P <a id="top-p"></a>

Use this option to set the probability the completion should use. Use a lower value to ignore less probable options.

## Templates and examples <a id="templates-and-examples"></a>

[Browse OpenRouter Chat Model node documentation integration templates](https://n8n.io/integrations/openrouter-chat-model) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

As OpenRouter is API-compatible with OpenAI, you can refer to [LangChains's OpenAI documentation](https://js.langchain.com/docs/integrations/chat/openai/) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.
