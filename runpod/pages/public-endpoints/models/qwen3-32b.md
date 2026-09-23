> Pinned source for Runpod main: [public-endpoints/models/qwen3-32b.mdx](https://github.com/runpod/docs/blob/6bedc9afe6be9f0bfbbaa77c2ee91f08714e0dec/public-endpoints/models/qwen3-32b.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/qwen3-32b

# Qwen3 32B AWQ

Latest generation LLM with advanced reasoning, instruction-following, and multilingual support. See model inputs and outputs on Runpod Public Endpoints.

Qwen3 32B AWQ is the latest large language model in the Qwen series, offering advancements in reasoning, instruction-following, agent capabilities, and multilingual support. It uses AWQ quantization for efficient inference while maintaining high quality.

- [Try in playground](https://console.runpod.io/hub/playground/text/qwen3-32b-awq)

  Test Qwen3 32B AWQ in the Runpod Hub playground.

|              |                                                  |
| ------------ | ------------------------------------------------ |
| **Endpoint** | `https://api.runpod.ai/v2/qwen3-32b-awq/runsync` |
| **Pricing**  | $10.00 per 1M tokens                             |
| **Type**     | Text generation                                  |

> **Note**
>
> This endpoint is fully compatible with the OpenAI API. See the [OpenAI compatibility examples](#openai-api-compatibility) below.

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

Prompt for text generation.

**Property (type: integer)**

Maximum number of tokens to output.

**Property (type: float)**

Randomness of the output. Lower values make output more predictable and deterministic. Range: 0.0-1.0.

**Property (type: float)**

Nucleus sampling threshold. Samples from the smallest set of words whose cumulative probability exceeds this threshold.

**Property (type: integer)**

Restricts sampling to the top K most probable words.

**Property (type: string)**

Stops generation if the given string is encountered.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/qwen3-32b-awq/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "Write a Python function that checks if a number is prime:",
      "max_tokens": 512,
      "temperature": 0.7
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/qwen3-32b-awq/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "Write a Python function that checks if a number is prime:",
            "max_tokens": 512,
            "temperature": 0.7,
        }
    },
)

result = response.json()
print(result["output"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/qwen3-32b-awq/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "Write a Python function that checks if a number is prime:",
        max_tokens: 512,
        temperature: 0.7,
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

Token usage information with `input` and `output` counts.

```json 200
{
  "delayTime": 25,
  "executionTime": 3153,
  "id": "sync-0f3288b5-58e8-46fd-ba73-53945f5e8982-u2",
  "output": [
    {
      "choices": [
        {
          "tokens": [
            "def is_prime(n):\n    if n <= 1:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True"
          ]
        }
      ],
      "cost": 0.0001,
      "usage": {
        "input": 10,
        "output": 100
      }
    }
  ],
  "status": "COMPLETED",
  "workerId": "pkej0t9bbyjrgy"
}
```

```json 400
{
  "id": "sync-a1b2c3d4-e5f6-7890-abcd-ef1234567890-u1",
  "status": "FAILED",
  "error": "Invalid prompt"
}
```

## OpenAI API compatibility

Qwen3 32B AWQ is fully compatible with the OpenAI API format. You can use the OpenAI Python client to interact with this endpoint.

```python Python (OpenAI SDK)
from openai import OpenAI

client = OpenAI(
    api_key=RUNPOD_API_KEY,
    base_url="https://api.runpod.ai/v2/qwen3-32b-awq/openai/v1",
)

response = client.chat.completions.create(
    model="Qwen/Qwen3-32B-AWQ",
    messages=[
        {
            "role": "system",
            "content": "You are a helpful coding assistant.",
        },
        {
            "role": "user",
            "content": "Write a Python function that checks if a number is prime.",
        },
    ],
    max_tokens=525,
)

print(response.choices[0].message.content)
```

For streaming responses, add `stream=True`:

```python Python (Streaming)
response = client.chat.completions.create(
    model="Qwen/Qwen3-32B-AWQ",
    messages=[
        {"role": "user", "content": "Explain quantum computing in simple terms."}
    ],
    max_tokens=525,
    stream=True,
)

for chunk in response:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="")
```

For more details, see [Send vLLM requests](https://docs.runpod.io/serverless/vllm/vllm-requests) and the [OpenAI API compatibility guide](https://docs.runpod.io/serverless/vllm/openai-compatibility).

## Cost calculation

Qwen3 32B AWQ charges $10.00 per 1M tokens. Example costs:

| Tokens           | Cost   |
| ---------------- | ------ |
| 1,000 tokens     | $0.01  |
| 10,000 tokens    | $0.10  |
| 100,000 tokens   | $1.00  |
| 1,000,000 tokens | $10.00 |
