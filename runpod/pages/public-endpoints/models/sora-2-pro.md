> Pinned source for Runpod main: [public-endpoints/models/sora-2-pro.mdx](https://github.com/runpod/docs/blob/ceb79977df03b21e40ceaec3fdea8c9869897b7e/public-endpoints/models/sora-2-pro.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/sora-2-pro

# SORA 2 Pro I2V

OpenAI's Sora 2 Pro professional-grade video and audio generation model. Explore this model's inputs and outputs on Runpod Public Endpoints.

SORA 2 Pro I2V is OpenAI's professional-grade video and audio generation model. It produces higher quality output than the standard SORA 2, with enhanced visual fidelity and more nuanced audio generation.

- [Try in playground](https://console.runpod.io/hub/playground/video/sora-2-pro-i2v)

  Test SORA 2 Pro I2V in the Runpod Hub playground.

|              |                                                   |
| ------------ | ------------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/sora-2-pro-i2v/runsync` |
| **Pricing**  | $1.20–$6.00 per video                             |
| **Type**     | Video generation                                  |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Text description of the desired video, including action, ambient sound, and character dialogue.

**Property (type: string; required)**

URL of the source image to animate.

**Property (type: string)**

Output video resolution.

**Property (type: integer; required)**

Video duration in seconds. Valid options: 4, 8, or 12.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/sora-2-pro-i2v/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "Action: She opened her hands. Ambient Sound: The soft crackling of the dying fire, a happy ding from the timer. Character Dialogue: (Voice is high-pitched, bubbly) Welcome to my bakery!",
      "image": "https://example.com/baker.jpeg",
      "size": "720p",
      "duration": 4
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/sora-2-pro-i2v/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "Action: She opened her hands. Ambient Sound: The soft crackling of the dying fire, a happy ding from the timer. Character Dialogue: (Voice is high-pitched, bubbly) Welcome to my bakery!",
            "image": "https://example.com/baker.jpeg",
            "size": "720p",
            "duration": 4,
        }
    },
)

result = response.json()
print(result["output"]["video_url"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/sora-2-pro-i2v/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "Action: She opened her hands. Ambient Sound: The soft crackling of the dying fire, a happy ding from the timer. Character Dialogue: (Voice is high-pitched, bubbly) Welcome to my bakery!",
        image: "https://example.com/baker.jpeg",
        size: "720p",
        duration: 4,
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
  "delayTime": 42,
  "executionTime": 185432,
  "workerId": "oqk7ao1uomckye",
  "output": {
    "video_url": "https://video.runpod.ai/abc123/output.mp4",
    "cost": 1.20
  }
}
```

```json 400
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "FAILED",
  "error": "Invalid duration: must be 4, 8, or 12 seconds"
}
```

> **Warning**
>
> Video URLs expire after 7 days. Download and store generated videos immediately if you need to keep them.

## Prompt structure

For best results, structure your prompt with these components:

- **Action**: Describe what happens in the scene
- **Ambient Sound**: Describe background audio
- **Character Dialogue**: Include spoken lines with voice descriptions

## Cost calculation

SORA 2 Pro I2V pricing varies by resolution and duration:

| Resolution | 4 seconds | 8 seconds | 12 seconds |
| ---------- | --------- | --------- | ---------- |
| 720p       | $1.20     | $2.40     | $3.60      |
| 1080p      | $2.00     | $4.00     | $6.00      |
