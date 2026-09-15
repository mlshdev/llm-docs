> Pinned source for Vast.ai main: [sdk/python/reference/remove-team-role.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/reference/remove-team-role.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/remove-team-role

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
