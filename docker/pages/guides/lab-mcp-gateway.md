> Commit-pinned source for Docker main: [content/guides/lab-mcp-gateway.md](https://github.com/docker/docs/blob/36f81c2363ef9a4f853ca8406a587889cdc0583d/content/guides/lab-mcp-gateway.md)

# Lab: Docker MCP Gateway

This lab provides a comprehensive, hands-on overview of the Docker MCP Gateway,
which lets you run containerized MCP servers safely and securely. Learn
how to configure, secure, and connect MCP servers to your agentic applications.

## Launch the lab

```console
$ docker compose -p labspace -f oci://dockersamples/labspace-mcp-gateway up -d
```

Open <http://localhost> in your browser.

```console
$ docker compose -p labspace down
```

## What you'll learn

- Learn about the Docker MCP Gateway and its architecture
- Run the MCP Gateway with a simple MCP server
- Inject secrets securely into MCP servers
- Filter tools to reduce noise and save tokens
- Connect the MCP Gateway to your application using popular agentic frameworks
- Configure and use custom MCP servers

## Modules

| # | Module                             | Description                                                 |
| - | ---------------------------------- | ----------------------------------------------------------- |
| 1 | Introduction                       | Overview of the MCP Gateway and why it matters              |
| 2 | Adding a Simple MCP Server         | Get started with a basic MCP server configuration           |
| 3 | Adding a Complex MCP Server        | Configure MCP servers with secrets and advanced options     |
| 4 | Filtering Available Tools          | Reduce noise and save tokens by filtering tool availability |
| 5 | Connecting MCP Gateway to Your App | Integrate the MCP Gateway with agentic frameworks           |
| 6 | Using a Custom MCP Server          | Build and run your own custom MCP server                    |
| 7 | Conclusion                         | Summary and next steps                                      |
