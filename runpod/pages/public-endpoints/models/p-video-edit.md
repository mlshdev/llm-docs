> Pinned source for Runpod main: [public-endpoints/models/p-video-edit.mdx](https://github.com/runpod/docs/blob/1d195e36bae30bf7ccc6543bce79500dea0e259c/public-endpoints/models/p-video-edit.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/p-video-edit

# Pruna Video Edit

Edit an existing video from a text prompt, optionally guided by reference images, with Pruna P-Video-Edit on Runpod Public Endpoints.

Pruna Video Edit (P-Video-Edit) edits an existing video from a text prompt. You can guide the edit with up to four reference images. Input videos can be up to 15 seconds long.

- [Try in playground](https://console.runpod.io/hub/playground/video/p-video-edit)

  Test Pruna Video Edit in the Runpod Hub playground.

|              |                                                 |
| ------------ | ----------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/p-video-edit/runsync` |
| **Pricing**  | $0.045/s (standard), $0.025/s (draft)           |
| **Type**     | Video generation                                |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

URL of the input video to edit. Maximum length: 15 seconds.

**Property (type: string; required)**

Text description of the edit.

**Property (type: array)**

URLs of reference images for reference-guided editing. Up to 4 images. Supports jpg, jpeg, png, webp.

**Property (type: boolean)**

Automatically enhance the edit prompt.

**Property (type: boolean)**

Enable draft mode for a faster, lower-quality preview at a lower price.

**Property (type: boolean)**

Include audio in the output video.

**Property (type: integer)**

Seed for reproducible generation.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/p-video-edit/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "video": "https://image.runpod.ai/test/pruna/p-video-edit/test.mp4",
      "prompt": "Add the roof cargo box shown in the reference image to the SUV. Keep it attached and aligned to the roof throughout the camera movement.",
      "images": [
        "https://image.runpod.ai/test/pruna/p-video-edit/test.jpg"
      ]
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/p-video-edit/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "video": "https://image.runpod.ai/test/pruna/p-video-edit/test.mp4",
            "prompt": "Add the roof cargo box shown in the reference image to the SUV. Keep it attached and aligned to the roof throughout the camera movement.",
            "images": ["https://image.runpod.ai/test/pruna/p-video-edit/test.jpg"],
        }
    },
)

result = response.json()
print(result["output"]["result"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/p-video-edit/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        video: "https://image.runpod.ai/test/pruna/p-video-edit/test.mp4",
        prompt: "Add the roof cargo box shown in the reference image to the SUV. Keep it attached and aligned to the roof throughout the camera movement.",
        images: ["https://image.runpod.ai/test/pruna/p-video-edit/test.jpg"],
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
    "cost": 0.45
  }
}
```

```json 400
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "FAILED",
  "error": "Invalid video URL"
}
```

> **Warning**
>
> Video URLs expire after 7 days. Download and store generated videos immediately if you need to keep them.

## Cost calculation

Pruna Video Edit charges per second of video, and draft mode costs less:

| Mode     | Price             | 5 seconds | 10 seconds | 15 seconds |
| -------- | ----------------- | --------- | ---------- | ---------- |
| Standard | $0.045 per second | $0.225    | $0.45      | $0.675     |
| Draft    | $0.025 per second | $0.125    | $0.25      | $0.375     |
