> Pinned source for Runpod main: [public-endpoints/models/flux-kontext-dev.mdx](https://github.com/runpod/docs/blob/6bedc9afe6be9f0bfbbaa77c2ee91f08714e0dec/public-endpoints/models/flux-kontext-dev.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/flux-kontext-dev

# Flux Kontext Dev

12 billion parameter model for editing images based on text instructions. Explore this model's inputs and outputs on Runpod Public Endpoints.

Flux Kontext Dev is a 12 billion parameter rectified flow transformer capable of editing images based on text instructions. It excels at making targeted edits to existing images while preserving the overall context and style.

- [Try in playground](https://console.runpod.io/hub/playground/image/black-forest-labs-flux-1-kontext-dev)

  Test Flux Kontext Dev in the Runpod Hub playground.

|              |                                                                         |
| ------------ | ----------------------------------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/black-forest-labs-flux-1-kontext-dev/runsync` |
| **Pricing**  | $0.025 per image                                                        |
| **Type**     | Image editing                                                           |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Text instructions describing the desired edits to the image.

**Property (type: string; required)**

URL of the input image to edit.

**Property (type: string)**

Elements to exclude from the edited image.

**Property (type: string)**

Output image size in format "width\*height".

**Property (type: integer)**

Number of denoising steps. Higher values produce more detailed edits. Range: 1-50.

**Property (type: float)**

How closely to follow the prompt. Range: 0.0-10.0.

**Property (type: integer)**

Seed for reproducible results. Set to -1 for random.

**Property (type: string)**

Output image format. Accepts `png` or `jpeg`.

**Property (type: boolean)**

Whether to run safety checks on the output.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/black-forest-labs-flux-1-kontext-dev/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "Exact same bluebird, same angle and posture, now perched on a cloud in outer space",
      "image": "https://example.com/bluebird.png",
      "negative_prompt": "",
      "seed": -1,
      "num_inference_steps": 28,
      "guidance": 2,
      "size": "1024*1024",
      "output_format": "png",
      "enable_safety_checker": true
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/black-forest-labs-flux-1-kontext-dev/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "Exact same bluebird, same angle and posture, now perched on a cloud in outer space",
            "image": "https://example.com/bluebird.png",
            "negative_prompt": "",
            "seed": -1,
            "num_inference_steps": 28,
            "guidance": 2,
            "size": "1024*1024",
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
  "https://api.runpod.ai/v2/black-forest-labs-flux-1-kontext-dev/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt:
          "Exact same bluebird, same angle and posture, now perched on a cloud in outer space",
        image: "https://example.com/bluebird.png",
        negative_prompt: "",
        seed: -1,
        num_inference_steps: 28,
        guidance: 2,
        size: "1024*1024",
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

Time in milliseconds the model took to edit the image.

**workerId (type: string)**

Identifier of the worker that processed the request.

**output (type: object)**

The generation result containing the image URL and cost.

**output.image\_url (type: string)**

URL of the edited image. This URL expires after 7 days.

**output.cost (type: float)**

Cost of the generation in USD, calculated based on the output megapixels.

```json 200
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "COMPLETED",
  "delayTime": 18,
  "executionTime": 4521,
  "workerId": "oqk7ao1uomckye",
  "output": {
    "image_url": "https://image.runpod.ai/abc123/output.png",
    "cost": 0.031457
  }
}
```

```json 400
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "FAILED",
  "error": "Invalid image URL"
}
```

> **Warning**
>
> Image URLs expire after 7 days. Download and store edited images immediately if you need to keep them.

## Cost calculation

Flux Kontext Dev charges $0.025 per image edited.
