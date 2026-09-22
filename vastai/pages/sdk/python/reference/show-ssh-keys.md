> Pinned source for Vast.ai main: [sdk/python/reference/show-ssh-keys.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/show-ssh-keys.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-ssh-keys

# VastAI.show_ssh_keys

Show all SSH keys.

## Signature

```python
VastAI.show_ssh_keys() -> list[dict]
```

## Returns

`list[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_ssh_keys()
print(result)
```
