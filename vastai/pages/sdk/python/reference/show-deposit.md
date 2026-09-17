> Pinned source for Vast.ai main: [sdk/python/reference/show-deposit.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/sdk/python/reference/show-deposit.mdx)
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
