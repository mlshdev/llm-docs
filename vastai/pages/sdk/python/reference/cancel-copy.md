> Pinned source for Vast.ai main: [sdk/python/reference/cancel-copy.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/sdk/python/reference/cancel-copy.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/cancel-copy

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
