> Pinned source for Runpod main: [public-endpoints/models/p-video.mdx](https://github.com/runpod/docs/blob/361c96910f23cbab97220f94f7a751b12e4b09ea/public-endpoints/models/p-video.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/p-video

# Pruna Video

Premium AI video generation from text, images, and audio with fast generation times. See model inputs and outputs on Runpod Public Endpoints.

Pruna Video is a premium AI video generation model that creates videos from text prompts, images, or audio in under 10 seconds. It supports multiple resolutions up to 1080p, various aspect ratios, and optional audio conditioning for synchronized video generation.

- [Try in playground](https://console.runpod.io/hub/playground/video/p-video)

  Test Pruna Video in the Runpod Hub playground.

|              |                                            |
| ------------ | ------------------------------------------ |
| **Endpoint** | `https://api.runpod.ai/v2/p-video/runsync` |
| **Pricing**  | $0.02/s (720p), $0.04/s (1080p)            |
| **Type**     | Video generation                           |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Text description of the desired video content.

**Property (type: string)**

URL of an input image for image-to-video generation. Supports jpg, jpeg, png, webp. When provided, `aspect_ratio` is ignored.

**Property (type: string)**

URL of an audio file for audio-conditioned generation. Supports flac, mp3, wav. When provided, `duration` is ignored and the video matches audio length.

**Property (type: integer)**

Video duration in seconds (1-10). Ignored when audio is provided.

**Property (type: string)**

Video resolution. Options: `720p`, `1080p`.

**Property (type: integer)**

Frames per second. Options: `24`, `48`.

**Property (type: string)**

Output aspect ratio. Options: `16:9`, `9:16`, `4:3`, `3:4`, `3:2`, `2:3`, `1:1`. Ignored when image is provided.

**Property (type: integer)**

Seed for reproducible generation.

**Property (type: boolean)**

Enable draft mode for faster, lower-quality preview. Reduces cost by 75%.

**Property (type: boolean)**

Include audio in the output video.

**Property (type: boolean)**

Automatically enhance the prompt for better results.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/p-video/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "A timelapse of clouds moving over a mountain range at sunset",
      "duration": 5,
      "resolution": "720p",
      "aspect_ratio": "16:9"
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/p-video/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "A timelapse of clouds moving over a mountain range at sunset",
            "duration": 5,
            "resolution": "720p",
            "aspect_ratio": "16:9",
        }
    },
)

result = response.json()
print(result["output"]["video_url"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/p-video/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "A timelapse of clouds moving over a mountain range at sunset",
        duration: 5,
        resolution: "720p",
        aspect_ratio: "16:9",
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
  "delayTime": 15,
  "executionTime": 8542,
  "output": {
    "video_url": "https://video.runpod.ai/abc123/output.mp4",
    "cost": 0.10
  }
}
```

```json 400
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "FAILED",
  "error": "Invalid audio format"
}
```

> **Warning**
>
> Video URLs expire after 7 days. Download and store generated videos immediately if you need to keep them.

## Cost calculation

Pruna Video pricing varies by resolution and draft mode:

| Resolution | Standard         | Draft mode        |
| ---------- | ---------------- | ----------------- |
| 720p       | $0.02 per second | $0.005 per second |
| 1080p      | $0.04 per second | $0.01 per second  |

Example costs (standard mode):

| Resolution | 5 seconds | 10 seconds |
| ---------- | --------- | ---------- |
| 720p       | $0.10     | $0.20      |
| 1080p      | $0.20     | $0.40      |
