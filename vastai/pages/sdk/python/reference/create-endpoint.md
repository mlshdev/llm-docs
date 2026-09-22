> Pinned source for Vast.ai main: [sdk/python/reference/create-endpoint.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/create-endpoint.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/create-endpoint

# VastAI.create_endpoint

Create a new serverless endpoint.

## Signature

```python
VastAI.create_endpoint(
    min_load: Optional[float] = 0.0,
    min_cold_load: Optional[float] = 0.0,
    target_util: Optional[float] = 0.9,
    cold_mult: Optional[float] = 2.5,
    cold_workers: Optional[int] = 5,
    max_workers: Optional[int] = 20,
    endpoint_name: Optional[str] = None,
    max_queue_time: Optional[float] = None,
    target_queue_time: Optional[float] = None,
    inactivity_timeout: Optional[int] = None
) -> dict
```

## Parameters

**Property (type: Optional\[float])**

minimum floor load in perf units/s  (token/s for LLms)

**Property (type: Optional\[float])**

minimum floor load in perf units/s (token/s for LLms), but allow handling with cold workers

**Property (type: Optional\[float])**

target capacity utilization (fraction, max 1.0, default 0.9)

**Property (type: Optional\[float])**

cold/stopped instance capacity target as multiple of hot capacity target (default 2.5)

**Property (type: Optional\[int])**

min number of workers to keep 'cold' when you have no load (default 5)

**Property (type: Optional\[int])**

max number of workers your endpoint group can have (default 20)

**Property (type: Optional\[str])**

deployment endpoint name (allows multiple autoscale groups to share same deployment endpoint)

**Property (type: Optional\[float])**

maximum seconds requests may be queued on each worker (default 30.0)

**Property (type: Optional\[float])**

target seconds for the queue to be cleared (default 10.0)

**Property (type: Optional\[int])**

seconds of no traffic before the endpoint can scale to zero active workers

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.create_endpoint()
print(result)
```
