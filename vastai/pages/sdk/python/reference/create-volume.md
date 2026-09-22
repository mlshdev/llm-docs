> Pinned source for Vast.ai main: [sdk/python/reference/create-volume.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/create-volume.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/create-volume

# VastAI.create_volume

Create a new volume from an offer ID.

## Signature

```python
VastAI.create_volume(
    id: int,
    size: float = 15,
    name: Optional[str] = None
) -> dict
```

## Parameters

**Property (type: int; required)**

id of volume offer

**Property (type: float)**

size in GB of volume. Default %(default)s GB.

**Property (type: Optional\[str])**

Optional name of volume.

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.create_volume(id=12345)
print(result)
```
