> Pinned source for Vast.ai main: [sdk/python/reference/show-env-vars.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/sdk/python/reference/show-env-vars.mdx)
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
