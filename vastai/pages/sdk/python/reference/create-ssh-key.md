> Pinned source for Vast.ai main: [sdk/python/reference/create-ssh-key.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/create-ssh-key.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/create-ssh-key

# VastAI.create_ssh_key

Create a new SSH key.

## Signature

```python
VastAI.create_ssh_key(
    ssh_key: Optional[str] = None
) -> dict
```

## Parameters

**Property (type: Optional\[str])**

add your existing ssh public key to your account (from the .pub file). If no public key is provided, a new key pair will be generated.

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.create_ssh_key()
print(result)
```
