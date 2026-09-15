> Pinned source for Runpod main: [public-endpoints/models/wan-2-5.mdx](https://github.com/runpod/docs/blob/ceb79977df03b21e40ceaec3fdea8c9869897b7e/public-endpoints/models/wan-2-5.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/wan-2-5

# WAN 2.5

Image-to-video generation model with prompt expansion support. Review inputs and output formats for this model on Runpod Public Endpoints.

WAN 2.5 is Alibaba's image-to-video generation model that creates videos from static images. It features optional prompt expansion to automatically enhance your prompts for better results.

- [Try in playground](https://console.runpod.io/hub/playground/video/wan-2-5)

  Test WAN 2.5 in the Runpod Hub playground.

|              |                                            |
| ------------ | ------------------------------------------ |
| **Endpoint** | `https://api.runpod.ai/v2/wan-2-5/runsync` |
| **Pricing**  | $0.25–$1.50 per video                      |
| **Type**     | Video generation                           |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Text description of the desired video.

**Property (type: string; required)**

URL of the source image to animate.

**Property (type: string)**

Elements to exclude from the video.

**Property (type: string)**

Video dimensions in format "width\*height".

**Property (type: integer)**

Video duration in seconds.

**Property (type: integer)**

Seed for reproducible results. Set to -1 for random.

**Property (type: boolean)**

Automatically expand and enhance the prompt.

**Property (type: boolean)**

Enable content safety checking.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/wan-2-5/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "A stand-up comedian delivering a dad joke",
      "image": "https://example.com/comedian.png",
      "negative_prompt": "",
      "size": "1280*720",
      "duration": 5,
      "seed": -1,
      "enable_prompt_expansion": false,
      "enable_safety_checker": true
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/wan-2-5/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "A stand-up comedian delivering a dad joke",
            "image": "https://example.com/comedian.png",
            "negative_prompt": "",
            "size": "1280*720",
            "duration": 5,
            "seed": -1,
            "enable_prompt_expansion": False,
            "enable_safety_checker": True,
        }
    },
)

result = response.json()
print(result["output"]["video_url"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/wan-2-5/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "A stand-up comedian delivering a dad joke",
        image: "https://example.com/comedian.png",
        negative_prompt: "",
        size: "1280*720",
        duration: 5,
        seed: -1,
        enable_prompt_expansion: false,
        enable_safety_checker: true,
      },
    }),
  }
);

const result = await response.json();
console.log(result.output.video_url);
```

## Response

**id (type: string)**

Unique identifier for the request.

**status (type: string)**

Request status. Returns `COMPLETED` on success, `FAILED` on error.

**delayTime (type: integer)**

Time in milliseconds the request spent in queue before processing began.

**executionTime (type: integer)**

Time in milliseconds the model took to generate the video.

**workerId (type: string)**

Identifier of the worker that processed the request.

**output (type: object)**

The generation result containing the video URL and cost.

**output.video\_url (type: string)**

URL of the generated video. This URL expires after 7 days.

**output.cost (type: float)**

Cost of the generation in USD.

```json 200
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "COMPLETED",
  "delayTime": 27,
  "executionTime": 78901,
  "workerId": "oqk7ao1uomckye",
  "output": {
    "video_url": "https://video.runpod.ai/abc123/output.mp4",
    "cost": 0.50
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
> Video URLs expire after 7 days. Download and store generated videos immediately if you need to keep them.

## Cost calculation

WAN 2.5 pricing varies by resolution and duration:

| Resolution | 5 seconds | 10 seconds |
| ---------- | --------- | ---------- |
| 480p       | $0.25     | $0.50      |
| 720p       | $0.50     | $1.00      |
| 1080p      | $0.75     | $1.50      |
