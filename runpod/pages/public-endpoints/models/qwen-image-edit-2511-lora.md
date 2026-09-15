> Pinned source for Runpod main: [public-endpoints/models/qwen-image-edit-2511-lora.mdx](https://github.com/runpod/docs/blob/ceb79977df03b21e40ceaec3fdea8c9869897b7e/public-endpoints/models/qwen-image-edit-2511-lora.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/qwen-image-edit-2511-lora

# Qwen Image Edit 2511 LoRA

Advanced image editing with complex text rendering and LoRA support. Review inputs and output formats for this model on Runpod Public Endpoints.

Qwen Image Edit 2511 LoRA achieves significant advances in complex text rendering and precise image editing with LoRA support. It enables style customization through LoRA models while maintaining editing precision.

- [Try in playground](https://console.runpod.io/hub/playground/image/qwen-image-edit-2511-lora)

  Test Qwen Image Edit 2511 LoRA in the Runpod Hub playground.

|              |                                                              |
| ------------ | ------------------------------------------------------------ |
| **Endpoint** | `https://api.runpod.ai/v2/qwen-image-edit-2511-lora/runsync` |
| **Pricing**  | $0.025 per image                                             |
| **Type**     | Image editing                                                |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Text instructions describing the desired edits.

**Property (type: array; required)**

Array of 1-3 image URLs to edit.

**Property (type: array)**

Array of LoRA configurations to apply.

**Property (type: string; required)**

URL or path to the LoRA model file.

**Property (type: number; required)**

Scale factor for the LoRA influence.

**Property (type: string)**

Output dimensions. Options: `1024*1024`, `1024*1280`, `1280*1024`, `1280*1280`, `1280*1536`, `1536*1080`.

**Property (type: integer)**

Seed for reproducible results. Set to -1 for random.

**Property (type: string)**

Output format. Options: `jpeg`, `png`, `webp`.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/qwen-image-edit-2511-lora/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "Transform into anime style",
      "images": ["https://example.com/photo.jpg"],
      "loras": [
        {
          "path": "https://huggingface.co/example/anime-lora/model.safetensors",
          "scale": 0.8
        }
      ],
      "size": "1024*1024",
      "seed": -1,
      "output_format": "png"
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/qwen-image-edit-2511-lora/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "Transform into anime style",
            "images": ["https://example.com/photo.jpg"],
            "loras": [
                {
                    "path": "https://huggingface.co/example/anime-lora/model.safetensors",
                    "scale": 0.8,
                }
            ],
            "size": "1024*1024",
            "seed": -1,
            "output_format": "png",
        }
    },
)

result = response.json()
print(result["output"]["image_url"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/qwen-image-edit-2511-lora/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "Transform into anime style",
        images: ["https://example.com/photo.jpg"],
        loras: [
          {
            path: "https://huggingface.co/example/anime-lora/model.safetensors",
            scale: 0.8,
          },
        ],
        size: "1024*1024",
        seed: -1,
        output_format: "png",
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

**output (type: object)**

The generation result containing the image URL and cost.

**output.image\_url (type: string)**

URL of the edited image. This URL expires after 7 days.

**output.cost (type: float)**

Cost of the generation in USD.

```json 200
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "COMPLETED",
  "delayTime": 18,
  "executionTime": 4521,
  "output": {
    "image_url": "https://image.runpod.ai/abc123/output.png",
    "cost": 0.025
  }
}
```

> **Warning**
>
> Image URLs expire after 7 days. Download and store edited images immediately if you need to keep them.

## Cost calculation

Qwen Image Edit 2511 LoRA charges $0.025 per image edited.
