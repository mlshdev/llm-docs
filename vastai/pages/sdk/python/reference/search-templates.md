> Pinned source for Vast.ai main: [sdk/python/reference/search-templates.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/reference/search-templates.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/search-templates

# VastAI.search_templates

Search for templates.

## Signature

```python
VastAI.search_templates(
    query: Optional[Union[str, dict]] = None
) -> list[dict]
```

## Parameters

**Property (type: Optional\[Union\[str, dict]])**

Search query in simple query syntax (see below)

## Returns

`list[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.search_templates()
print(result)
```
