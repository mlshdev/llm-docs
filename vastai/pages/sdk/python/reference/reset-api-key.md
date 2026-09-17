> Pinned source for Vast.ai main: [sdk/python/reference/reset-api-key.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/sdk/python/reference/reset-api-key.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/reset-api-key

# VastAI.reset_api_key

Reset the API key.

## Signature

```python
VastAI.reset_api_key() -> dict
```

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.reset_api_key()
print(result)
```
