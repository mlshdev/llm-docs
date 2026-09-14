> Pinned source for Vast.ai main: [guides/serverless/architecture.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/guides/serverless/architecture.mdx)
> Canonical documentation: https://docs.vast.ai/guides/serverless/architecture

# Architecture

Learn how Vast Serverless operates and understand its major components.

The Vast.ai Serverless architecture is a **multi-component system** that manages GPU-backed workers to efficiently serve applications. It automatically scales up or down based on **endpoint parameters**, **workergroup parameters**, and **measured load** reported by workers.

![Serverless Architecture](https://raw.githubusercontent.com/vast-ai/docs/175a318c27750ea64da94f043dda39ec5cb26259/images/serverless-architecture-light.svg)

![Serverless Architecture](https://raw.githubusercontent.com/vast-ai/docs/175a318c27750ea64da94f043dda39ec5cb26259/images/serverless-architecture-dark.svg)

## Primary Components

### Endpoints

An **Endpoint** is the highest-level construct in Vast Serverless. Endpoints are configured with [**endpoint-level parameters**](https://docs.vast.ai/guides/serverless/serverless-parameters) that control scaling behavior, capacity limits, and utilization targets.

An endpoint consists of:

- A named endpoint identifier
- Typically one workergroup
- Endpoint parameters such as `max_workers`, `min_load`, `min_workers`, `cold_mult`, `min_cold_load`, `target_util`, `inactivity_timeout`, `max_queue_time`, and `target_queue_time`

Users typically create one endpoint per **use case** (for example, text generation or image generation) and per **environment** (production, staging, development). Each endpoint acts as a router and load balances requests across its pool of managed workers based on worker queue time.

### Workergroups

A **Workergroup** defines what code runs on the endpoint (via the template), as well as how workers are recruited and created. Workergroups are configured with [**workergroup-level parameters**](https://docs.vast.ai/guides/serverless/workergroup-parameters) and are responsible for selecting which GPU offers are eligible for worker creation.

Each Workergroup includes:

- A serverless-compatible template (referenced by `template_id` or `template_hash`)
- Hardware and marketplace filters defined via `search_params`
- Optional instance configuration overrides via `launch_args`
- Hardware requirements such as `gpu_ram`
- A set of GPU instances (workers) created from the template

Multiple Workergroups can exist within a single Endpoint, each with different configurations. For most users, a single Workergroup is sufficient and recommended. Advanced use cases such as mixed-model serving and hardware comparisons can be enabled with multiple Workergorups. For such use cases, please contact Vast for assistance and best practices.

### Workers

**Workers** are individual GPU instances created and managed by the Serverless engine. Each worker runs a [**PyWorker**](https://docs.vast.ai/guides/serverless/overview), a Python web server that monitors the inference server's readiness, proxies incoming requests, and coordinates with the autoscaler.

Workers can exist in active or inactive states and are responsible for:

- Receiving and processing inference requests
- Reporting performance metrics (load, utilization, benchmark results)
- Informing automated scaling and routing decisions

### Serverless Engine

The **Serverless Engine** is the decision-making service that routes incoming requests and manages workers across all endpoints and workergroups. Using configuration parameters and real-time metrics, it determines when to:

- Recruit new workers
- Activate inactive workers
- Release or destroy workers

The engine continuously evaluates cost-performance tradeoffs using automated performance testing and measured load.

### SDK

The [**Serverless SDK**](https://docs.vast.ai/guides/serverless/sdk-overview) is the primary interface for interacting with Vast Serverless. It is a Python `pip` package that abstracts low-level details and manages:

- Authentication
- Request queuing, retries, and error handling
- Asynchronous request management
- Worker status and lifecycle information

While CLI and API access are available, the SDK is the recommended method for most applications.

## Example Workflow

1. The client application sends a request using the Serverless SDK.
2. The Serverless system routes the request and returns a suitable worker address based on current load and capacity.
3. The client sends the request directly to the selected worker’s API endpoint, including the required authentication data.
4. The PyWorker running on the GPU instance forwards the request to the machine learning model and performs inference.
5. The inference result is returned to the client application.
6. Independently and continuously, each PyWorker reports operational and performance metrics back to the Serverless Engine, which uses this data to make ongoing scaling decisions.
