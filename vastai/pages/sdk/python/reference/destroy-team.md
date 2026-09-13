> Commit-pinned source for Vast.ai main: [sdk/python/reference/destroy-team.mdx](https://docs.vast.ai/sdk/python/reference/destroy-team)

# VastAI.destroy_team

Destroy the current team.

## Signature

```python
VastAI.destroy_team() -> dict
```

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.destroy_team()
print(result)
```
