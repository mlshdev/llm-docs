> Pinned source for Vast.ai main: [sdk/python/reference/show-team-roles.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/sdk/python/reference/show-team-roles.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-team-roles

# VastAI.show_team_roles

Show all team roles.

## Signature

```python
VastAI.show_team_roles() -> list[dict]
```

## Returns

`list[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_team_roles()
print(result)
```
