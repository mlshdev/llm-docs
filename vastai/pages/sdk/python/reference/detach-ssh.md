> Pinned source for Vast.ai main: [sdk/python/reference/detach-ssh.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/detach-ssh.mdx)
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
