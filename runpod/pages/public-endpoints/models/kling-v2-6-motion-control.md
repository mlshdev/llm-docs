> Pinned source for Runpod main: [public-endpoints/models/kling-v2-6-motion-control.mdx](https://github.com/runpod/docs/blob/361c96910f23cbab97220f94f7a751b12e4b09ea/public-endpoints/models/kling-v2-6-motion-control.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/kling-v2-6-motion-control

# Kling v2.6 Motion Control

Transfer motion from reference videos to animate still images. Review inputs and output formats for this model on Runpod Public Endpoints.

Kling v2.6 Standard Motion Control transfers motion from reference videos to animate still images. Upload a character image and a motion clip, and the model extracts the movement to generate smooth video output.

- [Try in playground](https://console.runpod.io/hub/playground/video/kling-v2-6-std-motion-control)

  Test Kling v2.6 Motion Control in the Runpod Hub playground.

|              |                                                                  |
| ------------ | ---------------------------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/kling-v2-6-std-motion-control/runsync` |
| **Pricing**  | $0.21–$0.63+ per video                                           |
| **Type**     | Video generation                                                 |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

URL of the character image to animate.

**Property (type: string; required)**

URL of the reference video containing the motion to transfer.

**Property (type: string; required)**

Source of character orientation. Options: `video`, `image`.

**Property (type: string)**

Text description of the desired motion.

**Property (type: string)**

Elements to exclude from the generated video.

**Property (type: boolean)**

Whether to preserve audio from the reference video.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/kling-v2-6-std-motion-control/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "image": "https://example.com/character.png",
      "video": "https://example.com/dance-motion.mp4",
      "character_orientation": "video",
      "prompt": "Make the character follow the dance movements",
      "keep_original_sound": true
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/kling-v2-6-std-motion-control/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "image": "https://example.com/character.png",
            "video": "https://example.com/dance-motion.mp4",
            "character_orientation": "video",
            "prompt": "Make the character follow the dance movements",
            "keep_original_sound": True,
        }
    },
)

result = response.json()
print(result["output"]["video_url"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/kling-v2-6-std-motion-control/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        image: "https://example.com/character.png",
        video: "https://example.com/dance-motion.mp4",
        character_orientation: "video",
        prompt: "Make the character follow the dance movements",
        keep_original_sound: true,
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
  "delayTime": 25,
  "executionTime": 45678,
  "output": {
    "video_url": "https://video.runpod.ai/abc123/output.mp4",
    "cost": 0.42
  }
}
```

> **Warning**
>
> Video URLs expire after 7 days. Download and store generated videos immediately if you need to keep them.

## Cost calculation

Kling v2.6 Motion Control pricing by duration:

| Duration    | Cost  |
| ----------- | ----- |
| 1-3 seconds | $0.21 |
| 4-6 seconds | $0.42 |
| 7-9 seconds | $0.63 |
