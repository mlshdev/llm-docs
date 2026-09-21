> Pinned source for Runpod main: [public-endpoints/models/qwen-image-lora.mdx](https://github.com/runpod/docs/blob/4962c60abcb8d9bf359d92ccc07644abd5d8e610/public-endpoints/models/qwen-image-lora.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/qwen-image-lora

# Qwen Image LoRA

Image generation with LoRA support and advanced text rendering. Review inputs and output formats for this model on Runpod Public Endpoints.

Qwen Image LoRA extends the base Qwen Image model with LoRA support, allowing you to customize generation with fine-tuned LoRA models. It retains the advanced text rendering capabilities of Qwen Image while enabling style customization.

- [Try in playground](https://console.runpod.io/hub/playground/image/qwen-image-t2i-lora)

  Test Qwen Image LoRA in the Runpod Hub playground.

|              |                                                        |
| ------------ | ------------------------------------------------------ |
| **Endpoint** | `https://api.runpod.ai/v2/qwen-image-t2i-lora/runsync` |
| **Pricing**  | $0.025 per image                                       |
| **Type**     | Image generation                                       |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Text description of the desired image.

**Property (type: array)**

Array of LoRA configurations to apply.

**Property (type: string; required)**

URL or path to the LoRA model file.

**Property (type: number; required)**

Scale factor for the LoRA influence. Typically between 0 and 1.

**Property (type: string)**

Image dimensions in format "width\*height".

**Property (type: integer)**

Seed for reproducible results. Set to -1 for random.

**Property (type: boolean)**

Enable content safety checking.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/qwen-image-t2i-lora/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "Real life Anime in a cozy kitchen",
      "loras": [
        {
          "path": "https://huggingface.co/flymy-ai/qwen-image-anime-irl-lora/resolve/main/flymy_anime_irl.safetensors",
          "scale": 1
        }
      ],
      "size": "1024*1024",
      "seed": -1,
      "enable_safety_checker": true
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/qwen-image-t2i-lora/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "Real life Anime in a cozy kitchen",
            "loras": [
                {
                    "path": "https://huggingface.co/flymy-ai/qwen-image-anime-irl-lora/resolve/main/flymy_anime_irl.safetensors",
                    "scale": 1,
                }
            ],
            "size": "1024*1024",
            "seed": -1,
            "enable_safety_checker": True,
        }
    },
)

result = response.json()
print(result["output"]["image_url"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/qwen-image-t2i-lora/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "Real life Anime in a cozy kitchen",
        loras: [
          {
            path: "https://huggingface.co/flymy-ai/qwen-image-anime-irl-lora/resolve/main/flymy_anime_irl.safetensors",
            scale: 1,
          },
        ],
        size: "1024*1024",
        seed: -1,
        enable_safety_checker: true,
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
  "delayTime": 20,
  "executionTime": 4125,
  "workerId": "oqk7ao1uomckye",
  "output": {
    "image_url": "https://image.runpod.ai/abc123/output.png",
    "cost": 0.02097152
  }
}
```

```json 400
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "FAILED",
  "error": "Failed to load LoRA model from URL"
}
```

> **Warning**
>
> Image URLs expire after 7 days. Download and store generated images immediately if you need to keep them.

## Cost calculation

Qwen Image LoRA charges $0.025 per image generated.
