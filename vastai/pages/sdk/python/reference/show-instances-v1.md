> Pinned source for Vast.ai main: [sdk/python/reference/show-instances-v1.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/sdk/python/reference/show-instances-v1.mdx)
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
