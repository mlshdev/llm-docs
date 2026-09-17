> Pinned source for Vast.ai main: [sdk/python/reference/delete-api-key.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/sdk/python/reference/delete-api-key.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/delete-api-key

# VastAI.delete_api_key

Delete an API key.

## Signature

```python
VastAI.delete_api_key(
    id: int
) -> dict
```

## Parameters

**Property (type: int; required)**

id of apikey to remove

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.delete_api_key(id=12345)
print(result)
```
