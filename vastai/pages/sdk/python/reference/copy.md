> Pinned source for Vast.ai main: [sdk/python/reference/copy.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/sdk/python/reference/copy.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/copy

# VastAI.copy

Copy files between instances, volumes, cloud services, and local.

## Signature

```python
VastAI.copy(
    src: str,
    dst: str
) -> dict
```

## Parameters

**Property (type: str; required)**

Source location for copy operation (supports multiple formats)

**Property (type: str; required)**

Target location for copy operation (supports multiple formats)

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.copy(src="value", dst="value")
print(result)
```
