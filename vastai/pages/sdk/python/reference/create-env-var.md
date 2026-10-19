> Pinned source for Vast.ai main: [sdk/python/reference/create-env-var.mdx](https://github.com/vast-ai/docs/blob/e0e0293c3626e419c16dcfc6f799976252de5c5f/sdk/python/reference/create-env-var.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/create-env-var

# VastAI.create_env_var

Create a new user environment variable.

## Signature

```python
VastAI.create_env_var(
    name: str,
    value: str
) -> dict
```

## Parameters

**Property (type: str; required)**

Environment variable name

**Property (type: str; required)**

Environment variable value

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.create_env_var(name="value", value="value")
print(result)
```
