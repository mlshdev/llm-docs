> Commit-pinned source for Docker main: [data/cli/dhi/docker_dhi_customization_delete.yaml](https://github.com/docker/docs/blob/0dd94985910d2b70122891c8cf9173087f7460a8/data/cli/dhi/docker_dhi_customization_delete.yaml)

# docker dhi customization delete

Delete one or more customizations

**Usage:** `docker dhi customization delete <id> [id...]`

## Description

Delete one or more Docker Hardened Images customizations by their IDs.

Multiple IDs can be specified as positional arguments.

Examples:
  # Delete a single customization
  docker dhi customization delete abc123

  # Delete multiple customizations
  docker dhi customization delete abc123 def456 ghi789

  # Delete without confirmation prompt
  docker dhi customization delete abc123 def456 --force

## Options

| Option | Default | Description |
| --- | --- | --- |
| `-f`, `--force` |  | Skip the confirmation prompt; aborts if any ID does not exist |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--org` |  | Docker Hub organization (overrides config) |
