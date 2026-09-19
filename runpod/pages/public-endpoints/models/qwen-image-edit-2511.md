> Pinned source for Runpod main: [public-endpoints/models/qwen-image-edit-2511.mdx](https://github.com/runpod/docs/blob/56a86f70b4ea8b225c0e5e2231e42a4925931686/public-endpoints/models/qwen-image-edit-2511.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/qwen-image-edit-2511

# Qwen Image Edit 2511

Advanced image editing with strong consistency and multi-person identity preservation. See model inputs and outputs on Runpod Public Endpoints.

Qwen Image Edit 2511 delivers stronger edit consistency, robust multi-person identity and pose consistency, built-in LoRA styles, and enhanced industrial and product design capabilities.

- [Try in playground](https://console.runpod.io/hub/playground/image/qwen-image-edit-2511)

  Test Qwen Image Edit 2511 in the Runpod Hub playground.

|              |                                                         |
| ------------ | ------------------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/qwen-image-edit-2511/runsync` |
| **Pricing**  | $0.02 per image                                         |
| **Type**     | Image editing                                           |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Text instructions describing the desired edits.

**Property (type: array; required)**

Array of 1-3 image URLs to edit.

**Property (type: string)**

Output dimensions. Options: `1024*1024`, `1024*1280`, `1280*1024`, `1280*1280`, `1280*1536`, `1536*1080`.

**Property (type: integer)**

Seed for reproducible results. Set to -1 for random.

**Property (type: string)**

Output format. Options: `jpeg`, `png`, `webp`.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/qwen-image-edit-2511/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "Change the background to a futuristic cityscape",
      "images": ["https://example.com/portrait.jpg"],
      "size": "1024*1024",
      "seed": -1,
      "output_format": "png"
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/qwen-image-edit-2511/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "Change the background to a futuristic cityscape",
            "images": ["https://example.com/portrait.jpg"],
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
  "https://api.runpod.ai/v2/qwen-image-edit-2511/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "Change the background to a futuristic cityscape",
        images: ["https://example.com/portrait.jpg"],
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
  "delayTime": 15,
  "executionTime": 3856,
  "output": {
    "image_url": "https://image.runpod.ai/abc123/output.png",
    "cost": 0.02
  }
}
```

> **Warning**
>
> Image URLs expire after 7 days. Download and store edited images immediately if you need to keep them.

## Cost calculation

Qwen Image Edit 2511 charges $0.02 per image edited.
