> Commit-pinned source for Docker main: [_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_install-runner.yaml](https://github.com/docker/docs/blob/fd5e73c9183cc2e1600a747a52aaf3d8ea0ce3b5/_vendor/github.com/docker/model-runner/cmd/cli/docs/reference/docker_model_install-runner.yaml)

# docker model install-runner

Install Docker Model Runner (Docker Engine only)

**Usage:** `docker model install-runner`

## Description

This command runs implicitly when a docker model command is executed. You can run this command explicitly to add a new configuration.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `--backend` |  | Specify backend (llama.cpp\|vllm\|diffusers). Default: llama.cpp |
| `--debug` |  | Enable debug logging |
| `--do-not-track` |  | Do not track models usage in Docker Model Runner |
| `--gpu` | `auto` | Specify GPU support (none\|auto\|cuda\|rocm\|musa\|cann) |
| `--host` | `127.0.0.1` | Host address to bind Docker Model Runner |
| `--port` |  | Docker container port for Docker Model Runner (default: 12434 for Docker Engine, 12435 for Cloud mode) |
| `--proxy-cert` |  | Path to a CA certificate file for proxy SSL inspection |
| `--tls` |  | Enable TLS/HTTPS for Docker Model Runner API |
| `--tls-cert` |  | Path to TLS certificate file (auto-generated if not provided) |
| `--tls-key` |  | Path to TLS private key file (auto-generated if not provided) |
| `--tls-port` |  | TLS port for Docker Model Runner (default: 12444 for Docker Engine, 12445 for Cloud mode) |
