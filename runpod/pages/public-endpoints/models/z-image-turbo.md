> Pinned source for Runpod main: [public-endpoints/models/z-image-turbo.mdx](https://github.com/runpod/docs/blob/ceb79977df03b21e40ceaec3fdea8c9869897b7e/public-endpoints/models/z-image-turbo.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/z-image-turbo

# Z-Image Turbo

A 6-billion-parameter image generation model with text-to-image and image-to-image support. See model inputs and outputs on Runpod Public Endpoints.

Z-Image Turbo is a powerful and highly efficient 6B parameter image generation model that supports both text-to-image and image-to-image generation. It delivers high-quality results with fast inference times.

- [Try in playground](https://console.runpod.io/hub/playground/image/z-image-turbo)

  Test Z-Image Turbo in the Runpod Hub playground.

|              |                                                  |
| ------------ | ------------------------------------------------ |
| **Endpoint** | `https://api.runpod.ai/v2/z-image-turbo/runsync` |
| **Pricing**  | $0.005 per image                                 |
| **Type**     | Image generation                                 |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Text description of the desired image. Supports English and Chinese.

**Property (type: string)**

URL of an input image for image-to-image generation.

**Property (type: string)**

Image dimensions. Options: `512*512`, `768*768`, `1024*1024`, `1280*1280`, `1024*768`, `768*1024`, `1280*720`, `720*1280`.

**Property (type: number)**

Strength of modifications for image-to-image. Range: 0.0-1.0.

**Property (type: integer)**

Seed for reproducible results. Set to -1 for random.

**Property (type: string)**

Output format. Options: `png`, `jpeg`, `webp`.

**Property (type: boolean)**

Enable content safety checking.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/z-image-turbo/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "A serene Japanese garden with cherry blossoms",
      "size": "1024*1024",
      "seed": -1,
      "output_format": "png",
      "enable_safety_checker": true
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/z-image-turbo/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "A serene Japanese garden with cherry blossoms",
            "size": "1024*1024",
            "seed": -1,
            "output_format": "png",
            "enable_safety_checker": True,
        }
    },
)

result = response.json()
print(result["output"]["image_url"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/z-image-turbo/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "A serene Japanese garden with cherry blossoms",
        size: "1024*1024",
        seed: -1,
        output_format: "png",
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

**output (type: object)**

The generation result containing the image URL and cost.

**output.image\_url (type: string)**

URL of the generated image. This URL expires after 7 days.

**output.cost (type: float)**

Cost of the generation in USD.

```json 200
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "COMPLETED",
  "delayTime": 12,
  "executionTime": 1856,
  "output": {
    "image_url": "https://image.runpod.ai/abc123/output.png",
    "cost": 0.005
  }
}
```

> **Warning**
>
> Image URLs expire after 7 days. Download and store generated images immediately if you need to keep them.

## Cost calculation

Z-Image Turbo charges $0.005 per image generated.
