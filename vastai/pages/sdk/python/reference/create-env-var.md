> Pinned source for Vast.ai main: [sdk/python/reference/create-env-var.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/reference/create-env-var.mdx)
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
