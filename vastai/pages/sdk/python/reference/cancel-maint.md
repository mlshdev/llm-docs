> Commit-pinned source for Vast.ai main: [sdk/python/reference/cancel-maint.mdx](https://docs.vast.ai/sdk/python/reference/cancel-maint)

# VastAI.cancel_maint

Cancel scheduled maintenance for a machine.

> **Note**
>
> This is a&#x20;
>
> **host**
>
> &#x20;method, used for managing machines you are renting out on Vast.ai.

## Signature

```python
VastAI.cancel_maint(id: int) -> str
```

## Parameters

**Property (type: int; required)**

id

## Returns

`str`, Result from the API call.

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.cancel_maint(id=12345)
print(result)
```
