> Pinned source for Vast.ai main: [sdk/python/reference/create-subaccount.mdx](https://github.com/vast-ai/docs/blob/626149741ba46f195c775b2f4c89b7329de2d902/sdk/python/reference/create-subaccount.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/create-subaccount

# VastAI.create_subaccount

Create a new subaccount.

## Signature

```python
VastAI.create_subaccount(
    email: str,
    username: str,
    password: str,
    type: Optional[str] = None
) -> dict
```

## Parameters

**Property (type: str; required)**

email address to use for login

**Property (type: str; required)**

username to use for login

**Property (type: str; required)**

password to use for login

**Property (type: Optional\[str])**

host/client

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.create_subaccount(email="value", username="value", password="value")
print(result)
```
