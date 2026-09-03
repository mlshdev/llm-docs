> Commit-pinned source for n8n main: [docs/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/README.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/README.md)

# AI Agent node <a id="ai-agent-node"></a>

The AI Agent node lets you build an AI agent in n8n. Connect a chat model and one or more tools, and the agent decides which tools to call to complete a task.

An AI agent[^1] is an autonomous system that receives data, makes rational decisions, and acts within its environment to achieve specific goals. The AI agent's environment is everything the agent can access that isn't the agent itself. This agent uses external tools[^2] and APIs to perform actions and retrieve information. It can understand the capabilities of different tools and determine which tool to use depending on the task.

> **Info**
> **Connect a tool**
>
> You must connect at least one tool [sub-node](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes) to an AI Agent node.

> **Warning**
> **Feature availability**
>
> The AI Agent node's agent type setting is deprecated from n8n 1.82.0. All AI Agent nodes now work as a `Tools Agent`, which was the recommended and most frequently used setting. Workflows or templates using an older AI Agent node set to `Tools Agent` continue to work as expected.
>
> The version of the node (v1) that has the agent type setting **will be removed from n8n 3.0**. If you're using v1 of the AI Agent node, update to the latest version. For use cases like an SQL Agent, use a Postgres/MySQL tool sub-node with a recent Agent node instead.

## Templates and examples <a id="templates-and-examples"></a>

[Browse n8n-nodes-langchain.agent integration templates](https://n8n.io/integrations/agent) or [search all templates](https://n8n.io/workflows/)

## Related resources <a id="related-resources"></a>

Refer to [LangChain's documentation on agents](https://js.langchain.com/docs/concepts/agents/) for more information about the service.

New to AI Agents? Read the [n8n blog introduction to AI agents](https://blog.n8n.io/ai-agents/).

To connect a registry MCP server as a tool with one click, see [MCP servers](https://docs.n8n.io/build/integrate-ai/mcp-servers).

View n8n's [Advanced AI](https://docs.n8n.io/build/integrate-ai) documentation.

## Common issues <a id="common-issues"></a>

For common errors or issues and suggested resolution steps, refer to [Common Issues](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/common-issues).

[^1]: AI agents are artificial intelligence systems capable of responding to requests, making decisions, and performing real-world tasks for users. They use large language models (LLMs) to interpret user input and make decisions about how to best process requests using the information and resources they have available.

[^2]: In an AI context, a tool is an add-on resource that the AI can refer to for specific information or functionality when responding to a request. The AI model can use a tool to interact with external systems or complete specific, focused tasks.
