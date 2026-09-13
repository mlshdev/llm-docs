> Commit-pinned source for Vast.ai main: [sdk/python/reference/scp-url.mdx](https://docs.vast.ai/sdk/python/reference/scp-url)

# VastAI.scp_url

Get the SCP URL for an instance.

## Signature

```python
VastAI.scp_url(
    id: int
) -> str
```

## Parameters

**Property (type: int; required)**

id

## Returns

`str`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.scp_url(id=12345)
print(result)
```
