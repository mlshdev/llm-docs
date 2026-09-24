> Pinned source for Docker main: [data/sbx_cli/sbx_skills.yaml](https://github.com/docker/docs/blob/4ef3a0062f7cdb22aa0423459f513d4d3783db7d/data/sbx_cli/sbx_skills.yaml)

# sbx skills

Manage skills available in sandboxes

**Usage:** `sbx skills COMMAND`

> \[!NOTE]
> This command is experimental.

## Description

Manage skills available to agents in Docker Sandboxes.

Skills are shared across sandboxes by default: the store's entries are linked
into the agent's skills directory read-only, which stays writable so kits can
install skills beside them. Linking happens at container start, so editing an
existing skill is live through the link, while adding a store entry reaches a
running sandbox only on its next start. Removing one takes effect immediately:
the link in a running sandbox stops resolving at once, and the next start is
what clears the stale link away. Use --skills=off when creating a sandbox to
opt out, or --skills=readwrite to mount the store over that directory so the
sandbox's own writes are shared.

## Global options

| Option          | Default | Description                                                                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cloud`       |         | Dispatch to Docker Cloud Sandboxes API instead of local sandboxd (supported by a growing set of verbs — run 'sbx --cloud --help' for the current list) |
| `-D`, `--debug` |         | Enable debug logging                                                                                                                                   |
