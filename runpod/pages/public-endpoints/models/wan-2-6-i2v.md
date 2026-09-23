> Pinned source for Runpod main: [public-endpoints/models/wan-2-6-i2v.mdx](https://github.com/runpod/docs/blob/6bedc9afe6be9f0bfbbaa77c2ee91f08714e0dec/public-endpoints/models/wan-2-6-i2v.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/wan-2-6-i2v

# WAN 2.6 I2V

Image-to-video generation with audio support and resolutions up to 1080p. Explore this model's inputs and outputs on Runpod Public Endpoints.

WAN 2.6 Image-to-Video transforms static images into dynamic videos with support for audio integration, multiple resolutions up to 1080p, and durations up to 15 seconds. It features optional prompt expansion and multi-shot composition modes.

- [Try in playground](https://console.runpod.io/hub/playground/video/wan-2-6-i2v)

  Test WAN 2.6 I2V in the Runpod Hub playground.

|              |                                                |
| ------------ | ---------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/wan-2-6-i2v/runsync` |
| **Pricing**  | $0.10/s (720p), $0.15/s (1080p)                |
| **Type**     | Video generation                               |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Text description of the desired video motion and content.

**Property (type: string; required)**

URL of the source image to animate.

**Property (type: string)**

URL of an audio file to include in the video.

**Property (type: string)**

Elements to exclude from the generated video.

**Property (type: string)**

Video resolution. Options: `1280*720`, `1920*1080`.

**Property (type: integer)**

Video duration in seconds. Options: `5`, `10`, `15`.

**Property (type: string)**

Shot composition mode. Options: `single`, `multi`.

**Property (type: integer)**

Seed for reproducible results. Set to -1 for random.

**Property (type: boolean)**

Automatically expand and enhance the prompt.

**Property (type: boolean)**

Enable content safety checking.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/wan-2-6-i2v/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "A person walking through a sunny park, leaves gently swaying",
      "image": "https://example.com/person-park.jpg",
      "size": "1280*720",
      "duration": 5,
      "shot_type": "single",
      "seed": -1,
      "enable_prompt_expansion": false
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/wan-2-6-i2v/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "A person walking through a sunny park, leaves gently swaying",
            "image": "https://example.com/person-park.jpg",
            "size": "1280*720",
            "duration": 5,
            "shot_type": "single",
            "seed": -1,
            "enable_prompt_expansion": False,
        }
    },
)

result = response.json()
print(result["output"]["video_url"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/wan-2-6-i2v/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "A person walking through a sunny park, leaves gently swaying",
        image: "https://example.com/person-park.jpg",
        size: "1280*720",
        duration: 5,
        shot_type: "single",
        seed: -1,
        enable_prompt_expansion: false,
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
  "delayTime": 28,
  "executionTime": 95432,
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

WAN 2.6 I2V pricing varies by resolution:

| Resolution        | Rate             |
| ----------------- | ---------------- |
| 720p (1280x720)   | $0.10 per second |
| 1080p (1920x1080) | $0.15 per second |

Example costs:

| Resolution | 5 seconds | 10 seconds | 15 seconds |
| ---------- | --------- | ---------- | ---------- |
| 720p       | $0.50     | $1.00      | $1.50      |
| 1080p      | $0.75     | $1.50      | $2.25      |
