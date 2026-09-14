> Pinned source for Runpod main: [flash/overview.mdx](https://github.com/runpod/docs/blob/361c96910f23cbab97220f94f7a751b12e4b09ea/flash/overview.mdx)
> Canonical documentation: https://docs.runpod.io/flash/overview

# Overview

Build autoscaling AI/ML apps using local code with Runpod Flash. Review setup, configuration, deployment, and usage guidance for Runpod Flash.

Flash is a Python SDK for developing cloud-native AI apps where you define everything—hardware, remote functions, and dependencies—using local code.

```python
import asyncio
from runpod_flash import Endpoint, GpuType

# Mark the function below for remote execution
@Endpoint(name="hello-gpu", gpu=GpuType.NVIDIA_GEFORCE_RTX_4090, dependencies=["torch"]) 
async def hello(): # This function runs on Runpod
    import torch
    gpu_name = torch.cuda.get_device_name(0)
    print(f"Hello from your GPU! ({gpu_name})")
    return {"gpu": gpu_name}

asyncio.run(hello())
print("Done!") # This runs locally
```

Write `@Endpoint` decorated Python functions on your local machine. Run them, and Flash automatically handles GPU/CPU provisioning and worker scaling on [Runpod Serverless](https://docs.runpod.io/serverless/overview).

## Get started

- [Quickstart](https://docs.runpod.io/flash/quickstart)

  Write a Flash script for instant access to Runpod GPUs.
- [Create endpoints](https://docs.runpod.io/flash/create-endpoints)

  Learn how to create endpoints of various types.
- [Examples](https://github.com/runpod/flash-examples)

  Browse example Flash scripts and apps on GitHub.

## Setup

> **Note**
>
> Flash requires a Runpod account with a verified email address.

### Install Flash

> **Note**
>
> Flash requires [Python 3.10, 3.11, 3.12, or 3.13](https://www.python.org/downloads/) and runs natively on macOS and Linux. Windows users can run Flash through [WSL2](https://docs.runpod.io/flash/windows-wsl2).

Install Flash using `pip` or `uv`:

```bash
# Install with pip
pip install runpod-flash

# Or uv
uv tool install runpod-flash
```

### Authentication

Before you can use Flash, you need to authenticate with your Runpod account:

```bash
flash login

# If using uv:
uv run flash login
```

This saves your API key securely and allows you to use the Flash CLI and run `@Endpoint` functions.

### Coding agent integration (optional)

Install the Flash skill package for AI coding agents like Claude Code, Cline, and Cursor:

```bash
npx skills add runpod/runpod-plugins-official
```

You can review the `SKILL.md` file in the [runpod/runpod-plugins-official repository](https://github.com/runpod/runpod-plugins-official/blob/main/plugins/runpod/skills/flash/SKILL.md).

## Flash apps

When you're ready to move beyond scripts and build a production-ready API, you can create a [Flash app](https://docs.runpod.io/flash/apps/overview) (a collection of interconnected endpoints with diverse hardware configurations) and deploy it to Runpod.

[Follow this tutorial to build your first Flash app](https://docs.runpod.io/flash/apps/build-app).

## Flash CLI

The Flash CLI provides a set of commands for managing your Flash apps and endpoints.

```bash
flash --help
```

[Learn more about the Flash CLI](https://docs.runpod.io/flash/cli/overview).

## Limitations

- Flash runs natively on macOS and Linux. Windows users can run Flash through [WSL2](https://docs.runpod.io/flash/windows-wsl2).
- CPU endpoints are restricted to the `EU-RO-1` datacenter. GPU endpoints can deploy to [multiple datacenters](https://docs.runpod.io/flash/configuration/parameters#datacenter).
- Flash can rapidly scale workers across multiple endpoints, and you may hit your maximum worker threshold quickly. Contact [Runpod support](https://www.runpod.io/contact) to increase your account's capacity if needed.

## Tutorials

- [Flash image generation](https://docs.runpod.io/tutorials/flash/image-generation-with-sdxl)

  Build a GPU-accelerated image generation service.
- [Flash text generation](https://docs.runpod.io/tutorials/flash/text-generation-with-transformers)

  Deploy a text generation model on Runpod.
- [Flash REST API](https://docs.runpod.io/tutorials/flash/build-rest-api-with-load-balancer)

  Create HTTP endpoints with load balancing.
