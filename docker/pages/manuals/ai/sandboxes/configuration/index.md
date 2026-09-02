> Commit-pinned source for Docker main: [content/manuals/ai/sandboxes/configuration/_index.md](https://github.com/docker/docs/blob/2028912e0e64869c14702deec64ba2ef5cc10441/content/manuals/ai/sandboxes/configuration/_index.md)

# Configure Docker Sandboxes

Configure credentials and how Docker Sandboxes run for a project, host, or
network environment. These settings control sandbox creation, authentication,
and connectivity. To change the tools and agent configuration inside a
sandbox, see [Customize](https://docs.docker.com/ai/sandboxes/customize/).

- [Credentials](https://docs.docker.com/ai/sandboxes/configuration/credentials/) configures API keys, authentication
  credentials, and registry access for sandboxed agents.
- [Environment files](https://docs.docker.com/ai/sandboxes/configuration/environment-files/) declare reusable project
  configuration in `.sbxenv.yaml`.
- [GPU passthrough](https://docs.docker.com/ai/sandboxes/configuration/gpu-passthrough/) configures a Linux host and sandbox for
  NVIDIA GPU workloads.
- [Upstream proxy](https://docs.docker.com/ai/sandboxes/configuration/upstream-proxy/) routes sandbox and daemon traffic through
  an operating system or corporate proxy.
