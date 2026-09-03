> Commit-pinned source for n8n main: [docs/build/integrate-ai/mcp-servers.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/build/integrate-ai/mcp-servers.md)

# MCP servers

n8n's node panel includes a registry of [Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro) servers you can connect to an agent in one click. Select a server, sign in, and its tools are available to your agent.

You can also connect MCP servers in the registry to the [AI Assistant](https://docs.n8n.io/build/ways-of-building-workflows/ai-assistant).

## Add a registry server to an agent

1. Open the tools panel on an [AI Agent](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent) node in the canvas (by clicking on "Tool +"), or in [Build and manage agents](https://docs.n8n.io/build/build-and-manage-agents#add-tools) by clicking on "Add Tool".
2. Search for the service you want to connect with the search bar (such as Notion or Linear) or click the "MCP Servers" section to view all available servers.
3. Select the server, then sign in when prompted.
4. Choose which of the server's tools to expose to the agent with "Tools to include": all, a selected list, or all except a selected list.

n8n creates an [MCP credential](https://docs.n8n.io/integrations/builtin/credentials/mcp) automatically when you sign in from the panel.

## Find available servers

The list of registry servers changes often. Browse the current list in the node panel instead of relying on a static list here.

If the server you want isn't in the registry yet, use the [MCP Client Tool](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolmcp) node to connect to any MCP server manually with its connection URL and credentials.

## How to choose between a built-in tool (node) and an MCP server as an agent tool

Both give an agent access to a service. A built-in tool gives you tighter control, because you fix the operation and can pin parameters so the model only fills in the fields you leave open. An MCP server gives the agent more room, at the cost of control and more context per call.

|                        | Built-in tool (n8n integration)                                                                                                     | MCP server                                                                  |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Use when**           | You know which action the agent needs and want it tightly scoped                                                                    | The agent needs a range of actions, or you don't know in advance which one  |
| **Scope**              | One node operation, for example send a Slack message                                                                                | Every tool the server exposes, from one single connection                   |
| **You configure**      | Any parameters you want fixed, e.g. which channel, message type or message text                                                     | The tools you want to allow or exclude                                      |
| **The agent supplies** | Only the fields you [leave open to the model](https://docs.n8n.io/build/integrate-ai/ai-examples/use-ai-for-parameters), you choose | Which tool call to make (out of the allowed tools) and all of its arguments |
