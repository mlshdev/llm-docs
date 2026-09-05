> Commit-pinned source for n8n main: [docs/build/integrate-ai/understand-ai-components/how-memory-works.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/build/integrate-ai/understand-ai-components/how-memory-works.md)

# What's memory in AI? <a id="whats-memory-in-ai"></a>

Memory is a key part of AI chat services. The memory[^1] keeps a history of previous messages, allowing for an ongoing conversation with the AI, rather than every interaction starting fresh.

## AI memory in n8n <a id="ai-memory-in-n8n"></a>

To add memory to your AI workflow you can use either:

- [Simple Memory](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorybufferwindow): stores a customizable length of chat history for the current session. This is the easiest to get started with.
- One of the memory services that n8n provides nodes for. These include:
  - [Motorhead](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymotorhead)
  - [Redis Chat Memory](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryredischat)
  - [Postgres Chat Memory](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorypostgreschat)
  - [Xata](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryxata)
  - [Zep](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memoryzep)

If you need to do advanced AI memory management in your workflows, use the [Chat Memory Manager](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorymanager) node.

This node is useful when you:

- Can't add a memory node directly.
- Need to do more complex memory management, beyond what the memory nodes offer. For example, you can add this node to check the memory size of the Agent node's response, and reduce it if needed.
- Want to inject messages to the AI that look like user messages, to give the AI more context.

[^1]: In an AI context, memory allows AI tools to persist message context across interactions. This allows you to have a continuing conversations with AI agents, for example, without submitting ongoing context with each message. In n8n, AI agent nodes can use memory, but AI chains can't.
