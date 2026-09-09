> Commit-pinned source for Docker main: [content/manuals/ai/sandboxes/cloud/_index.md](https://github.com/docker/docs/blob/3d15caeca7608231f930137accb6d933be157b5d/content/manuals/ai/sandboxes/cloud/_index.md)

# Cloud sandboxes

Cloud sandboxes run AI agents on Docker-managed infrastructure instead of your
local machine. Use them when you need an isolated environment that doesn't
depend on the compute resources or virtualization support of your host.

Cloud sandboxes use the same `sbx` CLI as local sandboxes. Add the global
`--cloud` flag to send a supported command to the Cloud Sandboxes API:

```console
$ sbx --cloud ls
```

Cloud and local sandboxes have separate state and different capabilities. A
cloud sandbox can't mount a host workspace or use host hardware, and its
secrets, network policy, ports, and lifecycle are managed in the cloud. See
[Local and cloud differences](https://docs.docker.com/ai/sandboxes/cloud/local-vs-cloud/) before adapting a local
workflow.

## Prerequisites

To use cloud sandboxes, you need:

- The [`sbx` CLI](https://docs.docker.com/ai/sandboxes/install/), version 0.42.0 or later
- A Docker account signed in through `sbx login`
- An active [Docker Agentic Platform plan](https://docs.docker.com/subscription-billing/plans/docker-agentic-platform/)

To subscribe, open [Docker Agentic Platform](https://agentic-platform.docker.com/)
and sign in. The plan is available for Docker Personal and Docker Pro accounts.

Cloud sandbox compute is metered through the Docker Agentic Platform
pay-as-you-go plan. Inference charges aren't included. Your model provider
charges for requests made with the API keys or OAuth credentials that you
configure.

## Get started

Credentials configured for local sandboxes aren't available to cloud
sandboxes. Configure a cloud credential for your agent before launching it.
For Claude Code, store an Anthropic API key:

```console
$ sbx --cloud secret set anthropic
```

Cloud sandboxes expire after one hour by default and are deleted when they
expire. Copy out work you want to keep before expiration. For other timeout
options, see [Configure expiration](https://docs.docker.com/ai/sandboxes/cloud/usage/#configure-expiration).

Create a sandbox without attaching, allowing access to GitHub for this example:

```console
$ sbx --cloud create --name cloud-project --allow-network github.com:443 claude
```

Cloud sandboxes don't accept a local workspace path. Clone the public
[Welcome to Docker repository](https://github.com/docker/welcome-to-docker)
inside the sandbox:

```console
$ sbx --cloud exec cloud-project git clone \
    https://github.com/docker/welcome-to-docker.git /home/agent/workspace/project
```

Attach to the agent:

```console
$ sbx --cloud attach cloud-project
```

Ask Claude to inspect `/home/agent/workspace/project` and write a description
of the application to `/home/agent/workspace/review.md`. When the file is ready,
press `Ctrl+\` to detach and leave the agent running.

Copy the result to your machine:

```console
$ sbx --cloud cp cloud-project:/home/agent/workspace/review.md ./review.md
```

Read the result, then remove the sandbox when you're finished:

```console
$ sbx --cloud rm cloud-project
```

Removal deletes files stored only in the sandbox. For your own projects, see
[Transfer files](https://docs.docker.com/ai/sandboxes/cloud/usage/#transfer-files) and
[Authenticate cloud agents](https://docs.docker.com/ai/sandboxes/cloud/credentials/) before cloning private repositories.

## Learn more

- [Local and cloud differences](https://docs.docker.com/ai/sandboxes/cloud/local-vs-cloud/) compares the two execution
  environments
- [Use cloud sandboxes](https://docs.docker.com/ai/sandboxes/cloud/usage/) covers creation, files, ports, and lifecycle
- [Authenticate cloud agents](https://docs.docker.com/ai/sandboxes/cloud/credentials/) covers cloud-specific secrets,
  API keys, and OpenAI OAuth
- [Manage cloud network policy](https://docs.docker.com/ai/sandboxes/cloud/network-policy/) covers account-level and
  sandbox-level network access
- [Move a sandbox](https://docs.docker.com/ai/sandboxes/cloud/move/) explains filesystem transfers between local and
  cloud environments
- [`sbx` CLI reference](https://docs.docker.com/reference/cli/sbx/) lists commands and options
