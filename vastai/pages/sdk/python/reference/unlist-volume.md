> Pinned source for Vast.ai main: [sdk/python/reference/unlist-volume.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/sdk/python/reference/unlist-volume.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/unlist-volume

# VastAI.unlist_volume

Unlist a volume offer.

## Signature

```python
VastAI.unlist_volume(
    id: int
) -> dict
```

## Parameters

**Property (type: int; required)**

volume ID you want to unlist

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.unlist_volume(id=12345)
print(result)
```
