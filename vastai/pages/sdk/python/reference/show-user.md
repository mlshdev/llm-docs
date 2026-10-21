> Pinned source for Vast.ai main: [sdk/python/reference/show-user.mdx](https://github.com/vast-ai/docs/blob/626149741ba46f195c775b2f4c89b7329de2d902/sdk/python/reference/show-user.mdx)
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
