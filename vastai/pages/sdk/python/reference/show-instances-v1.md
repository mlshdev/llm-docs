> Pinned source for Vast.ai main: [sdk/python/reference/show-instances-v1.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/sdk/python/reference/show-instances-v1.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-instances-v1

# VastAI.show_instances_v1

Return instances using the paginated v1 API; for filtering, sorting, and manual pagination.

## Signature

```python
VastAI.show_instances_v1(
    params: dict
) -> dict
```

## Parameters

**Property (type: dict; required)**

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_instances_v1(params={})
print(result)
```
