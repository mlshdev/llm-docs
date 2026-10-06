> Pinned source for Vast.ai main: [sdk/python/reference/show-workergroups.mdx](https://github.com/vast-ai/docs/blob/a70abe2c977eb9c4264b544c4d4f876089be70e6/sdk/python/reference/show-workergroups.mdx)
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
