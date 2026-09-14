> Pinned source for Runpod main: [serverless/vllm/overview.mdx](https://github.com/runpod/docs/blob/361c96910f23cbab97220f94f7a751b12e4b09ea/serverless/vllm/overview.mdx)
> Canonical documentation: https://docs.runpod.io/serverless/vllm/overview

# Overview

Deploy scalable LLM inference endpoints using vLLM workers. Review setup, configuration, deployment, and operations guidance for Runpod Serverless.

vLLM workers deploy and serve large language models on Runpod Serverless with fast inference and automatic scaling. Deploy directly from the [Runpod Hub](https://console.runpod.io/hub/runpod-workers/worker-vllm) or customize using the [runpod-workers/worker-vllm](https://github.com/runpod-workers/worker-vllm) repository as a base.

- [Get started](https://docs.runpod.io/serverless/vllm/get-started)

  Deploy your first vLLM worker in minutes.
- [Configuration](https://docs.runpod.io/serverless/vllm/configuration)

  Configure your vLLM endpoint with environment variables.
- [Send requests](https://docs.runpod.io/serverless/vllm/vllm-requests)

  Send requests using Runpod's native API.
- [OpenAI compatibility](https://docs.runpod.io/serverless/vllm/openai-compatibility)

  Integrate vLLM with OpenAI-compatible tools.

## What is vLLM?

vLLM is an open-source inference engine optimized for serving large language models. It maximizes throughput and minimizes latency through techniques like PagedAttention and continuous batching.

- **[PagedAttention](https://docs.vllm.ai/en/latest/design/paged_attention.html)**: Breaks KV cache into pages for efficient memory use, enabling higher concurrency and larger models on smaller GPUs.
- **Continuous batching**: Processes requests as they arrive rather than waiting for batches, keeping GPUs busy and reducing latency.
- **OpenAI compatibility**: Drop-in replacement for OpenAI's API. Switch by changing the endpoint URL and API key.
- **Hugging Face integration**: Supports most models including Llama, Mistral, Qwen, Gemma, DeepSeek, and [many more](https://docs.vllm.ai/en/latest/models/supported_models.html).
- **Auto-scaling**: Scales from zero to many workers based on demand, with per-second billing.

## Deployment options

- **[Cached models](https://docs.runpod.io/serverless/endpoints/model-caching)** (recommended): Fastest setup with lower storage costs. Best for most deployments.
- **[Baked-in models](https://docs.runpod.io/serverless/workers/create-dockerfile#including-models-and-files)**: Eliminates download time and reduces cold starts to seconds. Requires building a custom Docker image.

## Configuration

Default settings work for many models, but some require additional [environment variables](https://docs.runpod.io/serverless/vllm/environment-variables) (which map to `vllm serve` flags). Consult your model's Hugging Face README and the [vLLM documentation](https://docs.vllm.ai/en/latest/usage/) for model-specific requirements.
