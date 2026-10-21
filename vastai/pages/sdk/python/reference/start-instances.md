> Pinned source for Vast.ai main: [sdk/python/reference/start-instances.mdx](https://github.com/vast-ai/docs/blob/626149741ba46f195c775b2f4c89b7329de2d902/sdk/python/reference/start-instances.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/start-instances

# VastAI.start_instances

Start multiple instances.

## Signature

```python
VastAI.start_instances(
    ids: List[int]
) -> dict
```

## Parameters

**Property (type: List\[int]; required)**

ids of instance to start

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.start_instances(ids=12345)
print(result)
```
