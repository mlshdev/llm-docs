> Pinned source for Vast.ai main: [sdk/python/reference/show-env-vars.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/show-env-vars.mdx)
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
