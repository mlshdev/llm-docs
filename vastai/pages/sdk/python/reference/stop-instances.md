> Pinned source for Vast.ai main: [sdk/python/reference/stop-instances.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/stop-instances.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/stop-instances

# VastAI.stop_instances

Stop multiple instances.

## Signature

```python
VastAI.stop_instances(
    ids: List[int]
) -> dict
```

## Parameters

**Property (type: List\[int]; required)**

ids of instance to stop

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.stop_instances(ids=12345)
print(result)
```
