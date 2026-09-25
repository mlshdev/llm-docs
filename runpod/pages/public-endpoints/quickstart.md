> Pinned source for Runpod main: [public-endpoints/quickstart.mdx](https://github.com/runpod/docs/blob/2ed145e18217c606416d3dbc47314da01a479792/public-endpoints/quickstart.mdx)
> Canonical documentation: https://docs.runpod.io/public-endpoints/quickstart

# Quickstart

Generate your first image with Public Endpoints in under 5 minutes. Review setup and request guidance for Runpod Public Endpoints.

This quickstart walks you through generating an image using Runpod Public Endpoints. You'll use the [Flux Schnell](https://docs.runpod.io/public-endpoints/models/flux-schnell) model, which is optimized for fast generation.

## Requirements

- A [Runpod account](https://docs.runpod.io/accounts-billing/manage-accounts) with at least $1 in credits
- A [Runpod API key](https://docs.runpod.io/get-started/api-keys)

## Step 1: Generate an image in the playground

The fastest way to test Public Endpoints is through the browser-based playground.

1. Go to the [Flux Schnell endpoint](https://console.runpod.io/hub/playground/image/black-forest-labs-flux-1-schnell) in the Runpod console.
2. Under **Input**, enter a prompt: `A golden retriever playing fetch on a sunny beach` (or any other prompt you like).
3. Click **Run**.
4. Wait a few seconds for the image to generate. The result appears under **Result**.

You've just generated your first image. The playground shows the estimated cost (\~$0.0025 for a 1024x1024 image).

![](https://raw.githubusercontent.com/runpod/docs/2ed145e18217c606416d3dbc47314da01a479792/images/public-endpoints-quickstart-playground.png)

## Step 2: Generate an image with the API

Now let's generate an image programmatically using the REST API.

1. Open a terminal on your local machine.
2. Copy the following command, replacing `YOUR_API_KEY` with your Runpod API key:

```bash
curl -X POST "https://api.runpod.ai/v2/black-forest-labs-flux-1-schnell/runsync" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "input": {
      "prompt": "A golden retriever playing fetch on a sunny beach",
      "width": 1024,
      "height": 1024
    }
  }'
```

3. Paste the command into your terminal and press **Enter**.
4. Wait for the response (this takes about 10-20 seconds).

1) Create a new file called `generate_image.py` and paste the following code:

```python
import requests

response = requests.post(
    "https://api.runpod.ai/v2/black-forest-labs-flux-1-schnell/runsync",
    headers={
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json",
    },
    json={
        "input": {
            "prompt": "A golden retriever playing fetch on a sunny beach",
            "width": 1024,
            "height": 1024,
        }
    },
)

result = response.json()
print(result["output"]["image_url"])
```

2. Replace `YOUR_API_KEY` with your Runpod API key.
3. Open a terminal, navigate to the directory containing the file, and run:

```bash
python generate_image.py
```

4. Wait for the script to print the image URL (this takes about 10-20 seconds).

### Response

Both methods return a JSON response with your generated image:

```json
{
  "status": "COMPLETED",
  "output": {
    "image_url": "https://image.runpod.ai/...",
    "cost": 0.02097152
  }
}
```

Open the `image_url` in your browser to view the generated image.

> **Warning**
>
> Image URLs expire after 7 days. Download images immediately if you need to keep them.

## Next steps

- [Make API requests](https://docs.runpod.io/public-endpoints/requests): Learn about async requests, SDKs, and best practices.
- [Model reference](https://docs.runpod.io/public-endpoints/reference): Explore all available models and their parameters.
- [Connect AI coding tools](https://docs.runpod.io/public-endpoints/ai-coding-tools): Use Public Endpoints with Cursor, Cline, and OpenCode.
- [Build a text-to-video pipeline](https://docs.runpod.io/tutorials/public-endpoints/text-to-video-pipeline): Chain multiple endpoints to generate videos from text prompts.
