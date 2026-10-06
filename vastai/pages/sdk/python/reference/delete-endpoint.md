> Pinned source for Vast.ai main: [sdk/python/reference/delete-endpoint.mdx](https://github.com/vast-ai/docs/blob/991b8e4d53bf7be656511c50cb6c7e8d32b3c0c8/sdk/python/reference/delete-endpoint.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/delete-endpoint

# VastAI.delete_endpoint

Delete a serverless endpoint.

## Signature

```python
VastAI.delete_endpoint(
    id: int
) -> dict
```

## Parameters

**Property (type: int; required)**

id of endpoint group to delete

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.delete_endpoint(id=12345)
print(result)
```
