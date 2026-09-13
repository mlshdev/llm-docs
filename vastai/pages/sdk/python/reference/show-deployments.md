> Commit-pinned source for Vast.ai main: [sdk/python/reference/show-deployments.mdx](https://docs.vast.ai/sdk/python/reference/show-deployments)

# VastAI.show_deployments

Return all deployments for the authenticated user.

## Signature

```python
VastAI.show_deployments() -> list[dict]
```

## Returns

`list[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_deployments()
print(result)
```
