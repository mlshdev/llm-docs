> Pinned source for Runpod main: [public-endpoints/models/moonshot-kimi.mdx](https://github.com/runpod/docs/blob/6bedc9afe6be9f0bfbbaa77c2ee91f08714e0dec/public-endpoints/models/moonshot-kimi.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/moonshot-kimi

# Moonshot Kimi

Use Moonshot Kimi models for reasoning, chat, and coding through Runpod Public Endpoints, with supported inputs, outputs, and request examples.

Moonshot's Kimi family of models handles advanced reasoning and chat. It supports extended thinking with a visible reasoning trace before the final answer. A single endpoint serves three variants, each selected by setting the `model` field in the request body.

- [Try in playground](https://console.runpod.io/hub/playground/text/moonshot-kimi)

  Test Moonshot Kimi in the Runpod Hub playground.

|              |                                                                    |
| ------------ | ------------------------------------------------------------------ |
| **Endpoint** | `https://api.runpod.ai/v2/moonshot-kimi/runsync`                   |
| **Pricing**  | $4.00–$15.00 per 1M output tokens, $0.95–$3.00 per 1M input tokens |
| **Type**     | Text generation                                                    |

> **Note**
>
> This endpoint is fully compatible with the OpenAI API. See the [OpenAI compatibility examples](#openai-api-compatibility) below.

## Model variants

Choose a variant by setting the `model` field in the request body (default `kimi-k2.6`). The endpoint slug stays `moonshot-kimi` for every variant.

| `model` value         | Description                                                                                                           | Context window        | Input price         | Output price         |
| --------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------- | -------------------- |
| `kimi-k2.6` (default) | General-purpose model with thinking and non-thinking modes, agentic capabilities, and multimodal input.               | 256K (262,144 tokens) | $0.95 per 1M tokens | $4.00 per 1M tokens  |
| `kimi-k2.7-code`      | Coding-focused model with thinking mode and agentic capabilities.                                                     | 256K (262,144 tokens) | $0.95 per 1M tokens | $4.00 per 1M tokens  |
| `kimi-k3`             | Flagship model with always-on reasoning and configurable reasoning effort for long-horizon coding and knowledge work. | 1M (1,048,576 tokens) | $3.00 per 1M tokens | $15.00 per 1M tokens |

To target a variant other than the default, set the `model` field to its ID. For example, to use the flagship model, set `"model": "kimi-k3"` in the request body (or `model="kimi-k3"` with the OpenAI SDK).

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: array; required)**

Array of message objects with role and content.

**Property (type: string; required)**

The role of the message author. Use `system`, `user`, or `assistant`.

**Property (type: string; required)**

The content of the message.

**Property (type: string)**

The Kimi variant to use. One of `kimi-k2.6`, `kimi-k2.7-code`, or `kimi-k3`.

**Property (type: integer)**

Maximum number of tokens to generate.

**Property (type: float)**

Controls randomness in generation. Lower values make output more deterministic.

**Property (type: integer)**

Seed for reproducible results.

**Property (type: integer)**

Restricts sampling to the top K most probable tokens.

**Property (type: float)**

Nucleus sampling threshold. Range: 0.0-1.0.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/moonshot-kimi/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "messages": [
        {
          "role": "system",
          "content": "You are Kimi."
        },
        {
          "role": "user",
          "content": "What is Runpod?"
        }
      ],
      "sampling_params": {
        "max_tokens": 2048,
        "temperature": 1
      },
      "model": "kimi-k2.6"
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/moonshot-kimi/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "messages": [
                {"role": "system", "content": "You are Kimi."},
                {"role": "user", "content": "What is Runpod?"},
            ],
            "sampling_params": {
                "max_tokens": 2048,
                "temperature": 1,
            },
            "model": "kimi-k2.6",
        }
    },
)

result = response.json()
print(result["output"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/moonshot-kimi/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        messages: [
          { role: "system", content: "You are Kimi." },
          { role: "user", content: "What is Runpod?" },
        ],
        sampling_params: {
          max_tokens: 2048,
          temperature: 1,
        },
        model: "kimi-k2.6",
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
    "cost": 0.00074,
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

## OpenAI API compatibility

Moonshot Kimi is fully compatible with the OpenAI API format. You can use the OpenAI Python client to interact with this endpoint. You can set `model` to any of the three variant IDs.

```python Python (OpenAI SDK)
from openai import OpenAI

client = OpenAI(
    api_key=RUNPOD_API_KEY,
    base_url="https://api.runpod.ai/v2/moonshot-kimi/openai/v1",
)

response = client.chat.completions.create(
    model="kimi-k2.6",
    messages=[
        {
            "role": "system",
            "content": "You are Kimi.",
        },
        {
            "role": "user",
            "content": "What is Runpod?",
        },
    ],
    max_tokens=2048,
    temperature=1,
    reasoning_effort="max", # set for adding reasoning
    top_p=0.9,
)

print(response.choices[0].message.content)
```

For streaming responses, add `stream=True`:

```python Python (Streaming)
response = client.chat.completions.create(
    model="kimi-k2.6",
    messages=[
        {"role": "system", "content": "You are Kimi."}, 
        {"role": "user", "content": "Explain quantum computing in simple terms."}
    ],
    max_tokens=2048,
    stream=True,
)

for chunk in response:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="")
```

For more details, see [Send vLLM requests](https://docs.runpod.io/serverless/vllm/vllm-requests) and the [OpenAI API compatibility guide](https://docs.runpod.io/serverless/vllm/openai-compatibility).

## Cost calculation

Moonshot Kimi charges separate rates for input and output tokens, and the rate depends on the variant. Kimi K2.6 and Kimi K2.7 Code charge $0.95 per 1M input tokens and $4.00 per 1M output tokens. Kimi K3 charges $3.00 per 1M input tokens and $15.00 per 1M output tokens. Example costs:

| Tokens           | K2.6 & K2.7 Code input ($0.95/1M) | K2.6 & K2.7 Code output ($4.00/1M) | K3 input ($3.00/1M) | K3 output ($15.00/1M) |
| ---------------- | --------------------------------- | ---------------------------------- | ------------------- | --------------------- |
| 1,000 tokens     | $0.00095                          | $0.004                             | $0.003              | $0.015                |
| 10,000 tokens    | $0.0095                           | $0.04                              | $0.03               | $0.15                 |
| 100,000 tokens   | $0.095                            | $0.40                              | $0.30               | $1.50                 |
| 1,000,000 tokens | $0.95                             | $4.00                              | $3.00               | $15.00                |
