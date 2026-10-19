> Pinned source for Vast.ai main: [sdk/python/reference/recycle-instance.mdx](https://github.com/vast-ai/docs/blob/e0e0293c3626e419c16dcfc6f799976252de5c5f/sdk/python/reference/recycle-instance.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/recycle-instance

# VastAI.recycle_instance

Recycle an instance.

## Signature

```python
VastAI.recycle_instance(
    id: int
) -> dict
```

## Parameters

**Property (type: int; required)**

id of instance to recycle

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.recycle_instance(id=12345)
print(result)
```
