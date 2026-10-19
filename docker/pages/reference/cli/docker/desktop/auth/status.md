> Pinned source for Docker main: [data/cli/desktop/docker_desktop_auth_status.yaml](https://github.com/docker/docs/blob/7efe90099b0a1ac8295c099f13abf8ac173ec46b/data/cli/desktop/docker_desktop_auth_status.yaml)

# docker desktop auth status

Show the current Docker Hub authentication status

**Usage:** `docker desktop auth status`

## Description

Show whether you are logged in to Docker Hub and, if so,
display your username, email, plan, organizations, and policy flags.

The authentication token is never printed.

## Options

| Option     | Default  | Description                                          |
| ---------- | -------- | ---------------------------------------------------- |
| `--format` | `pretty` | Format the output. Accepted values are: pretty, json |
