> Pinned source for Vast.ai main: [sdk/python/reference/show-deposit.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/sdk/python/reference/show-deposit.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-deposit

# VastAI.show_deposit

Show deposit details.

## Signature

```python
VastAI.show_deposit(
    id: int
) -> dict
```

## Parameters

**Property (type: int; required)**

id of instance to get info for

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_deposit(id=12345)
print(result)
```
