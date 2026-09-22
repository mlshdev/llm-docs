> Pinned source for Runpod main: [public-endpoints/models/kling-v2-1.mdx](https://github.com/runpod/docs/blob/4962c60abcb8d9bf359d92ccc07644abd5d8e610/public-endpoints/models/kling-v2-1.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/kling-v2-1

# Kling v2.1 I2V Pro

Professional-grade image-to-video with enhanced visual fidelity. Review inputs and output formats for this model on Runpod Public Endpoints.

Kling v2.1 I2V Pro is a professional-grade image-to-video model with enhanced visual fidelity. It generates high-quality videos from static images with smooth motion and excellent detail preservation.

- [Try in playground](https://console.runpod.io/hub/playground/video/kling-v2-1-i2v-pro)

  Test Kling v2.1 I2V Pro in the Runpod Hub playground.

|              |                                                       |
| ------------ | ----------------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/kling-v2-1-i2v-pro/runsync` |
| **Pricing**  | $0.45 per 5 seconds                                   |
| **Type**     | Video generation                                      |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Text description of the desired video motion and content.

**Property (type: string; required)**

URL of the source image to animate.

**Property (type: string)**

Elements to exclude from the video.

**Property (type: float)**

How closely to follow the prompt.

**Property (type: integer)**

Video duration in seconds.

**Property (type: boolean)**

Enable content safety checking.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/kling-v2-1-i2v-pro/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "A majestic magic dragon breathing fire over an ancient castle",
      "image": "https://example.com/dragon.png",
      "negative_prompt": "",
      "guidance_scale": 0.5,
      "duration": 5,
      "enable_safety_checker": true
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/kling-v2-1-i2v-pro/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "A majestic magic dragon breathing fire over an ancient castle",
            "image": "https://example.com/dragon.png",
            "negative_prompt": "",
            "guidance_scale": 0.5,
            "duration": 5,
            "enable_safety_checker": True,
        }
    },
)

result = response.json()
print(result["output"]["video_url"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/kling-v2-1-i2v-pro/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "A majestic magic dragon breathing fire over an ancient castle",
        image: "https://example.com/dragon.png",
        negative_prompt: "",
        guidance_scale: 0.5,
        duration: 5,
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
  "delayTime": 30,
  "executionTime": 67890,
  "workerId": "oqk7ao1uomckye",
  "output": {
    "video_url": "https://video.runpod.ai/abc123/output.mp4",
    "cost": 0.36
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

Kling v2.1 I2V Pro pricing:

| Duration   | Cost  |
| ---------- | ----- |
| 5 seconds  | $0.45 |
| 10 seconds | $0.90 |
