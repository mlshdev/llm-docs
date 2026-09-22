> Pinned source for Vast.ai main: [sdk/python/reference/transfer-credit.mdx](https://github.com/vast-ai/docs/blob/f9a51524095d083230a1da1c2e38e736ded25582/sdk/python/reference/transfer-credit.mdx)
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
