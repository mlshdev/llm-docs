> Pinned source for Vast.ai main: [sdk/python/reference/show-team-roles.mdx](https://github.com/vast-ai/docs/blob/991b8e4d53bf7be656511c50cb6c7e8d32b3c0c8/sdk/python/reference/show-team-roles.mdx)
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
