> Pinned source for Vast.ai main: [sdk/python/reference/ssh-url.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/reference/ssh-url.mdx)
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
