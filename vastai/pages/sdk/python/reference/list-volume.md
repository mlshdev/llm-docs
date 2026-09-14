> Pinned source for Vast.ai main: [sdk/python/reference/list-volume.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/sdk/python/reference/list-volume.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/list-volume

# VastAI.list_volume

List disk space for rent as a volume.

## Signature

```python
VastAI.list_volume(
    id: int,
    price_disk: Optional[float] = 0.1,
    end_date: Optional[str] = None,
    size: Optional[str] = 15
) -> dict
```

## Parameters

**Property (type: int; required)**

id of machine to list

**Property (type: Optional\[float])**

storage price in $/GB/month, default: $%(default).2f/GB/month

**Property (type: Optional\[str])**

contract offer expiration - the available until date (optional, in unix float timestamp or MM/DD/YYYY format), default 3 months

**Property (type: Optional\[str])**

size of disk space allocated to offer in GB, default %(default)s GB

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.list_volume(id=12345)
print(result)
```
