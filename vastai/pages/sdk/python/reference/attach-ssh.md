> Pinned source for Vast.ai main: [sdk/python/reference/attach-ssh.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/sdk/python/reference/attach-ssh.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/attach-ssh

# VastAI.attach_ssh

Attach an SSH key to an instance.

## Signature

```python
VastAI.attach_ssh(
    instance_id: int,
    ssh_key: str
) -> dict
```

## Parameters

**Property (type: int; required)**

id of instance to attach to

**Property (type: str; required)**

ssh key to attach to instance

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.attach_ssh(instance_id=12345, ssh_key="value")
print(result)
```
