> Pinned source for Vast.ai main: [sdk/python/reference/detach-ssh.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/reference/detach-ssh.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/detach-ssh

# VastAI.detach_ssh

Detach an SSH key from an instance.

## Signature

```python
VastAI.detach_ssh(
    instance_id: int,
    ssh_key_id: str
) -> dict
```

## Parameters

**Property (type: int; required)**

id of the instance

**Property (type: str; required)**

id of the key to detach from the instance

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.detach_ssh(instance_id=12345, ssh_key_id="value")
print(result)
```
