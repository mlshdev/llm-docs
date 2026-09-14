> Commit-pinned source for Vast.ai main: [sdk/python/reference/vastai.mdx](https://docs.vast.ai/sdk/python/reference/vastai)

# VastAI

The `VastAI` class is the main client for interacting with the Vast.ai platform. It wraps the CLI commands as Python methods with typed signatures.

## Installation

```bash
pip install vastai
```

## Quick Start

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")

# Search for GPU offers
offers = client.search_offers(query="gpu_name=RTX_3090 rentable=True")
print(offers)

# Show your instances
instances = client.show_instances()
print(instances)
```

## Constructor

```python
VastAI(
    api_key=None,
    server_url=None,
    retry=3,
    raw=False,
    explain=False,
    quiet=False,
    curl=False
)
```

**Property (type: Optional\[str])**

Your Vast.ai API key. If not provided, reads from `~/.config/vastai/vast_api_key`.

**Property (type: Optional\[str])**

The Vast.ai API server URL. Defaults to `https://console.vast.ai` when unset.

**Property (type: int)**

Number of retry attempts for failed API requests.

**Property (type: bool)**

Return raw JSON responses instead of formatted output.

**Property (type: bool)**

Print verbose explanations of API calls.

**Property (type: bool)**

Suppress non-essential output.

**Property (type: bool)**

Print equivalent curl commands for API calls.

> **Note**
>
> If&#x20;
>
> `api_key`
>
> &#x20;is not provided, the&#x20;
>
> `VastAI`
>
> &#x20;class reads it from&#x20;
>
> `~/.vast_api_key`
>
> .

## Getting Help

Use Python's built-in `help()` to view documentation for any method:

```python
help(client.search_offers)
```
