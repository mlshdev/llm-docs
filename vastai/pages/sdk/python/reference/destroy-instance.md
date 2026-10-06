> Pinned source for Vast.ai main: [sdk/python/reference/destroy-instance.mdx](https://github.com/vast-ai/docs/blob/991b8e4d53bf7be656511c50cb6c7e8d32b3c0c8/sdk/python/reference/destroy-instance.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/destroy-instance

# VastAI.destroy_instance

Destroy an instance.

## Signature

```python
VastAI.destroy_instance(
    id: int
) -> dict
```

## Parameters

**Property (type: int; required)**

id of instance to delete

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.destroy_instance(id=12345)
print(result)
```
