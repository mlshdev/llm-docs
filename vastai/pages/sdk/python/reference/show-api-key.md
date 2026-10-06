> Pinned source for Vast.ai main: [sdk/python/reference/show-api-key.mdx](https://github.com/vast-ai/docs/blob/a70abe2c977eb9c4264b544c4d4f876089be70e6/sdk/python/reference/show-api-key.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-api-key

# VastAI.show_api_key

Show details of an API key.

## Signature

```python
VastAI.show_api_key(
    id: int
) -> dict
```

## Parameters

**Property (type: int; required)**

id of apikey to get

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_api_key(id=12345)
print(result)
```
