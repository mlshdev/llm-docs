> Commit-pinned source for Vast.ai main: [sdk/python/reference/show-team-role.mdx](https://docs.vast.ai/sdk/python/reference/show-team-role)

# VastAI.show_team_role

Show details of a specific team role.

## Signature

```python
VastAI.show_team_role(
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
result = client.show_team_role(name="value")
print(result)
```
