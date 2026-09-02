> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymongochat.md](https://github.com/n8n-io/n8n-docs/blob/0b69471cc64a4886de337982abd2f5d237dcd52a/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymongochat.md)

# MongoDB Chat Memory node <a id="mongodb-chat-memory-node"></a>

Use the MongoDB Chat Memory node to use MongoDB as a memory[^1] server for storing chat history.

On this page, you'll find a list of operations the MongoDB Chat Memory node supports, and links to more resources.

> **Info**
> **Credentials**
>
> You can find authentication information for this node [here](https://docs.n8n.io/integrations/builtin/credentials/mongodb).

> **Info**
> **Parameter resolution in sub-nodes**
>
> Sub-nodes behave differently to other nodes when processing multiple items using an expression.
>
> Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.
>
> In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Node parameters <a id="node-parameters"></a>

- **Session Key**: Enter the key to use to store the memory in the workflow data.
- **Collection Name**: Enter the name of the collection to store the chat history in. The system will create the collection if it doesn't exist.
- **Database Name**: Enter the name of the database to store the chat history in. If not provided, the database from credentials will be used.
- **Context Window Length**: Enter the number of previous interactions to consider for context.

## Related resources <a id="related-resources"></a>

Refer to [LangChain's MongoDB Chat Message History documentation](https://js.langchain.com/docs/integrations/memory/mongodb) for more information about the service.

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

## Single memory instance <a id="single-memory-instance"></a>

If you add more than one MongoDB Chat Memory node to your workflow, all nodes access the same memory instance by default. Be careful when doing destructive actions that override existing memory contents, such as the override all messages operation in the [Chat Memory Manager](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymanager) node. If you want more than one memory instance in your workflow, set different session IDs in different memory nodes.

[^1]: In an AI context, memory allows AI tools to persist message context across interactions. This allows you to have a continuing conversations with AI agents, for example, without submitting ongoing context with each message. In n8n, AI agent nodes can use memory, but AI chains can't.
