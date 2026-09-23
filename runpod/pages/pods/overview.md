> Pinned source for Runpod main: [pods/overview.mdx](https://github.com/runpod/docs/blob/6bedc9afe6be9f0bfbbaa77c2ee91f08714e0dec/pods/overview.mdx)
> Canonical documentation: https://docs.runpod.io/pods/overview

# Overview

Get on-demand access to powerful computing resources. Review setup, configuration, storage, networking, and operations guidance for Runpod Pods.

Pods provide instant access to powerful GPU and CPU resources for AI training, fine-tuning, rendering, and other compute-intensive workloads. You have full control over your computing environment, allowing you to customize software, storage, and networking to match your exact requirements.

## Get started

- [Quickstart](https://docs.runpod.io/get-started)

  Create an account and deploy your first Pod.
- [Choose a Pod](https://docs.runpod.io/pods/choose-a-pod)

  Select the right GPU type and configuration for your workload.
- [Connect to your Pod](https://docs.runpod.io/pods/connect-to-a-pod)

  Access your Pod via SSH, JupyterLab, or VS Code.

## Concepts

### [Templates](https://docs.runpod.io/pods/templates/overview)

Pre-configured [Docker image](https://docs.runpod.io/tutorials/introduction/containers#what-are-images) setups that let you quickly spin up Pods without manual environment configuration. Instead of installing PyTorch, configuring JupyterLab, and setting up all dependencies yourself, you can select an official Runpod PyTorch template and have everything ready to go instantly.

### [Storage](https://docs.runpod.io/pods/storage/types)

Pods offer three types of storage: container disk for temporary files, volume disk for persistent storage throughout the Pod's lease, and optional network volumes for permanent storage that can be transferred between Pods.

### [Connection](https://docs.runpod.io/pods/connect-to-a-pod)

Once deployed, you can connect to your Pod through SSH for command-line access, web proxy for [exposed web services](https://docs.runpod.io/pods/configuration/expose-ports), JupyterLab for data science workflows, or [VS Code/Cursor](https://docs.runpod.io/pods/configuration/connect-to-ide) for local IDE integration.

## Deployment options

You can deploy Pods in several ways:

- [From a template](https://docs.runpod.io/pods/templates/overview): Pre-configured environments for quick setup of common workflows.
- **Custom containers**: Pull from any compatible container registry such as Docker Hub, GitHub Container Registry, or Amazon ECR. Learn more about [creating your own container images](https://docs.runpod.io/tutorials/introduction/containers/create-dockerfiles).
- [From Serverless repos](https://docs.runpod.io/hub/overview#deploy-as-a-pod): Deploy any Serverless-compatible repository from the Runpod Hub directly as a Pod.

## Pod types

Runpod offers two cloud options:

- **Secure Cloud:** Operates in T3/T4 data centers, providing high reliability and security for enterprise and production workloads.
- **Community Cloud:** Connects individual compute providers to users through a vetted, secure peer-to-peer system, with competitive pricing options.

## Pricing

Pods are billed by the minute with no fees for ingress/egress. Runpod also offers long-term [savings plans](https://docs.runpod.io/pods/pricing#savings-plans) for extended usage patterns. See [Pod pricing](https://docs.runpod.io/pods/pricing) for details.

## Limitations

- **Docker Compose is not supported:** Runpod runs Docker for you, so you cannot spin up your own Docker instance or use Docker Compose on Pods.
- **UDP connections are not supported:** Pods only support TCP and HTTP connections.
- **Windows is not supported:** Pods do not currently support Windows.

## Tutorials

- [Run Ollama on a Pod](https://docs.runpod.io/tutorials/pods/run-ollama)

  Run LLM inference with HTTP API access.
- [Build Docker images with Bazel](https://docs.runpod.io/tutorials/pods/build-docker-images)

  Emulate a Docker-in-Docker workflow.
- [Create a custom template](https://docs.runpod.io/pods/templates/create-custom-template)

  Build your own reusable Pod template.
