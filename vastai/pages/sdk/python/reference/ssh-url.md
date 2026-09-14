> Pinned source for Vast.ai main: [sdk/python/reference/ssh-url.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/sdk/python/reference/ssh-url.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/ssh-url

# VastAI.ssh_url

Get the SSH URL for an instance.

## Signature

```python
VastAI.ssh_url(
    id: int
) -> str
```

## Parameters

**Property (type: int; required)**

id of instance

## Returns

`str`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.ssh_url(id=12345)
print(result)
```
