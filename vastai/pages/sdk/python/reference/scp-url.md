> Pinned source for Vast.ai main: [sdk/python/reference/scp-url.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/sdk/python/reference/scp-url.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/scp-url

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
