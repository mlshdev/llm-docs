> Pinned source for Runpod main: [public-endpoints/models/granite-4.mdx](https://github.com/runpod/docs/blob/4962c60abcb8d9bf359d92ccc07644abd5d8e610/public-endpoints/models/granite-4.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/granite-4

# IBM Granite 4.0

A 32-billion-parameter long-context instruction model for text generation. See model inputs and outputs on Runpod Public Endpoints.

IBM Granite-4.0-H-Small is a 32B parameter long-context instruct model. It excels at general text generation, instruction following, and conversational AI tasks with support for extended context lengths.

- [Try in playground](https://console.runpod.io/hub/playground/text/granite-4-0-h-small)

  Test IBM Granite 4.0 in the Runpod Hub playground.

|              |                                                        |
| ------------ | ------------------------------------------------------ |
| **Endpoint** | `https://api.runpod.ai/v2/granite-4-0-h-small/runsync` |
| **Pricing**  | $10.00 per 1M tokens                                   |
| **Type**     | Text generation                                        |

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: array; required)**

Array of message objects with role and content.

**Property (type: string; required)**

The role of the message author. Use `system`, `user`, or `assistant`.

**Property (type: string; required)**

The content of the message.

**Property (type: integer)**

Maximum number of tokens to generate.

**Property (type: float)**

Controls randomness in generation. Lower values make output more deterministic. Range: 0.0-1.0.

**Property (type: integer)**

Seed for reproducible results. Set to -1 for random.

**Property (type: integer)**

Restricts sampling to the top K most probable tokens.

**Property (type: float)**

Nucleus sampling threshold. Range: 0.0-1.0.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/granite-4-0-h-small/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "messages": [
        {
          "role": "system",
          "content": "You are a helpful assistant. Please ensure responses are professional, accurate, and safe."
        },
        {
          "role": "user",
          "content": "What is Runpod?"
        }
      ],
      "sampling_params": {
        "max_tokens": 512,
        "temperature": 0.7,
        "seed": -1,
        "top_k": -1,
        "top_p": 1
      }
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/granite-4-0-h-small/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "messages": [
                {
                    "role": "system",
                    "content": "You are a helpful assistant. Please ensure responses are professional, accurate, and safe.",
                },
                {"role": "user", "content": "What is Runpod?"},
            ],
            "sampling_params": {
                "max_tokens": 512,
                "temperature": 0.7,
                "seed": -1,
                "top_k": -1,
                "top_p": 1,
            },
        }
    },
)

result = response.json()
print(result["output"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/granite-4-0-h-small/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant. Please ensure responses are professional, accurate, and safe.",
          },
          { role: "user", content: "What is Runpod?" },
        ],
        sampling_params: {
          max_tokens: 512,
          temperature: 0.7,
          seed: -1,
          top_k: -1,
          top_p: 1,
        },
      },
    }),
  }
);

const result = await response.json();
console.log(result.output);
```

## Response

**id (type: string)**

Unique identifier for the request.

**status (type: string)**

Request status. Returns `COMPLETED` on success, `FAILED` on error.

**delayTime (type: integer)**

Time in milliseconds the request spent in queue before processing began.

**executionTime (type: integer)**

Time in milliseconds the model took to generate the response.

**workerId (type: string)**

Identifier of the worker that processed the request.

**output (type: object)**

The generation result containing the text and usage information.

**output.choices (type: array)**

Array containing the generated text.

**output.cost (type: float)**

Cost of the generation in USD.

**output.usage (type: object)**

Token usage information.

```json 200
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "COMPLETED",
  "delayTime": 15,
  "executionTime": 2345,
  "workerId": "oqk7ao1uomckye",
  "output": {
    "choices": [
      {
        "tokens": [
          "Runpod is a cloud computing platform that provides GPU resources for AI and machine learning workloads..."
        ]
      }
    ],
    "cost": 0.00185,
    "usage": {
      "input": 35,
      "output": 150
    }
  }
}
```

```json 400
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "FAILED",
  "error": "Invalid messages format"
}
```

## Cost calculation

IBM Granite 4.0 charges $10.00 per 1M tokens. Example costs:

| Tokens           | Cost   |
| ---------------- | ------ |
| 1,000 tokens     | $0.01  |
| 10,000 tokens    | $0.10  |
| 100,000 tokens   | $1.00  |
| 1,000,000 tokens | $10.00 |
