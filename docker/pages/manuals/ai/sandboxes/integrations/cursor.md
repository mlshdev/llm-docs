> Commit-pinned source for Docker main: [content/manuals/ai/sandboxes/integrations/cursor.md](https://github.com/docker/docs/blob/ff96ad1711065cf2e9c3f1d701dad04775834f70/content/manuals/ai/sandboxes/integrations/cursor.md)

# Connect Cursor to a sandbox

**Docker Sandboxes SSH requirements**

- Availability: GA
- Requires: Docker Sandboxes 0.37.0 or later

Cursor is built on VS Code, so it connects to a sandbox the same way, using
Remote - SSH. Your editor stays on your host while files, terminals, and
extensions run in the isolated sandbox.

> \[!NOTE]
> This page covers the Cursor editor connecting to a sandbox over SSH. To run
> the Cursor agent CLI inside a sandbox instead, see
> [Cursor agent](https://docs.docker.com/ai/sandboxes/agents/cursor/).

## Prerequisites

- SSH access set up. See [Editor and app integrations](https://docs.docker.com/ai/sandboxes/integrations/#enable-ssh-access).
- Cursor's Remote - SSH support installed.

## Connect

Confirm that you can connect to the sandbox from a terminal:

```console
$ ssh demo.sbx
```

1. Open the Command Palette and run **Remote-SSH: Connect to Host**.
2. Enter the sandbox host manually as `<name>.sbx`.
3. Cursor opens a new window connected to the sandbox. Use the remote folder
   picker to [select the mounted workspace](https://docs.docker.com/ai/sandboxes/integrations/#select-the-workspace-folder).

## Notes

- The first connection installs the editor server inside the sandbox, so it
  can take a moment. Later connections are faster.

## Related

- [Editor and app integrations](https://docs.docker.com/ai/sandboxes/integrations/) — how SSH access works and how to
  set it up
- [Cursor agent](https://docs.docker.com/ai/sandboxes/agents/cursor/) — run the Cursor CLI inside a sandbox
