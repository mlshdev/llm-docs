> Pinned source for Vast.ai main: [sdk/python/reference/delete-workergroup.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/sdk/python/reference/delete-workergroup.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/delete-workergroup

# VastAI.delete_workergroup

Delete a worker group.

## Signature

```python
VastAI.delete_workergroup(
    id: int
) -> dict
```

## Parameters

**Property (type: int; required)**

id of group to delete

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.delete_workergroup(id=12345)
print(result)
```
