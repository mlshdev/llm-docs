> Pinned source for Runpod main: [public-endpoints/models/minimax-speech.mdx](https://github.com/runpod/docs/blob/56a86f70b4ea8b225c0e5e2231e42a4925931686/public-endpoints/models/minimax-speech.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/minimax-speech

# Minimax Speech 02 HD

High-definition text-to-speech with emotional control and voice customization. See model inputs and outputs on Runpod Public Endpoints.

Minimax Speech 02 HD is a high-definition text-to-speech model with emotional control and voice customization. It produces natural-sounding speech with adjustable speed, pitch, volume, and emotional tone.

- [Try in playground](https://console.runpod.io/hub/playground/audio/minimax-speech-02-hd)

  Test Minimax Speech 02 HD in the Runpod Hub playground.

|              |                                                         |
| ------------ | ------------------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/minimax-speech-02-hd/runsync` |
| **Pricing**  | $0.05 per 1000 characters                               |
| **Type**     | Text-to-speech                                          |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Text to convert to speech.

**Property (type: string)**

Voice identifier for the desired voice.

**Property (type: number)**

Speech speed multiplier.

**Property (type: number)**

Volume level.

**Property (type: number)**

Pitch adjustment.

**Property (type: string)**

Emotion to convey. Options include `happy`, `sad`, `neutral`, `angry`, `fearful`, `surprised`.

**Property (type: boolean)**

Enable English text normalization for better pronunciation of numbers, abbreviations, etc.

**Property (type: string)**

Fallback audio URL if generation fails.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/minimax-speech-02-hd/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "Welcome to our advanced text-to-speech system. This is a demonstration of natural speech synthesis.",
      "voice_id": "Wise_Woman",
      "speed": 1,
      "volume": 1,
      "pitch": 0,
      "emotion": "happy",
      "english_normalization": false
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/minimax-speech-02-hd/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "Welcome to our advanced text-to-speech system. This is a demonstration of natural speech synthesis.",
            "voice_id": "Wise_Woman",
            "speed": 1,
            "volume": 1,
            "pitch": 0,
            "emotion": "happy",
            "english_normalization": False,
        }
    },
)

result = response.json()
print(result["output"]["audio_url"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/minimax-speech-02-hd/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "Welcome to our advanced text-to-speech system. This is a demonstration of natural speech synthesis.",
        voice_id: "Wise_Woman",
        speed: 1,
        volume: 1,
        pitch: 0,
        emotion: "happy",
        english_normalization: false,
      },
    }),
  }
);

const result = await response.json();
console.log(result.output.audio_url);
```

## Response

**id (type: string)**

Unique identifier for the request.

**status (type: string)**

Request status. Returns `COMPLETED` on success, `FAILED` on error.

**delayTime (type: integer)**

Time in milliseconds the request spent in queue before processing began.

**executionTime (type: integer)**

Time in milliseconds the model took to generate the audio.

**workerId (type: string)**

Identifier of the worker that processed the request.

**output (type: object)**

The generation result containing the audio URL and cost.

**output.audio\_url (type: string)**

URL of the generated audio file. This URL expires after 7 days.

**output.cost (type: float)**

Cost of the generation in USD.

```json 200
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "COMPLETED",
  "delayTime": 14,
  "executionTime": 3456,
  "workerId": "oqk7ao1uomckye",
  "output": {
    "audio_url": "https://audio.runpod.ai/abc123/output.mp3",
    "cost": 0.0055
  }
}
```

```json 400
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "FAILED",
  "error": "Invalid voice_id"
}
```

> **Warning**
>
> Audio URLs expire after 7 days. Download and store generated audio files immediately if you need to keep them.

## Cost calculation

Minimax Speech 02 HD charges $0.05 per 1000 characters. Example costs:

| Characters        | Cost   |
| ----------------- | ------ |
| 500 characters    | $0.025 |
| 1,000 characters  | $0.05  |
| 10,000 characters | $0.50  |
