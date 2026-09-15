> Pinned source for Vast.ai main: [sdk/python/reference/create-ssh-key.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/reference/create-ssh-key.mdx)
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
