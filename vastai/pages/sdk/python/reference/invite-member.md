> Pinned source for Vast.ai main: [sdk/python/reference/invite-member.mdx](https://github.com/vast-ai/docs/blob/138c1ddd5cfe5761c6391075c1fd0b6c517e059d/sdk/python/reference/invite-member.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/invite-member

# VastAI.invite_member

Invite a new member to the team.

## Signature

```python
VastAI.invite_member(
    email: str,
    role: str
) -> dict
```

## Parameters

**Property (type: str; required)**

email of user to be invited

**Property (type: str; required)**

role of user to be invited

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.invite_member(email="value", role="value")
print(result)
```
