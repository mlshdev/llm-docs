> Pinned source for Vast.ai main: [sdk/python/reference/cancel-sync.mdx](https://github.com/vast-ai/docs/blob/a70abe2c977eb9c4264b544c4d4f876089be70e6/sdk/python/reference/cancel-sync.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/cancel-sync

# VastAI.cancel_sync

Cancel a file sync operation.

## Signature

```python
VastAI.cancel_sync(
    dst_id: Any
) -> dict
```

## Parameters

**Property (type: Any; required)**

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.cancel_sync(dst_id="value")
print(result)
```
