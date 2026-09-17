> Pinned source for Runpod main: [public-endpoints/models/vidu-q3-i2v.mdx](https://github.com/runpod/docs/blob/fa4985146919262a6e9cdb946c50eec1ed81ffc9/public-endpoints/models/vidu-q3-i2v.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/vidu-q3-i2v

# Vidu Q3 I2V

Animate reference images into videos with text-driven motion and optional audio generation. See model inputs and outputs on Runpod Public Endpoints.

Vidu Q3 Image-to-Video animates a reference image into a video with motion driven by a text prompt. It supports multiple resolutions up to 1080p, adjustable duration up to 16 seconds, and optional synchronized audio generation with background music.

- [Try in playground](https://console.runpod.io/hub/playground/video/vidu-q3-i2v)

  Test Vidu Q3 I2V in the Runpod Hub playground.

|              |                                                |
| ------------ | ---------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/vidu-q3-i2v/runsync` |
| **Pricing**  | $0.15 per second                               |
| **Type**     | Video generation                               |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

URL of the reference image to animate.

**Property (type: string; required)**

Text description of the desired motion and action.

**Property (type: string)**

Output video resolution. Options: `540p`, `720p`, `1080p`.

**Property (type: integer)**

Video length in seconds (1-16).

**Property (type: string)**

Motion intensity control. Options: `auto`, `small`, `medium`, `large`.

**Property (type: boolean)**

Enable synchronized audio generation.

**Property (type: boolean)**

Enable background music.

**Property (type: integer)**

Random seed for reproducibility. Set to -1 for random.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/vidu-q3-i2v/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "image": "https://example.com/portrait.jpg",
      "prompt": "Person turns head slowly and smiles at camera",
      "resolution": "720p",
      "duration": 5,
      "movement_amplitude": "medium",
      "generate_audio": true,
      "bgm": true,
      "seed": -1
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/vidu-q3-i2v/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "image": "https://example.com/portrait.jpg",
            "prompt": "Person turns head slowly and smiles at camera",
            "resolution": "720p",
            "duration": 5,
            "movement_amplitude": "medium",
            "generate_audio": True,
            "bgm": True,
            "seed": -1,
        }
    },
)

result = response.json()
print(result["output"]["video_url"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/vidu-q3-i2v/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        image: "https://example.com/portrait.jpg",
        prompt: "Person turns head slowly and smiles at camera",
        resolution: "720p",
        duration: 5,
        movement_amplitude: "medium",
        generate_audio: true,
        bgm: true,
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
  "delayTime": 32,
  "executionTime": 45678,
  "output": {
    "video_url": "https://video.runpod.ai/abc123/output.mp4",
    "cost": 0.75
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

Vidu Q3 I2V charges $0.15 per second of video generated.

| Duration   | Cost  |
| ---------- | ----- |
| 5 seconds  | $0.75 |
| 10 seconds | $1.50 |
| 16 seconds | $2.40 |
