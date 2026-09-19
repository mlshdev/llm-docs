> Pinned source for Runpod main: [public-endpoints/models/qwen-image.mdx](https://github.com/runpod/docs/blob/56a86f70b4ea8b225c0e5e2231e42a4925931686/public-endpoints/models/qwen-image.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/qwen-image

# Qwen Image

Image generation foundation model with advanced text rendering capabilities. Explore this model's inputs and outputs on Runpod Public Endpoints.

Qwen Image is an image generation foundation model with advanced text rendering capabilities. It excels at generating images that include readable, well-formed text within the image.

- [Try in playground](https://console.runpod.io/hub/playground/image/qwen-image-t2i)

  Test Qwen Image in the Runpod Hub playground.

|              |                                                   |
| ------------ | ------------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/qwen-image-t2i/runsync` |
| **Pricing**  | $0.02 per image                                   |
| **Type**     | Image generation                                  |

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
curl -X POST "https://api.runpod.ai/v2/qwen-image-t2i/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "A fashion-forward woman sitting at cobblestone street in Paris",
      "negative_prompt": "",
      "size": "1328*1328",
      "seed": -1,
      "enable_safety_checker": true
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/qwen-image-t2i/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "A fashion-forward woman sitting at cobblestone street in Paris",
            "negative_prompt": "",
            "size": "1328*1328",
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
  "https://api.runpod.ai/v2/qwen-image-t2i/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "A fashion-forward woman sitting at cobblestone street in Paris",
        negative_prompt: "",
        size: "1328*1328",
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
  "delayTime": 15,
  "executionTime": 3254,
  "workerId": "oqk7ao1uomckye",
  "output": {
    "image_url": "https://image.runpod.ai/abc123/output.png",
    "cost": 0.035267
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

Qwen Image charges $0.02 per image generated.
