> Pinned source for Vast.ai main: [sdk/python/reference/show-deposit.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/reference/show-deposit.mdx)
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
