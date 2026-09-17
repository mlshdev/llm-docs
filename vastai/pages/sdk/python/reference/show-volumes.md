> Pinned source for Vast.ai main: [sdk/python/reference/show-volumes.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/sdk/python/reference/show-volumes.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-volumes

# VastAI.show_volumes

Show stats on owned volumes.

## Signature

```python
VastAI.show_volumes(
    type: str = 'all'
) -> list[dict]
```

## Parameters

**Property (type: str)**

volume type to display. Default to all. Possible values are "local", "all", "network"

## Returns

`list[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_volumes()
print(result)
```
