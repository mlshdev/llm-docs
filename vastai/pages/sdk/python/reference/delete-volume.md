> Pinned source for Vast.ai main: [sdk/python/reference/delete-volume.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/sdk/python/reference/delete-volume.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/delete-volume

# VastAI.delete_volume

Delete a volume.

## Signature

```python
VastAI.delete_volume(
    id: int
) -> dict
```

## Parameters

**Property (type: int; required)**

id of volume contract

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.delete_volume(id=12345)
print(result)
```
