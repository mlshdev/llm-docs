> Pinned source for Vast.ai main: [sdk/python/reference/remove-member.mdx](https://github.com/vast-ai/docs/blob/138c1ddd5cfe5761c6391075c1fd0b6c517e059d/sdk/python/reference/remove-member.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/remove-member

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
