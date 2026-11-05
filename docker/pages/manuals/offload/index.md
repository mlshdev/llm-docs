> Pinned source for Docker main: [content/manuals/offload/_index.md](https://github.com/docker/docs/blob/c98501277b974550688eeed803c975e2665d6468/content/manuals/offload/_index.md)

# Docker Offload

**Docker Offload requirements**

- Subscription: Docker Agentic Platform
- Requires: Docker Desktop 4.97 or later

Docker Offload is a fully managed service that lets you offload building and
running containers to the cloud using the Docker tools you already know. It
runs your containers in a cloud sandbox instead of on your local machine, so
you can work on hardware that can't run your workload, in virtual desktop
infrastructure (VDI) environments, or on systems that don't support nested
virtualization.

## Key features

- Cloud sandboxes that persist: Your containers, images, and volumes survive
  pausing and resuming, so you can pick up a long-running workload where you
  left off.
- Familiar commands: Run the Docker CLI and Docker Compose commands you already
  use. Your context determines where they run.
- Port forwarding and file sync: Reach ports published in the sandbox from your
  machine, and work with bind-mounted files, as you would with local
  containers.
- Secure communication: Use encrypted tunnels between Docker Desktop and the
  cloud sandbox, with support for secure secrets and image pulling.
- Usage-based billing: Pay for the time your sandbox runs, not for the time it
  spends paused.
- VDI-friendly: [Use Docker Desktop](https://docs.docker.com/desktop/setup/vm-vdi/) in
  virtual desktop environments or systems that don't support nested
  virtualization.

Docker Offload is for individual developers, and it's included with a [Docker
Agentic Platform](https://docs.docker.com/subscription-billing/plans/docker-agentic-platform/) subscription. You pay for the time your cloud sandbox runs.

> \[!NOTE]
>
> If you start Docker Offload with `docker offload start`, or with the cloud toggle
> in the Docker Desktop Dashboard header, your organization subscribes to
> [Docker Offload v1](https://docs.docker.com/offload/v1/). To use the latest version of Docker Offload,
> see [Move to the current version of Docker
> Offload](https://docs.docker.com/offload/v1/configuration/#move-to-the-current-version-of-docker-offload).

In the following topics, learn about Docker Offload, how to set it up, use it
for your workflows, and troubleshoot common issues.

- [Quickstart](https://docs.docker.com/offload/quickstart/): Get up and running with Docker Offload in just a few steps.
- [How Offload works](https://docs.docker.com/offload/about/): Learn about Docker Offload and how it works.
- [Manage cloud sandboxes](https://docs.docker.com/offload/sandboxes/): Start, stop, inspect, and resume the cloud sandbox that runs your containers.
- [Usage](https://docs.docker.com/offload/usage/): Learn how Docker Offload is billed and how to monitor your spend.
- [Optimize](https://docs.docker.com/offload/optimize/): Improve performance and cost efficiency in Docker Offload.
- [Troubleshoot](https://docs.docker.com/offload/troubleshoot/): Learn how to troubleshoot issues with Docker Offload.
- [Feedback](https://docs.docker.com/offload/feedback/): Provide feedback on Docker Offload.
