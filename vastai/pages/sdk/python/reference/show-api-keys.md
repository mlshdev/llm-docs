> Pinned source for Vast.ai main: [sdk/python/reference/show-api-keys.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/sdk/python/reference/show-api-keys.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-api-keys

# VastAI.show_api_keys

Return all API keys associated with the account.

## Signature

```python
VastAI.show_api_keys() -> list[dict]
```

## Returns

`list[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_api_keys()
print(result)
```
