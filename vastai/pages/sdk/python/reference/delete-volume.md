> Pinned source for Vast.ai main: [sdk/python/reference/delete-volume.mdx](https://github.com/vast-ai/docs/blob/626149741ba46f195c775b2f4c89b7329de2d902/sdk/python/reference/delete-volume.mdx)
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
