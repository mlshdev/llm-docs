> Pinned source for Docker main: [data/cli/mcp/docker_mcp_client_connect.yaml](https://github.com/docker/docs/blob/db384a4bd8b8f7eefbd6ed3796e49b5bfa517aad/data/cli/mcp/docker_mcp_client_connect.yaml)

# docker mcp client connect

Connect the Docker MCP Toolkit to a client. Supported clients: claude-code claude-desktop cline codex continue crush cursor gemini goose gordon kiro lmstudio opencode sema4 vscode zed

**Usage:** \`docker mcp client connect \[OPTIONS] <mcp-client>

Supported clients: claude-code claude-desktop cline codex continue crush cursor gemini goose gordon kiro lmstudio opencode sema4 vscode zed\`

## Description

Connect the Docker MCP Toolkit to a client. Supported clients: claude-code claude-desktop cline codex continue crush cursor gemini goose gordon kiro lmstudio opencode sema4 vscode zed

## Options

| Option            | Default | Description                                                                         |
| ----------------- | ------- | ----------------------------------------------------------------------------------- |
| `-g`, `--global`  |         | Change the system wide configuration or the clients setup in your current git repo. |
| `-p`, `--profile` |         | Profile to use for client connection.                                               |
| `-q`, `--quiet`   |         | Only display errors.                                                                |
