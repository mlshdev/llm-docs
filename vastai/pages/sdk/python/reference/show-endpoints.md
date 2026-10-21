> Pinned source for Vast.ai main: [sdk/python/reference/show-endpoints.mdx](https://github.com/vast-ai/docs/blob/626149741ba46f195c775b2f4c89b7329de2d902/sdk/python/reference/show-endpoints.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-endpoints

# VastAI.show_endpoints

Show all serverless endpoints.

## Signature

```python
VastAI.show_endpoints() -> list[dict]
```

## Returns

`list[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_endpoints()
print(result)
```
