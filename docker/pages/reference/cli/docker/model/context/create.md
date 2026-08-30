> Commit-pinned source for Docker main: [_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_context_create.yaml](https://github.com/docker/docs/blob/dbad77a00e8352f30e663bec3eeae9fb31a19b4e/_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_context_create.yaml)

# docker model context create

Create a named Model Runner context

**Usage:** `docker model context create NAME`

## Description

Create a named Model Runner context

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--description` |  | Optional human-readable description for this context |
| `--host` |  | Model Runner API base URL (e.g. http://192.168.1.100:12434) |
| `--tls` |  | Enable TLS for connections to this context |
| `--tls-ca-cert` |  | Path to a custom CA certificate PEM file for TLS verification |
| `--tls-skip-verify` |  | Skip TLS server certificate verification |
