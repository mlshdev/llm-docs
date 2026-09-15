> Pinned source for Runpod main: [public-endpoints/models/wan-2-2-i2v.mdx](https://github.com/runpod/docs/blob/ceb79977df03b21e40ceaec3fdea8c9869897b7e/public-endpoints/models/wan-2-2-i2v.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/wan-2-2-i2v

# WAN 2.2 I2V 720p

Open-source image-to-video generation using diffusion transformer architecture. See model inputs and outputs on Runpod Public Endpoints.

WAN 2.2 I2V 720p is an open-source AI video generation model that uses a diffusion transformer architecture for image-to-video generation. It creates smooth, high-quality 720p video content from static images.

- [Try in playground](https://console.runpod.io/hub/playground/video/wan-2-2-i2v-720)

  Test WAN 2.2 I2V 720p in the Runpod Hub playground.

|              |                                                    |
| ------------ | -------------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/wan-2-2-i2v-720/runsync` |
| **Pricing**  | $0.30–$0.90 per video                              |
| **Type**     | Video generation                                   |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Text description of the desired video motion and content.

**Property (type: string; required)**

URL of the input image to animate.

**Property (type: string)**

Elements to exclude from the generated video.

**Property (type: string)**

Video resolution in format "width\*height".

**Property (type: integer)**

Number of denoising steps. Range: 1-50.

**Property (type: float)**

How closely to follow the prompt. Range: 0.0-10.0.

**Property (type: integer)**

Video duration in seconds.

**Property (type: integer)**

Controls the motion flow in the generated video.

**Property (type: integer)**

Seed for reproducible results. Set to -1 for random.

**Property (type: boolean)**

Whether to automatically optimize the prompt.

**Property (type: boolean)**

Whether to run safety checks on the output.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/wan-2-2-i2v-720/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "cinematic shot: slow-tracking camera glides parallel to a giant white origami boat drifting down a jade-green river",
      "image": "https://example.com/origami-boat.png",
      "num_inference_steps": 30,
      "guidance": 5,
      "negative_prompt": "",
      "size": "1280*720",
      "duration": 5,
      "flow_shift": 5,
      "seed": -1,
      "enable_prompt_optimization": false,
      "enable_safety_checker": true
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/wan-2-2-i2v-720/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "cinematic shot: slow-tracking camera glides parallel to a giant white origami boat drifting down a jade-green river",
            "image": "https://example.com/origami-boat.png",
            "num_inference_steps": 30,
            "guidance": 5,
            "negative_prompt": "",
            "size": "1280*720",
            "duration": 5,
            "flow_shift": 5,
            "seed": -1,
            "enable_prompt_optimization": False,
            "enable_safety_checker": True,
        }
    },
)

result = response.json()
print(result["output"]["video_url"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/wan-2-2-i2v-720/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "cinematic shot: slow-tracking camera glides parallel to a giant white origami boat drifting down a jade-green river",
        image: "https://example.com/origami-boat.png",
        num_inference_steps: 30,
        guidance: 5,
        negative_prompt: "",
        size: "1280*720",
        duration: 5,
        flow_shift: 5,
        seed: -1,
        enable_prompt_optimization: false,
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
  "delayTime": 24,
  "executionTime": 67543,
  "workerId": "oqk7ao1uomckye",
  "output": {
    "video_url": "https://video.runpod.ai/abc123/output.mp4",
    "cost": 0.30
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

WAN 2.2 I2V 720p pricing:

| Duration   | Cost  |
| ---------- | ----- |
| 5 seconds  | $0.30 |
| 8 seconds  | $0.48 |
| 10 seconds | $0.60 |
| 15 seconds | $0.90 |
