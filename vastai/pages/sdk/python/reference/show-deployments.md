> Pinned source for Vast.ai main: [sdk/python/reference/show-deployments.mdx](https://github.com/vast-ai/docs/blob/2b2d9a04e7cb542f3305c0c148c2395b0cfab86e/sdk/python/reference/show-deployments.mdx)
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
