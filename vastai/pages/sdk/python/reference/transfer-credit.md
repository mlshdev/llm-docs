> Pinned source for Vast.ai main: [sdk/python/reference/transfer-credit.mdx](https://github.com/vast-ai/docs/blob/626149741ba46f195c775b2f4c89b7329de2d902/sdk/python/reference/transfer-credit.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/transfer-credit

# VastAI.transfer_credit

Transfer credit to another account.

## Signature

```python
VastAI.transfer_credit(
    recipient: str,
    amount: float
) -> dict
```

## Parameters

**Property (type: str; required)**

email (or id) of recipient account

**Property (type: float; required)**

dollars of credit to transfer

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.transfer_credit(recipient="value", amount=1.0)
print(result)
```
