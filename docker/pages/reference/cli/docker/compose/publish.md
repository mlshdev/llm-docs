> Pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_publish.yaml](https://github.com/docker/docs/blob/d40e4d2c029e471aa18744e28bebe179d96abb6f/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_publish.yaml)

# docker compose publish

Publish compose application

**Usage:** `docker compose publish [OPTIONS] REPOSITORY[:TAG]`

## Description

Publish compose application

## Options

| Option                    | Default | Description                                                                    |
| ------------------------- | ------- | ------------------------------------------------------------------------------ |
| `--app`                   |         | Published compose application (includes referenced images)                     |
| `--oci-version`           |         | OCI image/artifact specification version (automatically determined by default) |
| `--resolve-image-digests` |         | Pin image tags to digests                                                      |
| `--with-env`              |         | Include environment variables in the published OCI artifact                    |
| `-y`, `--yes`             |         | Assume "yes" as answer to all prompts                                          |

## Global options

| Option      | Default | Description                     |
| ----------- | ------- | ------------------------------- |
| `--dry-run` |         | Execute command in dry run mode |
