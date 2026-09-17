> Pinned source for Vast.ai main: [sdk/python/reference/set-api-key.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/sdk/python/reference/set-api-key.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/set-api-key

# VastAI.set_api_key

Update the API key used by this client.

## Signature

```python
VastAI.set_api_key(
    api_key: str
) -> None
```

## Parameters

**Property (type: str; required)**

## Returns

`None`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.set_api_key(api_key="value")
print(result)
```
