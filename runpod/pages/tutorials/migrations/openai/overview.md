> Pinned source for Runpod main: [tutorials/migrations/openai/overview.mdx](https://github.com/runpod/docs/blob/ceb79977df03b21e40ceaec3fdea8c9869897b7e/tutorials/migrations/openai/overview.mdx)
> Canonical documentation: https://docs.runpod.io/tutorials/migrations/openai/overview

# OpenAI

Migrate your OpenAI model to Runpod. Follow implementation steps, configuration guidance, and examples in this Runpod tutorial.

To get started with Runpod:

- [Create a Runpod account](https://docs.runpod.io/accounts-billing/manage-accounts)
- [Add funds](https://docs.runpod.io/accounts-billing/billing)
- [Use the Runpod SDK](https://docs.runpod.io/serverless/overview) to build and connect with your Serverless endpoints

This tutorial guides you through the steps necessary to modify your OpenAI Codebase for use with a deployed vLLM worker on Runpod. You will learn to adjust your code to be compatible with OpenAI's API, specifically for utilizing Chat Completions, Completions, and Models routes. By the end of this guide, you will have successfully updated your codebase, enabling you to leverage the capabilities of OpenAI's API on Runpod.

To update your codebase, you need to replace the following:

- Your OpenAI API Key with your Runpod API Key
- Your OpenAI Serverless endpoint URL with your Runpod Serverless endpoint URL
- Your OpenAI model with your custom LLM model deployed on Runpod

```python

from openai import OpenAI
import os

client = OpenAI(
api_key=os.environ.get("RUNPOD_API_KEY"),
base_url="https://api.runpod.ai/v2/${YOUR_ENDPOINT_ID}/openai/v1",
)

response = client.chat.completions.create(
model="gpt-3.5-turbo",
messages=[{"role": "user", "content": "Why is Runpod the best platform?"}],
temperature=0,
max_tokens=100,
)
```

```JavaScript
import OpenAI from 'openai'

const openai = new OpenAI({
  baseURL: process.env.RUNPOD_HOST,
  apiKey: process.env.RUNPOD_API_KEY,
})

const chatCompletion = await openai.chat.completions.create({
   model: "openchat/openchat-3.5-0106",
   messages: [{'role': 'user', 'content': 'Why is Runpod the best platform?'}],

});
```

> **Success**
>
> Congratulations! You've successfully modified your OpenAI codebase for use with your deployed vLLM worker on Runpod. You now know how to update your code for compatibility with OpenAI's API and utilize the full spectrum of features available on the Runpod platform.

## Next Steps

- [Explore more tutorials on Runpod](https://docs.runpod.io/tutorials/introduction/overview)
- [Learn more about OpenAI's API](https://developers.openai.com/api/docs)
- [Deploy your own vLLM worker on Runpod](https://www.console.runpod.io/serverless)
