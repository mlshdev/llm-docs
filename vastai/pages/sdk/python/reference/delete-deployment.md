> Pinned source for Vast.ai main: [sdk/python/reference/delete-deployment.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/sdk/python/reference/delete-deployment.mdx)
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
