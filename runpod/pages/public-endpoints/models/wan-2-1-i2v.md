> Pinned source for Runpod main: [public-endpoints/models/wan-2-1-i2v.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/public-endpoints/models/wan-2-1-i2v.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/wan-2-1-i2v

# WAN 2.1 I2V 720p

Open-source image-to-video generation that converts static images into 720p videos. See model inputs and outputs on Runpod Public Endpoints.

WAN 2.1 I2V 720p is an open-source image-to-video generation model that converts static images into 720p videos. It uses a diffusion transformer architecture to create smooth, natural motion from still images.

- [Try in playground](https://console.runpod.io/hub/playground/video/wan-2-1-i2v-720)

  Test WAN 2.1 I2V 720p in the Runpod Hub playground.

|              |                                                    |
| ------------ | -------------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/wan-2-1-i2v-720/runsync` |
| **Pricing**  | $0.30 per 5 seconds of video                       |
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
curl -X POST "https://api.runpod.ai/v2/wan-2-1-i2v-720/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "The family of three just took a selfie. They lean in together, smiling and relaxed. The daughter holds the phone and shows the screen",
      "image": "https://example.com/family-photo.png",
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
    "https://api.runpod.ai/v2/wan-2-1-i2v-720/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "The family of three just took a selfie. They lean in together, smiling and relaxed. The daughter holds the phone and shows the screen",
            "image": "https://example.com/family-photo.png",
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
  "https://api.runpod.ai/v2/wan-2-1-i2v-720/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "The family of three just took a selfie. They lean in together, smiling and relaxed. The daughter holds the phone and shows the screen",
        image: "https://example.com/family-photo.png",
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
  "delayTime": 22,
  "executionTime": 65432,
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

WAN 2.1 I2V 720p charges $0.30 per 5 seconds of video. Example costs:

| Duration   | Cost  |
| ---------- | ----- |
| 5 seconds  | $0.30 |
| 10 seconds | $0.60 |
| 15 seconds | $0.90 |
