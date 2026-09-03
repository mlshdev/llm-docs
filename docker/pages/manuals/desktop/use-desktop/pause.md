> Commit-pinned source for Docker main: [content/manuals/desktop/use-desktop/pause.md](https://github.com/docker/docs/blob/d47e43dee68bd9cbd16af81b1aa6aef45023e17c/content/manuals/desktop/use-desktop/pause.md)

# Pause Docker Desktop

Pausing Docker Desktop temporarily suspends the Linux VM running Docker Engine. This saves the current state of all containers in memory and freezes all running processes, significantly reducing CPU and memory usage which is helpful for conserving battery on laptops.

To pause Docker Desktop, select the **Pause** icon to the left of the footer in the Docker Dashboard. To manually resume Docker Desktop, select the **Resume** option in the Docker menu, or run any Docker CLI command.

When you manually pause Docker Desktop, a paused status displays on the Docker menu and on the Docker Desktop Dashboard. You can still access the **Settings** and the **Troubleshoot** menu.

> \[!TIP]
>
> The Resource Saver feature is enabled by default and provides better CPU and memory savings than the manual Pause feature. See [Resource Saver mode](https://docs.docker.com/desktop/use-desktop/resource-saver/) for more info.
