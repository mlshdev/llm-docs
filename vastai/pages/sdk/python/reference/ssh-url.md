> Pinned source for Vast.ai main: [sdk/python/reference/ssh-url.mdx](https://github.com/vast-ai/docs/blob/a70abe2c977eb9c4264b544c4d4f876089be70e6/sdk/python/reference/ssh-url.mdx)
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
