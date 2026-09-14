> Pinned source for Vast.ai main: [sdk/python/reference/set-user.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/sdk/python/reference/set-user.mdx)
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
