> Commit-pinned source for Vast.ai main: [sdk/python/reference/prepay-instance.mdx](https://docs.vast.ai/sdk/python/reference/prepay-instance)

# VastAI.prepay_instance

Prepay for an instance.

## Signature

```python
VastAI.prepay_instance(
    id: int,
    amount: float
) -> dict
```

## Parameters

**Property (type: int; required)**

id of instance to prepay for

**Property (type: float; required)**

amount of instance credit prepayment (default discount func of 0.2 for 1 month, 0.3 for 3 months)

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.prepay_instance(id=12345, amount=1.0)
print(result)
```
