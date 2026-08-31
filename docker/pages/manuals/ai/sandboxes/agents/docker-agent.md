> Commit-pinned source for Docker main: [content/manuals/ai/sandboxes/agents/docker-agent.md](https://github.com/docker/docs/blob/ca60e92629079de412f38632876ab208d84267ef/content/manuals/ai/sandboxes/agents/docker-agent.md)

# Docker Agent

Official documentation: [Docker Agent](https://docs.docker.com/ai/docker-agent/)

## Quick start

Create a sandbox and run Docker Agent for a project directory:

```console
$ sbx run docker-agent ~/my-project
```

The workspace parameter defaults to the current directory, so
`sbx run docker-agent` from inside your project works too.

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
$ sbx run docker-agent -- run --yolo agent.yml
```

## Base image

The sandbox uses `docker/sandbox-templates:docker-agent`. See
[Templates](https://docs.docker.com/ai/sandboxes/customize/templates/) to build your own image on top of
this base.
