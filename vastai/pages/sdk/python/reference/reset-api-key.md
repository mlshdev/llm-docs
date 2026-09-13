> Commit-pinned source for Vast.ai main: [sdk/python/reference/reset-api-key.mdx](https://docs.vast.ai/sdk/python/reference/reset-api-key)

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
