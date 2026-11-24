> Pinned source for Vast.ai main: [sdk/python/reference/delete-workergroup.mdx](https://github.com/vast-ai/docs/blob/138c1ddd5cfe5761c6391075c1fd0b6c517e059d/sdk/python/reference/delete-workergroup.mdx)
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
