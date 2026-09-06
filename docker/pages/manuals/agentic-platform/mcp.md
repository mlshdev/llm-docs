> Commit-pinned source for Docker main: [content/manuals/agentic-platform/mcp.md](https://github.com/docker/docs/blob/034d46977dac45d2a9493f2465b08108ac3cf87b/content/manuals/agentic-platform/mcp.md)

# MCP

Model Context Protocol (MCP) servers connect agents to external services and
expose operations from those services as tools. From the **MCP** page, connect a
predefined server or add a custom server by URL. Complete authorization when a
server requires it.

MCP configuration grants agents tools they can invoke. It does not restrict or
inspect ordinary network access from a sandbox. Use
[network policies](https://docs.docker.com/agentic-platform/policies/) to control outbound
destinations. MCP-specific policies are not part of the initial release.

## Connect a predefined server

1. Open **MCP** and choose a predefined server.
2. Connect the server.
3. Complete authorization if prompted.

## Add a server by URL

To connect a server that is not predefined:

1. Open **MCP**.
2. Choose the option to add a server and enter its URL.
3. Connect the server and complete authorization if prompted.
