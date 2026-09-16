> Pinned source for Vast.ai main: [sdk/python/reference/create-team-role.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/sdk/python/reference/create-team-role.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/create-team-role

# VastAI.create_team_role

Create a new team role.

## Signature

```python
VastAI.create_team_role(
    name: str,
    permissions: Any
) -> dict
```

## Parameters

**Property (type: str; required)**

name of the role

**Property (type: Any; required)**

file path for json encoded permissions, look in the docs for more information

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.create_team_role(name="value", permissions="value")
print(result)
```
