> Pinned source for Vast.ai main: [sdk/python/reference/create-api-key.mdx](https://github.com/vast-ai/docs/blob/a70abe2c977eb9c4264b544c4d4f876089be70e6/sdk/python/reference/create-api-key.mdx)
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
