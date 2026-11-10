> Pinned source for Docker main: [content/manuals/offload/v1/_index.md](https://github.com/docker/docs/blob/75a95460ce3cc8db87a23893490ec331506d08fd/content/manuals/offload/v1/_index.md)

# Docker Offload v1

**Docker Offload v1 requirements**

- Subscription: Docker Offload and Docker Teams or Business subscription
- Requires: Docker Desktop

Docker Offload v1 is the version of Docker Offload that organizations subscribe
to and that you start with `docker offload start` or the toggle in the Docker
Desktop Dashboard header. It runs builds and containers in an ephemeral cloud
environment that's removed when your session ends.

These pages are for you if any of the following apply:

- Your organization has a Docker Offload v1 subscription.
- You see a **Docker Offload** toggle in the Docker Desktop Dashboard header.
- **Enable Docker Offload** is visible and on in Docker Desktops settings.

For the version that individual developers subscribe to and start with
`docker offload create`, see [Docker Offload](https://docs.docker.com/offload/).

## Key features

Docker Offload v1 includes the following capabilities to support modern container
workflows:

- Ephemeral cloud runners: Automatically provision and tear down cloud
  environments for each container session.
- Secure communication: Use encrypted tunnels between Docker Desktop and cloud
  environments with support for secure secrets and image pulling.
- Port forwarding and bind mounts: Retain a local development experience even
  when running containers in the cloud.
- VDI-friendly: [Use Docker Desktop](https://docs.docker.com/desktop/setup/vm-vdi/) in virtual
  desktop environments or systems that don't support nested virtualization.

## Fair use

Docker Offload v1 enforces a fair use policy to prevent resource abuse. Fair use is
defined as up to 8 compute hours per named user per day, totaled across all user
sessions. Usage in excess of this threshold may be subject to session management
at Docker's discretion.

- [Quickstart](https://docs.docker.com/offload/v1/quickstart/): Get up and running with Docker Offload v1.
- [About](https://docs.docker.com/offload/v1/about/): Learn about Docker Offload v1 and how it works.
- [Configure](https://docs.docker.com/offload/v1/configuration/): Manage Docker Offload v1 for your organization and in Docker Desktop.
- [Usage](https://docs.docker.com/offload/v1/usage/): Monitor Docker Offload v1 sessions for your organization.
- [Troubleshoot](https://docs.docker.com/offload/v1/troubleshoot/): Troubleshoot issues with Docker Offload v1.
