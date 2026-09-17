> Pinned source for Vast.ai main: [sdk/python/reference/search-volumes.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/sdk/python/reference/search-volumes.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/search-volumes

# VastAI.search_volumes

Search for volume offers.

## Signature

```python
VastAI.search_volumes(
    query: Optional[Union[str, dict]] = None,
    order: Optional[Union[str, list]] = None,
    limit: Optional[int] = None,
    storage: float = 1.0,
    no_default: bool = False
) -> list[dict]
```

## Parameters

**Property (type: Optional\[Union\[str, dict]])**

Query to search for. default: 'external=false verified=true disk\_space>=1', pass -n to ignore default

**Property (type: Optional\[Union\[str, list]])**

Comma-separated list of fields to sort on. postfix field with - to sort desc. ex: -o 'disk\_space,inet\_up-'.  default='score-'

**Property (type: Optional\[int])**

**Property (type: float)**

Amount of storage to use for pricing, in GiB. default=1.0GiB

**Property (type: bool)**

Disable default query

## Returns

`list[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.search_volumes()
print(result)
```
