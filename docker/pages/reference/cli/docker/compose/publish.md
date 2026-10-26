> Pinned source for Docker main: [_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_publish.yaml](https://github.com/docker/docs/blob/171f597d4e166d42879d7d620a8a29e3b1a17a80/_vendor/github.com/docker/compose/v5/docs/reference/docker_compose_publish.yaml)

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
