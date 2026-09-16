> Pinned source for Docker main: [content/get-started/tutorials/run-an-agent.md](https://github.com/docker/docs/blob/aabe8d1f704ebbcc85d29cc6eac88459ce9e00a4/content/get-started/tutorials/run-an-agent.md)

# Run your coding agent in a sandbox

Coding agents can work faster in full-autonomy modes that let them run commands,
install tools, and use Docker without stopping for approval. Giving an agent
that access directly on your machine also gives mistakes a wider reach.

Docker Sandboxes change where the agent runs, not how you work with it. The
agent gets a private environment with its own operating system and Docker
daemon. Your project remains available on your host, while tools the agent
installs and system changes it makes stay inside an environment you can
discard.

In this tutorial, you'll move an existing coding-agent workflow into a sandbox.

## Before you start

- Have a project directory for the agent to work with
- Have access to a [supported coding agent](https://docs.docker.com/ai/sandboxes/agents/)

You don't need Docker Desktop or Docker Engine on your host.

## Install and sign in

[Install Docker Sandboxes](https://docs.docker.com/ai/sandboxes/install/) for your operating
system, then sign in to Docker:

```console
$ sbx login
```

## Bring your agent setup

This step is optional. Skip it if you want to start with a clean agent setup.

If you use agent skills on your host, preview and import them:

```console
$ sbx skills import --dry-run
$ sbx skills import
```

Imported skills become available to supported agents across your sandboxes.
This feature is experimental. See
[Share agent skills](https://docs.docker.com/ai/sandboxes/workflows/agent-skills/) for
supported agents and security considerations.

## Choose how to authenticate

Your agent needs access to a model provider. Subscription sign-in uses OAuth,
while API keys are stored on your host and supplied to the agent through the
sandbox proxy. Choose your agent and authentication method for the preparation
steps:

### Subscription sign-in

- **Codex:** No secret configuration is needed. When Codex starts, `sbx` opens the OpenAI sign-in flow on the host before creating the sandbox.
- **Claude Code:** No secret configuration is needed. After Claude Code starts in the sandbox, run `/login` and sign in with your Claude account.

### API-key authentication

Store the model provider key in the host credential store. The command prompts for the key without displaying it:

```console
$ sbx secret set openai       # OpenAI
$ sbx secret set anthropic    # Anthropic
$ sbx secret set openrouter   # OpenRouter
$ sbx secret set google       # Google
```

If you already exported a supported API key in your shell, you can import it
instead of setting it separately:

```console
$ sbx secret import --dry-run
$ sbx secret import
```

The dry run shows which exported keys `sbx` found. The import command prompts
you to confirm each key before storing it. If the dry run finds nothing, use
the `sbx secret set` command from the picker. See
[Credentials](https://docs.docker.com/ai/sandboxes/configuration/credentials/) for other
secret sources and [supported coding agents](https://docs.docker.com/ai/sandboxes/agents/)
for agent-specific authentication.

## Run your agent

Open your project and start your preferred agent. This example uses Codex:

```console
$ cd ~/my-project
$ sbx run --name my-project codex
```

Replace `codex` with another supported agent identifier, such as `claude`,
`copilot`, `cursor`, or `gemini`.

The first time you run a sandbox, `sbx` asks you to choose a default network
policy. This policy controls which external services your sandboxes can reach.
Select **Balanced** to permit common development services and block other
destinations by default. You can change these rules later with
[`sbx policy`](https://docs.docker.com/ai/sandboxes/governance/access-controls/local/).

The built-in integrations start coding agents in their full-autonomy mode. For
example, Codex bypasses approvals, Claude Code skips permission prompts, and
Cursor, Copilot, and Gemini use YOLO mode. You don't need to add those flags.

Give the agent the same task you would give it on your host. Source changes
appear in your working tree, so you can inspect them with your usual tools:

```console
$ git diff
```

Your project directory is the exception to the sandbox boundary. It is shared
read-write, so the agent can modify or delete its files and you can see those
changes immediately. Keep your work under version control. Tools the agent
installs and changes to the sandbox's operating system stay inside the sandbox.

## Return or start over

Exit the agent when you're finished. Reconnect to the same environment later:

```console
$ sbx run --name my-project
```

When you want a clean environment, remove the sandbox:

```console
$ sbx rm my-project
```

Removing the sandbox deletes the environment and everything installed inside
it. It doesn't delete your project directory.

## What changed

You kept your project, agent, skills, credentials, and prompting workflow. The
only essential change was launching the agent with `sbx run`. That moved its
full-autonomy execution into an environment you control and can throw away.

## What's next

Continue with the Docker Sandboxes manuals:

- [Manage your sandboxes](https://docs.docker.com/ai/sandboxes/usage/) with day-to-day
  commands
- [Configure your coding agent](https://docs.docker.com/ai/sandboxes/agents/) for its
  authentication and settings
- [Review the security defaults](https://docs.docker.com/ai/sandboxes/security/defaults/) for
  workspace, network, and credential access
