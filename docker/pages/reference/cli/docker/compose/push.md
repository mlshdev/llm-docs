> Pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_push.yaml](https://github.com/docker/docs/blob/d40e4d2c029e471aa18744e28bebe179d96abb6f/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_push.yaml)

# docker compose push

Push service images

**Usage:** `docker compose push [OPTIONS] [SERVICE...]`

## Description

Pushes images for services to their respective registry/repository.

The following assumptions are made:

- You are pushing an image you have built locally
- You have access to the build key

Examples

```yaml
services:
  service1:
    build: .
    image: localhost:5000/yourimage  ## goes to local registry

  service2:
    build: .
    image: your-dockerid/yourimage  ## goes to your repository on Docker Hub
```

## Options

| Option             | Default | Description                                                                |
| ------------------ | ------- | -------------------------------------------------------------------------- |
| `--ignore-missing` |         | Skip images that are not available locally instead of failing to push them |
| `--include-deps`   |         | Also push images of services declared as dependencies                      |
| `-q`, `--quiet`    |         | Push without printing progress information                                 |

## Global options

| Option      | Default | Description                     |
| ----------- | ------- | ------------------------------- |
| `--dry-run` |         | Execute command in dry run mode |
