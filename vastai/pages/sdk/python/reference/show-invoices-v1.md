> Pinned source for Vast.ai main: [sdk/python/reference/show-invoices-v1.mdx](https://github.com/vast-ai/docs/blob/efed71d49da6451aeb4f9be763c284bb555cd206/sdk/python/reference/show-invoices-v1.mdx)
> Canonical documentation: https://docs.vast.ai/sdk/python/reference/show-invoices-v1

# VastAI.show_invoices_v1

Get billing history reports with advanced filtering and pagination.

## Signature

```python
VastAI.show_invoices_v1(
    invoices: bool = False,
    invoice_type: Optional[str] = None,
    charges: bool = False,
    charge_type: Optional[str] = None,
    start_date: Optional[str] = None,
    end_date: Optional[str] = None,
    limit: Optional[int] = 20,
    next_token: Optional[str] = None,
    format: Optional[str] = 'table',
    verbose: bool = False,
    latest_first: bool = False
) -> dict
```

## Parameters

**Property (type: bool)**

Show invoices instead of charges

**Property (type: Optional\[str])**

Filter which types of invoices to show: `{transfers, stripe, bitpay, coinbase, crypto.com, reserved, payout_paypal, payout_wise}`

**Property (type: bool)**

Show charges instead of invoices

**Property (type: Optional\[str])**

Filter which types of charges to show: `{i|instance, v|volume, s|serverless}`

**Property (type: Optional\[str])**

Start date (YYYY-MM-DD or timestamp)

**Property (type: Optional\[str])**

End date (YYYY-MM-DD or timestamp)

**Property (type: Optional\[int])**

Number of results per page (default: 20, max: 100)

**Property (type: Optional\[str])**

Pagination token for next page

**Property (type: Optional\[str])**

Output format for charges (default: table)

**Property (type: bool)**

Include full Instance Charge details and Invoice Metadata (tree view only)

**Property (type: bool)**

Sort by latest first

## Returns

`dict`

## Example

```python
from vastai import VastAI

client = VastAI(api_key="YOUR_API_KEY")
result = client.show_invoices_v1()
print(result)
```
