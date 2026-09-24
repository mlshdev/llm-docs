> Pinned source for Docker main: [content/manuals/agentic-platform/_index.md](https://github.com/docker/docs/blob/4ef3a0062f7cdb22aa0423459f513d4d3783db7d/content/manuals/agentic-platform/_index.md)

# Docker Agentic Platform

> \[!NOTE]
> Docker Agentic Platform is experimental. Features and behavior may change.

Docker Agentic Platform lets you run agents and tools in isolated cloud
sandboxes. Your agent keeps working when you close the Console, disconnect
your computer, or put it to sleep.

The `sbx` CLI supports both
[local sandboxes](https://docs.docker.com/ai/sandboxes/get-started/) and
[cloud sandboxes](https://docs.docker.com/ai/sandboxes/cloud/). These pages describe
the web Console experience. The Console and CLI use different secret names;
see [Cloud credentials](https://docs.docker.com/ai/sandboxes/cloud/credentials/).

In the Console, choose a [kit](https://docs.docker.com/agentic-platform/kits/) and configure
the sandbox's credentials, network access, tools, and compute size. Once it
starts, use its terminal to work with the agent. You can return to running or
paused sandboxes from **Sandboxes**.

You can reuse these settings across sandboxes:

- [MCP](https://docs.docker.com/agentic-platform/mcp/) connects external tools.
- [Secrets](https://docs.docker.com/agentic-platform/secrets/) provide credentials
  without placing their values inside a sandbox.
- [Network policies](https://docs.docker.com/agentic-platform/policies/) control
  which hosts and services a sandbox can reach.

To begin, [activate your subscription](https://docs.docker.com/agentic-platform/signup/#activate-cloud-access), then
[start a sandbox](https://docs.docker.com/agentic-platform/get-started/). You pay for compute by the second while your
sandbox runs. See [Signup and billing](https://docs.docker.com/agentic-platform/signup/) for account and payment
information.

- [Sign up](https://docs.docker.com/agentic-platform/signup/): Activate cloud access and review billing.
- [Get started](https://docs.docker.com/agentic-platform/get-started/): Start your first sandbox.
- [Kits](https://docs.docker.com/agentic-platform/kits/): Find a kit or run your own public kit.
- [Sandboxes](https://docs.docker.com/agentic-platform/sandboxes/): Access, pause, resume, and delete your sandboxes.
- [MCP](https://docs.docker.com/agentic-platform/mcp/): Connect predefined or custom MCP servers.
- [Secrets](https://docs.docker.com/agentic-platform/secrets/): Manage model provider and service credentials.
- [Policies](https://docs.docker.com/agentic-platform/policies/): Control outbound network access from sandboxes.
- [FAQ](https://docs.docker.com/agentic-platform/faq/): Find answers about access, billing, and supported features.
