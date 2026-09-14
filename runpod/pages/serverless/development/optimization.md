> Commit-pinned source for Runpod main: [serverless/development/optimization.mdx](https://docs.runpod.io/serverless/development/optimization)

# Optimize your endpoints

Implement strategies to reduce latency and cost for your Serverless endpoints. Review configuration and operations guidance for Runpod Serverless.

Optimization involves measuring performance with [benchmarking](https://docs.runpod.io/serverless/development/benchmarking), identifying bottlenecks, and tuning your [endpoint configurations](https://docs.runpod.io/serverless/endpoints/endpoint-configurations).

## Quick optimization checklist

| Strategy                                                                                                             | Impact                     | When to use                         |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------------------------------- |
| [Use cached models](https://docs.runpod.io/serverless/endpoints/model-caching)                                       | ⬇️ Cold start (major)      | Models on Hugging Face              |
| [Bake models into image](https://docs.runpod.io/serverless/workers/create-dockerfile#including-models-and-files)     | ⬇️ Cold start              | Private models                      |
| [Cache files to a network volume](https://docs.runpod.io/serverless/development/volume-cache)                        | ⬇️ Cold start              | Downloaded weights, attached volume |
| [Set active workers > 0](https://docs.runpod.io/serverless/endpoints/endpoint-configurations#active-workers)         | ⬇️ Cold start (eliminates) | Latency-sensitive apps              |
| [Select multiple GPU types](https://docs.runpod.io/serverless/endpoints/endpoint-configurations#gpu-configuration)   | ⬆️ Availability            | Production workloads                |
| [Increase max workers](https://docs.runpod.io/serverless/endpoints/endpoint-configurations#max-workers)              | ⬆️ Throughput              | High concurrency                    |
| [Lower queue delay threshold](https://docs.runpod.io/serverless/endpoints/endpoint-configurations#auto-scaling-type) | ⬇️ Response time           | Traffic spikes                      |

## Understanding delay time

Two metrics affect request response time:

| Metric             | Description                                | Optimization                     |
| ------------------ | ------------------------------------------ | -------------------------------- |
| **Delay time**     | Waiting for a worker (includes cold start) | Model caching, active workers    |
| **Execution time** | GPU processing the request                 | Code optimization, GPU selection |

**Delay time** breaks down into:

- **Initialization time**: Downloading Docker image
- **Cold start time**: Loading model into GPU memory

> **Tip**
>
> Use [benchmarking](https://docs.runpod.io/serverless/development/benchmarking) to measure these metrics for your workload.

> **Note**
>
> If cold start exceeds 7 minutes, the worker is marked unhealthy. Extend with `RUNPOD_INIT_TIMEOUT=800` (seconds).

## Reduce cold starts

### Use cached models (recommended)

For models on Hugging Face, [cached models](https://docs.runpod.io/serverless/endpoints/model-caching) provide the fastest cold starts and lowest cost.

### Bake models into images

For private models, [embed them in your Docker image](https://docs.runpod.io/serverless/workers/create-dockerfile#including-models-and-files). Models load from high-speed local NVMe storage instead of downloading at runtime.

### Maintain active workers

Set [active workers](https://docs.runpod.io/serverless/endpoints/endpoint-configurations#active-workers) > 0 to eliminate cold starts entirely.

**Formula**: `Active workers = (Requests/min × Request duration in seconds) / 60`

Example: 6 requests/min × 30 seconds = 3 active workers needed.

## Improve availability

### Select multiple GPU types

Specify multiple [GPU types](https://docs.runpod.io/references/gpu-types) in priority order. A single high-end GPU often outperforms multiple lower-tier cards for inference.

For endpoints with five or more workers, Runpod [distributes workers across your GPU priorities](https://docs.runpod.io/serverless/endpoints/endpoint-configurations#gpu-priority-and-worker-distribution) to reduce throttling when your primary GPU type is constrained.

### Add headroom to max workers

Set [max workers](https://docs.runpod.io/serverless/endpoints/endpoint-configurations#max-workers) \~20% above expected concurrency to handle load spikes without throttling.

### Tune auto-scaling

Lower the [queue delay threshold](https://docs.runpod.io/serverless/endpoints/endpoint-configurations#auto-scaling-type) to 2-3 seconds (default: 4) for faster worker provisioning.

## Architecture considerations

| Choice                 | Tradeoff                                         |
| ---------------------- | ------------------------------------------------ |
| **Baked models**       | Fastest loading, but larger images               |
| **Network volumes**    | Flexible, but restricts to specific data centers |
| **Multiple GPU types** | Higher availability, variable performance        |
