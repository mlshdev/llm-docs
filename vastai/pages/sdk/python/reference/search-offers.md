> Pinned source for Vast.ai main: [sdk/python/reference/search-offers.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/sdk/python/reference/search-offers.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/search-offers

# VastAI.search_offers

Search for GPU offers.

## Signature

```python
VastAI.search_offers(
    query: Any = None,
    type: str = 'on-demand',
    order: str = 'score-',
    limit: Optional[int] = None,
    storage: float = 5.0,
    no_default: bool = False
) -> list
```

## Parameters

**Property (type: Any)**

Query to search for. default: 'external=false rentable=true verified=true', pass -n to ignore default

**Property (type: str)**

Alias for --type=on-demand

**Property (type: str)**

Comma-separated list of fields to sort on. postfix field with - to sort desc. ex: -o 'num\_gpus,total\_flops-'.  default='score-'

**Property (type: Optional\[int])**

**Property (type: float)**

Amount of storage to use for pricing, in GiB. default=5.0GiB

**Property (type: bool)**

Disable default query

## Returns

`list`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.search_offers()
print(result)
```
