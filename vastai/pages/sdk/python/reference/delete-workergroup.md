> Pinned source for Vast.ai main: [sdk/python/reference/delete-workergroup.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/delete-workergroup.mdx)
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
