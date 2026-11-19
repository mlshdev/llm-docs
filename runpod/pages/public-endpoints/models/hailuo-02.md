> Pinned source for Runpod main: [public-endpoints/models/hailuo-02.mdx](https://github.com/runpod/docs/blob/1d195e36bae30bf7ccc6543bce79500dea0e259c/public-endpoints/models/hailuo-02.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/hailuo-02

# Hailuo 02 Standard

Generate 6 or 10 second videos from text prompts or reference images with MiniMax Hailuo 02 Standard on Runpod Public Endpoints.

Hailuo 02 Standard is MiniMax's video generation model. It generates 6 or 10 second videos from a text prompt, or from a reference image when you provide one, and can refine your prompt automatically.

- [Try in playground](https://console.runpod.io/hub/playground/video/minimax-hailuo-02-std)

  Test Hailuo 02 Standard in the Runpod Hub playground.

|              |                                                          |
| ------------ | -------------------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/minimax-hailuo-02-std/runsync` |
| **Pricing**  | $0.23 (6s), $0.56 (10s)                                  |
| **Type**     | Video generation                                         |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Scene description, including lighting, motion, and camera direction.

**Property (type: string)**

URL of a reference image for composition and style guidance. When provided, the model runs in image-to-video mode.

**Property (type: string)**

URL of a target end frame, for a guided transition from the reference image.

**Property (type: integer)**

Video duration in seconds. Options: `6`, `10`.

**Property (type: boolean)**

Automatically refine the prompt and run safety validation.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/minimax-hailuo-02-std/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "A kitten chases a bouncing rubber ball across a polished wooden floor, sliding slightly and bumping into a potted plant.",
      "duration": 6,
      "enable_prompt_expansion": true
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/minimax-hailuo-02-std/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "A kitten chases a bouncing rubber ball across a polished wooden floor, sliding slightly and bumping into a potted plant.",
            "duration": 6,
            "enable_prompt_expansion": True,
        }
    },
)

result = response.json()
print(result["output"]["result"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/minimax-hailuo-02-std/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "A kitten chases a bouncing rubber ball across a polished wooden floor, sliding slightly and bumping into a potted plant.",
        duration: 6,
        enable_prompt_expansion: true,
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
    "cost": 0.23
  }
}
```

```json 400
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "FAILED",
  "error": "Invalid input parameters"
}
```

> **Warning**
>
> Video URLs expire after 7 days. Download and store generated videos immediately if you need to keep them.

## Cost calculation

Hailuo 02 Standard charges a fixed price per video, based on duration:

| Duration   | Cost  |
| ---------- | ----- |
| 6 seconds  | $0.23 |
| 10 seconds | $0.56 |
