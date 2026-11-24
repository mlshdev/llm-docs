> Pinned source for Vast.ai main: [sdk/python/reference/stop-instance.mdx](https://github.com/vast-ai/docs/blob/138c1ddd5cfe5761c6391075c1fd0b6c517e059d/sdk/python/reference/stop-instance.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/stop-instance

# VastAI.stop_instance

Stop a running instance.

## Signature

```python
VastAI.stop_instance(
    id: int
) -> dict
```

## Parameters

**Property (type: int; required)**

id of instance to stop

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.stop_instance(id=12345)
print(result)
```
