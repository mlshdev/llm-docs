> Pinned source for Runpod main: [public-endpoints/models/wan-2-6-t2v.mdx](https://github.com/runpod/docs/blob/361c96910f23cbab97220f94f7a751b12e4b09ea/public-endpoints/models/wan-2-6-t2v.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/wan-2-6-t2v

# WAN 2.6 T2V

Text-to-video with cinematic quality, stable motion, and strong instruction-following. See model inputs and outputs on Runpod Public Endpoints.

WAN 2.6 Text-to-Video turns plain prompts into coherent, cinematic clips with crisp detail, stable motion, and strong instruction-following. It supports multiple resolutions and durations up to 15 seconds.

- [Try in playground](https://console.runpod.io/hub/playground/video/wan-2-6-t2v)

  Test WAN 2.6 T2V in the Runpod Hub playground.

|              |                                                |
| ------------ | ---------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/wan-2-6-t2v/runsync` |
| **Pricing**  | $0.50–$2.25 per video                          |
| **Type**     | Video generation                               |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Text description of the desired video content.

**Property (type: string)**

Elements to exclude from the generated video.

**Property (type: integer)**

Video duration in seconds. Options: `5`, `10`, `15`.

**Property (type: string)**

Video resolution. Options: `1280*720`, `1920*1080`, `720*1280`, `1080*1920`.

**Property (type: string)**

Shot composition. Options: `single`, `multi`.

**Property (type: integer)**

Seed for reproducible results. Set to -1 for random.

**Property (type: boolean)**

Automatically expand and enhance the prompt.

**Property (type: string)**

Optional audio URL to include in the video.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/wan-2-6-t2v/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "A golden retriever running through a field of sunflowers at sunset",
      "duration": 5,
      "size": "1280*720",
      "seed": -1,
      "enable_prompt_expansion": false
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/wan-2-6-t2v/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "A golden retriever running through a field of sunflowers at sunset",
            "duration": 5,
            "size": "1280*720",
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
  "https://api.runpod.ai/v2/wan-2-6-t2v/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "A golden retriever running through a field of sunflowers at sunset",
        duration: 5,
        size: "1280*720",
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
  "executionTime": 85432,
  "output": {
    "video_url": "https://video.runpod.ai/abc123/output.mp4",
    "cost": 0.50
  }
}
```

> **Warning**
>
> Video URLs expire after 7 days. Download and store generated videos immediately if you need to keep them.

## Cost calculation

WAN 2.6 T2V pricing varies by resolution and duration:

| Resolution | 5 seconds | 10 seconds | 15 seconds |
| ---------- | --------- | ---------- | ---------- |
| 720p       | $0.50     | $1.00      | $1.50      |
| 1080p      | $0.75     | $1.50      | $2.25      |
