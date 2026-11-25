> Pinned source for Vast.ai main: [sdk/python/reference/recycle-instance.mdx](https://github.com/vast-ai/docs/blob/b0594c0dc62dd2305fdfc24e89104075db59ece5/sdk/python/reference/recycle-instance.mdx)
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
