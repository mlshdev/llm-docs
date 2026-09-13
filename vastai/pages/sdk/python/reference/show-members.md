> Commit-pinned source for Vast.ai main: [sdk/python/reference/show-members.mdx](https://docs.vast.ai/sdk/python/reference/show-members)

# VastAI.show_members

Show all team members.

## Signature

```python
VastAI.show_members() -> list[dict]
```

## Returns

`list[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_members()
print(result)
```
