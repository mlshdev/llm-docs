> Commit-pinned source for Docker main: [content/manuals/ai/sandboxes/_index.md](https://github.com/docker/docs/blob/652986790ecf1ddf1081149f29da132a95207a04/content/manuals/ai/sandboxes/_index.md)

# Docker Sandboxes

Docker Sandboxes run AI coding agents in isolated microVM sandboxes. Each
sandbox gets its own Docker daemon, filesystem, and network — the agent can
build containers, install packages, and modify files without touching your host
system.

> \[!NOTE]
> The `sbx` CLI is free to use, including for commercial work. Only
> [organization governance](https://docs.docker.com/ai/sandboxes/governance/) requires a separate paid subscription.

Organization admins can
[centrally manage sandbox network, filesystem, and MCP policies](https://docs.docker.com/ai/sandboxes/governance/access-controls/organization/),
so the same controls apply uniformly across every developer's machine.
Available on a separate paid subscription.

## Get started

Follow the [installation guide](https://docs.docker.com/ai/sandboxes/install/) to check the system requirements,
install the `sbx` CLI, and sign in.

Then launch an agent in a sandbox:

```console
$ cd ~/my-project
$ sbx run claude
```

See the [get started guide](https://docs.docker.com/ai/sandboxes/get-started/) for a first-session walkthrough, or
jump to the [usage guide](https://docs.docker.com/ai/sandboxes/usage/) for basic commands.

## Learn more

- [Agents](https://docs.docker.com/ai/sandboxes/agents/) — supported agents and per-agent configuration
- [Workflows](https://docs.docker.com/ai/sandboxes/workflows/) — patterns for Git, local development,
  authentication, agent skills, and automation
- [Configuration](https://docs.docker.com/ai/sandboxes/configuration/) — manage credentials, declare project
  environments, turn on GPU passthrough, and configure an upstream proxy
- [Integrations](https://docs.docker.com/ai/sandboxes/integrations/) — connect editors and apps like VS Code and
  Cursor to a sandbox over SSH
- [MCP gateway](https://docs.docker.com/ai/sandboxes/mcp-gateway/) — register MCP servers and connect them to
  sandboxed agents
- [Customize](https://docs.docker.com/ai/sandboxes/customize/) — reusable templates and declarative kits for
  extending or tailoring sandboxes
- [Architecture](https://docs.docker.com/ai/sandboxes/architecture/) — microVM isolation, workspace mounting,
  networking
- [Security](https://docs.docker.com/ai/sandboxes/security/) — isolation model, credential handling, and
  network policies
- [CLI reference](https://docs.docker.com/reference/cli/sbx/) — full list of `sbx` commands and options
- [Troubleshooting](https://docs.docker.com/ai/sandboxes/troubleshooting/) — common issues and fixes
- [FAQ](https://docs.docker.com/ai/sandboxes/faq/) — login requirements, telemetry, etc

## Feedback

Your feedback shapes what gets built next. If you run into a bug, hit a
missing feature, or have a suggestion, open an issue at
[github.com/docker/sbx-releases/issues](https://github.com/docker/sbx-releases/issues).
