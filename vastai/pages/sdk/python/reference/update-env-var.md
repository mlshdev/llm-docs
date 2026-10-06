> Pinned source for Vast.ai main: [sdk/python/reference/update-env-var.mdx](https://github.com/vast-ai/docs/blob/991b8e4d53bf7be656511c50cb6c7e8d32b3c0c8/sdk/python/reference/update-env-var.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/update-env-var

# VastAI.update_env_var

Update an existing user environment variable.

## Signature

```python
VastAI.update_env_var(
    name: str,
    value: str
) -> dict
```

## Parameters

**Property (type: str; required)**

Environment variable name to update

**Property (type: str; required)**

New environment variable value

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.update_env_var(name="value", value="value")
print(result)
```
