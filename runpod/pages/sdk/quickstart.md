> Pinned source for Runpod main: [sdk/quickstart.mdx](https://github.com/runpod/docs/blob/2f1d12b792818b3af3edd8d503a5e35f760d1410/sdk/quickstart.mdx)
> Canonical documentation: https://docs.runpod.io/sdk/quickstart

# Get started with the Runpod SDK

Install the runpod Python package, log in with the rp CLI, and run your first function on a Runpod GPU in a few minutes, then deploy it as an endpoint.

This quickstart takes you from installing the Runpod SDK to running a function on a cloud GPU. You'll write a small app, run it in a live development session, and deploy it as a Serverless endpoint.

## Requirements

- A [Runpod account](https://docs.runpod.io/accounts-billing/manage-accounts) with a verified email address.
- [Python 3.10 to 3.14](https://www.python.org/downloads/).

## Step 1: Install the SDK

Create a project directory and a virtual environment, then install the `runpod` package:

```bash
mkdir hello-runpod && cd hello-runpod
python -m venv .venv
source .venv/bin/activate
pip install runpod

# If using uv:
uv init && uv add runpod
```

Installing the package also installs the `rp` CLI.

> **Note**
>
> This quickstart requires `runpod` 2.0 or later. Until 2.0.0 is released, install the release candidate with `pip install runpod==2.0.0rc1` (or `uv add runpod==2.0.0rc1`).

## Step 2: Log in

Authenticate with your Runpod account:

```bash
rp login

# If using uv:
uv run rp login
```

This opens your browser so you can approve access. Your credentials are saved to `~/.runpod/config.toml`, and both the SDK and the CLI use them from then on.

> **Tip**
>
> To skip the browser, run `rp login --api-key API_KEY` with a key from the [API keys page](https://console.runpod.io/user/settings), or set the `RUNPOD_API_KEY` environment variable.

## Step 3: Write your app

Create a file called `main.py` with the following code:

```python
import runpod

app = runpod.App("quickstart")

@app.queue(gpu=runpod.GpuGroup.ANY, workers=(0, 3), dependencies=["torch"])
def matrix_multiply(size: int):
    # Import packages inside the function so they load on the worker
    import torch

    a = torch.rand(size, size, device="cuda")
    b = torch.rand(size, size, device="cuda")
    c = a @ b

    return {
        "size": size,
        "mean": c.mean().item(),
        "gpu": torch.cuda.get_device_name(0),
    }

@runpod.local_entrypoint
def main():
    result = matrix_multiply.remote(2000)
    print(f"Matrix size: {result['size']}x{result['size']}")
    print(f"Result mean: {result['mean']:.4f}")
    print(f"GPU used: {result['gpu']}")
```

This code does three things:

- `runpod.App("quickstart")` creates an app to hold your resources.
- `@app.queue(...)` turns `matrix_multiply` into an autoscaling queue endpoint that runs on any available GPU, scales between 0 and 3 workers, and installs `torch` on each worker. To request specific hardware, use a short name such as `gpu="4090"` or `gpu="H100"`.
- `@runpod.local_entrypoint` marks `main` as the code that runs on your machine. Calling `matrix_multiply.remote(2000)` sends the work to Runpod and waits for the result.

> **Warning**
>
> Import installed packages such as `torch` inside the remote function body, not at the top of the file. Top-level imports run on your machine, where the package may not be installed.

## Step 4: Run a live development session

Start a development session:

```bash
rp flash dev main.py
```

The CLI creates a temporary endpoint, runs `main`, and streams worker logs back to your terminal. The first run takes longer while Runpod provisions a worker and installs dependencies:

```text
Matrix size: 2000x2000
Result mean: 500.0412
GPU used: NVIDIA RTX A5000
```

Edit `main.py`, for example by changing `2000` to `4000`, and run it again. Later runs reuse the warm worker, so they return much faster.

When you're done, press Ctrl-C. The session waits for the running entrypoint to finish and then deletes the temporary endpoints.

## Step 5: Deploy your app

When your app works the way you want, deploy it:

```bash
rp flash deploy
```

This creates production endpoints that stay up after you close your terminal. List your deployed apps with:

```bash
rp flash app list
```

## Clean up

To delete the endpoints you deployed, run:

```bash
rp flash undeploy --app quickstart
```

## Next steps

- [Learn what's in the SDK](https://docs.runpod.io/sdk/overview), including tasks, HTTP services, and storage.
- [Build a multi-resource app](https://docs.runpod.io/sdk/apps/build-app) step by step.
- [Configure resources](https://docs.runpod.io/sdk/configuration/parameters) such as GPUs, workers, and storage.
- [Review the CLI commands](https://docs.runpod.io/sdk/cli).
- [Call an existing endpoint](https://docs.runpod.io/serverless/endpoints/send-requests) with `runpod.Endpoint`.
