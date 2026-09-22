> Pinned source for Vast.ai main: [sdk/python/reference/cancel-sync.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/cancel-sync.mdx)
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
