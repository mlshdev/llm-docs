> Pinned source for Vast.ai main: [sdk/python/reference/destroy-instance.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/destroy-instance.mdx)
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
