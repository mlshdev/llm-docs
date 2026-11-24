> Pinned source for Vast.ai main: [sdk/python/reference/start-instance.mdx](https://github.com/vast-ai/docs/blob/138c1ddd5cfe5761c6391075c1fd0b6c517e059d/sdk/python/reference/start-instance.mdx)
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
