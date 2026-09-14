> Pinned source for Vast.ai main: [sdk/python/reference/show-env-vars.mdx](https://github.com/vast-ai/docs/blob/175a318c27750ea64da94f043dda39ec5cb26259/sdk/python/reference/show-env-vars.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-env-vars

# VastAI.show_env_vars

Show user environment variables.

## Signature

```python
VastAI.show_env_vars(
    show_values: bool = False
) -> dict
```

## Parameters

**Property (type: bool)**

Show the values of environment variables

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_env_vars()
print(result)
```
