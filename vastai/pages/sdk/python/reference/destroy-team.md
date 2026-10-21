> Pinned source for Vast.ai main: [sdk/python/reference/destroy-team.mdx](https://github.com/vast-ai/docs/blob/626149741ba46f195c775b2f4c89b7329de2d902/sdk/python/reference/destroy-team.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/destroy-team

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
