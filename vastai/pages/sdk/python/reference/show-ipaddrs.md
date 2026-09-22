> Pinned source for Vast.ai main: [sdk/python/reference/show-ipaddrs.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/show-ipaddrs.mdx)
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
