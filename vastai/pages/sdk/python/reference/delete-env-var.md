> Pinned source for Vast.ai main: [sdk/python/reference/delete-env-var.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/sdk/python/reference/delete-env-var.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/delete-env-var

# VastAI.delete_env_var

Delete a user environment variable.

## Signature

```python
VastAI.delete_env_var(
    name: str
) -> dict
```

## Parameters

**Property (type: str; required)**

Environment variable name to delete

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.delete_env_var(name="value")
print(result)
```
