> Commit-pinned source for Docker main: [content/manuals/ai/sandboxes/_index.md](https://github.com/docker/docs/blob/22e32a82b28b6dabf125325fe9cd79133dc1de4a/content/manuals/ai/sandboxes/_index.md)

# Docker Sandboxes

Docker Sandboxes run AI coding agents in isolated environments on your machine
or on Docker-managed cloud infrastructure. Use the `sbx` CLI to create and
manage either kind of sandbox.

The `sbx` CLI and local sandbox compute are free to use, including for commercial
work. Cloud compute is metered through a
[Docker Agentic Platform plan](https://docs.docker.com/subscription-billing/plans/docker-agentic-platform/).
Model-provider charges are separate.

Organization admins can
[centrally manage sandbox network, filesystem, and MCP policies](https://docs.docker.com/ai/sandboxes/governance/access-controls/organization/),
for local sandboxes across developer machines.
Available on a separate paid subscription.

## Get started

[Install the `sbx` CLI](https://docs.docker.com/ai/sandboxes/install/) and sign in, then choose where to run your
agent:

| Environment     | Use it for                                                 | Start here                                                                          |
| --------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Local sandboxes | Work with files and supported hardware on your machine     | [Get started locally](https://docs.docker.com/ai/sandboxes/get-started/)            |
| Cloud sandboxes | Run on Docker-managed compute without local virtualization | [Get started in the cloud](https://docs.docker.com/ai/sandboxes/cloud/#get-started) |

The two environments have separate credentials, network policies, and lifecycle
controls. See [Compare local and cloud sandboxes](https://docs.docker.com/ai/sandboxes/cloud/local-vs-cloud/)
before adapting a workflow.

## Learn more

The following guides describe local sandbox workflows. For cloud workflows,
see [Cloud sandboxes](https://docs.docker.com/ai/sandboxes/cloud/).

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
