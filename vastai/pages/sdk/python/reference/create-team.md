> Commit-pinned source for Vast.ai main: [sdk/python/reference/create-team.mdx](https://docs.vast.ai/sdk/python/reference/create-team)

# VastAI.create_team

Create a new team.

## Signature

```python
VastAI.create_team(
    team_name: str
) -> dict
```

## Parameters

**Property (type: str; required)**

name of the team

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.create_team(team_name="value")
print(result)
```
