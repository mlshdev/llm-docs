> Pinned source for Runpod main: [public-endpoints/models/qwen-image-edit.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/public-endpoints/models/qwen-image-edit.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/qwen-image-edit

# Qwen Image Edit

Image editing with unique text rendering capabilities. Review model inputs, output formats, and request guidance for Runpod Public Endpoints.

Qwen Image Edit extends Qwen's advanced text rendering capabilities to image editing tasks. It excels at making precise edits to existing images while preserving quality and adding or modifying text within images.

- [Try in playground](https://console.runpod.io/hub/playground/image/qwen-image-edit)

  Test Qwen Image Edit in the Runpod Hub playground.

|              |                                                    |
| ------------ | -------------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/qwen-image-edit/runsync` |
| **Pricing**  | $0.02 per image                                    |
| **Type**     | Image editing                                      |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Editing instructions describing the desired changes.

**Property (type: string; required)**

URL of the image to edit.

**Property (type: string)**

Elements to exclude from the edited image.

**Property (type: integer)**

Seed for reproducible results. Set to -1 for random.

**Property (type: string)**

Output format. Accepts `png` or `jpeg`.

**Property (type: boolean)**

Enable content safety checking.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/qwen-image-edit/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "change the trench coat and high heels color to light grey",
      "negative_prompt": "",
      "seed": -1,
      "image": "https://example.com/fashion-photo.png",
      "output_format": "png",
      "enable_safety_checker": true
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/qwen-image-edit/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "change the trench coat and high heels color to light grey",
            "negative_prompt": "",
            "seed": -1,
            "image": "https://example.com/fashion-photo.png",
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
  "https://api.runpod.ai/v2/qwen-image-edit/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "change the trench coat and high heels color to light grey",
        negative_prompt: "",
        seed: -1,
        image: "https://example.com/fashion-photo.png",
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
  "delayTime": 14,
  "executionTime": 3875,
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
  "error": "Invalid image URL"
}
```

> **Warning**
>
> Image URLs expire after 7 days. Download and store edited images immediately if you need to keep them.

## Cost calculation

Qwen Image Edit charges $0.02 per image edited.
