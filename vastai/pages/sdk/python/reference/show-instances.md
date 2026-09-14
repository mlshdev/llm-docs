> Commit-pinned source for Vast.ai main: [sdk/python/reference/show-instances.mdx](https://docs.vast.ai/sdk/python/reference/show-instances)

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
