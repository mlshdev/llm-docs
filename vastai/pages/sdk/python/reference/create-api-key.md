> Pinned source for Vast.ai main: [sdk/python/reference/create-api-key.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/reference/create-api-key.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/create-api-key

# VastAI.create_api_key

Create a new API key.

## Signature

```python
VastAI.create_api_key(
    name: Any,
    permissions: Any,
    key_params: Any = None
) -> dict
```

## Parameters

**Property (type: Any; required)**

name of the api-key

**Property (type: Any; required)**

**Property (type: Any)**

optional wildcard key params for advanced keys

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.create_api_key(name="value", permissions="value")
print(result)
```
