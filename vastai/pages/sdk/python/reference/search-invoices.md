> Pinned source for Vast.ai main: [sdk/python/reference/search-invoices.mdx](https://github.com/vast-ai/docs/blob/138c1ddd5cfe5761c6391075c1fd0b6c517e059d/sdk/python/reference/search-invoices.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/search-invoices

# VastAI.search_invoices

Search for invoices.

## Signature

```python
VastAI.search_invoices(
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
result = client.search_invoices()
print(result)
```
