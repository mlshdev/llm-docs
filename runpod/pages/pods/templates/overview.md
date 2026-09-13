> Commit-pinned source for Runpod main: [pods/templates/overview.mdx](https://docs.runpod.io/pods/templates/overview)

# Overview

Streamline your Pod deployments with templates, bundling prebuilt container images with hardware specs and network settings.

Pod templates are pre-configured [Docker image](https://docs.runpod.io/tutorials/introduction/containers#what-are-images) setups that let you quickly spin up Pods without manual environment configuration. Instead of installing PyTorch, configuring JupyterLab, and setting up dependencies yourself, you can select a template and have everything ready instantly.

- [Explore templates](https://www.console.runpod.io/explore)

  Browse official and community templates.
- [Create a custom template](https://docs.runpod.io/pods/templates/create-custom-template)

  Build your own reusable Pod configuration.
- [Manage your templates](https://docs.runpod.io/pods/templates/manage-templates)

  Edit, share, and organize your templates.
- [Environment variables](https://docs.runpod.io/pods/templates/environment-variables)

  Configure template behavior with variables.

## Template types

| Type          | Description                                                                                         | Support                                                     |
| ------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **Official**  | Curated by Runpod with proven demand and maintained quality. Regularly tested and updated.          | Full Runpod support                                         |
| **Community** | Created by users and promoted based on community usage. Wide variety of specialized configurations. | [Community Discord](https://discord.com/invite/runpod) only |
| **Custom**    | Created by you for specialized workloads. Can be private or shared publicly.                        | Self-supported                                              |

> **Warning**
>
> Runpod does not maintain or provide customer support for community templates. If you encounter issues, contact the template creator directly or seek help on the [community Discord](https://discord.com/invite/runpod).

## What templates include

Templates contain all components needed to launch a fully configured Pod:

- **Container image**: The Docker image with all software packages and dependencies.
- **Hardware specifications**: Container disk size, volume size, and mount paths.
- **Network settings**: Exposed HTTP and TCP ports for web UIs or APIs.
- **Environment variables**: Pre-configured settings that customize application behavior.
- **Startup commands**: Instructions that run when the Pod launches.
