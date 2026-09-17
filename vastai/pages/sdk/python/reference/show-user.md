> Pinned source for Vast.ai main: [sdk/python/reference/show-user.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/sdk/python/reference/show-user.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-user

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
