> Commit-pinned source for Vast.ai main: [sdk/python/reference/show-api-key.mdx](https://docs.vast.ai/sdk/python/reference/show-api-key)

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
