> Pinned source for Runpod main: [public-endpoints/models/flux-schnell.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/public-endpoints/models/flux-schnell.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/flux-schnell

# Flux Schnell

Fast, lightweight image generation optimized for speed and prototyping. Explore this model's inputs and outputs on Runpod Public Endpoints.

Flux Schnell is Black Forest Labs' fastest and most lightweight FLUX model, ideal for local development, prototyping, and personal use. It generates images quickly with lower step counts while maintaining good quality.

- [Try in playground](https://console.runpod.io/hub/playground/image/black-forest-labs-flux-1-schnell)

  Test Flux Schnell in the Runpod Hub playground.

|              |                                                                     |
| ------------ | ------------------------------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/black-forest-labs-flux-1-schnell/runsync` |
| **Pricing**  | $0.0024 per megapixel                                               |
| **Type**     | Image generation                                                    |

> **Note**
>
> Flux Schnell is optimized for speed and works best with lower step counts. For higher fidelity production images, consider [Flux Dev](https://docs.runpod.io/public-endpoints/models/flux-dev).

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Text description of the desired image. Be specific and detailed for best results.

**Property (type: string)**

Elements to exclude from the generated image. Use this to prevent unwanted features or styles.

**Property (type: integer)**

Image width in pixels. Must be divisible by 64. Range: 256-1536.

**Property (type: integer)**

Image height in pixels. Must be divisible by 64. Range: 256-1536.

**Property (type: integer)**

Number of denoising steps. Schnell is optimized for low step counts. Range: 1-8.

**Property (type: float)**

How closely to follow the prompt. Higher values produce images more faithful to the prompt. Range: 0.0-10.0.

**Property (type: integer)**

Seed for reproducible results. Use the same seed with identical parameters to generate the same image. Set to -1 for random.

**Property (type: string)**

Output image format. Accepts `png` or `jpeg`.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/black-forest-labs-flux-1-schnell/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "A quick sketch of a mountain landscape",
      "width": 1024,
      "height": 1024,
      "num_inference_steps": 4,
      "guidance": 1.0,
      "seed": 123
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/black-forest-labs-flux-1-schnell/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "A quick sketch of a mountain landscape",
            "width": 1024,
            "height": 1024,
            "num_inference_steps": 4,
            "guidance": 1.0,
            "seed": 123,
        }
    },
)

result = response.json()
print(result["output"]["image_url"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/black-forest-labs-flux-1-schnell/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "A quick sketch of a mountain landscape",
        width: 1024,
        height: 1024,
        num_inference_steps: 4,
        guidance: 1.0,
        seed: 123,
      },
    }),
  }
);

const result = await response.json();
console.log(result.output.image_url);
```

## Response

**id (type: string)**

Unique identifier for the request.

**status (type: string)**

Request status. Returns `COMPLETED` on success, `FAILED` on error.

**delayTime (type: integer)**

Time in milliseconds the request spent in queue before processing began.

**executionTime (type: integer)**

Time in milliseconds the model took to generate the image.

**workerId (type: string)**

Identifier of the worker that processed the request.

**output (type: object)**

The generation result containing the image URL and cost.

**output.image\_url (type: string)**

URL of the generated image. This URL expires after 7 days.

**output.cost (type: float)**

Cost of the generation in USD, calculated based on the output megapixels.

```json 200
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "COMPLETED",
  "delayTime": 12,
  "executionTime": 856,
  "workerId": "oqk7ao1uomckye",
  "output": {
    "image_url": "https://image.runpod.ai/abc123/output.png",
    "cost": 0.00251658
  }
}
```

```json 400
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "FAILED",
  "error": "Invalid parameter: width must be divisible by 64"
}
```

> **Warning**
>
> Image URLs expire after 7 days. Download and store generated images immediately if you need to keep them.

## Cost calculation

Flux Schnell charges $0.0024 per megapixel. Cost is calculated as: `(width × height / 1,000,000) × \$0.0024`.

| Image size | Megapixels | Cost    |
| ---------- | ---------- | ------- |
| 512×512    | 0.26 MP    | $0.0006 |
| 1024×1024  | 1.05 MP    | $0.0025 |
| 1536×1536  | 2.36 MP    | $0.0057 |
