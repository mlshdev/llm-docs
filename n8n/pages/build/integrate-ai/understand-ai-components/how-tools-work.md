> Commit-pinned source for n8n main: [docs/build/integrate-ai/understand-ai-components/how-tools-work.md](https://github.com/n8n-io/n8n-docs/blob/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/build/integrate-ai/understand-ai-components/how-tools-work.md)

# What's a tool in AI? <a id="whats-a-tool-in-ai"></a>

In AI, 'tools' has a specific meaning. Tools act like addons that your AI can use to access extra context or resources.

Here are a couple of other ways of expressing it:

> Tools are interfaces that an agent can use to interact with the world ([source](https://langchain-ai.github.io/langgraphjs/how-tos/tool-calling/))

> We can think of these tools as being almost like functions that your AI model can call ([source](https://www.udemy.com/course/chatgpt-and-langchain-the-complete-developers-masterclass/))

## AI tools in n8n <a id="ai-tools-in-n8n"></a>

n8n provides built in nodes[^1] and a registry of [MCP servers](https://docs.n8n.io/build/integrate-ai/mcp-servers) that you can connect to your AI agent[^2] as tools. Built-in nodes include popular services such as [Wikipedia](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolwikipedia) and [SerpAPI](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolserpapi).
Apart from these, n8n provides three especially powerful tools:

- [Call n8n Workflow Tool](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow): use this to load any n8n workflow as a tool.
- [Custom Code Tool](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolcode): write code that your agent can run.
- [HTTP Request Tool](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest): make calls to fetch a website or data from an API.

The next three examples highlight the Call n8n Workflow Tool:

- [Chat with Google Sheets](https://docs.n8n.io/build/integrate-ai/ai-examples/use-google-sheets-as-a-data-source)
- [Call an API to fetch data](https://docs.n8n.io/build/integrate-ai/ai-examples/call-apis)
- [Set up a human fallback](https://docs.n8n.io/build/integrate-ai/ai-examples/set-a-human-fallback-for-ai-workflows)

You can also learn how to [let AI dynamically specify parameters for tools with the `$fromAI()` function](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters).

[^1]: n8n cluster nodes consist of one or more sub nodes connected to a root node. Sub nodes extend the functionality of the root node, providing access to specific services or resources or offering specific types of dedicated processing, like calculator functionality, for example.

[^2]: AI agents are artificial intelligence systems capable of responding to requests, making decisions, and performing real-world tasks for users. They use large language models (LLMs) to interpret user input and make decisions about how to best process requests using the information and resources they have available.
