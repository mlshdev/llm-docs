> Pinned source for Vast.ai main: [sdk/python/reference/create-team.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/sdk/python/reference/create-team.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/create-team

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
