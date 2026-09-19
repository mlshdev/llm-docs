> Pinned source for Runpod main: [public-endpoints/models/chatterbox-turbo.mdx](https://github.com/runpod/docs/blob/56a86f70b4ea8b225c0e5e2231e42a4925931686/public-endpoints/models/chatterbox-turbo.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/chatterbox-turbo

# Chatterbox Turbo

Fast open-source text-to-speech with expressive voice cloning and paralinguistic tags. See model inputs and outputs on Runpod Public Endpoints.

Chatterbox Turbo is Resemble AI's fastest open-source text-to-speech model with paralinguistic tags for non-speech sounds and expressive voice cloning capabilities. It supports multiple preset voices and custom voice cloning via audio URL.

- [Try in playground](https://console.runpod.io/hub/playground/audio/chatterbox-turbo)

  Test Chatterbox Turbo in the Runpod Hub playground.

|              |                                                     |
| ------------ | --------------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/chatterbox-turbo/runsync` |
| **Pricing**  | $0.001 per second                                   |
| **Type**     | Text-to-speech                                      |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Text to convert to speech.

**Property (type: string)**

Preset voice ID. Options: `aaron`, `abigail`, `anaya`, `andy`, `archer`, `brian`, `chloe`, `dylan`, `emmanuel`, `ethan`, `evelyn`, `gavin`, `gordon`, `ivan`, `laura`, `lucy`, `madison`, `marisol`, `meera`, `walter`.

**Property (type: string)**

URL of an audio file for voice cloning. Overrides the `voice` parameter.

**Property (type: string)**

Output audio format. Options: `wav`, `flac`, `ogg`.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/chatterbox-turbo/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "Hello! Welcome to our text-to-speech demonstration.",
      "voice": "lucy",
      "format": "wav"
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/chatterbox-turbo/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "Hello! Welcome to our text-to-speech demonstration.",
            "voice": "lucy",
            "format": "wav",
        }
    },
)

result = response.json()
print(result["output"]["audio_url"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/chatterbox-turbo/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "Hello! Welcome to our text-to-speech demonstration.",
        voice: "lucy",
        format: "wav",
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

**output (type: object)**

The generation result containing the audio URL.

**output.audio\_url (type: string)**

URL of the generated audio file. This URL expires after 7 days.

```json 200
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "COMPLETED",
  "delayTime": 10,
  "executionTime": 1856,
  "output": {
    "audio_url": "https://audio.runpod.ai/abc123/output.wav"
  }
}
```

> **Warning**
>
> Audio URLs expire after 7 days. Download and store generated audio files immediately if you need to keep them.

## Available voices

Chatterbox Turbo includes 20 preset voices:

| Voice    | Voice   | Voice  | Voice  |
| -------- | ------- | ------ | ------ |
| aaron    | abigail | anaya  | andy   |
| archer   | brian   | chloe  | dylan  |
| emmanuel | ethan   | evelyn | gavin  |
| gordon   | ivan    | laura  | lucy   |
| madison  | marisol | meera  | walter |

## Cost calculation

Chatterbox Turbo charges $0.001 per second of generated audio.
