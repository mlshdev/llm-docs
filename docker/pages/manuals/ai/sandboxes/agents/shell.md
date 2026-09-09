> Commit-pinned source for Docker main: [content/manuals/ai/sandboxes/agents/shell.md](https://github.com/docker/docs/blob/3d15caeca7608231f930137accb6d933be157b5d/content/manuals/ai/sandboxes/agents/shell.md)

# Shell

This page describes local sandboxes. For cloud behavior and limitations, see
[Compare local and cloud sandboxes](https://docs.docker.com/ai/sandboxes/cloud/local-vs-cloud/).

`sbx run shell` drops you into a Bash login shell inside a sandbox with no
pre-installed agent binary. It's useful for installing and configuring
agents manually, testing custom implementations, or inspecting a running
environment.

```console
$ sbx run shell ~/my-project
```

`sbx run` defaults the workspace to the current directory. To run a one-off
command instead of an interactive shell, pass it after `--`:

```console
$ sbx run shell -- -c "echo 'Hello from sandbox'"
```

To create a [mountless sandbox](https://docs.docker.com/ai/sandboxes/usage/#choose-a-workspace), use
`sbx create` without a workspace path, then attach by name:

```console
$ sbx create --name scratch shell
$ sbx run --name scratch
```

## Default startup command

Without extra args, the sandbox runs `bash -l`. When the first argument after
`--` is a flag (begins with `-`), it's added after `-l`, so login-shell
behavior is preserved:

```console
$ sbx run shell -- -c "echo hi"   # runs bash -l -c "echo hi"
```

When the first argument is a bare word, it replaces `-l` instead.

Store credentials using [stored secrets](https://docs.docker.com/ai/sandboxes/configuration/credentials/#stored-secrets)
before running the sandbox. The proxy injects them into outbound API requests;
credentials are never stored inside the VM:

```console
$ sbx secret set anthropic
$ sbx secret set openai
```

Once inside the shell, you can install agents using their standard methods,
for example `npm install -g @continuedev/cli`. For complex setups, build a
[custom template](https://docs.docker.com/ai/sandboxes/customize/templates/) instead of installing
interactively each time.

## Base image

The shell sandbox uses the `shell` base image — the common base environment
without a pre-installed agent.
