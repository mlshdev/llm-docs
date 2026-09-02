> Commit-pinned source for Docker main: [_vendor/github.com/docker/docker-agent/docs/concepts/tools/index.md](https://github.com/docker/docs/blob/ff96ad1711065cf2e9c3f1d701dad04775834f70/_vendor/github.com/docker/docker-agent/docs/concepts/tools/index.md)

# Tools

*Tools give agents the ability to interact with the world — read files, run commands, search the web, query databases, and more.*

## How Tools Work

When an agent needs to perform an action, it makes a **tool call**. The Docker Agent runtime executes the tool and returns the result to the agent, which can then use it to continue its work.

1. Agent receives a user message
2. Agent decides it needs to use a tool (e.g., read a file)
3. Docker Agent executes the tool and returns the result
4. Agent incorporates the result and responds

> \[!NOTE]
> **Tool Confirmation**
>
> By default, Docker Agent asks for user confirmation before executing tools that have side effects (shell commands, file writes). Use `--yolo` to auto-approve all tool calls.

## Built-in Tools

Docker Agent ships with several built-in tools that require no external dependencies. Each is enabled by adding its `type` to the agent's `toolsets` list:

| Tool                                                                                  | Description                                                                                         |
| ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [Filesystem](https://docs.docker.com/ai/docker-agent/tools/filesystem/)               | Read, write, list, search, and navigate files and directories                                       |
| [Shell](https://docs.docker.com/ai/docker-agent/tools/shell/)                         | Execute shell commands synchronously                                                                |
| [Background Jobs](https://docs.docker.com/ai/docker-agent/tools/background-jobs/)     | Run and manage long-running shell commands                                                          |
| [Think](https://docs.docker.com/ai/docker-agent/tools/think/)                         | Step-by-step reasoning scratchpad for planning and decision-making                                  |
| [Todo](https://docs.docker.com/ai/docker-agent/tools/todo/)                           | Task list management for complex multi-step workflows                                               |
| [Tasks](https://docs.docker.com/ai/docker-agent/tools/tasks/)                         | Persistent task database shared across sessions                                                     |
| [Memory](https://docs.docker.com/ai/docker-agent/tools/memory/)                       | Persistent key-value storage backed by SQLite                                                       |
| [Fetch](https://docs.docker.com/ai/docker-agent/tools/fetch/)                         | Read content from HTTP/HTTPS URLs (GET only)                                                        |
| [Script](https://docs.docker.com/ai/docker-agent/tools/script/)                       | Define custom shell scripts as named tools                                                          |
| [LSP](https://docs.docker.com/ai/docker-agent/tools/lsp/)                             | Connect to Language Server Protocol servers for code intelligence                                   |
| [API](https://docs.docker.com/ai/docker-agent/tools/api/)                             | Create custom tools that call HTTP APIs without writing code                                        |
| [OpenAPI](https://docs.docker.com/ai/docker-agent/tools/openapi/)                     | Generate tools from an OpenAPI 3.x document                                                         |
| [RAG](https://docs.docker.com/ai/docker-agent/tools/rag/)                             | Retrieval-augmented generation over indexed sources                                                 |
| [Model Picker](https://docs.docker.com/ai/docker-agent/tools/model-picker/)           | Let the agent pick between several models per turn                                                  |
| [User Prompt](https://docs.docker.com/ai/docker-agent/tools/user-prompt/)             | Ask users questions and collect interactive input                                                   |
| [Open URL](https://docs.docker.com/ai/docker-agent/tools/open-url/)                   | Open a fixed URL in the user's default browser                                                      |
| [Transfer Task](https://docs.docker.com/ai/docker-agent/tools/transfer-task/)         | Delegate tasks to sub-agents (auto-enabled with `sub_agents`)                                       |
| [Background Agents](https://docs.docker.com/ai/docker-agent/tools/background-agents/) | Dispatch work to sub-agents concurrently                                                            |
| [Handoff](https://docs.docker.com/ai/docker-agent/tools/handoff/)                     | Hand the conversation off to another local agent in the same config (auto-enabled with `handoffs:`) |
| [A2A](https://docs.docker.com/ai/docker-agent/tools/a2a/)                             | Connect to remote agents via the Agent-to-Agent protocol                                            |
| [MCP Catalog](https://docs.docker.com/ai/docker-agent/tools/mcp-catalog/)             | Discover and activate remote MCP servers from the Docker MCP Catalog on demand                      |
| [Git](https://docs.docker.com/ai/docker-agent/tools/git/)                             | Read-only git repository inspection                                                                 |
| [Scheduler](https://docs.docker.com/ai/docker-agent/tools/scheduler/)                 | Schedule instructions to run at a time or on a recurring interval                                   |
| [Webhook](https://docs.docker.com/ai/docker-agent/tools/webhook/)                     | Outbound notifications to Slack, Discord, Telegram, IFTTT, and more                                 |
| [Plan](https://docs.docker.com/ai/docker-agent/tools/plan/)                           | Shared persistent scratchpad for multi-agent collaboration                                          |
| [Session Plan](https://docs.docker.com/ai/docker-agent/tools/session_plan/)           | Per-session plan tracker for the draft/review/execute workflow                                      |
| [Session Context](https://docs.docker.com/ai/docker-agent/tools/session_context/)     | Reference a previous session as context                                                             |

## MCP Tools

Docker Agent supports the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) for extending agents with external tools. There are three ways to connect MCP tools:

- **Docker MCP** (recommended) — Run MCP servers in Docker containers via the [MCP Gateway](https://github.com/docker/mcp-gateway). Browse the [Docker MCP Catalog](https://hub.docker.com/search?q=\&type=mcp).
- **Local MCP (stdio)** — Run MCP servers as local processes communicating over stdin/stdout.
- **Remote MCP (Streamable HTTP / SSE)** — Connect to MCP servers running on a network. See [Remote MCP Servers](https://docs.docker.com/ai/docker-agent/features/remote-mcp/).

```yaml
toolsets:
  - type: mcp
    ref: docker:duckduckgo
```

See [Tool Config](https://docs.docker.com/ai/docker-agent/configuration/tools/#mcp-tools) for full MCP configuration reference.

> \[!TIP]
> **See also**
>
> For full configuration reference, see [Tool Config](https://docs.docker.com/ai/docker-agent/configuration/tools/).
