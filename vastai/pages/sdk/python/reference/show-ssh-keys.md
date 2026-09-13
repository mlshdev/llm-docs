> Commit-pinned source for Vast.ai main: [sdk/python/reference/show-ssh-keys.mdx](https://docs.vast.ai/sdk/python/reference/show-ssh-keys)

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
