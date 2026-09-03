> Commit-pinned source for Docker main: [content/manuals/agentic-platform/get-started.md](https://github.com/docker/docs/blob/88c23a1ca40fdf176064bef4dbb7b2495debebb3/content/manuals/agentic-platform/get-started.md)

# Get started with Docker Agentic Platform

The Docker Agentic Platform launcher collects the configuration needed to start
an agent in an isolated sandbox.

## Before you begin

You need a Docker account, access to Docker Agentic Platform, and an API key for
the model provider you want to use. You can add the key under **Secrets** before
creating the sandbox or provide it in the launcher when prompted.

The available sandbox types are Claude Code, Codex, OpenCode, Copilot, and
Gemini CLI. The supported model provider credentials are Anthropic, OpenAI,
GitHub Copilot, Google, Groq, and xAI.

## Start a sandbox

1. Open [Docker Agentic Platform](https://agentic-platform.docker.com/) and
   select **New**.
2. Choose a sandbox type and select or add its required model credential.
   Copilot uses `GITHUB_TOKEN`; add the same GitHub secret to any other sandbox
   type that needs private repository access.
3. Configure the sandbox. The initial settings are **open access**, **no tools
   added**, and **medium compute**.
4. Choose whether Docker stops or deletes the sandbox when its timer expires,
   and set the timer from 1 to 24 hours.
5. Review the configuration and select **Run**.

You cannot change the sandbox's authentication, tools, access policy, or compute
size after it starts. Docker creates the sandbox, marks it as running, and opens
its terminal.

Use the terminal to interact with the selected agent or tool.

Return to **Sandboxes** to find the running sandbox and reopen its terminal.

## Next steps

- [Manage sandboxes](https://docs.docker.com/agentic-platform/sandboxes/)
- [Connect MCP servers](https://docs.docker.com/agentic-platform/mcp/)
- [Manage secrets](https://docs.docker.com/agentic-platform/secrets/)
- [Manage network policies](https://docs.docker.com/agentic-platform/policies/)
