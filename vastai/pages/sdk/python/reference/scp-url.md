> Pinned source for Vast.ai main: [sdk/python/reference/scp-url.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/scp-url.mdx)
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
