> Pinned source for Vast.ai main: [sdk/python/reference/update-team-role.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/update-team-role.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/update-team-role

# VastAI.update_team_role

Update an existing team role.

## Signature

```python
VastAI.update_team_role(
    id: int,
    name: Optional[str] = None,
    permissions: Optional[str] = None
) -> dict
```

## Parameters

**Property (type: int; required)**

id of the role

**Property (type: Optional\[str])**

name of the role

**Property (type: Optional\[str])**

file path for json encoded permissions, look in the docs for more information

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.update_team_role(id=12345)
print(result)
```
