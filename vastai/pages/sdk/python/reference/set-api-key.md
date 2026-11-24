> Pinned source for Vast.ai main: [sdk/python/reference/set-api-key.mdx](https://github.com/vast-ai/docs/blob/138c1ddd5cfe5761c6391075c1fd0b6c517e059d/sdk/python/reference/set-api-key.mdx)
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
