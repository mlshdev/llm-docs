> Pinned source for Runpod main: [serverless/endpoints/overview.mdx](https://github.com/runpod/docs/blob/1ac8c64f9623ca776ec994c36b22d4329facbb1d/serverless/endpoints/overview.mdx)
> Canonical documentation: https://docs.runpod.io/serverless/endpoints/overview

# Overview

Deploy and manage Serverless endpoints using the Runpod console or REST API. Review configuration and operations guidance for Runpod Serverless.

Endpoints are the foundation of Runpod Serverless, serving as the gateway for deploying and managing your [Serverless workers](https://docs.runpod.io/serverless/workers/overview). Each endpoint provides a unique URL that accepts [HTTP requests](https://docs.runpod.io/serverless/endpoints/send-requests), processes them using your [handler function](https://docs.runpod.io/serverless/workers/handler-functions), and returns results.

- [Send requests](https://docs.runpod.io/serverless/endpoints/send-requests)

  Learn how to send requests to your endpoints.
- [Endpoint settings](https://docs.runpod.io/serverless/endpoints/endpoint-configurations)

  Configure scaling, timeouts, and GPU selection.
- [Job states](https://docs.runpod.io/serverless/endpoints/job-states)

  Monitor job status and metrics.
- [Model caching](https://docs.runpod.io/serverless/endpoints/model-caching)

  Reduce cold starts with cached models.

## Endpoint types

|                       | Queue-based                                | Load balancing                |
| --------------------- | ------------------------------------------ | ----------------------------- |
| **Processing**        | Requests queued and processed sequentially | Direct HTTP access to workers |
| **Execution modes**   | Async (`/run`) or sync (`/runsync`)        | Custom HTTP endpoints         |
| **Retries**           | Automatic retries on failure               | No automatic retries          |
| **Handler required?** | Yes                                        | No (use any HTTP framework)   |
| **Best for**          | Batch jobs, guaranteed execution           | Real-time apps, streaming     |

Learn more about [load balancing endpoints](https://docs.runpod.io/serverless/load-balancing/overview).

## Create an endpoint

Before creating an endpoint, ensure you have a [handler function](https://docs.runpod.io/serverless/workers/handler-functions) and [Dockerfile](https://docs.runpod.io/serverless/workers/create-dockerfile).

1. Navigate to the [Serverless section](https://www.console.runpod.io/serverless) and click **New Endpoint**.
2. Choose your deployment path:
   - **Hello World**: Runpod forks a starter worker template into a new GitHub repo in your account. Choose Queue-based or Load balancing, then click **Deploy**.
   - **Hugging Face LLM**: Search for any text-generation model on Hugging Face (for example, type "Gemma" to find Gemma 4), select it, and click **Create Endpoint**. Runpod deploys a vLLM endpoint for you.
   - **Docker**: Deploy from a container image. Select a saved Serverless template to fill in the container configuration automatically, or skip the template and enter an image name manually. See [Deploy from Docker](https://docs.runpod.io/serverless/workers/deploy).
   - **GitHub**: Select a repository, filtering by code owner if needed. Runpod checks for a Dockerfile and runs a background check on your handler: queue-based endpoints check for handler files, and load balancing endpoints check for a `/ping` path. See [Deploy from GitHub](https://docs.runpod.io/serverless/workers/github-integration).
   - **Hub**: Opens the Hub browser, where you can browse and deploy prebuilt workers. This replaces the previous "Ready-to-Deploy Repos" option. See [Hub overview](https://docs.runpod.io/hub/overview).
   - **Flash**: A guided setup flow for [Flash](https://docs.runpod.io/flash/overview) that walks you through installing the SDK, initializing your project, and sending your first command. Steps complete automatically as you progress.
3. For the GitHub, Docker, and Hello World paths, configure your endpoint before deploying:
   - **Endpoint name** and **type** ([Queue-based](https://docs.runpod.io/flash/create-endpoints#queue-based-endpoints) or [Load balancing](https://docs.runpod.io/flash/create-endpoints#load-balanced-endpoints))
   - **GPU** configuration and worker scaling
   - **Model** (optional): Enter a Hugging Face URL for [cached models](https://docs.runpod.io/serverless/endpoints/model-caching)
   - **Environment variables** and container configuration. See [environment variables](https://docs.runpod.io/serverless/development/environment-variables).
4. Click **Deploy Endpoint**.

```bash
curl --request POST \
  --url https://rest.runpod.io/v1/endpoints \
  --header 'Authorization: Bearer RUNPOD_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "my-endpoint",
    "templateId": "30zmvf89kd",
    "gpuTypeIds": ["NVIDIA GeForce RTX 4090"],
    "workersMin": 0,
    "workersMax": 3,
    "idleTimeout": 5
  }'
```

See the [Endpoint API reference](https://docs.runpod.io/api-reference/endpoints/POST/endpoints) for all parameters.

> **Tip**
>
> Optimize cost and availability by specifying multiple GPU types in priority order. Runpod allocates your first choice if available, otherwise uses the next in your list.

After deployment, your endpoint displays a unique API URL: `https://api.runpod.ai/v2/{endpoint_id}/`

## Edit an endpoint

1. Navigate to the [Serverless section](https://www.console.runpod.io/serverless).
2. Click the three dots on your endpoint → **Edit Endpoint**.
3. Update [endpoint settings](https://docs.runpod.io/serverless/endpoints/endpoint-configurations) and click **Save Endpoint**.

Changes to GPU types or worker counts may require restarting active workers.

## Delete an endpoint

1. Navigate to the [Serverless section](https://www.console.runpod.io/serverless).
2. Click the three dots on your endpoint → **Delete Endpoint**.
3. Type the endpoint name to confirm.

> **Warning**
>
> Deleting an endpoint permanently removes all configuration, logs, and job history.
