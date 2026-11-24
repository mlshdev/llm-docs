> Pinned source for Vast.ai main: [sdk/python/reference/show-instance.mdx](https://github.com/vast-ai/docs/blob/138c1ddd5cfe5761c6391075c1fd0b6c517e059d/sdk/python/reference/show-instance.mdx)
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
