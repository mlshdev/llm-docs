> Commit-pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_restart.yaml](https://github.com/docker/docs/blob/0dd94985910d2b70122891c8cf9173087f7460a8/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_restart.yaml)

# docker compose restart

Restart service containers

**Usage:** `docker compose restart [OPTIONS] [SERVICE...]`

## Description

Restarts all stopped and running services, or the specified services only.

If you make changes to your `compose.yml` configuration, these changes are not reflected
after running this command. For example, changes to environment variables (which are added
after a container is built, but before the container's command is executed) are not updated
after restarting.

If you are looking to configure a service's restart policy, refer to
[restart](https://github.com/compose-spec/compose-spec/blob/main/spec.md#restart)
or [restart_policy](https://github.com/compose-spec/compose-spec/blob/main/deploy.md#restart_policy).

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--no-deps` |  | Don't restart dependent services |
| `-t`, `--timeout` |  | Specify a shutdown timeout in seconds |

## Global options

| Option | Default | Description |
| --- | --- | --- |
| `--dry-run` |  | Execute command in dry run mode |
