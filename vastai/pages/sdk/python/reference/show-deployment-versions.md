> Pinned source for Vast.ai main: [sdk/python/reference/show-deployment-versions.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/sdk/python/reference/show-deployment-versions.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-deployment-versions

# VastAI.show_deployment_versions

Return version history for a deployment.

## Signature

```python
VastAI.show_deployment_versions(
    id: int
) -> list
```

## Parameters

**Property (type: int; required)**

id of deployment to show versions for

## Returns

`list`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_deployment_versions(id=12345)
print(result)
```
