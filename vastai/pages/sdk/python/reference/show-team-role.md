> Pinned source for Vast.ai main: [sdk/python/reference/show-team-role.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/sdk/python/reference/show-team-role.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-team-role

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
