> Pinned source for Vast.ai main: [sdk/python/reference/set-user.mdx](https://github.com/vast-ai/docs/blob/8629af9a05e884dd603b6a24bbb7c39826c1a10d/sdk/python/reference/set-user.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/set-user

# VastAI.set_user

Set user parameters.

## Signature

```python
VastAI.set_user(
    params: Any
) -> dict
```

## Parameters

**Property (type: Any; required)**

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.set_user(params="value")
print(result)
```
