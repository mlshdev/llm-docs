> Pinned source for Vast.ai main: [host/sdk/set-min-bid.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/host/sdk/set-min-bid.mdx)
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
