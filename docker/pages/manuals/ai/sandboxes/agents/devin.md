> Commit-pinned source for Docker main: [content/manuals/ai/sandboxes/agents/devin.md](https://github.com/docker/docs/blob/c927b8145de313328c37bb115c9caf0b1be5aa82/content/manuals/ai/sandboxes/agents/devin.md)

# Devin

Official documentation: [Devin CLI](https://docs.devin.ai/work-with-devin/devin-cli)

## Quick start

Create a sandbox and run Devin for a project directory:

```console
$ sbx run devin ~/my-project
```

The workspace parameter is optional and defaults to the current directory:

```console
$ cd ~/my-project
$ sbx run devin
```

## Authentication

On first run, Devin prompts you to sign in interactively inside the sandbox.
After you sign in, Docker Sandboxes manages the reusable credential on the host
and supplies it to future Devin sandboxes through the proxy.

## Configuration

Sandboxes don't pick up user-level Devin configuration from your host. Only
project-level configuration in the working directory is available inside the
sandbox. See
[Why doesn't the sandbox use my user-level agent configuration?](https://docs.docker.com/ai/sandboxes/faq/#why-doesnt-the-sandbox-use-my-user-level-agent-configuration)
for workarounds.

Devin reads `AGENTS.md` from the workspace for agent-specific instructions and
uses the [shared agent skills](https://docs.docker.com/ai/sandboxes/workflows/agent-skills/) store.

### Default startup command

Without extra args, the sandbox runs:

```text
devin --permission-mode dangerous --respect-workspace-trust=false
```

## Base image

Template: `docker/sandbox-templates:devin-docker`

See [Customize](https://docs.docker.com/ai/sandboxes/customize/) to pre-install tools or customize this
environment.
