> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolwolframalpha.md](https://github.com/n8n-io/n8n-docs/blob/e2348a766e0ed24d6420aae246e6f0bccbc2c50e/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolwolframalpha.md)

# Wolfram|Alpha tool node <a id="wolframoralpha-tool-node"></a>

Use the Wolfram|Alpha tool node to connect your agents[^1] and chains[^2] to Wolfram|Alpha's computational intelligence engine.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/wolframalpha).

> **Info**
> **Parameter resolution in sub-nodes**
>
> Sub-nodes behave differently to other nodes when processing multiple items using an expression.
>
> Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.
>
> In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Templates and examples <a id="templates-and-examples"></a>

[Browse Wolfram|Alpha tool node documentation integration templates](https://n8n.io/integrations/wolframoralpha) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [Wolfram|Alpha's documentation](https://products.wolframalpha.com/api) for more information about the service. You can also view [LangChain's documentation on their WolframAlpha Tool](https://js.langchain.com/docs/integrations/tools/wolframalpha/).

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

[^1]: AI agents are artificial intelligence systems capable of responding to requests, making decisions, and performing real-world tasks for users. They use large language models (LLMs) to interpret user input and make decisions about how to best process requests using the information and resources they have available.

[^2]: AI chains allow you to interact with large language models (LLMs) and other resources in sequences of calls to components. AI chains in n8n don't use persistent memory, so you can't use them to reference previous context (use AI agents for this).
