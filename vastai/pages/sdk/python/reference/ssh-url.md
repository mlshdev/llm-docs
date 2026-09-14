> Commit-pinned source for Vast.ai main: [sdk/python/reference/ssh-url.mdx](https://docs.vast.ai/sdk/python/reference/ssh-url)

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
