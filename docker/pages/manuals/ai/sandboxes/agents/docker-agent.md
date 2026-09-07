> Commit-pinned source for Docker main: [content/manuals/ai/sandboxes/agents/docker-agent.md](https://github.com/docker/docs/blob/371255294cf8db2ee20206bf5cc9c165a3a1ea16/content/manuals/ai/sandboxes/agents/docker-agent.md)

# Docker Agent

Official documentation: [Docker Agent](https://docs.docker.com/ai/docker-agent/)

## Quick start

Create a sandbox and run Docker Agent for a project directory:

```console
$ sbx run docker-agent ~/my-project
```

`sbx run docker-agent` defaults the workspace to the current directory, so you
can run it from inside your project.

To create a [mountless sandbox](https://docs.docker.com/ai/sandboxes/usage/#choose-a-workspace), use
`sbx create` without a workspace path, then attach by name.

## Authentication

Docker Agent supports multiple providers. Store keys for the providers you want
to use with [stored secrets](https://docs.docker.com/ai/sandboxes/configuration/credentials/#stored-secrets):

```console
$ sbx secret set openai
$ sbx secret set anthropic
$ sbx secret set google
$ sbx secret set xai
$ sbx secret set nebius
$ sbx secret set mistral
$ sbx secret set openrouter
```

You only need to configure the providers you want to use. Docker Agent detects
available credentials and routes requests to the appropriate provider.

## Configuration

Sandboxes don't pick up user-level configuration from your host. Only
project-level configuration in the working directory is available inside the
sandbox. See
[Why doesn't the sandbox use my user-level agent configuration?](https://docs.docker.com/ai/sandboxes/faq/#why-doesnt-the-sandbox-use-my-user-level-agent-configuration)
for workarounds.

### Default startup command

Without extra args, the sandbox runs:

```text
docker-agent run --yolo
```

Arguments after `--` are added after the default flags when the first one is
itself a flag (begins with `-`). When the first argument is a bare word — such
as the `run` subcommand or a config file — it replaces the defaults, so include
`run --yolo` yourself:

```console
$ sbx run --name <sandbox-name> -- run --yolo agent.yml
```

## Base image

The sandbox uses `docker/sandbox-templates:docker-agent`. See
[Templates](https://docs.docker.com/ai/sandboxes/customize/templates/) to build your own image on top of
this base.
