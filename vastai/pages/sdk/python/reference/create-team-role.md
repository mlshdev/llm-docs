> Pinned source for Vast.ai main: [sdk/python/reference/create-team-role.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/reference/create-team-role.mdx)
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
