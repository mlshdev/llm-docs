> Pinned source for Vast.ai main: [sdk/python/reference/update-workers.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/reference/update-workers.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/update-workers

# VastAI.update_workers

Trigger a rolling update of all workers in a workergroup, or cancel an in-progress update.

## Signature

```python
VastAI.update_workers(
    id: int,
    cancel: bool = False
) -> dict
```

## Parameters

**Property (type: int; required)**

id of workergroup to update workers for

**Property (type: bool)**

cancel an in-progress update for the workergroup

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.update_workers(id=12345)
print(result)
```
