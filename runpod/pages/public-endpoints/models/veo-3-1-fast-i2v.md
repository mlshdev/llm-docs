> Pinned source for Runpod main: [public-endpoints/models/veo-3-1-fast-i2v.mdx](https://github.com/runpod/docs/blob/1d195e36bae30bf7ccc6543bce79500dea0e259c/public-endpoints/models/veo-3-1-fast-i2v.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/veo-3-1-fast-i2v

# Veo 3.1 Fast I2V

Animate a reference image into video at up to 4K with optional audio, using Google Veo 3.1 Fast on Runpod Public Endpoints.

Veo 3.1 Fast is Google's image-to-video model. It animates a reference image, guided by a text prompt, into a 4, 6, or 8 second video at up to 4K resolution, with optional synchronized audio.

- [Try in playground](https://console.runpod.io/hub/playground/video/google-veo3-1-fast-i2v)

  Test Veo 3.1 Fast I2V in the Runpod Hub playground.

|              |                                                           |
| ------------ | --------------------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/google-veo3-1-fast-i2v/runsync` |
| **Pricing**  | $0.15/s with audio, $0.10/s without audio                 |
| **Type**     | Video generation                                          |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

URL of the input image to animate.

**Property (type: string; required)**

Text describing the desired motion and scene.

**Property (type: string)**

URL of an optional final frame for the video to end on.

**Property (type: string)**

Video aspect ratio. Options: `16:9`, `9:16`.

**Property (type: integer)**

Video duration in seconds. Options: `4`, `6`, `8`.

**Property (type: string)**

Output resolution. Options: `720p`, `1080p`, `4k`.

**Property (type: boolean)**

Generate synchronized audio with the video.

**Property (type: string)**

Elements to exclude from the output.

**Property (type: integer)**

Seed for reproducible generation.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/google-veo3-1-fast-i2v/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "image": "https://image.runpod.ai/assets/google/veo3-1-fast-i2v.png",
      "prompt": "A singer in a silver gown performs under a soft spotlight as the camera pans from a close-up to a wide shot of the stage.",
      "duration": 6,
      "resolution": "720p",
      "generate_audio": true
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/google-veo3-1-fast-i2v/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "image": "https://image.runpod.ai/assets/google/veo3-1-fast-i2v.png",
            "prompt": "A singer in a silver gown performs under a soft spotlight as the camera pans from a close-up to a wide shot of the stage.",
            "duration": 6,
            "resolution": "720p",
            "generate_audio": True,
        }
    },
)

result = response.json()
print(result["output"]["result"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/google-veo3-1-fast-i2v/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        image: "https://image.runpod.ai/assets/google/veo3-1-fast-i2v.png",
        prompt: "A singer in a silver gown performs under a soft spotlight as the camera pans from a close-up to a wide shot of the stage.",
        duration: 6,
        resolution: "720p",
        generate_audio: true,
      },
    }),
  }
);

const result = await response.json();
console.log(result.output.result);
```

Video generation can take longer than a synchronous request waits. If `/runsync` returns a status of `IN_PROGRESS` or `IN_QUEUE`, poll `/status` with the returned job ID, or submit with `/run` from the start. See [Make API requests](https://docs.runpod.io/public-endpoints/requests).

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

**output.result (type: string)**

URL of the generated video. This URL expires after 7 days.

**output.cost (type: float)**

Cost of the generation in USD.

```json 200
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "COMPLETED",
  "delayTime": 15,
  "executionTime": 85420,
  "output": {
    "result": "https://video.runpod.ai/abc123/output.mp4",
    "cost": 0.90
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

Veo 3.1 Fast I2V charges per second of video, and the rate depends on whether you generate audio:

| Duration  | With audio ($0.15/s) | Without audio ($0.10/s) |
| --------- | -------------------- | ----------------------- |
| 4 seconds | $0.60                | $0.40                   |
| 6 seconds | $0.90                | $0.60                   |
| 8 seconds | $1.20                | $0.80                   |
