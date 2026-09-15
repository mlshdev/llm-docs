> Pinned source for Vast.ai main: [sdk/python/reference/start-instance.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/reference/start-instance.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/start-instance

# VastAI.start_instance

Start a stopped instance.

## Signature

```python
VastAI.start_instance(
    id: int
) -> dict
```

## Parameters

**Property (type: int; required)**

ID of instance to start/restart

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.start_instance(id=12345)
print(result)
```
