> Pinned source for Vast.ai main: [sdk/python/reference/create-subaccount.mdx](https://github.com/vast-ai/docs/blob/1f62d7e4ed71d62a858e7a800ff8096e25f07b8f/sdk/python/reference/create-subaccount.mdx)
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
