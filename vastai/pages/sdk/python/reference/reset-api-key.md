> Pinned source for Vast.ai main: [sdk/python/reference/reset-api-key.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/reset-api-key.mdx)
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
