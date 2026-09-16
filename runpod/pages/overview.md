> Pinned source for Runpod main: [overview.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/overview.mdx)
> Canonical documentation: https://docs.runpod.io/overview

# Welcome to Runpod

Explore our guides and examples to deploy your AI/ML application on Runpod. Review setup and usage guidance in the Runpod documentation.

Runpod is a cloud computing platform built for AI, machine learning, and general compute needs. Whether you're training or fine-tuning AI models, or deploying cloud-based applications for inference, Runpod provides scalable, high-performance GPU and CPU resources to power your workloads.

## Access GPUs instantly

- [Quickstart](https://docs.runpod.io/get-started)

  Create an account, deploy your first GPU Pod, and use it to execute code.
- [Create an API key](https://docs.runpod.io/get-started/api-keys)

  Create API keys to manage your access to Runpod resources.
- [Concepts](https://docs.runpod.io/get-started/concepts)

  Learn about the key concepts and terminology for the Runpod platform.
- [Flash](https://docs.runpod.io/flash/overview)

  Run Python functions on remote GPUs directly from your local terminal.
- [Serverless](https://docs.runpod.io/serverless/overview)

  Pay-per-second computing with automatic scaling for production AI/ML apps.
- [Pods](https://docs.runpod.io/pods/overview)

  Dedicated GPU or CPU instances for containerized AI/ML workloads.

## Use our model endpoints

Runpod offers [Public Endpoints](https://docs.runpod.io/public-endpoints/overview) for instant API access to pre-deployed AI models for image, video, audio, and text generation. No deployment or infrastructure required—just [create an API key](https://docs.runpod.io/get-started/api-keys) and make a request:

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/black-forest-labs-flux-1-schnell/runsync",
    headers={
        "Authorization": "Bearer YOUR_API_KEY", # Replace YOUR_API_KEY with your actual API key
        "Content-Type": "application/json"
    },
    json={
        "input": {
            "prompt": "A beautiful sunset over mountains", # Customize your prompt
            "width": 1024,
            "height": 1024
        }
    }
)

result = response.json()
print(result["output"]["image_url"])
```

```bash cURL
# Replace YOUR_API_KEY with your actual API key
curl -X POST "https://api.runpod.ai/v2/black-forest-labs-flux-1-schnell/runsync" \
    -H "Authorization: Bearer YOUR_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
    "input": {
        "prompt": "A beautiful sunset over mountains",
        "width": 1024,
        "height": 1024
    }
    }'
```

For a list of available models, see the [model reference](https://docs.runpod.io/public-endpoints/reference).

## Guides and examples

- [Generate images with ComfyUI](https://docs.runpod.io/tutorials/pods/comfyui)

  Deploy a dedicated GPU with ComfyUI pre-installed and start generating images.
- [Generate images at scale](https://docs.runpod.io/tutorials/serverless/comfyui)

  Build a ComfyUI worker and deploy it as a Serverless endpoint.
- [Generate images with Flash scripts](https://docs.runpod.io/tutorials/flash/image-generation-with-sdxl)

  Use a hybrid local/remote script to generate images with SDXL.
- [Text-to-video pipeline](https://docs.runpod.io/tutorials/public-endpoints/text-to-video-pipeline)

  Create a multi-model pipeline for video generation.
- [Build a load balancing API](https://docs.runpod.io/tutorials/flash/build-rest-api-with-load-balancer)

  Create a REST API with automatic load balancing using Flash.
- [Deploy vLLM for text generation](https://docs.runpod.io/serverless/vllm/get-started)

  Deploy a large language model in minutes using vLLM on Serverless.

## High-performance clusters

Create a multi-node [Instant Cluster](https://docs.runpod.io/instant-clusters) for fully managed distributed GPU computing with high-speed networking between nodes.

- [Overview](https://docs.runpod.io/instant-clusters)

  Learn how Instant Clusters work and when to use them.
- [Deploy a Slurm cluster](https://docs.runpod.io/instant-clusters/slurm-clusters)

  Set up managed Slurm for HPC workloads.
- [Deploy a PyTorch cluster](https://docs.runpod.io/instant-clusters/pytorch)

  Run distributed PyTorch training across multiple nodes.

## Support

- [Contact](https://contact.runpod.io)

  Submit a support request using our contact page.
- [Status page](https://uptime.runpod.io/)

  Check the status of Runpod services and infrastructure.
- [Discord](https://discord.com/invite/cUpRmau42V)

  Join the Runpod community on Discord.
