> Pinned source for Vast.ai main: [sdk/python/reference/destroy-team.mdx](https://github.com/vast-ai/docs/blob/8eadf376553a14870ddea140c39146a88ce44170/sdk/python/reference/destroy-team.mdx)
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
