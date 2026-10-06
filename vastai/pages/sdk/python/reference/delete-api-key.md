> Pinned source for Vast.ai main: [sdk/python/reference/delete-api-key.mdx](https://github.com/vast-ai/docs/blob/991b8e4d53bf7be656511c50cb6c7e8d32b3c0c8/sdk/python/reference/delete-api-key.mdx)
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
