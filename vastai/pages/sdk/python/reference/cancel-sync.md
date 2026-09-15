> Pinned source for Vast.ai main: [sdk/python/reference/cancel-sync.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/reference/cancel-sync.mdx)
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
