> Pinned source for Vast.ai main: [sdk/python/reference/show-instances.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/sdk/python/reference/show-instances.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-instances

# VastAI.show_instances

Return all of the authenticated user's instances as a flat list.

## Signature

```python
VastAI.show_instances() -> list[dict]
```

## Returns

`list[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_instances()
print(result)
```
