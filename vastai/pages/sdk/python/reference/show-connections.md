> Pinned source for Vast.ai main: [sdk/python/reference/show-connections.mdx](https://github.com/vast-ai/docs/blob/8eadf376553a14870ddea140c39146a88ce44170/sdk/python/reference/show-connections.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-connections

# VastAI.show_connections

Show all connections.

## Signature

```python
VastAI.show_connections() -> list[dict]
```

## Returns

`list[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_connections()
print(result)
```
