> Commit-pinned source for Runpod main: [public-endpoints/models/nano-banana-2-edit.mdx](https://docs.runpod.io/public-endpoints/models/nano-banana-2-edit)

# Nano Banana 2 Edit

Google's latest multi-image editing model with resolution options up to 4K. Explore this model's inputs and outputs on Runpod Public Endpoints.

Nano Banana 2 Edit is Google's latest image editing model for combining and editing multiple reference images. It supports up to 14 input images and offers resolution options from 1K to 4K output. For best results, use 1-3 reference images.

- [Try in playground](https://console.runpod.io/hub/playground/image/google-nano-banana-2-edit)

  Test Nano Banana 2 Edit in the Runpod Hub playground.

|              |                                                              |
| ------------ | ------------------------------------------------------------ |
| **Endpoint** | `https://api.runpod.ai/v2/google-nano-banana-2-edit/runsync` |
| **Pricing**  | $0.0875 (1K), $0.13 (2K), $0.175 (4K)                        |
| **Type**     | Image editing                                                |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: array; required)**

Array of reference image URLs to edit or combine. Supports up to 14 images, but 1-3 images is recommended for best stability.

**Property (type: string; required)**

Text description of the desired edit or how to combine the images.

**Property (type: string)**

Output resolution. Options: `1k`, `2k`, `4k`.

**Property (type: string)**

Output aspect ratio (e.g., `1:1`, `3:2`, `16:9`, `9:16`, `4:5`).

**Property (type: string)**

Output format. Options: `png`, `jpeg`.

**Property (type: boolean)**

Return result as base64 string instead of URL.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/google-nano-banana-2-edit/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "images": [
        "https://example.com/subject.jpg",
        "https://example.com/style-reference.jpg"
      ],
      "prompt": "Apply the artistic style from the second image to the subject in the first image",
      "resolution": "1k",
      "aspect_ratio": "1:1",
      "output_format": "png"
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/google-nano-banana-2-edit/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "images": [
                "https://example.com/subject.jpg",
                "https://example.com/style-reference.jpg",
            ],
            "prompt": "Apply the artistic style from the second image to the subject in the first image",
            "resolution": "1k",
            "aspect_ratio": "1:1",
            "output_format": "png",
        }
    },
)

result = response.json()
print(result["output"]["image_url"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/google-nano-banana-2-edit/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        images: [
          "https://example.com/subject.jpg",
          "https://example.com/style-reference.jpg",
        ],
        prompt: "Apply the artistic style from the second image to the subject in the first image",
        resolution: "1k",
        aspect_ratio: "1:1",
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

**delayTime (type: integer)**

Time in milliseconds the request spent in queue before processing began.

**executionTime (type: integer)**

Time in milliseconds the model took to edit the images.

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
  "delayTime": 21,
  "executionTime": 6234,
  "output": {
    "image_url": "https://image.runpod.ai/abc123/output.png",
    "cost": 0.0875
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

Nano Banana 2 Edit pricing varies by output resolution:

| Resolution | Price per image |
| ---------- | --------------- |
| 1K         | $0.0875         |
| 2K         | $0.13           |
| 4K         | $0.175          |
