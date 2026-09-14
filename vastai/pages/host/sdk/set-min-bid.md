> Pinned source for Vast.ai main: [host/sdk/set-min-bid.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/host/sdk/set-min-bid.mdx)
> Canonical documentation: https://docs.vast.ai/host/sdk/set-min-bid

# VastAI.set_min_bid

Set the minimum bid price for a machine.

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;method, used for managing machines you are renting out on Vast.ai.

## Signature

```python
VastAI.set_min_bid(id: int, price: Optional[float] = None) -> str
```

## Parameters

**Property (type: int; required)**

id

**Property (type: Optional\[float])**

price

## Returns

`str`, Result from the API call.

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.set_min_bid(id=12345)
print(result)
```
