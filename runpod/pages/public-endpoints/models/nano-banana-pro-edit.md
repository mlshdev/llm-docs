> Commit-pinned source for Runpod main: [public-endpoints/models/nano-banana-pro-edit.mdx](https://docs.runpod.io/public-endpoints/models/nano-banana-pro-edit)

# Nano Banana Pro Edit

Google's advanced image editing model with support for up to 14 reference images and multiple resolutions.

Nano Banana Pro Edit is Google's advanced image editing model that excels at combining multiple source images into a cohesive output. It supports up to 14 reference images and offers multiple resolution options for flexible output quality.

- [Try in playground](https://console.runpod.io/hub/playground/image/nano-banana-pro-edit)

  Test Nano Banana Pro Edit in the Runpod Hub playground.

|              |                                                         |
| ------------ | ------------------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/nano-banana-pro-edit/runsync` |
| **Pricing**  | $0.14–$0.24 per image                                   |
| **Type**     | Image editing                                           |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Editing instructions describing the desired transformation or how to combine the images.

**Property (type: array; required)**

Array of image URLs to edit or combine. Supports up to 14 images.

**Property (type: string)**

Output resolution. Options: `1k`, `2k`, `4k`.

**Property (type: string)**

Output aspect ratio. Options: `1:1`, `3:2`, `2:3`, `4:3`, `4:5`, `5:4`, `9:16`, `16:9`, `21:9`.

**Property (type: string)**

Output image format. Options: `png`, `jpeg`.

**Property (type: boolean)**

Enable content safety checking.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/nano-banana-pro-edit/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "Combine these images into a cohesive scene with consistent lighting",
      "images": [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg"
      ],
      "resolution": "2k",
      "aspect_ratio": "16:9",
      "enable_safety_checker": true
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/nano-banana-pro-edit/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "Combine these images into a cohesive scene with consistent lighting",
            "images": [
                "https://example.com/image1.jpg",
                "https://example.com/image2.jpg",
                "https://example.com/image3.jpg",
            ],
            "resolution": "2k",
            "aspect_ratio": "16:9",
            "enable_safety_checker": True,
        }
    },
)

result = response.json()
print(result["output"]["image_url"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/nano-banana-pro-edit/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "Combine these images into a cohesive scene with consistent lighting",
        images: [
          "https://example.com/image1.jpg",
          "https://example.com/image2.jpg",
          "https://example.com/image3.jpg",
        ],
        resolution: "2k",
        aspect_ratio: "16:9",
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

**output (type: object)**

The generation result containing the image URL and cost.

**output.image\_url (type: string)**

URL of the edited/combined image. This URL expires after 7 days.

**output.cost (type: float)**

Cost of the generation in USD.

```json 200
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "COMPLETED",
  "delayTime": 25,
  "executionTime": 8432,
  "output": {
    "image_url": "https://image.runpod.ai/abc123/output.png",
    "cost": 0.14
  }
}
```

> **Warning**
>
> Image URLs expire after 7 days. Download and store edited images immediately if you need to keep them.

## Cost calculation

Nano Banana Pro Edit charges based on resolution:

| Resolution | Cost  |
| ---------- | ----- |
| 1k         | $0.14 |
| 2k         | $0.14 |
| 4k         | $0.24 |
