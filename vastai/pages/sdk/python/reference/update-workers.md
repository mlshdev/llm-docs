> Commit-pinned source for Vast.ai main: [sdk/python/reference/update-workers.mdx](https://docs.vast.ai/sdk/python/reference/update-workers)

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
