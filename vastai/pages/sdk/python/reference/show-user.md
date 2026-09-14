> Commit-pinned source for Vast.ai main: [sdk/python/reference/show-user.mdx](https://docs.vast.ai/sdk/python/reference/show-user)

# VastAI.show_user

Show current user details.

## Signature

```python
VastAI.show_user() -> dict
```

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_user()
print(result)
```
