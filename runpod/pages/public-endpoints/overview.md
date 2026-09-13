> Commit-pinned source for Runpod main: [public-endpoints/overview.mdx](https://docs.runpod.io/public-endpoints/overview)

# Overview

Test and deploy production-ready AI models using Public Endpoints. Review setup and request guidance for Runpod Public Endpoints.

Runpod offers Public Endpoints for instant API access to pre-deployed AI models for image, video, audio, and text generation. No deployment or infrastructure required—just [create an API key](https://docs.runpod.io/get-started/api-keys) and make a request:

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

## Get started

- [Quickstart](https://docs.runpod.io/public-endpoints/quickstart)

  Generate your first image in under 5 minutes.
- [Model reference](https://docs.runpod.io/public-endpoints/reference)

  Browse available models and their parameters.
- [Make API requests](https://docs.runpod.io/public-endpoints/requests)

  Use the playground and REST API.
- [Vercel AI SDK](https://docs.runpod.io/public-endpoints/ai-sdk)

  Integrate with JavaScript and TypeScript projects.
- [Build a text-to-video pipeline](https://docs.runpod.io/tutorials/public-endpoints/text-to-video-pipeline)

  Chain multiple endpoints to generate videos from text.

## How it works

When you call a Public Endpoint, Runpod routes your request to a pre-deployed model running on optimized GPU infrastructure. The model processes your input and returns the result.

Public Endpoints support two request modes:

- **Synchronous (`/runsync`)**: Wait for the result and receive it in the response. Best for quick generations.
- **Asynchronous (`/run`)**: Receive a job ID immediately and poll for results. Best for longer generations or batch processing.

For JavaScript and TypeScript projects, the [`@runpod/ai-sdk-provider`](https://docs.runpod.io/public-endpoints/ai-sdk) package integrates Public Endpoints with the Vercel AI SDK, providing a streamlined interface for text generation, streaming, and image generation.

## Available model types

Public Endpoints offer models across four categories:

| Type      | Example models                                                                                                                                                                                                                                                                                       | Use cases                                |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| **Image** | [Flux Dev](https://docs.runpod.io/public-endpoints/models/flux-dev), [Flux Schnell](https://docs.runpod.io/public-endpoints/models/flux-schnell), [Qwen Image](https://docs.runpod.io/public-endpoints/models/qwen-image), [Seedream](https://docs.runpod.io/public-endpoints/models/seedream-4-t2i) | Text-to-image generation, image editing  |
| **Video** | [WAN 2.5](https://docs.runpod.io/public-endpoints/models/wan-2-5), [Kling](https://docs.runpod.io/public-endpoints/models/kling-v2-1), [Seedance](https://docs.runpod.io/public-endpoints/models/seedance-1-5-pro), [SORA 2](https://docs.runpod.io/public-endpoints/models/sora-2)                  | Image-to-video, text-to-video generation |
| **Audio** | [Minimax Speech](https://docs.runpod.io/public-endpoints/models/minimax-speech), [Chatterbox Turbo](https://docs.runpod.io/public-endpoints/models/chatterbox-turbo)                                                                                                                                 | Text-to-speech, voice cloning            |
| **Text**  | [Qwen3 32B](https://docs.runpod.io/public-endpoints/models/qwen3-32b), [IBM Granite](https://docs.runpod.io/public-endpoints/models/granite-4), [Moonshot Kimi](https://docs.runpod.io/public-endpoints/models/moonshot-kimi)                                                                        | Chat, code generation, text completion   |

For a complete list of models with endpoint URLs and parameters, see the [model reference](https://docs.runpod.io/public-endpoints/reference).

## Pricing

Public Endpoints use transparent, usage-based pricing:

| Model type       | Example                                                                         | Price                     |
| ---------------- | ------------------------------------------------------------------------------- | ------------------------- |
| Image generation | [Flux Dev](https://docs.runpod.io/public-endpoints/models/flux-dev)             | $0.02 per megapixel       |
| Image generation | [Flux Schnell](https://docs.runpod.io/public-endpoints/models/flux-schnell)     | $0.0024 per megapixel     |
| Video generation | [WAN 2.5](https://docs.runpod.io/public-endpoints/models/wan-2-5)               | $0.50 per 5 seconds       |
| Text-to-speech   | [Minimax Speech](https://docs.runpod.io/public-endpoints/models/minimax-speech) | $0.05 per 1000 characters |
| Text generation  | [Qwen3 32B](https://docs.runpod.io/public-endpoints/models/qwen3-32b)           | $10.00 per 1M tokens      |

> **Note**
>
> Pricing is calculated based on actual output. You will not be charged for failed generations.

**Example cost calculations for image generation:**

- 512x512 image (0.26 MP) with [Flux Dev](https://docs.runpod.io/public-endpoints/models/flux-dev): \~$0.005
- 1024x1024 image (1.05 MP) with [Flux Dev](https://docs.runpod.io/public-endpoints/models/flux-dev): \~$0.021
- 1024x1024 image (1.05 MP) with [Flux Schnell](https://docs.runpod.io/public-endpoints/models/flux-schnell): \~$0.0025

For complete pricing information, see the [model reference](https://docs.runpod.io/public-endpoints/reference).
