> Pinned source for Vast.ai main: [sdk/python/reference/update-endpoint.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/reference/update-endpoint.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/update-endpoint

# VastAI.update_endpoint

Update an existing endpoint.

## Signature

```python
VastAI.update_endpoint(
    id: int,
    min_load: Optional[float] = None,
    min_cold_load: Optional[float] = None,
    endpoint_state: Optional[str] = None,
    target_util: Optional[float] = None,
    cold_mult: Optional[float] = None,
    cold_workers: Optional[int] = None,
    max_workers: Optional[int] = None,
    endpoint_name: Optional[str] = None,
    max_queue_time: Optional[float] = None,
    target_queue_time: Optional[float] = None,
    inactivity_timeout: Optional[int] = None
) -> dict
```

## Parameters

**Property (type: int; required)**

id of endpoint group to update

**Property (type: Optional\[float])**

minimum floor load in perf units/s  (token/s for LLms)

**Property (type: Optional\[float])**

minimum floor load in perf units/s  (token/s for LLms), but allow handling with cold workers

**Property (type: Optional\[str])**

active, suspended, or stopped

**Property (type: Optional\[float])**

target capacity utilization (fraction, max 1.0, default 0.9)

**Property (type: Optional\[float])**

cold/stopped instance capacity target as multiple of hot capacity target (default 2.5)

**Property (type: Optional\[int])**

min number of workers to keep 'cold' when you have no load (default 5)

**Property (type: Optional\[int])**

max number of workers your endpoint group can have (default 20)

**Property (type: Optional\[str])**

deployment endpoint name (allows multiple workergroups to share same deployment endpoint)

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
result = client.update_endpoint(id=12345)
print(result)
```
