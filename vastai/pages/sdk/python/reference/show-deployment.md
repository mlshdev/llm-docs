> Commit-pinned source for Vast.ai main: [sdk/python/reference/show-deployment.mdx](https://docs.vast.ai/sdk/python/reference/show-deployment)

# VastAI.show_deployment

Return details of a single deployment.

## Signature

```python
VastAI.show_deployment(
    id: int
) -> dict
```

## Parameters

**Property (type: int; required)**

id of deployment to show info for

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_deployment(id=12345)
print(result)
```
