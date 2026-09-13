> Commit-pinned source for Vast.ai main: [sdk/python/reference/remove-member.mdx](https://docs.vast.ai/sdk/python/reference/remove-member)

# VastAI.remove_member

Remove a member from the team.

## Signature

```python
VastAI.remove_member(
    id: int
) -> dict
```

## Parameters

**Property (type: int; required)**

id of user to remove

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.remove_member(id=12345)
print(result)
```
