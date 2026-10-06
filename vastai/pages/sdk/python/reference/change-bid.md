> Pinned source for Vast.ai main: [sdk/python/reference/change-bid.mdx](https://github.com/vast-ai/docs/blob/a70abe2c977eb9c4264b544c4d4f876089be70e6/sdk/python/reference/change-bid.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/change-bid

# VastAI.change_bid

Change the bid price for an instance.

## Signature

```python
VastAI.change_bid(
    id: int,
    price: Optional[float] = None
) -> dict
```

## Parameters

**Property (type: int; required)**

id of instance type to change bid

**Property (type: Optional\[float])**

per machine bid price in $/hour

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.change_bid(id=12345)
print(result)
```
