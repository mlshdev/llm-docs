> Pinned source for Vast.ai main: [sdk/python/reference/search-benchmarks.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/reference/search-benchmarks.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/search-benchmarks

# VastAI.search_benchmarks

Search for benchmarks.

## Signature

```python
VastAI.search_benchmarks(
    query: Optional[Union[str, dict]] = None,
    order: Optional[list] = None,
    limit: Optional[int] = None,
    after_token: Optional[str] = None,
    all_pages: bool = False
) -> list[dict]
```

## Parameters

**Property (type: Optional\[Union\[str, dict]])**

Search query in simple query syntax (see below)

**Property (type: Optional\[list])**

**Property (type: Optional\[int])**

max results per page; passing this switches to single-page mode instead of fetching everything

**Property (type: Optional\[str])**

**Property (type: bool)**

## Returns

`list[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.search_benchmarks()
print(result)
```
