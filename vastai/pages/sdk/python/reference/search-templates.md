> Pinned source for Vast.ai main: [sdk/python/reference/search-templates.mdx](https://github.com/vast-ai/docs/blob/2b2d9a04e7cb542f3305c0c148c2395b0cfab86e/sdk/python/reference/search-templates.mdx)
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
