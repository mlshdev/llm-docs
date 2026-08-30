> Commit-pinned source for Docker main: [content/manuals/engine/_index.md](https://github.com/docker/docs/blob/dbad77a00e8352f30e663bec3eeae9fb31a19b4e/content/manuals/engine/_index.md)

# Docker Engine

Docker Engine is an open source containerization technology for building and
containerizing your applications. Docker Engine acts as a client-server
application with:

- A server with a long-running daemon process
  [`dockerd`](https://docs.docker.com/reference/cli/dockerd/).
- APIs which specify interfaces that programs can use to talk to and instruct
  the Docker daemon.
- A command line interface (CLI) client
  [`docker`](https://docs.docker.com/reference/cli/docker/).

The CLI uses [Docker APIs](https://docs.docker.com/reference/api/engine/) to control or interact with the Docker
daemon through scripting or direct CLI commands. Many other Docker applications
use the underlying API and CLI. The daemon creates and manages Docker objects,
such as images, containers, networks, and volumes.

For more details, see
[Docker Architecture](https://docs.docker.com/get-started/docker-overview/#docker-architecture).

- [Install Docker Engine](https://docs.docker.com/engine/install/): Learn how to install the open source Docker Engine for your distribution.
- [Storage](https://docs.docker.com/storage/): Use persistent data with Docker containers.
- [Networking](https://docs.docker.com/network/): Manage network connections between containers.
- [Container logs](https://docs.docker.com/config/containers/logging/): Learn how to view and read container logs.
- [Prune](https://docs.docker.com/config/pruning/): Tidy up unused resources.
- [Configure the daemon](https://docs.docker.com/config/daemon/): Delve into the configuration options of the Docker daemon.
- [Rootless mode](https://docs.docker.com/engine/security/rootless/): Run Docker without root privileges.
- [Deprecated features](https://docs.docker.com/engine/deprecated/): Find out what features of Docker Engine you should stop using.
- [Release notes](https://docs.docker.com/engine/release-notes/): Read the release notes for the latest version.

## Licensing

Commercial use of Docker Engine obtained via Docker Desktop
within larger enterprises (exceeding 250 employees OR with annual revenue surpassing
$10 million USD), requires a [paid subscription](https://www.docker.com/pricing?ref=Docs\&refAction=DocsEngine).
Apache License, Version 2.0. See [LICENSE](https://github.com/moby/moby/blob/master/LICENSE) for the full license.
