> Commit-pinned source for Vast.ai main: [sdk/python/reference/show-volumes.mdx](https://docs.vast.ai/sdk/python/reference/show-volumes)

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
