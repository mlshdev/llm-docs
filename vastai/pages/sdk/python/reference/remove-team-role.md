> Commit-pinned source for Vast.ai main: [sdk/python/reference/remove-team-role.mdx](https://docs.vast.ai/sdk/python/reference/remove-team-role)

# VastAI.remove_team_role

Remove a team role.

## Signature

```python
VastAI.remove_team_role(
    name: str
) -> dict
```

## Parameters

**Property (type: str; required)**

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.remove_team_role(name="value")
print(result)
```
