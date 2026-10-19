> Pinned source for Vast.ai main: [sdk/python/reference/show-deployments.mdx](https://github.com/vast-ai/docs/blob/e0e0293c3626e419c16dcfc6f799976252de5c5f/sdk/python/reference/show-deployments.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-deployments

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
