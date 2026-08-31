> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolvectorstore.md](https://github.com/n8n-io/n8n-docs/blob/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolvectorstore.md)

# Vector Store Question Answer Tool node <a id="vector-store-question-answer-tool-node"></a>

The Vector Store Question Answer node is a tool[^1] that allows an agent[^2] to summarize results and answer questions based on chunks from a vector store[^3].

On this page, you'll find the node parameters for the Vector Store Question Answer node, and links to more resources.

> **Info**
> **Examples and templates**
>
> For usage examples and templates to help you get started, refer to n8n's [Vector Store Question Answer Tool integrations](https://n8n.io/integrations/vector-store-tool/) page.

> **Info**
> **Parameter resolution in sub-nodes**
>
> Sub-nodes behave differently to other nodes when processing multiple items using an expression.
>
> Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.
>
> In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Node parameters <a id="node-parameters"></a>

### Description of Data <a id="description-of-data"></a>

Enter a description of the data in the vector store.

### Limit <a id="limit"></a>

The maximum number of results to return.

## How n8n populates the tool description <a id="how-n8n-populates-the-tool-description"></a>

n8n uses the node name (select the name to edit) and **Description of Data** parameter to populate the tool description for AI agents using the following format:

> Useful for when you need to answer questions about \[node name]. Whenever you need information about \[Description of Data], you should ALWAYS use this. Input should be a fully formed question.

Spaces in the node name are converted to underscores in the tool description.

> **Warning**
> **Avoid special characters in node names**
>
> Using special characters in the node name will cause errors when the agent runs, for example:
>
> ```
> Error in sub-node 'OpenAI Chat Model'
>
> Invalid 'tools[0].function.name': string does not match pattern. Expected a string that matches the pattern '^[a-zA-Z0-9_-]+$'.
> ```
>
> ![Error message shown when a tool name contains special characters](https://raw.githubusercontent.com/n8n-io/n8n-docs/afebf5d9c6ff327fa215b3e6f99627e11fc9d3f2/docs/integrations/.gitbook/assets/name-characters-error.png)
>
> Use only alphanumeric characters, spaces, dashes, and underscores in node names.

## Related resources <a id="related-resources"></a>

View [example workflows and related content](https://n8n.io/integrations/vector-store-tool/) on n8n's website.

Refer to [LangChain's documentation on tools](https://langchain-ai.github.io/langgraphjs/how-tos/tool-calling/) for more information about tools in LangChain.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

[^1]: In an AI context, a tool is an add-on resource that the AI can refer to for specific information or functionality when responding to a request. The AI model can use a tool to interact with external systems or complete specific, focused tasks.

[^2]: AI agents are artificial intelligence systems capable of responding to requests, making decisions, and performing real-world tasks for users. They use large language models (LLMs) to interpret user input and make decisions about how to best process requests using the information and resources they have available.

[^3]: A vector store, or vector database, stores mathematical representations of information. Use with embeddings and retrievers to create a database that your AI can access when answering questions.
