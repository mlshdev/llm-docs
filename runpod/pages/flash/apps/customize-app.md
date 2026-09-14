> Pinned source for Runpod main: [flash/apps/customize-app.mdx](https://github.com/runpod/docs/blob/361c96910f23cbab97220f94f7a751b12e4b09ea/flash/apps/customize-app.mdx)
> Canonical documentation: https://docs.runpod.io/flash/apps/customize-app

# Customize your Flash app

Modify the Flash project template to build your application. Review setup, configuration, deployment, and usage guidance for Runpod Flash.

After running `flash init`, you have a working project template with example load balancing endpoints and queue-based endpoints. This guide shows you how to customize the template to build your application.

## Endpoint types

Flash supports two endpoint types, each suited for different use cases:

| Type              | Best for               | Functions per endpoint |
| ----------------- | ---------------------- | ---------------------- |
| **Queue-based**   | Long-running GPU tasks | One                    |
| **Load-balanced** | Fast HTTP APIs         | Multiple (via routes)  |

Each `@Endpoint` function creates a separate Serverless endpoint:

```python
@Endpoint(name="preprocess", gpu=GpuType.NVIDIA_A100_80GB_PCIe)
def preprocess(data): ...

@Endpoint(name="inference", gpu=GpuType.NVIDIA_A100_80GB_PCIe)
def run_model(input): ...
```

Call via `/run` or `/runsync`: `https://api.runpod.ai/v2/{endpoint_id}/runsync`

Multiple routes share one endpoint:

```python
api = Endpoint(name="api-server", cpu="cpu5c-4-8", workers=(1, 5))

@api.post("/generate")
def generate_text(prompt: str): ...

@api.get("/health")
def health_check(): ...
```

Call via HTTP routes: `https://{endpoint_id}.api.runpod.ai/generate`

## Add load balancing routes

To add routes to an existing load balancing endpoint, use the route decorator pattern:

```python title="lb_worker.py"
from runpod_flash import Endpoint

api = Endpoint(name="lb_worker", cpu="cpu5c-4-8", workers=(1, 5))

# Existing routes
@api.post("/process")
async def process(input_data: dict) -> dict:
    # ... existing code ...
    pass

# Add a new route
@api.get("/status")
async def get_status() -> dict:
    return {"status": "healthy", "version": "1.0"}
```

All routes share the same `lb_worker` Serverless endpoint. Each route is accessible at its defined path.

**Key points:**

- Multiple routes can share one endpoint configuration
- Each route has its own HTTP method and path
- All routes on the same endpoint deploy to one Serverless endpoint

## Add queue-based endpoints

To add a new queue-based endpoint, create a new endpoint with a unique name:

```python title="gpu_worker.py"
from runpod_flash import Endpoint, GpuType

# Existing endpoint
@Endpoint(
    name="gpu-inference",
    gpu=GpuType.NVIDIA_A100_80GB_PCIe,
    workers=3,
    dependencies=["torch"]
)
async def run_inference(input: dict) -> dict:
    import torch
    # Inference logic
    return {"result": "processed"}

# New endpoint for a different workload
@Endpoint(
    name="gpu-training",
    gpu=GpuType.NVIDIA_A100_80GB_PCIe,
    workers=1,
    dependencies=["torch", "transformers"]
)
async def train_model(config: dict) -> dict:
    import torch
    from transformers import Trainer
    # Training logic
    return {"model_path": "/models/trained"}
```

This creates two separate Serverless endpoints, each with its own URL and scaling configuration.

> **Warning**
>
> **Do not reuse the same endpoint name for multiple queue-based functions when deploying Flash apps.** Each queue-based `@Endpoint` must have its own unique `name` parameter.

## Modify endpoint configurations

Customize endpoint configurations for each worker function in your app. Each `@Endpoint` function can have its own GPU type, scaling parameters, and timeouts optimized for its specific workload.

```python
# Example: Different configs for different workloads
@Endpoint(
    name="preprocess",
    gpu=GpuType.NVIDIA_GEFORCE_RTX_4090,  # Cost-effective for preprocessing
    workers=(0, 5)
)
async def preprocess(data): ...

@Endpoint(
    name="inference",
    gpu=GpuType.NVIDIA_A100_80GB_PCIe,  # High VRAM for large models
    workers=(1, 10)  # Keep one worker ready
)
async def inference(data): ...
```

For details, see:

- [Configuration parameters](https://docs.runpod.io/flash/configuration/parameters) for all available options.
- [GPU types](https://docs.runpod.io/flash/configuration/gpu-types) for selecting hardware.
- [Best practices](https://docs.runpod.io/flash/configuration/best-practices) for optimization guidance.

## Test your customizations

After customizing your app, test locally with `flash dev`:

```bash
flash dev

# If using uv:
uv run flash dev
```

This starts a development server at <http://localhost:8888> with:

- Interactive API documentation at `/docs`
- Auto-reload on code changes
- Real remote execution on Runpod workers

Make sure to test:

- All HTTP routes work as expected
- Endpoint functions execute correctly
- Dependencies install properly
- Error handling works

## Next steps

- [Test locally](https://docs.runpod.io/flash/apps/local-testing)

  Use `flash dev` for local development and testing.
- [Deploy to Runpod](https://docs.runpod.io/flash/apps/deploy-apps)

  Deploy your application to production with `flash deploy`.
- [Configure hardware resources](https://docs.runpod.io/flash/configuration/parameters)

  Complete reference for configuration options.
- [Create endpoint functions](https://docs.runpod.io/flash/create-endpoints)

  Learn more about writing and optimizing endpoint functions.
