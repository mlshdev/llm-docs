> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatnvidia.md](https://github.com/n8n-io/n8n-docs/blob/0ece31e57a42e63cf2a2c7f9a33b42888e09a5b3/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatnvidia.md)

# NVIDIA Nemotron Chat Model node <a id="nvidia-nemotron-chat-model-node"></a>

Use the NVIDIA Nemotron Chat Model node to access [NVIDIA Nemotron](https://build.nvidia.com/models) models with conversational agents[^1]. The node works with Nemotron models hosted on [build.nvidia.com](https://build.nvidia.com/) and with self-hosted NVIDIA Inference Microservices (NIM).

On this page, you'll find the node parameters for the NVIDIA Nemotron Chat Model node and links to more resources.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/nvidia).

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

Select the Nemotron model to use to generate the completion.

n8n dynamically loads Nemotron models from the endpoint configured in your credential. If n8n can't reach the endpoint, it falls back to a curated list of well-known Nemotron model IDs.

## Node options <a id="node-options"></a>

Use these options to further refine the node's behavior.

### Frequency Penalty <a id="frequency-penalty"></a>

Use this option to control the chances of the model repeating itself. Higher values reduce the chance of the model repeating itself.

### Maximum Number of Tokens <a id="maximum-number-of-tokens"></a>

Enter the maximum number of tokens used, which sets the completion length. Use `-1` for the model default.

### Response Format <a id="response-format"></a>

Choose **Text** or **JSON**. **JSON** ensures the model returns valid JSON. When you choose **JSON**, include the word `json` in your prompt in the chain or agent.

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

[Browse NVIDIA Nemotron Chat Model node documentation integration templates](https://n8n.io/integrations/nvidia-nemotron-chat-model) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [NVIDIA's build catalogue](https://build.nvidia.com/models) for the list of Nemotron models and to the [NIM documentation](https://docs.nvidia.com/nim/) for guidance on self-hosting. As the NVIDIA API is OpenAI-spec compatible, you can refer to [LangChain's OpenAI documentation](https://js.langchain.com/docs/integrations/chat/openai/) for more information about the underlying client.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

[^1]: AI agents are artificial intelligence systems capable of responding to requests, making decisions, and performing real-world tasks for users. They use large language models (LLMs) to interpret user input and make decisions about how to best process requests using the information and resources they have available.
