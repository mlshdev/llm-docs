> Pinned source for Runpod main: [public-endpoints/models/sora-2.mdx](https://github.com/runpod/docs/blob/361c96910f23cbab97220f94f7a751b12e4b09ea/public-endpoints/models/sora-2.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/sora-2

# SORA 2 I2V

OpenAI's Sora 2 video and audio generation model. Review model inputs, output formats, and request guidance for Runpod Public Endpoints.

SORA 2 I2V is OpenAI's video and audio generation model that creates dynamic videos from static images. It excels at generating videos with complex actions, ambient sounds, and character dialogue based on detailed text prompts.

- [Try in playground](https://console.runpod.io/hub/playground/video/sora-2-i2v)

  Test SORA 2 I2V in the Runpod Hub playground.

|              |                                               |
| ------------ | --------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/sora-2-i2v/runsync` |
| **Pricing**  | $0.40–$1.20 per video                         |
| **Type**     | Video generation                              |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Text description of the desired video, including action, ambient sound, and character dialogue.

**Property (type: string; required)**

URL of the source image to animate.

**Property (type: integer; required)**

Video duration in seconds. Valid options: 4, 8, or 12.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/sora-2-i2v/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "Action: The mech slowly pushes itself up with a damaged mechanical arm, sparks flying. Ambient Sound: Distant explosions, electrical sizzle. Character Dialogue: (Processed mechanical voice) No retreat.",
      "image": "https://example.com/mech.jpeg",
      "duration": 4
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/sora-2-i2v/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "Action: The mech slowly pushes itself up with a damaged mechanical arm, sparks flying. Ambient Sound: Distant explosions, electrical sizzle. Character Dialogue: (Processed mechanical voice) No retreat.",
            "image": "https://example.com/mech.jpeg",
            "duration": 4,
        }
    },
)

result = response.json()
print(result["output"]["video_url"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/sora-2-i2v/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "Action: The mech slowly pushes itself up with a damaged mechanical arm, sparks flying. Ambient Sound: Distant explosions, electrical sizzle. Character Dialogue: (Processed mechanical voice) No retreat.",
        image: "https://example.com/mech.jpeg",
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
  "delayTime": 35,
  "executionTime": 120345,
  "workerId": "oqk7ao1uomckye",
  "output": {
    "video_url": "https://video.runpod.ai/abc123/output.mp4",
    "cost": 0.40
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

SORA 2 I2V pricing varies by duration:

| Duration   | Cost  |
| ---------- | ----- |
| 4 seconds  | $0.40 |
| 8 seconds  | $0.80 |
| 12 seconds | $1.20 |
