> Pinned source for Docker main: [content/_index.md](https://github.com/docker/docs/blob/2465b5136acea8373d5c6a27e4672f4acf26c935/content/_index.md)

# Home

Docker Documentation helps you learn Docker, install Docker products, and find
reference material for everyday development and operations tasks.

## Browse docs by area

- [Get started](https://docs.docker.com/get-started/): Run an application, sandbox an AI agent, or
  roll out Docker.

- [Guides](https://docs.docker.com/guides/): Follow task-focused walkthroughs for common workflows.

- [Manuals](https://docs.docker.com/): Install, configure, and use Docker products.

- [Reference](https://docs.docker.com/reference/): Browse CLI, API, and file format documentation.

- [Share agent skills read-only by default](https://docs.docker.com/ai/sandboxes/workflows/agent-skills/#shared-store-behavior) (Docker Sandboxes, 2026-09-15): Sandboxes created with version 0.43.0 mount shared agent skills read-only by default. Choose read-only, read-write, or no access when creating a sandbox.

- [Run agents without mounting host files](https://docs.docker.com/ai/sandboxes/usage/#choose-a-workspace) (Docker Sandboxes, 2026-09-07): Create a sandbox without a host workspace mount. Keep agent files inside the sandbox across stops and restarts, and copy files between the sandbox and host when needed.

- [Install and update shared skills from Git repositories](https://docs.docker.com/ai/sandboxes/workflows/agent-skills/) (Docker Sandboxes, 2026-09-07): Install agent skills from Git repositories into a persistent store shared across sandboxes, and update or remove them with sbx skills.

- [Use Docker Build Cloud with standard Buildx](https://docs.docker.com/build/builders/drivers/cloud/) (Docker Build Cloud, 2026-09-03): Buildx 0.37.0 includes the cloud driver, so you can connect to Docker Build Cloud from the standard Buildx CLI plugin without installing a separate client.

- [Join Docker Verified Publisher through self-service plans](https://docs.docker.com/subscription-billing/plans/docker-verified-publisher/) (Docker Verified Publisher, 2026-08-20): Apply for DVP Starter or Growth, complete checkout after approval, and manage publisher analytics, consuming domains, and billing.

- [Sign and enforce trusted sandbox kits](https://docs.docker.com/ai/sandboxes/customize/kits/#sign-and-verify-kits) (Docker Sandboxes, 2026-08-20): Sign kits with cosign-compatible Sigstore signatures, verify keyless or key-based signatures, and reject kits outside a trusted-signer policy.

- [Define reproducible sandbox environments](https://docs.docker.com/ai/sandboxes/configuration/environment-files/) (Docker Sandboxes, 2026-08-19): Capture an agent, workspaces, kits, credentials, ports, and resources in a shareable sbxenv.yaml file and manage it with sbx env.

- [Resolve sandbox secrets from external sources](https://docs.docker.com/ai/sandboxes/configuration/credentials/#use-a-dynamic-secret-source) (Docker Sandboxes, 2026-08-19): Keep references to 1Password, AWS Secrets Manager, or host commands in the secret store and resolve credentials on the host when the proxy needs them.

- [Run GPU workloads in sandboxes](https://docs.docker.com/ai/sandboxes/configuration/gpu-passthrough/) (Docker Sandboxes, 2026-08-19): Pass an NVIDIA GPU through to a sandbox on supported Linux hosts for GPU-accelerated agent workloads.

- [Query DHI VEX data with the GraphQL API](https://docs.docker.com/dhi/tools/api/) (Docker Hardened Images, 2026-08-17): Build automation or dashboards that query image packages, CVEs, VEX statements, and suppressed vulnerabilities by digest.

## Common questions

- [How do I get started with Docker?](https://docs.docker.com/get-started/)
- [How do I containerize an application?](https://docs.docker.com/get-started/tutorials/run-an-app/)
- [Can I run my AI agent in a sandbox?](https://docs.docker.com/get-started/tutorials/run-an-agent/)
- [What are Docker Hardened Images?](https://docs.docker.com/dhi/)
- [Why should I use Docker Compose?](https://docs.docker.com/compose/)
