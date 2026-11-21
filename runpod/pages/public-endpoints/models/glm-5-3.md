> Pinned source for Runpod main: [public-endpoints/models/glm-5-3.mdx](https://github.com/runpod/docs/blob/e4b64f14b14cea0c05ab6977e1843b891202d4b9/public-endpoints/models/glm-5-3.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/models/glm-5-3

# GLM-5.3

Use Z.ai's GLM-5.3 for reasoning, coding, and tool use through Runpod Public Endpoints, with supported inputs and request examples.

GLM-5.3 is Z.ai's model for reasoning, coding, and tool use, with a 262K context window. It thinks before it answers and shows that reasoning ahead of the final answer. It supports function calling and JSON output, and works with the OpenAI SDK.

- [Try in playground](https://console.runpod.io/hub/playground/text/b1dd8hy2hqo1nb)

  Test GLM-5.3 in the Runpod Hub playground.

|              |                                                                                           |
| ------------ | ----------------------------------------------------------------------------------------- |
| **Endpoint** | `https://api.runpod.ai/v2/b1dd8hy2hqo1nb/runsync`                                         |
| **Pricing**  | $2.42 per 1M output tokens, $0.77 per 1M input tokens ($0.143 per 1M cached input tokens) |
| **Type**     | Text generation                                                                           |

> **Note**
>
> This endpoint is compatible with the OpenAI API. See the [OpenAI compatibility examples](#openai-api-compatibility) below.

## Request

All parameters are passed within the `input` object in the request body.

**Property (type: string; required)**

The prompt to send to the model.

**Property (type: string)**

System prompt that sets the model's behavior.

**Property (type: array)**

Array of message objects with role and content, for multi-turn conversations.

**Property (type: string; required)**

The role of the message author. Use `system`, `user`, or `assistant`.

**Property (type: string; required)**

The content of the message.

**Property (type: string; required)**

The model to use. The only option is `glm-5.3`.

**Property (type: float)**

Sampling temperature. Lower values make output more deterministic. Range: 0-2.

**Property (type: float)**

Nucleus sampling threshold. Range: 0.0-1.0.

**Property (type: integer)**

Maximum number of tokens to generate. Reasoning tokens count toward this limit. Range: 1-131,072.

**Property (type: string)**

How much the model thinks before it answers. Options: `low`, `medium`, `high`. Thinking can't be turned off.

**Property (type: array)**

Stop sequences that halt generation.

```bash cURL
curl -X POST "https://api.runpod.ai/v2/b1dd8hy2hqo1nb/runsync" \
  -H "Authorization: Bearer $RUNPOD_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "What is Runpod?",
      "system_prompt": "You are a helpful assistant.",
      "model": "glm-5.3",
      "max_tokens": 4096,
      "reasoning_effort": "low"
    }
  }'
```

```python Python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/b1dd8hy2hqo1nb/runsync",
    headers={
        "Authorization": f"Bearer {RUNPOD_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "What is Runpod?",
            "system_prompt": "You are a helpful assistant.",
            "model": "glm-5.3",
            "max_tokens": 4096,
            "reasoning_effort": "low",
        }
    },
)

result = response.json()
print(result["output"])
```

```javascript JavaScript
const response = await fetch(
  "https://api.runpod.ai/v2/b1dd8hy2hqo1nb/runsync",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RUNPOD_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: "What is Runpod?",
        system_prompt: "You are a helpful assistant.",
        model: "glm-5.3",
        max_tokens: 4096,
        reasoning_effort: "low",
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

**output (type: object)**

The generation result, including the generated text, the cost in USD, and token usage.

## OpenAI API compatibility

GLM-5.3 is compatible with the OpenAI API format. Use the OpenAI Python client with the endpoint's base URL and your Runpod API key:

```python Python (OpenAI SDK)
from openai import OpenAI

client = OpenAI(
    api_key=RUNPOD_API_KEY,
    base_url="https://api.runpod.ai/v2/b1dd8hy2hqo1nb/openai/v1",
)

response = client.chat.completions.create(
    model="glm-5.3",
    messages=[
        {
            "role": "system",
            "content": "You are a helpful assistant.",
        },
        {
            "role": "user",
            "content": "What is Runpod?",
        },
    ],
    max_tokens=4096,
    reasoning_effort="low",
)

print(response.choices[0].message.content)
```

For streaming responses, add `stream=True`:

```python Python (Streaming)
response = client.chat.completions.create(
    model="glm-5.3",
    messages=[
        {"role": "user", "content": "Explain quantum computing in simple terms."}
    ],
    max_tokens=4096,
    stream=True,
)

for chunk in response:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="")
```

GLM-5.3 reasons before it answers, and reasoning tokens count toward `max_tokens`. If answers are cut off, raise `max_tokens`.

## Cost calculation

GLM-5.3 charges separate rates for input and output tokens: $0.77 per 1M input tokens, $2.42 per 1M output tokens, and $0.143 per 1M cached input tokens.

| Tokens           | Input ($0.77/1M) | Output ($2.42/1M) |
| ---------------- | ---------------- | ----------------- |
| 1,000 tokens     | $0.00077         | $0.00242          |
| 10,000 tokens    | $0.0077          | $0.0242           |
| 100,000 tokens   | $0.077           | $0.242            |
| 1,000,000 tokens | $0.77            | $2.42             |
