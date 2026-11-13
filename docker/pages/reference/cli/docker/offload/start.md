> Pinned source for Docker main: [data/cli/offload/docker_offload_start.yaml](https://github.com/docker/docs/blob/a0442378fca4987b1235614ec917b4138b5d5e5d/data/cli/offload/docker_offload_start.yaml)

# docker offload start

Start a Docker Offload v1 session

**Usage:** `docker offload start`

## Description

Start a Docker Offload v1 session.

This command belongs to Docker Offload v1, and works when **Enable Docker
Offload** is turned on in Docker Desktop settings. If the setting is off, or
doesn't appear, your Docker commands use the current version of Docker
Offload, which uses `docker offload create` instead.

## Options

| Option            | Default | Description                                 |
| ----------------- | ------- | ------------------------------------------- |
| `-a`, `--account` |         | The Docker account to use                   |
| `--timeout`       | `10s`   | How long to wait for the engine to be ready |
