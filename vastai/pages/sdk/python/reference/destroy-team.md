> Pinned source for Vast.ai main: [sdk/python/reference/destroy-team.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/destroy-team.mdx)
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
