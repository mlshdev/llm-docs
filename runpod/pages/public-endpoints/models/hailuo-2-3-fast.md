> Pinned source for Runpod main: [public-endpoints/models/hailuo-2-3-fast.mdx](https://github.com/runpod/docs/blob/2260ee963520748b2e23054fcee3ac046f62deff/public-endpoints/models/hailuo-2-3-fast.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/hailuo-2-3-fast

# Hailuo 2.3 Fast

Animate a reference image into a 6 or 10 second video with MiniMax Hailuo 2.3 Fast on Runpod Public Endpoints.

Hailuo 2.3 Fast is MiniMax's image-to-video model. It animates a reference image, guided by a text prompt, into a 6 or 10 second video, and can optimize your prompt automatically.

- [Try in playground](https://console.runpod.io/hub/playground/video/minimax-hailuo-2-3-fast)

  Test Hailuo 2.3 Fast in the Runpod Hub playground.

|              |                                                            |
| ------------ | ---------------------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/minimax-hailuo-2-3-fast/runsync` |
| **Pricing**  | $0.19 (6s), $0.32 (10s)                                    |
| **Type**     | Video generation                                           |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Description of the scene and motion for the video.

**Property (type: string; required)**

Reference image as a URL or base64 string. Supports JPG and PNG, with an aspect ratio between 2:5 and 5:2, a short side of at least 300 pixels, and a maximum size of 20 MB.

**Property (type: integer)**

Video duration in seconds. Options: `6`, `10`.

**Property (type: boolean)**

Automatically optimize the prompt to improve output quality.

**Property (type: boolean)**

Prioritize speed, with a moderate trade-off in visual quality.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/minimax-hailuo-2-3-fast/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "The camera slowly pushes in as the subject turns and smiles.",
      "image": "https://image.runpod.ai/assets/minimax/hailuo-2-3-fast.jpeg",
      "duration": 6
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/minimax-hailuo-2-3-fast/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "The camera slowly pushes in as the subject turns and smiles.",
            "image": "https://image.runpod.ai/assets/minimax/hailuo-2-3-fast.jpeg",
            "duration": 6,
        }
    },
)

result = response.json()
print(result["output"]["result"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/minimax-hailuo-2-3-fast/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "The camera slowly pushes in as the subject turns and smiles.",
        image: "https://image.runpod.ai/assets/minimax/hailuo-2-3-fast.jpeg",
        duration: 6,
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
    "cost": 0.19
  }
}
```

```json 400
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "FAILED",
  "error": "Invalid image format"
}
```

> **Warning**
>
> Video URLs expire after 7 days. Download and store generated videos immediately if you need to keep them.

## Cost calculation

Hailuo 2.3 Fast charges a fixed price per video, based on duration:

| Duration   | Cost  |
| ---------- | ----- |
| 6 seconds  | $0.19 |
| 10 seconds | $0.32 |
