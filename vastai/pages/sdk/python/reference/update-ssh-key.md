> Pinned source for Vast.ai main: [sdk/python/reference/update-ssh-key.mdx](https://github.com/vast-ai/docs/blob/b0594c0dc62dd2305fdfc24e89104075db59ece5/sdk/python/reference/update-ssh-key.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/update-ssh-key

# VastAI.update_ssh_key

Update an SSH key.

## Signature

```python
VastAI.update_ssh_key(
    id: int,
    ssh_key: str
) -> dict
```

## Parameters

**Property (type: int; required)**

id of the ssh key to update

**Property (type: str; required)**

new public key value

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.update_ssh_key(id=12345, ssh_key="value")
print(result)
```
