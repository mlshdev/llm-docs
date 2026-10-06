> Pinned source for Vast.ai main: [sdk/python/reference/show-workergroups.mdx](https://github.com/vast-ai/docs/blob/991b8e4d53bf7be656511c50cb6c7e8d32b3c0c8/sdk/python/reference/show-workergroups.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-workergroups

# VastAI.show_workergroups

Show all worker groups.

## Signature

```python
VastAI.show_workergroups() -> list[dict]
```

## Returns

`list[dict]`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_workergroups()
print(result)
```
