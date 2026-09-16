> Pinned source for Runpod main: [public-endpoints/models/wan-2-2-i2v-lora.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/public-endpoints/models/wan-2-2-i2v-lora.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/wan-2-2-i2v-lora

# WAN 2.2 I2V 720p LoRA

Open-source video generation with LoRA support for customized camera movements. See model inputs and outputs on Runpod Public Endpoints.

WAN 2.2 I2V 720p LoRA is an open-source video generation model with LoRA support for customized camera movements and effects. It uses separate high-noise and low-noise LoRA configurations to achieve precise control over motion and style.

- [Try in playground](https://console.runpod.io/hub/playground/video/wan-2-2-t2v-720-lora)

  Test WAN 2.2 I2V 720p LoRA in the Runpod Hub playground.

|              |                                                         |
| ------------ | ------------------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/wan-2-2-t2v-720-lora/runsync` |
| **Pricing**  | $0.35–$0.56 per video                                   |
| **Type**     | Video generation                                        |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Text description of the desired video motion.

**Property (type: string; required)**

URL of the source image to animate.

**Property (type: array)**

LoRA configurations for high-noise denoising stages.

**Property (type: string; required)**

URL or path to the LoRA model file.

**Property (type: number; required)**

Scale factor for the LoRA influence.

**Property (type: array)**

LoRA configurations for low-noise denoising stages.

**Property (type: string; required)**

URL or path to the LoRA model file.

**Property (type: number; required)**

Scale factor for the LoRA influence.

**Property (type: integer)**

Video duration in seconds.

**Property (type: integer)**

Seed for reproducible results. Set to -1 for random.

**Property (type: boolean)**

Enable content safety checking.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/wan-2-2-t2v-720-lora/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "orbit 180 around an astronaut on the moon",
      "image": "https://example.com/astronaut.png",
      "high_noise_loras": [
        {
          "path": "https://huggingface.co/ostris/wan22_i2v_14b_orbit_shot_lora/resolve/main/wan22_14b_i2v_orbit_high_noise.safetensors",
          "scale": 1
        }
      ],
      "low_noise_loras": [
        {
          "path": "https://huggingface.co/ostris/wan22_i2v_14b_orbit_shot_lora/resolve/main/wan22_14b_i2v_orbit_low_noise.safetensors",
          "scale": 1
        }
      ],
      "duration": 5,
      "seed": -1,
      "enable_safety_checker": true
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/wan-2-2-t2v-720-lora/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "orbit 180 around an astronaut on the moon",
            "image": "https://example.com/astronaut.png",
            "high_noise_loras": [
                {
                    "path": "https://huggingface.co/ostris/wan22_i2v_14b_orbit_shot_lora/resolve/main/wan22_14b_i2v_orbit_high_noise.safetensors",
                    "scale": 1,
                }
            ],
            "low_noise_loras": [
                {
                    "path": "https://huggingface.co/ostris/wan22_i2v_14b_orbit_shot_lora/resolve/main/wan22_14b_i2v_orbit_low_noise.safetensors",
                    "scale": 1,
                }
            ],
            "duration": 5,
            "seed": -1,
            "enable_safety_checker": True,
        }
    },
)

result = response.json()
print(result["output"]["video_url"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/wan-2-2-t2v-720-lora/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "orbit 180 around an astronaut on the moon",
        image: "https://example.com/astronaut.png",
        high_noise_loras: [
          {
            path: "https://huggingface.co/ostris/wan22_i2v_14b_orbit_shot_lora/resolve/main/wan22_14b_i2v_orbit_high_noise.safetensors",
            scale: 1,
          },
        ],
        low_noise_loras: [
          {
            path: "https://huggingface.co/ostris/wan22_i2v_14b_orbit_shot_lora/resolve/main/wan22_14b_i2v_orbit_low_noise.safetensors",
            scale: 1,
          },
        ],
        duration: 5,
        seed: -1,
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
  "delayTime": 32,
  "executionTime": 95432,
  "workerId": "oqk7ao1uomckye",
  "output": {
    "video_url": "https://video.runpod.ai/abc123/output.mp4",
    "cost": 0.35
  }
}
```

```json 400
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "FAILED",
  "error": "Failed to load LoRA model from URL"
}
```

> **Warning**
>
> Video URLs expire after 7 days. Download and store generated videos immediately if you need to keep them.

## Cost calculation

WAN 2.2 I2V 720p LoRA pricing:

| Duration  | Cost  |
| --------- | ----- |
| 5 seconds | $0.35 |
| 8 seconds | $0.56 |
