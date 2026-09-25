> Pinned source for Runpod main: [public-endpoints/models/seedream-4-edit.mdx](https://github.com/runpod/docs/blob/2ed145e18217c606416d3dbc47314da01a479792/public-endpoints/models/seedream-4-edit.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/seedream-4-edit

# Seedream 4.0 Edit

New-generation image editing with unified generation and editing architecture. See model inputs and outputs on Runpod Public Endpoints.

Seedream 4.0 Edit provides advanced image editing capabilities using the same unified architecture as Seedream 4.0 T2I. It can edit or combine multiple source images based on text instructions.

- [Try in playground](https://console.runpod.io/hub/playground/image/seedream-v4-edit)

  Test Seedream 4.0 Edit in the Runpod Hub playground.

|              |                                                     |
| ------------ | --------------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/seedream-v4-edit/runsync` |
| **Pricing**  | $0.027 per image                                    |
| **Type**     | Image editing                                       |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Editing instructions describing the desired transformation.

**Property (type: array; required)**

Array of image URLs to edit or combine.

**Property (type: string)**

Output image dimensions in format "width\*height".

**Property (type: boolean)**

Enable content safety checking.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/seedream-v4-edit/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "Dress the model in the clothes and hat",
      "images": [
        "https://example.com/model-photo.jpg",
        "https://example.com/clothes.jpg"
      ],
      "size": "1024*1024",
      "enable_safety_checker": true
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/seedream-v4-edit/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "Dress the model in the clothes and hat",
            "images": [
                "https://example.com/model-photo.jpg",
                "https://example.com/clothes.jpg",
            ],
            "size": "1024*1024",
            "enable_safety_checker": True,
        }
    },
)

result = response.json()
print(result["output"]["image_url"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/seedream-v4-edit/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "Dress the model in the clothes and hat",
        images: [
          "https://example.com/model-photo.jpg",
          "https://example.com/clothes.jpg",
        ],
        size: "1024*1024",
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
  "delayTime": 19,
  "executionTime": 4856,
  "workerId": "oqk7ao1uomckye",
  "output": {
    "image_url": "https://image.runpod.ai/abc123/output.png",
    "cost": 0.028311
  }
}
```

```json 400
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "FAILED",
  "error": "Invalid image URL in images array"
}
```

> **Warning**
>
> Image URLs expire after 7 days. Download and store edited images immediately if you need to keep them.

## Cost calculation

Seedream 4.0 Edit charges $0.027 per image edited.
