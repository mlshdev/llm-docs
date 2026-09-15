> Pinned source for Vast.ai main: [sdk/python/reference/list-volumes.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/reference/list-volumes.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/list-volumes

# VastAI.list_volumes

List disk space for rent as volumes on multiple machines.

## Signature

```python
VastAI.list_volumes(
    ids: Any,
    price_disk: Optional[float] = 0.1,
    end_date: Optional[str] = None,
    size: Optional[str] = 15
) -> dict
```

## Parameters

**Property (type: Any; required)**

id of machines list

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
result = client.list_volumes(ids="value")
print(result)
```
