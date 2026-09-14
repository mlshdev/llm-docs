> Commit-pinned source for Runpod main: [public-endpoints/models/kling-video-o1-r2v.mdx](https://docs.runpod.io/public-endpoints/models/kling-video-o1-r2v)

# Kling Video O1 R2V

Creative video generation using character, prop, or scene references from multiple viewpoints. See model inputs and outputs on Runpod Public Endpoints.

Kling Video O1 R2V generates creative videos using character, prop, or scene references from multiple viewpoints. It can combine multiple reference images to create coherent video content.

- [Try in playground](https://console.runpod.io/hub/playground/video/kling-video-o1-r2v)

  Test Kling Video O1 R2V in the Runpod Hub playground.

|              |                                                       |
| ------------ | ----------------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/kling-video-o1-r2v/runsync` |
| **Pricing**  | $0.112 per second                                     |
| **Type**     | Video generation                                      |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Text description of the desired video action.

**Property (type: array; required)**

Array of 1-10 reference image URLs.

**Property (type: string)**

Optional reference video URL.

**Property (type: string)**

Elements to exclude from the generated video.

**Property (type: string)**

Aspect ratio. Options: `16:9`, `9:16`, `1:1`.

**Property (type: integer)**

Video duration in seconds. Options: 3-10 seconds.

**Property (type: integer)**

Seed for reproducible results. Set to -1 for random.

**Property (type: boolean)**

Automatically expand and enhance the prompt.

**Property (type: boolean)**

Enable content safety checking.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/kling-video-o1-r2v/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "The robot is dancing with the teddy bear",
      "images": [
        "https://example.com/robot.png",
        "https://example.com/teddy-bear.png"
      ],
      "aspect_ratio": "16:9",
      "duration": 5,
      "seed": -1
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/kling-video-o1-r2v/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "The robot is dancing with the teddy bear",
            "images": [
                "https://example.com/robot.png",
                "https://example.com/teddy-bear.png",
            ],
            "aspect_ratio": "16:9",
            "duration": 5,
            "seed": -1,
        }
    },
)

result = response.json()
print(result["output"]["video_url"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/kling-video-o1-r2v/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "The robot is dancing with the teddy bear",
        images: [
          "https://example.com/robot.png",
          "https://example.com/teddy-bear.png",
        ],
        aspect_ratio: "16:9",
        duration: 5,
        seed: -1,
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
  "delayTime": 30,
  "executionTime": 75432,
  "output": {
    "video_url": "https://video.runpod.ai/abc123/output.mp4",
    "cost": 0.56
  }
}
```

> **Warning**
>
> Video URLs expire after 7 days. Download and store generated videos immediately if you need to keep them.

## Cost calculation

Kling Video O1 R2V charges $0.112 per second of video:

| Duration   | Cost   |
| ---------- | ------ |
| 3 seconds  | $0.336 |
| 5 seconds  | $0.56  |
| 10 seconds | $1.12  |
