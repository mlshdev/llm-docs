> Pinned source for Vast.ai main: [sdk/python/reference/delete-deployment.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/sdk/python/reference/delete-deployment.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/delete-deployment

# VastAI.delete_deployment

Delete a deployment.

## Signature

```python
VastAI.delete_deployment(
    id: int
) -> dict
```

## Parameters

**Property (type: int; required)**

id of deployment to delete

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.delete_deployment(id=12345)
print(result)
```
