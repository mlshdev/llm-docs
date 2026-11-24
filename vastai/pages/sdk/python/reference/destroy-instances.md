> Pinned source for Vast.ai main: [sdk/python/reference/destroy-instances.mdx](https://github.com/vast-ai/docs/blob/138c1ddd5cfe5761c6391075c1fd0b6c517e059d/sdk/python/reference/destroy-instances.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/destroy-instances

# VastAI.destroy_instances

Destroy multiple instances.

## Signature

```python
VastAI.destroy_instances(
    ids: List[int]
) -> dict
```

## Parameters

**Property (type: List\[int]; required)**

ids of instance to destroy

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.destroy_instances(ids=12345)
print(result)
```
