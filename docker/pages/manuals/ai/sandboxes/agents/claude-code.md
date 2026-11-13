> Pinned source for Docker main: [content/manuals/ai/sandboxes/agents/claude-code.md](https://github.com/docker/docs/blob/a0442378fca4987b1235614ec917b4138b5d5e5d/content/manuals/ai/sandboxes/agents/claude-code.md)

# Claude Code

The following instructions apply to local sandboxes. For cloud authentication
and usage, see [Authenticate cloud agents](https://docs.docker.com/ai/sandboxes/cloud/credentials/) and
[Use cloud sandboxes](https://docs.docker.com/ai/sandboxes/cloud/usage/).

Official documentation: [Claude Code](https://code.claude.com/docs)

## Quick start

Launch Claude Code in a sandbox by pointing it at a project directory:

```console
$ sbx run claude ~/my-project
```

To start Claude with a specific prompt in the current directory:

```console
$ sbx run --name my-sandbox claude -- "Add error handling to the login function"
```

Everything after `--` is passed directly to Claude Code. You can also pipe in a
prompt from a file with `-- "$(cat prompt.txt)"`.

To create a [mountless sandbox](https://docs.docker.com/ai/sandboxes/usage/#choose-a-workspace), use
`sbx create` without a workspace path, then attach by name.

## Authentication

For the default Anthropic models, Claude Code requires either an Anthropic
API key or a Claude subscription. For other models, see
[Use a local model](#use-a-local-model).

**API key**: Store your key using
[stored secrets](https://docs.docker.com/ai/sandboxes/configuration/credentials/#stored-secrets):

```console
$ sbx secret set anthropic
```

**Claude subscription**: If no API key is set, use the `/login` command inside
Claude Code to authenticate via OAuth.

## Configuration

Sandboxes don't pick up user-level configuration from your host, such as
`~/.claude`. Only project-level configuration in the working directory is
available inside the sandbox. See
[Why doesn't the sandbox use my user-level agent configuration?](https://docs.docker.com/ai/sandboxes/faq/#why-doesnt-the-sandbox-use-my-user-level-agent-configuration)
for workarounds.

### Remote control

To use Claude Code's `/remote-control` command inside a sandbox, turn on
[`claude.remoteControl`](https://docs.docker.com/ai/sandboxes/configuration/settings/#clauderemotecontrol):

```console
$ sbx settings set claude.remoteControl true
```

Remote Control environment and session credentials stay on the host. Docker
Sandboxes doesn't pass remotely supplied environment variables or MCP
configuration into the sandbox. Set `claude.remoteControl` to `false` to stop
the proxy from supplying Remote Control credentials to running sandboxes.

### Claude in Chrome

Claude in Chrome lets sandboxed Claude Code work with tabs in your host browser.
Access is off by default. To use it:

1. Install the Claude in Chrome extension in your host browser and sign in.
   Use the same account for the extension and Claude Code's subscription OAuth
   login. Your organization must permit the extension. An API key alone isn't
   sufficient.

2. On your host, enable
   [`claude.chrome`](https://docs.docker.com/ai/sandboxes/configuration/settings/#claudechrome):

   ```console
   $ sbx settings set claude.chrome true
   ```

3. Start Claude Code with `--chrome` in a Claude sandbox:

   ```console
   $ sbx run --name <sandbox-name> -- --chrome
   ```

Ask Claude to open a tab, navigate to a page, or read its contents. Docker
Sandboxes authenticates the browser connection with your stored Claude OAuth
login without exposing the token inside the sandbox.

To block further browser connections, run on your host:

```console
$ sbx settings set claude.chrome false
```

This blocks new connections from running sandboxes without recreating them.
It doesn't end an established browser connection. End existing Claude browser
sessions to revoke active access.

### Default startup command

Without extra args, the sandbox runs:

```text
claude --dangerously-skip-permissions
```

Arguments after `--` are added after the default flags when the first one is
itself a flag (begins with `-`), so `--dangerously-skip-permissions` is
preserved:

```console
$ sbx run --name <sandbox-name> -- -c   # runs claude --dangerously-skip-permissions -c
```

For prompts and subcommands, see
[Pass arguments to an agent](https://docs.docker.com/ai/sandboxes/usage/#pass-arguments-to-an-agent).

See the [Claude Code CLI reference](https://code.claude.com/docs/en/cli-reference)
for available options.

## Agents view

Claude Code's [agents view](https://code.claude.com/docs/en/agent-view)
starts background sessions that run tasks in parallel. Pair it with
[clone mode](https://docs.docker.com/ai/sandboxes/workflows/git/#clone-mode) to keep their changes inside the
sandbox:

```console
$ sbx run --clone claude . -- agents
```

To use bypass-permissions mode with the `agents` subcommand, pass the flag
explicitly:

```console
$ sbx run --clone claude . -- --dangerously-skip-permissions agents
```

For simultaneous tasks, each background session needs a separate worktree or
clone. Branches alone don't isolate edits in one working directory. How Claude
Code manages working directories depends on the task, configuration, and
project instructions. The `--clone` flag doesn't control this behavior. Ask
Claude Code to create a separate worktree for each task inside the sandbox.

To review a branch created by a session, fetch the
`sandbox-<sandbox-name>` remote from the host:

```console
$ git fetch sandbox-<sandbox-name>
$ git diff main..sandbox-<sandbox-name>/<branch>
```

See [Git workflows](https://docs.docker.com/ai/sandboxes/workflows/git/) for clone-mode details.

## Base image

The sandbox uses `docker/sandbox-templates:claude-code`. See
[Base images](https://docs.docker.com/ai/sandboxes/customize/author/base-images/) to build your own image on top of
this base.

## Use a local model

For local models, hosted providers, and custom inference endpoints, see
[Use local and hosted models](https://docs.docker.com/ai/sandboxes/configuration/models/).
