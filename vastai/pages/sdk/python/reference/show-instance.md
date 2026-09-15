> Pinned source for Vast.ai main: [sdk/python/reference/show-instance.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/reference/show-instance.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-instance

# VastAI.show_instance

Return details of a single instance.

## Signature

```python
VastAI.show_instance(
    id: int
) -> Optional[dict]
```

## Parameters

**Property (type: int; required)**

id of instance to get

## Returns

`Optional[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_instance(id=12345)
print(result)
```
