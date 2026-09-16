> Pinned source for Vast.ai main: [sdk/python/reference/show-ipaddrs.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/sdk/python/reference/show-ipaddrs.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-ipaddrs

# VastAI.show_ipaddrs

Show IP addresses.

## Signature

```python
VastAI.show_ipaddrs() -> list[dict]
```

## Returns

`list[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_ipaddrs()
print(result)
```
