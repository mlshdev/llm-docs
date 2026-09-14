> Commit-pinned source for Runpod main: [public-endpoints/models/seedream-4-t2i.mdx](https://docs.runpod.io/public-endpoints/models/seedream-4-t2i)

# Seedream 4.0 T2I

New-generation image creation with unified generation and editing architecture. See model inputs and outputs on Runpod Public Endpoints.

Seedream 4.0 T2I is ByteDance's new-generation image creation model that integrates both generation and editing capabilities within a unified architecture. It produces high-quality images with excellent prompt adherence.

- [Try in playground](https://console.runpod.io/hub/playground/image/seedream-v4-t2i)

  Test Seedream 4.0 T2I in the Runpod Hub playground.

|              |                                                    |
| ------------ | -------------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/seedream-v4-t2i/runsync` |
| **Pricing**  | $0.027 per image                                   |
| **Type**     | Image generation                                   |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Text description of the desired image.

**Property (type: string)**

Elements to exclude from the generated image.

**Property (type: string)**

Image dimensions in format "width\*height".

**Property (type: integer)**

Seed for reproducible results. Set to -1 for random.

**Property (type: boolean)**

Enable content safety checking.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/seedream-v4-t2i/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "American retro 1950s illustration style, diner scene",
      "negative_prompt": "",
      "size": "2048*2048",
      "seed": -1,
      "enable_safety_checker": true
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/seedream-v4-t2i/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "American retro 1950s illustration style, diner scene",
            "negative_prompt": "",
            "size": "2048*2048",
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
  "https://api.runpod.ai/v2/seedream-v4-t2i/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "American retro 1950s illustration style, diner scene",
        negative_prompt: "",
        size: "2048*2048",
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
  "delayTime": 16,
  "executionTime": 5234,
  "workerId": "oqk7ao1uomckye",
  "output": {
    "image_url": "https://image.runpod.ai/abc123/output.png",
    "cost": 0.113246
  }
}
```

```json 400
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "FAILED",
  "error": "Invalid parameter: size format must be width*height"
}
```

> **Warning**
>
> Image URLs expire after 7 days. Download and store generated images immediately if you need to keep them.

## Cost calculation

Seedream 4.0 T2I charges $0.027 per image generated.
