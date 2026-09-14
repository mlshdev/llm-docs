> Commit-pinned source for Vast.ai main: [sdk/python/reference/cancel-copy.mdx](https://docs.vast.ai/sdk/python/reference/cancel-copy)

# VastAI.cancel_copy

Cancel a file copy operation.

## Signature

```python
VastAI.cancel_copy(
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
result = client.cancel_copy(dst_id="value")
print(result)
```
