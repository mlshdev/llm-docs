> Pinned source for Vast.ai main: [sdk/python/reference/show-subaccounts.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/sdk/python/reference/show-subaccounts.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-subaccounts

# VastAI.show_subaccounts

Show all subaccounts.

## Signature

```python
VastAI.show_subaccounts() -> list[dict]
```

## Returns

`list[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_subaccounts()
print(result)
```
